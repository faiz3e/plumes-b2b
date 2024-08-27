import React from 'react'

export const ReviewBlog = props => {
  return (
    <div class='row justify-content-center'>
      <div class='col-md-8 ftco-animate fadeInUp ftco-animated'>
        <div class='row ftco-animate fadeInUp ftco-animated'>
          <div class='col-md-12'>
            <div class='carousel-testimony owl-carousel ftco-owl owl-loaded owl-drag'>
              <div class='owl-stage-outer'>
                <div
                  class='owl-stage'
                  style={{
                    // transform: 'translate3d(-2190px, 0px, 0px)',
                    // transition: '0.25s',
                    width: '100%'
                  }}
                >
                  {/* <div class='owl-item cloned' style={{ width: '730px' }}>
                    <div class='item'>
                      <div class='testimony-wrap py-4 pb-5'>
                        <div
                          class='user-img mb-4'
                          style={{
                            backgroundImage: 'url(images/person_3.jpg)'
                          }}
                        >
                          <span class='quote d-flex align-items-center justify-content-center'>
                            <i class='icon-quote-left'></i>
                          </span>
                        </div>
                        <div class='text text-center'>
                          <p class='mb-4'>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p class='name'>Roger Scott</p>
                          <span class='position'>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div class='owl-item cloned' style={{width: "100%"}}>
                    <div class='item'>
                      <div class='testimony-wrap py-4 pb-5'>
                        <div
                          class='user-img mb-4'
                          style={{backgroundImage: "url(images/person_1.jpg)"}}
                        >
                          <span class='quote d-flex align-items-center justify-content-center'>
                            <i class='icon-quote-left'></i>
                          </span>
                        </div>
                        <div class='text text-center'>
                          <p class='mb-4'>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p class='name'>Roger Scott</p>
                          <span class='position'>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class='owl-item cloned' style={{width: "730px"}}>
                    <div class='item'>
                      <div class='testimony-wrap py-4 pb-5'>
                        <div
                          class='user-img mb-4'
                          style={{backgroundImage: "url(images/person_1.jpg)"}}
                        >
                          <span class='quote d-flex align-items-center justify-content-center'>
                            <i class='icon-quote-left'></i>
                          </span>
                        </div>
                        <div class='text text-center'>
                          <p class='mb-4'>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p class='name'>Roger Scott</p>
                          <span class='position'>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='owl-item active' style={{width: "730px"}}>
                    <div class='item'>
                      <div class='testimony-wrap py-4 pb-5'>
                        <div
                          class='user-img mb-4'
                          style={{backgroundImage: "url(images/person_1.jpg)"}}
                        >
                          <span class='quote d-flex align-items-center justify-content-center'>
                            <i class='icon-quote-left'></i>
                          </span>
                        </div>
                        <div class='text text-center'>
                          <p class='mb-4'>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p class='name'>Roger Scott</p>
                          <span class='position'>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='owl-item' style={{width: "730px"}}>
                    <div class='item'>
                      <div class='testimony-wrap py-4 pb-5'>
                        <div
                          class='user-img mb-4'
                          style={{backgroundImage: "url(images/person_2.jpg)"}}
                        >
                          <span class='quote d-flex align-items-center justify-content-center'>
                            <i class='icon-quote-left'></i>
                          </span>
                        </div>
                        <div class='text text-center'>
                          <p class='mb-4'>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p class='name'>Roger Scott</p>
                          <span class='position'>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='owl-item' style={{width: "730px"}}>
                    <div class='item'>
                      <div class='testimony-wrap py-4 pb-5'>
                        <div
                          class='user-img mb-4'
                          style={{backgroundImage: "url(images/person_3.jpg)"}}
                        >
                          <span class='quote d-flex align-items-center justify-content-center'>
                            <i class='icon-quote-left'></i>
                          </span>
                        </div>
                        <div class='text text-center'>
                          <p class='mb-4'>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p class='name'>Roger Scott</p>
                          <span class='position'>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='owl-item' style={{width: "730px"}}>
                    <div class='item'>
                      <div class='testimony-wrap py-4 pb-5'>
                        <div
                          class='user-img mb-4'
                          style={{backgroundImage: "url(images/person_1.jpg)"}}
                        >
                          <span class='quote d-flex align-items-center justify-content-center'>
                            <i class='icon-quote-left'></i>
                          </span>
                        </div>
                        <div class='text text-center'>
                          <p class='mb-4'>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p class='name'>Roger Scott</p>
                          <span class='position'>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='owl-item' style={{width:"730px"}}>
                    <div class='item'>
                      <div class='testimony-wrap py-4 pb-5'>
                        <div
                          class='user-img mb-4'
                          style={{backgroundImage: "url(images/person_1.jpg)"}}
                        >
                          <span class='quote d-flex align-items-center justify-content-center'>
                            <i class='icon-quote-left'></i>
                          </span>
                        </div>
                        <div class='text text-center'>
                          <p class='mb-4'>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p class='name'>Roger Scott</p>
                          <span class='position'>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='owl-item cloned' style={{width: "730px"}}>
                    <div class='item'>
                      <div class='testimony-wrap py-4 pb-5'>
                        <div
                          class='user-img mb-4'
                          style={{backgroundImage: "url(images/person_1.jpg)"}}
                        >
                          <span class='quote d-flex align-items-center justify-content-center'>
                            <i class='icon-quote-left'></i>
                          </span>
                        </div>
                        <div class='text text-center'>
                          <p class='mb-4'>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p class='name'>Roger Scott</p>
                          <span class='position'>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='owl-item cloned' style={{width: "730px"}}>
                    <div class='item'>
                      <div class='testimony-wrap py-4 pb-5'>
                        <div
                          class='user-img mb-4'
                          style={{backgroundImage: "url(images/person_2.jpg)"}}
                        >
                          <span class='quote d-flex align-items-center justify-content-center'>
                            <i class='icon-quote-left'></i>
                          </span>
                        </div>
                        <div class='text text-center'>
                          <p class='mb-4'>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p class='name'>Roger Scott</p>
                          <span class='position'>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='owl-item cloned' style={{width: "730px"}}>
                    <div class='item'>
                      <div class='testimony-wrap py-4 pb-5'>
                        <div
                          class='user-img mb-4'
                          style={{backgroundImage: "url(images/person_3.jpg)"}}
                        >
                          <span class='quote d-flex align-items-center justify-content-center'>
                            <i class='icon-quote-left'></i>
                          </span>
                        </div>
                        <div class='text text-center'>
                          <p class='mb-4'>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p class='name'>Roger Scott</p>
                          <span class='position'>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <div class='owl-nav disabled'>
                <button role='presentation' class='owl-prev'>
                  <span class='ion-ios-arrow-back'></span>
                </button>
                <button role='presentation' class='owl-next'>
                  <span class='ion-ios-arrow-forward'></span>
                </button>
              </div>
              <div class='owl-dots'>
                <button class='owl-dot active'>
                  <span></span>
                </button>
                <button class='owl-dot'>
                  <span></span>
                </button>
                <button class='owl-dot'>
                  <span></span>
                </button>
                <button class='owl-dot'>
                  <span></span>
                </button>
                <button class='owl-dot'>
                  <span></span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
