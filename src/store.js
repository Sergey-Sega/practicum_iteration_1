import { makeAutoObservable } from 'mobx';
import { postData } from './service/getData';
import fetchData from './service/getData';
import { CITIES, ORDER, POINTS, RATE } from './service/urls';
import { YMAPS_KEY } from './config';
class Store
{    
     data = {
        orderState:false,

        c1: false,
        c2: false,
        c3: false,
        
        orderId:'',
        Points: [],
        Cities: [],
        Cars: [],
        Rates: [],
        
        isActive:  false,

        color:'',
        city: '',
        destination: '',
        rate:'',
        car: '',
        id:'',
        colors: [],
        dateFrom: 0,
        dateTo: 0,
        rates: [],
        options: [],
        price_start: 0,
        price_end: 0,
        number: '',
        thumbnail: '',
        points: [],
        modal: false,
        cityLocation: [],
        pointLocation: [],
    }

    order = {
    orderStatusId: {},
    cityId: {},
    pointId: {},
    carId: {},
    color: '',
    dateFrom: 0,
    dateTo: 0,
    rateId: {},
    price: 0,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
    }
    
    steps = {
        s1: true,
        s2: false,
        s3: false,
        s4: false,
    }

    navigation = [
          { value: 's1', description: 'Местоположение' },
          { value: 's2', description: 'Модель' },
          { value: 's3', description: 'Дополнительно' },
          { value: 's4', description: 'Итого' },
    ];

    constructor()
    {
        makeAutoObservable(this);
    }

    async getData()
    {
        let resCities = await fetchData(CITIES);
        let resPoints = await fetchData(POINTS);
        
        this.data.Cities = resCities.data;
        this.data.Points = resPoints.data; 
        
    }
    async getDataRates()
    {
        let resRates = await fetchData(RATE)
        this.data.Rates = resRates.data;
    }

 async showPoint()
{
    const value = this.data.destination
     const result = []
        const res = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${YMAPS_KEY}&format=json&geocode=${this.data.city}+${value.split(' ').join('+')}`)
    
        const data = await res.json();
       
        result.push(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse()); 
    
    this.data.pointLocation = [...result]

     
}

async showCity()
{
    const value = this.data.city
     const result = []
        const res = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${YMAPS_KEY}&format=json&geocode=${value.split(' ').join('+')}`)

        const data = await res.json();
       
        result.push(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse()); 
     
    this.data.cityLocation = [...result]
    
    
}
    

    navAction(key)
    {
        switch (key) {
            case 's2':
                this.data.c1 = true
                break;
            case 's3':
                this.data.c2 = true
                break;
            case 's4':
                this.data.c3 = true
                break;
        
            default:
                break;
        }
        for(let k in this.steps)
        {
            k == key ? this.steps[k] = true : this.steps[k] = false;

        }
    }

    async postDataOrder(){
       let postOrder = await postData(ORDER,this.order)
       this.data.orderId = postOrder.data.id
    }
    
    filterPoints(city_name)
    {
        this.data.city = city_name;
        this.data.points = this.data.Points.filter((elem) => elem.cityId?.name == city_name);
        this.data.Points.forEach(point => {
            if (point.cityId?.name === city_name) {
                this.order.pointId = point.id
        }})
        this.data.Cities.forEach(city => {
            if (city.name === city_name) {
                this.order.cityId = city.id
        }})
    }

    action(key, value)
    {
        this.data[key] = value;
        this.steps[key] = value;
        if(this.order.hasOwnProperty(key)) {
        this.order[key] = value
    }
    }

    setOrderStatus(id) {
        this.order.orderStatusId = id;
    }
    setOrder(data){
  this.order = {...this.order, ...data}
    }
    setCarData(data) {
        this.data = {...this.data, ...data}
        this.order.carId = data.car.id
    }
    
    setRateData(data) {
        this.data = {...this.data, ...data}
        this.order.rateId = data.rate.id
    }

    get currentDate() {
        return (this.order.dateTo - this.order.dateFrom) / (1000 * 60)
    }


    get carPrice() {
        if (this.data.dateFrom && this.data.dateTo) {
            if (this.data.rate.unit === 'мин') {
                if (this.currentDate * 7 > this.data.price_start && this.currentDate < this.data.price_end ) {
                    return this.currentDate * 7
                } else if (this.currentDate * 7 >= this.data.price_end) {
                    return this.data.price_end
                }
            }
            if (this.data.rate.unit === 'сутки') {
                if (Math.ceil(this.currentDate / 60 / 24) * 1500 > this.data.price_start && Math.ceil(this.currentDate / 60 / 24) * 1500 < this.data.price_end) {
                    return Math.ceil(this.currentDate / 60 / 24) * 1500
                } else if (Math.ceil(this.currentDate / 60 / 24) * 1500 >= this.data.price_end) {
                    return this.data.price_end
                }
                
                return this.data.price_start
            }
        }
       return this.data.price_start
    }

    get fullTankPrice() {
        if (this.order.isFullTank) {
            return 500
        } 
        return 0
    }

    get childChairPrice() {
        if (this.order.isNeedChildChair) {
            return 200
        } 
        return 0
    }

    get rightWheelPrice() {
        if (this.order.isRightWheel) {
            return 1600
        } 
        return 0
    }

    get finalCarPrice() {
        const finalPrice = this.carPrice + this.fullTankPrice + this.childChairPrice + this.rightWheelPrice
        if (finalPrice > this.data.price_end) return this.data.price_end
        return this.carPrice + this.fullTankPrice + this.childChairPrice + this.rightWheelPrice
    }

    setCurrentPrice() {
        this.order.price = this.finalCarPrice
    }

    setOptions(value){
          const State = { ...this.data };
      
       const index = State.options.findIndex((elem) => elem == value);
      
    

   if (index != -1) {
            State.options.splice(index, 1);
           } else {
            State.options.push(value);
          }

          if (State.options.includes('Полный бак')) {
            this.order.isFullTank = true
          } 
            if (State.options.includes('Детское кресло')) {
            this.order.isNeedChildChair = true
          } 
           if (State.options.includes('Правый руль')) {
            this.order.isRightWheel = true
           }
          if (!State.options.includes('Полный бак')) {
            this.order.isFullTank = false
          } 
            if (!State.options.includes('Детское кресло')) {
            this.order.isNeedChildChair = false
          } 
           if (!State.options.includes('Правый руль')) {
            this.order.isRightWheel = false
           }
         };
}

export default new Store();