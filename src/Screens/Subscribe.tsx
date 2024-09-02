
import React from "react";

export const Subscribe = (props) => {
    return (
        <section className="">
            <div className="parallax-img d-flex align-items-center pb-5">
                <div className="container">
                    <div className="row d-flex justify-content-center pt-1 pb-5">
                        <div className="col-md-12 text-center heading-section ">

                            {/* <h1 className="big">Starting a clothing brand?</h1> */}
                            <h2 className="display-4 mb-1">Let’s create something beautiful together!</h2>
                            <p className="lead mb-1">Get in Touch with Us</p>

                            <div className="row d-flex justify-content-center mt-5 mb-5">
                                <div className="col-md-8 mt-3">
                                    <form action="#" className="subscribe-form">
                                        <div className="form-group d-flex">
                                            <input type="text" className="form-control" placeholder="Enter email address" />
                                            <input type="submit" value="Subscribe" className="submit px-3" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
