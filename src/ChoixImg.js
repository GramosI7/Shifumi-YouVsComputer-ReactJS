import React from "react";

const ChoixImg = (props) => {
    return (
        <div>
        <h4>{props.nom}</h4>

        <img src={`./img/${props.choix}.png`} alt=""/>
        
        <h3>{props.counter}</h3>
        </div>
    )
}



export default ChoixImg;
