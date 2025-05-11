
import React from "react";

import home_slide from '../images/home-slide5.png'
import home_slide1 from '../images/home-slide1.png'
import home_slide2 from '../images/home-slide2.png'
import home_slide3 from '../images/home-slide3.png'
import home_slide4 from '../images/home-slide4.png'
import home_slide5 from '../images/home-slide5.png'
import home_slide6 from '../images/home-slide6.png'

export const OurProducts = (props) => {

    return (
        <section className="ftco-section bg-light">
            < div className="container pt-4" >
                <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                        <h1 className="big">Theme</h1>
                        <h2 className="mb-4">Shop by Theme</h2>
                    </div>
                </div>
            </div >
            <div className="container-fluid pt-3 mt-4">
                <div className="row d-flex justify-content-center">
                    {[home_slide, home_slide1, home_slide2, home_slide3, home_slide4, home_slide5, home_slide6, home_slide2, home_slide1, home_slide3, home_slide4, home_slide].map((item) => {
                        return <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2 sm-w50 mb-4">
                            <div className="product">
                                <a href="#" className="img-prod">
                                    <img className="img-fluid bottom-round" src={item} alt="Colorlib Template" /></a>
                                <div className="text">
                                    <h3 className="text-center justify-content-center pt-4"><a href="#">Young Woman Wearing Dress</a></h3>
                                    {/* <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price"><span>$1120.00</span></p>
                                        </div>
                                        <div className="rating">
                                            <p className="text-right">
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                            </p>
                                        </div>
                                    </div> */}
                                    {/* <hr /> */}
                                    {/* <p className="bottom-area d-flex">
                                        <a href="#" className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></a>
                                        <a href="#" className="ml-auto"><span><i className="ion-ios-heart-empty"></i></span></a>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section >
    )
}
