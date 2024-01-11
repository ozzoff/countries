import React from "react";
import "./main.css"
import Nav_bar from "./nav";

export default function Search(props){
    
    return(
        <div className="search">
            <div>
            <input onChange={props.inputChange} placeholder="Search for a country ..."></input>
        </div>
        <div className="dropdown-menu">
            <button  >Choose region</button>


        </div>
        </div>
        
    )
}