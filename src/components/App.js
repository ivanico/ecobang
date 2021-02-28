import React from 'react';
import { Route, Switch } from "react-router-dom";
import globe from "../assets/3.gif";
import { Header } from './Header';
import Home from './Home';
import EcoVideo from './EcoVideo';
import EcoDocumentary from './EcoDocumentary';
import EcoMovies from './EcoMovies';
import EcoBooks from './EcoBooks';
import EcoFood from './EcoFood';
import EcoProfile from './EcoProfile';
import CountryProfiles from './CountryProfiles';
import EcoArtists from './Article';
import EcoThemes from './EcoThemes';
import Article from './Article';
import Capitalism from './Capitalism';
import Comedy from './Comedy';
import Video1 from './videos/Video1';
import Video2 from './videos/Video2';
import Video3 from './videos/Video3';
import Video4 from './videos/Video4';
import Video5 from './videos/Video5';

export class App extends React.Component{
  render(){
    return(
        <div>
          <div className="title"><span id="eco">EC</span><img src={globe} /><span id="bang"> <i className="title-t" class="fa fa-caret-right"></i>BANG</span></div>
          <Header />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/articles" component={Article} />
          <Route path="/video" component={EcoVideo} />
          <Route path="/video1" component={Video1} />
          <Route path="/video2" component={Video2} />
          <Route path="/video3" component={Video3} />
          <Route path="/video4" component={Video4} />
          <Route path="/video5" component={Video5} />
          <Route path="/documentary" component={EcoDocumentary} />
          <Route path="/movies" component={EcoMovies}/>
          <Route path="/books" component={EcoBooks}/>
          <Route path="/food" component={EcoFood}/>
          <Route path="/ecoprofile" component={EcoProfile}/>
          <Route path="/c-profile" component={CountryProfiles}/>
          <Route path="/ecoartist" component={EcoArtists}/>
          <Route path="/themes" component={EcoThemes}/>
          <Route path="/capitalism" component={Capitalism} />
          <Route path="/comedy" component={Comedy} />
        </Switch>
        </div>
    )
  }
}