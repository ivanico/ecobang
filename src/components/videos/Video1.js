import React from "react";
import ReactPlayer from 'react-player';

export default class Video1 extends React.Component {
    render(){
            return (
            <div id="video">
                <div id="video-player">
                <ReactPlayer className="video-player"  url="https://www.youtube.com/watch?v=gUUdQfnshJ4&ab_channel=NEAZIXNH"/>
                </div>
                <p>
                The Road To Hell - HRIS REA
                <br/>
                Chris Rea is an English distinguished artist with prolific range of works. One of the plenty songs that he wrote is The Road to Hell that has double meanings. The general overview about this song is the moment in life when one finds themselves on a cross road and wants to stop and stand still a little, like Chris himself who took a break while being stuck in traffic on the M4 motorway in England which connects London to the southwest part of the country. The other meaning would be the environmental. “Standing by a river but the water does not flow” referring to the dried rivers due to human negligence and massive dam construction. The huge outbreaks of violence, the clashes in societies all over the world removed joy and happiness from people faces. No more common sense. People are drowned in loans, stuck in piles of papers. All these red flags strongly portray the global picture worldwide. With nature being used until the level of destruction and people swamp into personal problems, we are definitely going down the Road to Hell. 

                </p>
            </div>
        )
    }
}
