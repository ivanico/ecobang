import React from 'react';
import ReactPlayer from 'react-player';

export default class EcoVideo extends React.Component{
    render() {
        return(
            <div>
                EcoVideo
                <ReactPlayer className="video-player"  url="https://www.youtube.com/watch?v=6k7esY7g4Y8&ab_channel=artemtroitcky"/>
                <ReactPlayer  url="https://www.youtube.com/watch?v=XAi3VTSdTxU&ab_channel=michaeljacksonVEVO"/>
            </div>
        )
    }
}