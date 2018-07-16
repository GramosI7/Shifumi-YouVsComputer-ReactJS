import React from 'react'

 const AllChoix = (props) => {
     return (
         <img onClick={props.function} name={props.img} src={`./img/${props.img}.png`} alt=""/>
     )
 }

 export default AllChoix;