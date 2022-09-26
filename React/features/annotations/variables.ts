let apples: number = 5;

let speed: string = "fast";


let colors:string[]=["ss"];
let myNumbers: number[]=[2,34,3];
let truths:boolean[]=[true,false];

//Classes

class Car {


}

// let car:Car=new Car();

//Object literal

let point:{ x:number,y:number } = {
  x:10,
  y:20
};

//Function

const logNumber: (i:number)=>void =(i:number)=>{
console.log(i);

};


const json = '{"X":10,"y":20}';

const coordinates:{x:number,y:number} = JSON.parse(json);
console.log(coordinates);

let words = ['red','green','blue'];
let foundWord:boolean ;

for(let i=0;i<words.length;i++){
  if(words[i]==='green'){
    foundWord= true
  }
}

let number = [-10,-1,12];

let numberAboveZero:boolean | number=false;

for(let i = 0;i<number.length;i++){
  if(number[i]>0){
    numberAboveZero=number[i]
  }
}


