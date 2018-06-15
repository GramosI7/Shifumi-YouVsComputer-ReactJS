import React from "react";

const ChoixImg = (props) => {
    return (
        <div>
        <h4>{props.nom}</h4>
        <img src={`./img/${props.choix}.png`} alt=""/>
        
        </div>
    )
}



export default ChoixImg;
