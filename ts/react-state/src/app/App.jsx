import React from 'react';
import { Counter } from './Counter';
import { CounterContainer } from './CounterContainer';
import { CounterPure } from './CounterPure';
import { CounterStateless } from './CounterStateless';




export class App extends React.Component{
  render(){
    return (
    <>
    <h1>Counter</h1>
    <Counter/>
    <hr />
    <h1>CounterPure</h1>
    <CounterPure/>
    <h3>
      Stateless
    </h3>
    <hr />
      <CounterContainer/>
    </>
    );
}
}