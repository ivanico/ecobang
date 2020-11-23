import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div className="navigation">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">EcoKnowledge</NavLink>
                    <ul className="sub_menu">
                        <li><NavLink to="/movies">EcoMovies</NavLink></li>
                        <li><NavLink to="/documentary">EcoDocumentary</NavLink></li>
                        <li><NavLink to="/books">EcoBooks</NavLink></li>
                        <li><NavLink to="/food">EcoFood</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/c-profile">CountryProfiles</NavLink></li>
                <li><NavLink to="/artist">Artists</NavLink></li>
                <li><NavLink to="/ecoprofile">EcoProfile</NavLink></li>
                <li><NavLink to="/video">EcoVideo</NavLink></li>
                <li><NavLink to="/ecocomedy">EcoComedy</NavLink></li>
            </ul>
        </div>
    )
}