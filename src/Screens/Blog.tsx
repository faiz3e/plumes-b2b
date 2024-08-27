
import React from "react";
import product1 from '../images/images-product-1.jpg'
import product2 from '../images/images-product-2.jpg'
import product3 from '../images/images-product-3.jpg'
import product4 from '../images/images-product-4.jpg'
import bannerYellow from '../images/banner_yellow.png'

export const Blog = (props) => {
  return (
    <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: `url(${bannerYellow})` }}>
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="10000">2344</strong>
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="100">809</strong>
                    <span>Reviews</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="1000">12</strong>
                    <span>Partner</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="100">2</strong>
                    <span>Certifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

