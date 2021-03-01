import React from "react";
import ReactPlayer from 'react-player';

export default class Video1 extends React.Component {
    render(){
            return (
            <div id="video">
                <ReactPlayer  url="https://www.youtube.com/watch?v=fxu0H42-hek&ab_channel=NatalieMerchant-Topic"/>
                <p>
                </p>
            </div>
        )
    }
}
