import React from "react";
import twitter from '../Images/Twitter-Icon.png'
import Github from '../Images/GitHub-Icon.png'
import Instagram from '../Images/Instagram-Icon.png'
import facebook from '../Images/Facebook-Icon.png'
export default function Footer(){
    return (
        <div className="footer">
           <a href="#"> <img src={twitter} alt="twitter" className="icons"/></a>
            <a href="#"><img src={facebook} alt="facebook" className="icons"/></a>
            <a href="#"><img src={Instagram} alt="instagram" className="icons"/></a>
            <a href="#"><img src={Github} alt="github" className="icons"/></a>
        </div>
    )
}