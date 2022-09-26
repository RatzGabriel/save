import React from 'react';

export class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      counteValue:0
    }
  };

  onClick(){
    console.log('clicker');
    this.setState(state=>{
      state.counteValue++;
      return state;
    })
  }

  render(){
    return(
      <div>
        <h1>Counter Value is: {this.state.counteValue}</h1>
        <button onClick={()=>this.onClick()}>Klick mich</button>
      </div>
      
    );
  }
}