export const createIdArr = (arr) => {
    return arr.map(item => ({
     ...{},id:Math.floor(Math.random() * 100000),
     name:item
     }))
 }
 export const createIdObj = (arr)=>{
    return arr.map(item=>({
        ...item,id:Math.floor(Math.random() * 100000)
    }))
}