import React from 'react';
import ReactPlayer from 'react-player';

export default class EcoDocumentary extends React.Component {
    render() {
        return (
            <div>
                EcoDocumentary
                <ReactPlayer  url="https://www.youtube.com/watch?v=bjrPiIem30g&ab_channel=SystemsInnovation"/>
            </div>
        )
    }
}