import React from "react";
import { NavLink } from "react-router-dom";


export const Header = () => {

    return (
        <div className="navigation">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Ecotainment</NavLink>
                    <ul className="sub_menu">
                        <li><NavLink to="/articles">Articles</NavLink></li>
                        <li><NavLink to="/movies">Movies</NavLink></li>
                        <li><NavLink to="/documentary">Documentaries</NavLink></li>
                        <li><NavLink to="/books">Books</NavLink>
                            <ul className="sub_menu_books">
                                <li><NavLink to="/books">Extinction-Elizabeth Kolbert</NavLink></li>
                                <li><NavLink to="/books">This changes everything-Naomi Klein</NavLink></li>
                                <li><NavLink to="/books">Greta-no one is too small</NavLink></li>
                                <li><NavLink to="/books">Losing Earth-nathaniel rich</NavLink></li>
                                <li><NavLink to="/books">Our Choice-a plan to solve the climate crisis Al Gore</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/comedy">Comedy</NavLink></li>
                        <li><NavLink to="/video">Music Videos</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/c-profile">Country Profiles</NavLink></li>
                <li><NavLink to="/artist">Artist Eco-profiles</NavLink></li>
                <li><NavLink to="/ecoprofile">Eco Organizations & people</NavLink></li>
                <li><NavLink to="/video">Eco music Video</NavLink>
                    <ul className="sub_menu">
                        <li><NavLink to="/video1">The road to hell - chris rea</NavLink></li>
                        <li><NavLink to="/video2">World hold on - bob sinclair</NavLink></li>
                        <li><NavLink to="/video3">Driven out - the fixx</NavLink></li>
                        <li><NavLink to="/video4">Second nature - rush</NavLink></li>
                        <li><NavLink to="/video5">House on fire - natalie merchant</NavLink></li>
                    </ul>
                </li>
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