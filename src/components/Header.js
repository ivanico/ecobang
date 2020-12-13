import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div className="navigation">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Ecotainment</NavLink>
                    <ul className="sub_menu">
                        <li><NavLink to="/movies">Movies</NavLink></li>
                        <li><NavLink to="/documentary">Documentaries</NavLink></li>
                        <li><NavLink to="/books">Books</NavLink></li>
                        <li><NavLink to="/food">Comedy</NavLink></li>
                        <li><NavLink to="/video">Music Videos</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/c-profile">Country Profiles</NavLink></li>
                <li><NavLink to="/artist">Artist Eco-profiles</NavLink></li>
                <li><NavLink to="/ecoprofile">Eco Organizations & people</NavLink></li>
                <li><NavLink to="/video">Eco music Video</NavLink></li>
                <li><NavLink to="/ecocomedy">Eco Themes</NavLink></li>
                <li><NavLink to="/ecocomedy">Shop</NavLink></li>
            </ul>
        </div>
    )
}