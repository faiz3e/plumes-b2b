
import React from "react";
import product1 from '../images/images-product-1.jpg'
import product2 from '../images/images-product-2.jpg'
import product3 from '../images/images-product-3.jpg'
import product4 from '../images/images-product-4.jpg'
import home_slide4 from '../images/home-slide1.png'
import home_slide5 from '../images/home-slide2.png'
import home_slide6 from '../images/home-slide3.png'
import home_slide7 from '../images/home-slide7.png'

export const OurProducts = (props) => {

    return (
        <section className="ftco-section bg-light pt-5">
            <div className="container mt-5">
                <div className="row justify-content-center mb-3 pb-3 ">
                    <div className="col-md-12 heading-section text-center ">
                        <h1 className="big">Products</h1>
                        <h2 className="mb-4">Our Products</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-3 mt-4">
                <div className="row">
                    <div className="col-sm col-md-6 col-lg ">
                        <div className="product">
                            <a href="#" className="img-prod">
                                <img className="img-fluid" src={home_slide4} alt="Colorlib Template" /></a>
                            <div className="text py-3 px-3">
                                <h3><a href="#">Young Woman Wearing Dress</a></h3>
                                <div className="d-flex">
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
                                </div>
                                <hr />
                                <p className="bottom-area d-flex">
                                    <a href="#" className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></a>
                                    <a href="#" className="ml-auto"><span><i className="ion-ios-heart-empty"></i></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-md-6 col-lg ">
                        <div className="product">
                            <a href="#" className="img-prod"><img className="img-fluid" src={home_slide5} alt="Colorlib Template" /></a>
                            <div className="text py-3 px-3">
                                <h3><a href="#">Young Woman Wearing Dress</a></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
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
                                </div>
                                <hr />
                                <p className="bottom-area d-flex">
                                    <a href="#" className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></a>
                                    <a href="#" className="ml-auto"><span><i className="ion-ios-heart-empty"></i></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-md-6 col-lg ">
                        <div className="product">
                            <a href="#" className="img-prod"><img className="img-fluid" src={home_slide6} alt="Colorlib Template" /></a>
                            <div className="text py-3 px-3">
                                <h3><a href="#">Young Woman Wearing Dress</a></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
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
                                </div>
                                <hr />
                                <p className="bottom-area d-flex">
                                    <a href="#" className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></a>
                                    <a href="#" className="ml-auto"><span><i className="ion-ios-heart-empty"></i></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-md-6 col-lg ">
                        <div className="product">
                            <a href="#" className="img-prod"><img className="img-fluid" src={home_slide7}
                                alt="Colorlib Template" /></a>
                            <div className="text py-3 px-3">
                                <h3><a href="#">Young Woman Wearing Dress</a></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
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
                                </div>
                                <hr />
                                <p className="bottom-area d-flex">
                                    <a href="#" className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></a>
                                    <a href="#" className="ml-auto"><span><i className="ion-ios-heart-empty"></i></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
