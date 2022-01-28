import logo3 from "./Components/logo3.png";
import logo from "./Components/logo.png";
import React from "react";

function AntiModal (){
    return(
    <div className={'antiModal'} >
        <img  className={'text-center backLogo'} src={logo3}  height='600' width='600' />

        <img id='image' className={'block-center image'} src={logo}  height='289.5' width='250'/>

    </div>
    )
}
export default AntiModal;
// id={'antiModal'}