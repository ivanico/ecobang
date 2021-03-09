import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default class Home extends React.Component{
    render() {
        // var settings = {
        //     dots: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     autoplay: true,
        //     autoplaySpeed: 10000,
        //     slidesToScroll: 1,
        //     pauseOnHover: true
        //   };
        return(
            <div>
                <div className="main-container">
                    {/* <Slider {...settings}>
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
                    </Slider> */}
                    <div className="section-slider width-default">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <span className="quotes d-block w-100">"If you really want to define civilizations it should be a culture that
                                    doesn't destroy it's environment" Sting</span>
                                    </div>
                                    <div class="carousel-item">
                                    <span className="quotes d-block w-100">"Even back in 2015, I was watching the horrors of Syria unfold on a
                                    daily basis and that was disheartening, as were climate change
                                    deniers, though now it's even worse" Martin Gore</span>
                                    </div>
                                    <div class="carousel-item">
                                    <span className="quotes d-block w-100">"We need to go further and further, but people need to do it
                                    themselves. You have to attract people to do it" Paul McCartney</span>
                                    </div>
                                    <div class="carousel-item">
                                    <span className="quotes d-block w-100">"Environment affects me a great deal. A lot of the songs were written
                                    after the sun went down. I like the storms, I like to stay up during a
                                    storm. Work while the day lasts,because the night of death cometh" 
                                    Bob Dylan</span>
                                    </div>
                                    <div class="carousel-item">
                                    <span className="quotes d-block w-100">"Serving meat and dairy at an event to combat climate change is like
                                    selling pistols at a gun rally" Morrissey</span>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}