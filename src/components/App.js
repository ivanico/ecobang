import React from 'react';
import ReactPlayer from 'react-player'

export class App extends React.Component{
  render(){
    return(
    <div>
      <div>
        <h1>MENU</h1>
      </div>
      <div>
        <h2>EcoBang</h2>
      </div>
      <div>
        <p>
          Intro Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>
      <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=KXw8CRapg7k&ab_channel=QueenVEVO" controls={true} />
      </div>
    </div>
    )
  }
}