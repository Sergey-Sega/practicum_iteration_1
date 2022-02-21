import slideOne from '../../assets/sliderImages/slide_1.jpg';
import slideTwo from '../../assets/sliderImages/slide_2.jpg';
import slideThree from '../../assets/sliderImages/slide_3.jpg';
import slideFour from '../../assets/sliderImages/slide_4.jpg';
import { createIdObj } from '../../utils';

const content = [
  {
    head: 'Бесплатная парковка',
    text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    img: slideOne,
    color: 'default',
    
  },
  {
    head: 'Страховка',
    text: 'Полная страховка автомобиля',
    img: slideTwo,
    color: 'aqua',
    
  },
  {
    head: 'Бензин',
    text: 'Полный бак на любой заправке города за наш счёт',
    img: slideThree,
    color: 'red',
    
  },
  {
    head: 'Обслуживание',
    text: 'Автомобиль проходит еженедельное ТО',
    img: slideFour,
    color: 'violet',
    
  },
];

export const contentWithGeneratedId = createIdObj(content)
