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


export const Home = (props) => {
    return (
        <div>
            <LeStyle />
            <div className="goto-here"></div>
            <Trending />
            <Modist />
            <OurProducts />
            <SummerSale />
            <Testimony />
            <Blog />
            <Services />
            <Subscribe />
        </div>
    )
}