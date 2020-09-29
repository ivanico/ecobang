import React from 'react';
import ReactPlayer from 'react-player'

export class App extends React.Component{
  render(){
    return(
    <div id="app">
      <div id="header">
        <h1>MENU</h1>
      </div>
      <div id="title">
        <h2>EcoBang</h2>
      </div>
      <div id="container">
        <p>
          Intro Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>
      <div id="video">
        <ReactPlayer url="https://www.youtube.com/watch?v=6k7esY7g4Y8&ab_channel=artemtroitcky" controls={true} id="video-player" />
        <p id="description">
        Intro Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>
    </div>
    )
  }
}