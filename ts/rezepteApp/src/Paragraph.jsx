import React from "react"

export  function Paragraph(props) {
  console.log(props);
  return <p>{props.text}</p>;
}