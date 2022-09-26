import { Message } from "./Message";
import React from "react";
const domTarget = document.querySelector('#my-react-app');
export class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Message, {
      text: "Text",
      headline: "Headline"
    }), /*#__PURE__*/React.createElement(Message, {
      text: "Text2",
      headline: "Headline2"
    }));
  }

}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTarget);