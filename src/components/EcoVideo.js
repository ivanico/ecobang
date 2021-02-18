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
            autoplaySpeed: 30000,
            slidesToScroll: 1,
            pauseOnHover: true
          };
        return(
                <Slider {...settings}>
                <div>
                    <ReactPlayer className="video-player"  url="https://www.youtube.com/watch?v=gUUdQfnshJ4&ab_channel=NEAZIXNH"/>
                </div>
                <div>
                    <ReactPlayer  url="https://www.youtube.com/watch?v=XpdpW0z9xnQ&ab_channel=ShuffleSession"/>
                </div>
                <div>
                    <ReactPlayer  url="https://www.youtube.com/watch?v=EJDCAlg83_o&ab_channel=exDrBob1"/>
                </div>
                <div>
                    <ReactPlayer  url="https://www.youtube.com/watch?v=78MNqw9hzOE&ab_channel=DrakeDietrick"/>
                </div>
                <div>
                    <ReactPlayer  url="https://www.youtube.com/watch?v=fxu0H42-hek&ab_channel=NatalieMerchant-Topic"/>
                </div>
                </Slider>
        )
    }
}