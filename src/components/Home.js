import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Home extends React.Component{
    render() {
        var settings = {
            dots: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            slidesToScroll: 1,
            pauseOnHover: true
          };
        return(
            <div>
                <div>
                    <Slider {...settings}>
                      <div className="intro">
                    <span>"If you really want to define<br/> civilizations it should be a<br/> culture that
                        doesn't destroy<br/> it's environment" <br/> Sting</span>
                    </div>    
                    <div className="intro">
                        <span>"Even back in 2015, I was watching<br/> the horrors of Syria unfold on a
                            daily <br/>basis and that was disheartening, <br/>as were climate change
                            deniers, <br/>though now it's even worse" <br/> Martin Gore</span>
                    </div>
                    <div className="intro">
                        <span>"We need to go further and further,<br/> but people need to do it
                            themselves.<br/> You have to attract people to do it"<br/>  Paul McCartney</span>
                    </div>
                    <div className="intro">
                        <span>"Environment affects me a great deal.<br/> A lot of the songs were written
                        after<br/> the sun went down. I like the storms,<br/> I like to stay up during a
                        storm. <br/>Work while the day lasts, <br/>because the night of death cometh" <br/>
                        Bob Dylan</span>
                    </div>
                    <div className="intro">
                        <span>"Serving meat and dairy at an event to combat climate<br/> change is like
                        selling pistols at a gun rally" <br/> Morrissey</span>
                    </div>
                    </Slider>
                                 
                    
                    <div className="container">
                    </div>
                    <div className="container">
                    </div>
                    <div className="container">
                    </div>
                    <div className="container">
                    </div>
                </div>
            </div>
        )
    }
}