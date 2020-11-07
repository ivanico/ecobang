import React from 'react';
import { Route, Switch } from "react-router-dom";
import globe from "../assets/1.png";
import globe2 from "../assets/6.png";



import { Header } from './Header';
import Home from './Home';
import EcoVideo from './EcoVideo';
import EcoDocumentary from './EcoDocumentary';

export class App extends React.Component{
  render(){
    return(
        <div>
          <div className="title"><span id="eco">EC</span><img src={globe}/><span id="bang">BANG</span></div>
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