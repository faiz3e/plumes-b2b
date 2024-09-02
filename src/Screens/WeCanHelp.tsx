import React from "react";
import product1 from '../images/images-product-1.jpg'
import product2 from '../images/images-product-2.jpg'
import product3 from '../images/images-product-3.jpg'
import product4 from '../images/images-product-4.jpg'
import sourcing from '../images/sourcing.jpg'
import fabric2 from '../images/fabric2.jpg'
import pattern from '../images/pattern.jpg'
import bulk from '../images/bulk.jpg'
import pre from '../images/pre.jpg'
import quality1 from '../images/quality1.jpg'
import development from '../images/development.jpg'
import home_slide from '../images/home-slide.png'
import home_slide1 from '../images/home-slide1.png'
import home_slide2 from '../images/home-slide2.png'
import home_slide3 from '../images/home-slide3.png'

export const WeCanHelp = (props) => {
  return (
    <section className="ftco-section-big ftco-product pb-5" id='trending'>
      <div className="container-fluid">
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center">
            {/* <h1 className="big">Starting a clothing brand?</h1> */}
            <h2 className="display-4 mb-1">Starting a clothing brand? We can help!</h2>
          </div>
        </div>
        <div className="row justify-content-center pt-2">
          <div className="col-md-12 heading-section text-center">
            <p className="lead mb-1">Looking for Clothing Manufacturers in Inda?</p>
            <p className="lead mb-5 pl-5 pr-5">{`Plumes crafts top-quality garments for kids, We also provide comprehensive manufacturing solutions tailored to your brand's success.`}</p>
            <button className=" btn btn-primary py-3 px-4 mb-4" onClick={() => { }}>{'Explore business growth with us.'}</button>
          </div>
        </div>
        <div className="container-fluid pt-3 pb-5 pt-5">
          <div className="row px-4 mx-4 pt-3">
            {[{
              heading: "Fabric sourcing",
              subHeading: 'Fabric is sourced or produced per order to meet your requirements for composition, handfeel and budget.',
              img: fabric2
            }, {
              heading: "Pattern development",
              subHeading: 'Patterns for your clothing are developed using custom dimensions or sizing references.',
              img: pattern
            },
            {
              heading: "Prototypes & sampling",
              subHeading: 'Each order includes a prototype for approval, allowing you to refine your design before we commence bulk manufacture.',
              img: development
            },
            {
              heading: "Bulk manufacturing",
              subHeading: 'Clothing manufacturing takes place on our production line, with your approved specifications forming the basis for bulk.',
              img: bulk
            },
            {
              heading: "Quality check",
              subHeading: 'We implement a 4 stage quality check process, with each item checked by an operative to identify and rectify any rare defects.',
              img: quality1
            },
            {
              heading: "Pre production",
              subHeading: 'The process begins with your idea. We guide you through the stages of making your concept a reality.',
              img: pre
            },
            ].map((item) => {
              return (
                <div className="col col-md-4 col-lg-4 p-4 mb-1 col-sm-12 ">
                  <div className="card row d-flex flex-row border-0">
                    <div className="col p-0 col-6">
                      <img className="card-img-top" src={item.img} style={{ maxHeight: '15em', objectFit: 'contain' }} alt="Card image cap" />
                    </div>
                    <div className="col col-6 p-0">
                      <div className="card-body p-2">
                        <h5 className="card-title">{item.heading}</h5>
                        <p className="card-subtitle mb-2 text-muted">{item.subHeading}</p>
                        <a href="#" className="card-link">Check out how</a>
                      </div>
                    </div>
                  </div>
                  {/* <div className="product">
                    <a href="#" className="img-prod">
                      <img className="img-fluid" src={home_slide} alt="Colorlib Template" />
                      <span className="status">30%</span>
                    </a>
                    <div className="text pt-3 px-3">
                      <h3><a href="#">Young Woman Wearing Dress</a></h3>
                      <div className="d-flex">
                        <div className="pricing">
                          <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span>
                          </p>
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
                    </div>
                  </div> */}
                </div>
              )
            })}
          </div>

        </div>

        {/* <div className="row">
          <div className="col-md-12">
            <div className="product d-flex">
              <div className="item">
                <div className="product">
                  <a href="#" className="img-prod">
                    <img className="img-fluid" src={home_slide} alt="Colorlib Template" />
                    <span className="status">30%</span>
                  </a>
                  <div className="text pt-3 px-3">
                    <h3><a href="#">Young Woman Wearing Dress</a></h3>
                    <div className="d-flex">
                      <div className="pricing">
                        <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span>
                        </p>
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
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <a href="#" className="img-prod"><img className="img-fluid" src={home_slide3}
                    alt="Colorlib Template" /></a>
                  <div className="text pt-3 px-3">
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
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <a href="#" className="img-prod"><img className="img-fluid" src={home_slide2}
                    alt="Colorlib Template" /></a>
                  <div className="text pt-3 px-3">
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
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}