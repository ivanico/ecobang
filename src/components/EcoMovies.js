import React from 'react';
import ReactPlayer from 'react-player';

export default class EcoMovies extends React.Component {
    render() {
        return (
            <div>
                EcoMovies
                <ReactPlayer  url="https://www.youtube.com/watch?v=B27ORUHlp6E&ab_channel=NEON"/>
            </div>
        )
    }
}