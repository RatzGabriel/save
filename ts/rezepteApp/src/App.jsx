import { Message } from "./Message";
import React from "react"



const domTarget = document.querySelector('#my-react-app');

export class App extends React.Component {
  
  render() {
    return (
      <div>
        <Message text="Text" headline="Headline"/>
        <Message text="Text2" headline="Headline2"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, domTarget);
