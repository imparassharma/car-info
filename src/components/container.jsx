import React from "react";

function Container(props){
    return(

        <div className="container" id={props.name}>
            <div className="top">
                <img src={props.img} alt="img"></img>
            </div>
            <div className="middle">
                <h1>{props.name}</h1>
                <p>{props.content}</p>
            </div>
            <div className="bottom">
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default Container;