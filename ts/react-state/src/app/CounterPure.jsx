import React from 'react';

export class CounterPure extends React.PureComponent{
  constructor(props){
    super(props);
    this.state={
      counteValue:0
    }
  };

  onClick(){
    console.log('clicker');
    this.setState(state=>{
      return {
        counteValue:state.counteValue+1
      }
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