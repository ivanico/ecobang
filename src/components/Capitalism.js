import React from 'react';
import ReactPlayer from 'react-player';

export default class Capitalism extends React.Component{
    render() {
        return(
            <div>
                <ReactPlayer className="video-player"  url="https://www.youtube.com/watch?v=IscWfmbWWJc&ab_channel=TheEconomist"/>
                <ReactPlayer className="video-player"  url="https://www.youtube.com/watch?v=7vOwjNTDwBE&ab_channel=TheEconomist"/>
            </div>
        )
    }
}