import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div className="navigation">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Ecotainment</NavLink>
                    <ul className="sub_menu">
                        <li className="testsub_menu"><NavLink to="/articles">Articles</NavLink></li>
                        <li><NavLink to="/movies">Movies</NavLink></li>
                        <li><NavLink to="/documentary">Documentaries</NavLink></li>
                        <li><NavLink to="/books">Books</NavLink></li>
                        <li><NavLink to="/comedy">Comedy</NavLink></li>
                        <li><NavLink to="/video">Music Videos</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/c-profile">Country Profiles</NavLink></li>
                <li><NavLink to="/artist">Artist Eco-profiles</NavLink></li>
                <li><NavLink to="/ecoprofile">Eco Organizations & people</NavLink></li>
                <li><NavLink to="/video">Eco music Video</NavLink></li>
                <li><NavLink to="/themes">Eco Themes</NavLink>
                    <ul className="sub_menu">
                        <li><NavLink to="/food">Food</NavLink></li>
                        <li><NavLink to="/sustainability">Sustainability</NavLink></li>
                        <li><NavLink to="/energy">Energy</NavLink></li>
                        <li><NavLink to="/sixthextinction">Sixth extinction</NavLink></li>
                        <li><NavLink to="/capitalism">Capitalism</NavLink></li>
                        <li><NavLink to="/carbon">Reducing a carbon</NavLink></li>
                        <li><NavLink to="/footprint">Footprint</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/ecocomedy">Shop</NavLink></li>
            </ul>
        </div>
    )
}