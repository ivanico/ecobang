import React from 'react';
import ReactPlayer from 'react-player';
import { Route, Switch } from "react-router-dom";


import { Header } from './Header';
import Home from './Home';

export class App extends React.Component{
  render(){
    return(
        <div>
          <Home />
        </div>
    )
  }
}