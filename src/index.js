import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';
import PrimeraApp from './PrimeraApp';
const divRoot=document.querySelector('#root');
//ReactDOM.render( <PrimeraApp saludo="Hola Mundo" />,divRoot);
//ReactDOM.render( <CounterApp value={10} />,divRoot);
ReactDOM.render( <PrimeraApp saludo="Hola, Soy Goku" />,divRoot);


