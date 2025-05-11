import React, { memo, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
} from "react-router-dom";
import bannerpink from '../images/banner_pink.jpg'
// import { useFirebaseConnect } from 'react-redux-firebase'
// import { shallowEqual, useSelector } from 'react-redux'
import home_slide from '../../images/home-slide5.png'
import home_slide1 from '../../images/home-slide1.png'
import home_slide2 from '../../images/home-slide2.png'
import home_slide3 from '../../images/home-slide3.png'
import home_slide4 from '../../images/home-slide4.png'
import home_slide5 from '../../images/home-slide5.png'
import home_slide6 from '../../images/home-slide6.png'
import { useNavigate } from "react-router-dom";
import { products } from "../../products";


// console.log(result)


const CollectionGirls = (props) => {
    const navigate = useNavigate()
    // console.log("useSelector", useSelector());
    const [currentLoadedPosts, setcurrentLoadedPosts] = useState(10)
    const [slicedresult, setslicedresult] = useState([])
    // const statt = useSelector(state => state)A0OPoskeSYMah4lUbdbI


    // let posts = useSelector(state => state?.firestore?.data?.tdmPosts?.A0OPoskeSYMah4lUbdbI?.allPosts) || []
    // let result = [...posts]

    useEffect(() => {
        // setslicedresult(result.slice(0, 10))
        // console.log("res", result);
    }, [])

    const loadMore = () => {
        // if (currentLoadedPosts <= posts.length) {
        //     setslicedresult(result.slice(0, 10 + currentLoadedPosts))
        //     console.log("slicedresult", slicedresult);
        //     setcurrentLoadedPosts(currentLoadedPosts + 10)
        // }
    }
    const navigateToSinglePage = (sku) => {
        navigate(`/singleProduct/${sku}`)
    }

    return (
        <div>
            <div className="hero-wrap hero-bread pb-5 bg-pink">
                <div className="container p-4">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <h1 className="mb-0 bread">Girls Collection</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 sidebar ftco-animate fadeInUp ftco-animated">
                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                    <div className="categories">
                        <h3>Categories</h3>
                        <li><a href="#">Bags <span>(12)</span></a></li>
                        <li><a href="#">Shoes <span>(22)</span></a></li>
                        <li><a href="#">Dress <span>(37)</span></a></li>
                        <li><a href="#">Accessories <span>(42)</span></a></li>
                        <li><a href="#">Makeup <span>(14)</span></a></li>
                        <li><a href="#">Beauty <span>(140)</span></a></li>
                    </div>
                </div>


                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                    <h3>Paragraph</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>

            <div className="container-fluid bg-light">
                <div className="container-fluid pt-3 mt-4">
                    <div className="row d-flex justify-content-start">
                        {Object.entries(products.girls).map(([key, value]) => {
                            return <div onClick={() => navigateToSinglePage(value.sku)} className="col-sm-12 col-md-6 col-lg col-lg-4">
                                <div className="product">
                                    <a className="img-prod">
                                        <img className="img-fluid" src={value.images[0]} alt="Colorlib Template" />
                                    </a>
                                    <div className="text py-3 px-3">
                                        <h3 className="" style={{ height: '30px' }}><a>{value.name}</a></h3>
                                        <p className="value"><span>{value.description}</span></p>
                                        <div className="d-flex"><div className="pricing">
                                            <p className="price"><span>{value.price + ' AED'}</span></p>
                                        </div>
                                            <div className="rating">
                                                <p className="text-right">
                                                    <span className="ion-ios-star-outline">
                                                    </span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                    <span className="ion-ios-star-outline"></span>
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <p className="bottom-area d-flex">
                                            <a href="#" className="add-to-cart">
                                                <span>Add to cart <i className="ion-ios-add ml-1"></i>
                                                </span></a><a href="#" className="ml-auto">
                                                <span><i className="ion-ios-heart-empty">
                                                </i>
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <div className="block-27">
                            <div onClick={loadMore} className="btn btn-primary py-3 px-5">load more</div>
                            <ul>
                                <li><a href="#">&lt;</a></li>
                                <li className="active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">&gt;</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(CollectionGirls)

