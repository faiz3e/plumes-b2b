import React from "react";

import App from "../App";

import { LeStyle } from './LeStyle';
import { Trending } from './Trending';
import { Modist } from './Modist';
import { OurProducts } from './OurProducts';
import { SummerSale } from './SummerSale';
import { Testimony } from './Testimony';
import { Blog } from './Blog';
import { Services } from './Services';
import { Subscribe } from './Subscribe';
import { WeCanHelp } from "./WeCanHelp";
import Contact from "./Contact";


export const Home = (props) => {
    return (
        <div>
            <LeStyle />
            <div className="goto-here"></div>
            <WeCanHelp />
            {/* <Trending /> */}
            <Subscribe />
            <Modist />
            <OurProducts />
            {/* <SummerSale /> */}
            <Testimony />
            <Blog />
            <Services />
            <div className="pt-5 mt-5">

            </div>
            <Subscribe />
            <Contact/>
        </div>
    )
}