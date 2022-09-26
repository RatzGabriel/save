import React from 'react';


export class CounterStateless extends React.PureComponent{

  render(){
    console.log('stateless',this.props.counterValue,this.props.onClick);
    return(
      <div>
        <h3>Counter Value: {this.props.counterValue}</h3>
        <button onClick={()=>this.props.onClick()}>Klick</button>
      </div>
    )
  }
}