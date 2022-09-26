import faker from "faker";


export class Company {
  companyName:string;
  catchPhrase:string;
  location:{
    lat:number;
    lng:number;
  };

  constructor(){
    this.companyName=faker.company.companyName();
    this.catchPhrase=faker.company.catchPhraseAdjective();
    this.location={
      lat:parseFloat(faker.address.latitude()),
      lng:parseFloat(faker.address.longitude()),
    }
  }

  markerContent():string{
    return `<h1>UserName:${this.companyName}</h1>`
  }
}

