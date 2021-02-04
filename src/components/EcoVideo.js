import React from 'react';
import ReactPlayer from 'react-player';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class EcoVideo extends React.Component{
    render() {
        var settings = {
            dots: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToScroll: 1,
            pauseOnHover: true
          };
        return(
                <Slider {...settings}>
                <div>
                    <ReactPlayer className="video-player"  url="https://www.youtube.com/watch?v=6k7esY7g4Y8&ab_channel=artemtroitcky"/>
                </div>
                <div>
                    <ReactPlayer  url="https://www.youtube.com/watch?v=6k7esY7g4Y8&ab_channel=artemtroitcky"/>
                </div>
                <div>
                    <ReactPlayer  url="https://www.youtube.com/watch?v=6k7esY7g4Y8&ab_channel=artemtroitcky"/>
                </div>
                <div>
                    <ReactPlayer  url="https://www.youtube.com/watch?v=6k7esY7g4Y8&ab_channel=artemtroitcky"/>
                </div>
                <div>
                    <ReactPlayer  url="https://www.youtube.com/watch?v=6k7esY7g4Y8&ab_channel=artemtroitcky"/>
                </div>
                </Slider>
        )
    }
}