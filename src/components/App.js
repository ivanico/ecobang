import React from 'react';
import { Route, Switch } from "react-router-dom";


import { Header } from './Header';
import Home from './Home';
import EcoVideo from './EcoVideo';
import EcoDocumentary from './EcoDocumentary';

export class App extends React.Component{
  render(){
    return(
        <div>
          <span className="title">ECOBANG</span>
          <Header />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/video" component={EcoVideo} />
          <Route path="/documentary" component={EcoDocumentary} />
        </Switch>
        </div>
    )
  }
}