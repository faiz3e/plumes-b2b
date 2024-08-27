
import React from "react";

export const Services = (props) => {
  return (

    <section className="ftco-section bg-light ftco-services">
      <div className="container pt-5">
        <div className="row justify-content-center mb-3 pt-5 pb-3">
          <div className="col-md-12 heading-section text-center">
            <h1 className="big">Services</h1>
            <h2>What makes us special?</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center d-flex align-self-stretch ">
            <div className="media block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
                <span className="flaticon-002-recommended"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Refund Policy</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center d-flex align-self-stretch ">
            <div className="media block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
                <span className="flaticon-001-box"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Premium Packaging</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center d-flex align-self-stretch ">
            <div className="media block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-4">
                <span className="flaticon-003-medal"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Superior Quality</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

