const carMakers = ['ford','toyota','chevy'];

const dates = [new Date(),new Date()];

const carsByMake:string[][] = [
  ['f150'],
  ['corola'],
  ['camara'],
];

//Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

//help with map

carMakers.map((car:string):string=>{
  return car;
});

const importantDate : (Date | string)[]= [];

importantDate.push('s',new Date())