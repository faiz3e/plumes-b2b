import React from "react";
import homeBg from '../images/home-bg-mod.jpg'

export const LeStyle = (props) => {
    return (
        <div className="hero-wrap js-fullheight" style={{ backgroundImage: `url(${homeBg})` }} >
            <div className="overlay"></div>
            <div className="container">

                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" style={{ height: '95vh' }}>
                    <h3 className="v">Plumes - Kids wear</h3>
                    <h3 className="vr">Since - 1985</h3>
                    <div className="col-md-11  text-center">
                        <h1 style={{ color: 'rgba(0, 0, 0, 0.7)' }}>P L U M E S</h1>
                        <h3 style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Mother Approved Outfioutfits</h3>
                    </div>
                    <div className="mouse">
                        <a href="#trending" className="mouse-icon">
                            <div className="mouse-wheel"><span className="ion-ios-arrow-down"></span></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

// rgba(173, 154, 222, 0.5)  transform: scale(-1, -1);