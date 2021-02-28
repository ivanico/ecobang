import React from "react";
import ReactPlayer from 'react-player';

export default class Video1 extends React.Component {
    render(){
            return (
            <div>
                <ReactPlayer  url="https://www.youtube.com/watch?v=78MNqw9hzOE&ab_channel=DrakeDietrick"/>
            </div>
        )
    }
}
