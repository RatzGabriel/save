import React from 'react';

export class ResetCounter extends React.PureComponent{
  render(){
    const disable = this.props.counterValue===0
    return(
      <button disabled={disable}onClick={()=>this.props.onClick()}>Reset</button>
    )
  }
}