import React from 'react'
import  '../footer.css'
import Logo from "../../img/logo.png";
import LanguageIcon from '@mui/icons-material/Language';
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="backToTop">
            <p><a href="#">Back To Top</a></p>
        </div>
        <div className="colHolder">
        <div className="col">
            <ul>
                <li className="listHead" > <a href="#"> Get to Know Us </a></li>
                <li> <a href="#">About Amazon</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press Releases</a></li>
                <li><a href="#">Amazon Science</a></li>
            </ul>
        </div>
        <div className="col">
            <ul>
                <li className="listHead" ><a href="#">Connect with Us</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </div>
        <div className="col">
            <ul>
                <li className="listHead" ><a href="#">Make Money with Us</a></li>
                <li><a href="#">Sell on Amazon</a></li>
                <li><a href="#">Sell under Amazon Accelerator</a></li>
                <li><a href="#">Protect and Build Your Brand</a></li>
                <li><a href="#">Amazon Global Selling</a></li>
                <li><a href="#">Supply to Amazon</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Fulfilment by Amazon</a></li>
                <li><a href="#">Advertise Your Products</a></li>
                <li><a href="#">Amazon Pay on Merchants</a></li>
            </ul>
        </div>
        <div className="col">
            <ul>
                <li className="listHead" ><a href="#">Let Us Help You</a></li>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Returns Centre</a></li>
                <li><a href="#">Recalls and Product Safety Alerts</a></li>
                <li><a href="#">100% Purchase Protection</a></li>
                <li><a href="#">Amazon App Download</a></li>
                <li><a href="#">Help</a></li>
            </ul>
        </div>
        </div>
        <div className="langSection">
            <img src={Logo} alt="" />
            <div className="btn">
            <button><LanguageIcon/>English</button>
            <button>India</button>
            </div>
        </div>
      </footer>
    </div>
  )
}
