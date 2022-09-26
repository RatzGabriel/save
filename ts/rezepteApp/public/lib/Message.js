import { Paragraph } from "./Paragraph";
import { Headline } from "./Healine";
import React from "react";
export class Message extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Paragraph, {
      text: this.props.text
    }), /*#__PURE__*/React.createElement(Headline, {
      headline: this.props.headline
    }));
  }

}