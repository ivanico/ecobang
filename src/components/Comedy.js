import React from 'react';
import ReactPlayer from 'react-player';

export default class Comedy extends React.Component{
    render() {
        return(
            <div>
                <ReactPlayer className="video-player"  url="https://www.youtube.com/watch?v=uHgJKrmbYfg&ab_channel=SlavkaKutsay"/>
            </div>
        )
    }
}