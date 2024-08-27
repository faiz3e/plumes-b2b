
import React, { useState, useEffect, useRef } from "react";
import bannerYellow from '../images/banner_yellow.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReviewBlog } from "./components/reviewBlog";

const AboutUs = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalCards = 6; // Adjust this according to the number of cards
    const cardsPerSlide = 3;
    const cardWidth = 420; // Width of card + margin (100px width + 20px margin)
    const totalSlides = Math.ceil(totalCards / cardsPerSlide);
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 2000); // Slide every 2 seconds
        return () => clearInterval(interval);
    }, [totalSlides]);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${currentSlide * cardWidth * cardsPerSlide
                }px)`;
        }
    }, [currentSlide]);

    const CaraoselItem = () => {
        return (<>
            {/* <div className="carousel-item slider-bg-01 active">
                <div className="bg-color-01"></div>
            </div>
            <div className="carousel-item slider-bg-01">
                <div className="bg-color-02"></div>
            </div>
            <div className="carousel-item slider-bg-01">
                <div className="bg-color-03"></div>
            </div>
            <div className="carousel-item slider-bg-01">
                <div className="bg-color-04"></div>
            </div> */}
        </>

        )
    }

    return (
        <>
            <div className="hero-wrap hero-bread pb-5" style={{ backgroundImage: `url(${bannerYellow})` }}>
                <div className="container p-4">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <h1 className="mb-0 bread">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* {[{}, {}, {}, {}, {}].map(() => {
                        return <CaraoselItem />
                    })} */}
            <section className="ftco-section testimony-section bg-light">
                {/* <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-3 pb-3">
                            <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                                <h1 className="big">Testimony</h1>
                            </div>
                        </div>

                    </div>
                </section> */}
                <div className="container">
                    <div className="row d-flex justify-content-center py-5">
                        <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
                            <h1 className="big">Testimony</h1>
                            <h2>What clients think about us.</h2>

                        </div>
                    </div>
                </div>
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={2000}
                    transitionTime={500}
                    showStatus={false}
                    centerMode={true}
                    centerSlidePercentage={33} // 100 / 3 = 33.33% width for each item in the slide
                    showIndicators={false} // Optional, to hide indicators if you don't want them
                >
                    <div>
                        <ReviewBlog />
                        {/* <img src="https://via.placeholder.com/300x200" alt="Item 1" /> */}
                        {/* <p className="legend">Item 1</p> */}
                    </div>
                    <div>
                        <ReviewBlog />

                        {/* <img src="https://via.placeholder.com/300x200" alt="Item 2" /> */}
                        {/* <p className="legend">Item 2</p> */}
                    </div>
                    <div>
                        <ReviewBlog />

                        {/* <img src="https://via.placeholder.com/300x200" alt="Item 3" /> */}
                        {/* <p className="legend">Item 3</p> */}
                    </div>
                    <div>
                        <ReviewBlog />

                        {/* <img src="https://via.placeholder.com/300x200" alt="Item 4" /> */}
                        {/* <p className="legend">Item 4</p> */}
                    </div>
                    <div>
                        <ReviewBlog />

                        {/* <img src="https://via.placeholder.com/300x200" alt="Item 5" /> */}
                        {/* <p className="legend">Item 5</p> */}
                    </div>
                    <div>
                        <ReviewBlog />

                        {/* <img src="https://via.placeholder.com/300x200" alt="Item 6" /> */}
                        {/* <p className="legend">Item 6</p> */}
                    </div>
                </Carousel>
            </section>

            <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{}}>
                            <a href="https://vimeo.com/45830194" style={{ backgroundImage: `url(${bannerYellow})` }} className="icon popup-vimeo d-flex justify-content-center align-items-center" >
                                <span className="icon-play"></span>
                            </a>
                        </div>
                        <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate fadeInUp ftco-animated">
                            <div className="heading-section-bold mb-5 mt-md-5">
                                <div className="ml-md-0">
                                    <h2 className="mb-4">Modist <br />Online <br /> <span>Fashion Shop</span></h2>
                                </div>
                            </div>
                            <div className="pb-md-5">
                                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="ftco-section testimony-section bg-light">

                <section className="ftco-section ftco-counter img" id="section-counter" style={{}}>
                    <div className="container">
                        <div className="row justify-content-center py-5">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="10000">10,000</strong>
                                                <span>Happy Customers</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="100">100</strong>
                                                <span>Branches</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="1000">1,000</strong>
                                                <span>Partner</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                        <div className="block-18 text-center">
                                            <div className="text">
                                                <strong className="number" data-number="100">100</strong>
                                                <span>Awards</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default AboutUs;