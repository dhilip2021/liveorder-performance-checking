import React from 'react';
import Loader from "../../../assets/images/loader.gif"
import "./css/Animationloader.css"

/**
* @author
* @function AnimationLoader
**/

const AnimationLoader = (props) => {
  return(
    <div className='animation-loader'>
        <img src={Loader} alt="Loader" />
    </div>
   )

 }
 export default AnimationLoader