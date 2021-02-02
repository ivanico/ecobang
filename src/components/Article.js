import React from 'react';
import darkest from "../assets/darkest.gif"


export default class Article extends React.Component {
    render() {
        return (
            <div className="article"><a href="https://www.nytimes.com/2020/12/26/style/climate-change-deep-adaptation.html" target="_blank">
                <h2 className="article-title">"The Darkest Timeline" <br/> by Jonah Engel Bromwich</h2>
                <img src={darkest} /></a>
            </div>
        )
    }
}