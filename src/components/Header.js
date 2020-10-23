import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div className="navigation">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/video">EcoVideo</NavLink></li>
                <li><NavLink to="/documentary">EcoDocumentary</NavLink></li>
            </ul>
        </div>
    )
}