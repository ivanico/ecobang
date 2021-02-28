import React from "react";
import ReactPlayer from 'react-player';

export default class Video1 extends React.Component {
    render(){
            return (
            <div>
                <ReactPlayer className="video-player"  url="https://www.youtube.com/watch?v=gUUdQfnshJ4&ab_channel=NEAZIXNH"/>
            </div>
        )
    }
}
