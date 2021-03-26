import React from "react";
import Logo from "../../assets/P-MIS_LOGO.png"

const Banner = ({username}) => {
 return (
    <div style={{position:"absolute", top:"45%", left: "50%", transform: "translate(-45%, -50%)" }}>
      <img src={Logo} className="img-fluid mx-auto d-block" style={{width:"60%"}} alt=""/>
      {/*eslint-disable-next-line*/}
      <marquee className="mt-3">Welcome {username.toUpperCase()} !</marquee>
    </div>
 )
}

export default Banner;