import React, { Component } from 'react'
// import { firestoreConnect } from 'react-redux-firebase'
import banner_yellow from '../images/background-purple.jpg'



class Contact extends Component {
  render() {
    // const { projects, auth, notifications } = this.props;

    return (
      <div className="flex">
        <div className="">
          <div className="col-12 s12 m6 p-0 m-0">
            <div className="hero-wrap hero-bread" style={{ backgroundImage: `url('${banner_yellow}')` }}>
              <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                  <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                    <h1 className="mb-0 bread">Contact Us</h1>
                    {/* <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Contact</span></p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m5 offset-m1">
            <section className="ftco-section contact-section bg-light">
              <div className="container">
                <div className="row block-9">
                  <div className="col-md-6 order-md-last d-flex">
                    <form action="#" className="bg-white p-5 contact-form">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject" />
                      </div>
                      <div className="form-group">
                        {/* <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea> */}
                      </div>
                      <div className="form-group">
                        <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 d-flex">
                    <div id="map" className="bg-white" style={{ position: "relative", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: "100%", position: "absolute", top: '0px', left: '0px', backgroundColor: 'rgb(229, 227, 223)' }}>
                        <div className="gm-err-container"><div className="gm-err-content"><div className="gm-err-icon">
                          <img src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png" alt="" draggable="false" /></div>
                          <div className="gm-err-title">Oops! Something went wrong.</div><div className="gm-err-message">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</div></div></div></div></div>
                  </div>
                </div>
                <div className="row d-flex mt-5 contact-info">
                  <div className="w-100"></div>
                  <div className="col-md-3 d-flex">
                    <div className="info bg-white p-4">
                      <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex">
                    <div className="info bg-white p-4">
                      <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex">
                    <div className="info bg-white p-4">
                      <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex">
                    <div className="info bg-white p-4">
                      <p><span>Website</span> <a href="#">yoursite.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    // auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default Contact
