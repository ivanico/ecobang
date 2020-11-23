import React from 'react';
import { Route, Switch } from "react-router-dom";
import globe from "../assets/3.gif";
import globe2 from "../assets/6.png";



import { Header } from './Header';
import Home from './Home';
import EcoVideo from './EcoVideo';
import EcoDocumentary from './EcoDocumentary';
import EcoMovies from './EcoMovies';
import EcoBooks from './EcoBooks';
import EcoFood from './EcoFood';
import EcoProfile from './EcoProfile';
import CountryProfiles from './CountryProfiles';
import EcoArtists from './Artists';
import EcoComedy from './EcoComedy';

export class App extends React.Component{
  render(){
    return(
        <div>
          <div className="title"><span id="eco">EC</span><img src={globe} align-top="100px"/><span id="bang"> <i class="fa fa-caret-right"></i>BANG</span></div>
          <Header />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/video" component={EcoVideo} />
          <Route path="/documentary" component={EcoDocumentary} />
          <Route path="/movies" component={EcoMovies}/>
          <Route path="/books" component={EcoBooks}/>
          <Route path="/food" component={EcoFood}/>
          <Route path="/ecoprofile" component={EcoProfile}/>
          <Route path="/c-profile" component={CountryProfiles}/>
          <Route path="/ecoartist" component={EcoArtists}/>
          <Route path="/ecocomedy" component={EcoComedy}/>
        </Switch>
        </div>
    )
  }
}