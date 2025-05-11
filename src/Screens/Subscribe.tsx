
import React from "react";
import { useNavigate } from "react-router-dom";

export const Subscribe = (props) => {
    const navigation = useNavigate()
    const navigateToGirls = () => {
        navigation('/collection-girls')
    }
    const navigateToBoys = () => {
        navigation('/collection-boys')
    }
    return (
        <section className="ftco-section-parallax">
            <div className="parallax-img d-flex align-items-center">
                <div className="container">
                    <div className="row d-flex justify-content-center py-5">
                        <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
                            <h1 className="big">Category</h1>
                            <h2>Shop by category</h2>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-2 justify-content-around ">
                        <div className="col-md-8 col-lg-12 col-sm-12 d-flex w-100 justify-content-around">
                            <p><button onClick={navigateToGirls} className="btn btn-outline-primary py-3 px-5">GIRLS</button></p>
                            <p><button onClick={navigateToBoys} className="btn btn-outline-primary py-3 px-5">BOYS</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
