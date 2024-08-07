import React from "react";
import world from "../assets/world.svg"

function Header(){
    return (
        <header className="header--main">
            <img src={world} className="header--logo" ></img>
            <span className="header--title">Shivam's Travel Journal</span>
        </header>
    )
}

export default Header