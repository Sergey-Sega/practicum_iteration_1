export const createIdArr = (arr) => {
    return arr.map((item) => ({
     ...{}, id: Math.floor(Math.random() * 100000),
     name: item,
     }));
 };
 export const createIdObj = (arr)=>{
    return arr.map((item)=>({
        ...item, id: Math.floor(Math.random() * 100000),
    }));
};
export const getHumanizedValue = (diffInHours) => {
    const days = Math.floor(diffInHours / (1000 * 60 * 60 * 24) % 30);
    const hours = Math.floor((diffInHours / (1000 * 60 * 60)) % 24);
    return `${days} д ${hours} ч`;
  };
