import * as React from 'react'
import * as ReactDom from 'react-dom'
import { App } from '../App.tsx';
// import FontStyles from '../shared/FontStyles';

window.addEventListener("load", ()=>{
  ReactDom.hydrate(<App />, document.getElementById('react_root'));
})