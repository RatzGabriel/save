import { Paragraph } from "./Paragraph";
import {Headline} from "./Healine"
import React from "react"

export class Message extends React.Component{
  render(){
    return(
      <div>
        <Paragraph text={this.props.text}/>
        <Headline headline={this.props.headline}/>
      </div>
    )
  }
}