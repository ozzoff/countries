import React from "react";
import "./main.css"

export default function Nav_bar(props){
    function handleClick(){
        document.body.classList.toggle("light")
        document.querySelector(".nav-bar").classList.toggle("light")
        document.querySelectorAll(".small-div").forEach(item=>item.classList.toggle("light"))
    }
    return(
        <div className="nav-bar">
            <div>
                <h2>Where in the world?</h2>
            </div>
            <div>
                <button className="dark-btn" onClick={handleClick}>Dark Mode</button>
            </div>
        </div>
    )
}