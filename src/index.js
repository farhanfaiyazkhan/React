import React from 'react';
import ReactDOM from 'react-dom/client';
import * as pi from "./math"
// import pi, {doublePI, triplePI} from './math';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.DoublePI()}</li>
    <li>{pi.TriplePi()}</li>
  </ul>
);