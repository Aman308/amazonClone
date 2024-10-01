import React from 'react'
import Kitchen from "../../img/kitchen.jpg"
import Decor from "../../img/decor.jpg"
import Furniture from "../../img/furniture.jpg"
import Homeimp from "../../img/homeimp.jpg"
import Keybordnormal from "../../img/keybordnormal.jpg"
import Mouse from "../../img/mouse.jpg"
import Headphone from "../../img/headphone.jpg"
import Laptopbag from "../../img/laptopbag.jpg"
import Tv from "../../img/tv.jpg"
import Deal1 from "../../img/deal1.jpg"
import Deal2 from "../../img/deal2.jpg"
import Deal3 from "../../img/deal3.jpg"
import Deal4 from "../../img/deal4.jpg"

import "../boxmulti.css"
export default function Box() {
  return (
    <div style={{backgroundColor: "#e3e6e6"}}>
       <div className="mainBoxMulti2">
       <p className='text'>Minimum 50% off | Home, kitchen & more</p>
       <div  className="twoSubBox">
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img style={{width: "150px"}} src={Kitchen} alt="" />      
        </div>
        <div className="subBoxInfo">
        
        <span className='itemInfoTwoMulti'>Kitchen appliences</span>
        </div>
        </div>
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img style={{width: "150px"}} src={Decor} alt="" />      
        </div>
        <div className="subBoxInfo">
       
        <span className='itemInfoTwoMulti'>Home decor</span>
        </div>
        </div>
       </div>
       {/* this comment seperate 4 sub boxes in 4/2 */}
       <div style={{marginTop: "-15px"}} className="twoSubBox">
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img style={{width: "150px"}} src={Furniture} alt="" />      
        </div>
        <div className="subBoxInfo">
        
        <span className='itemInfoTwoMulti'>Furniture</span>
        </div>
        </div>
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img style={{width: "150px"}} src={Homeimp} alt="" />      
        </div>
        <div className="subBoxInfo">
       
        <span className='itemInfoTwoMulti'>Home improvement</span>
        </div>
        </div>
       </div>
       </div>
       {/* This comment seperate Main boxes */}
       <div className="mainBoxMultiTwo2">
       <p className='text'>Deals on keyboard, mouse & more</p>
       <div  className="twoSubBox">
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img style={{width: "150px"}} src={Keybordnormal} alt="" />      
        </div>
        <div className="subBoxInfo">
        
        <span className='itemInfoTwoMulti'>Starting ₹249 | Keyboards </span>
        </div>
        </div>
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img style={{width: "150px"}} src={Mouse} alt="" />      
        </div>
        <div className="subBoxInfo">
       
        <span className='itemInfoTwoMulti'>Starting ₹199 | Mice</span>
        </div>
        </div>
       </div>
       {/* this comment seperate 4 sub boxes in 4/2 */}
       <div style={{marginTop: "-15px"}} className="twoSubBox">
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img style={{width: "150px"}} src={Headphone} alt="" />      
        </div>
        <div className="subBoxInfo">
        
        <span className='itemInfoTwoMulti'>Starting ₹499 | Headphones</span>
        </div>
        </div>
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img style={{width: "150px"}} src={Laptopbag} alt="" />      
        </div>
        <div className="subBoxInfo">
       
        <span className='itemInfoTwoMulti'>Starting ₹399 | Laptop bags</span>
        </div>
        </div>
       </div>
       </div>
       {/* This comment seperate Main boxes */}
       <div className="mainBoxMultiThree3">
        <p className='text'>Up to 65% off | Upgrade to 4K TVs</p>
        <div className="subBoxThreeHold">
        <div className="subBoxThree">
                <img  src={Tv} alt="" /> 
        </div>
       
        </div>
      </div>
       {/* This comment seperate Main boxes */}
       <div className="mainBoxMultiFour4">
       <p className='text'>Minimum 60% off | Deals on Amazon brands & more</p>
       <div  className="twoSubBox">
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img style={{width: "150px"}} src={Deal1} alt="" />      
        </div>
        <div className="subBoxInfo">
        
        <span className='itemInfoTwoMulti'>Min. 55% off | Furniture</span>
        </div>
        </div>
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img style={{width: "150px"}} src={Deal2} alt="" />      
        </div>
        <div className="subBoxInfo">
       
        <span className='itemInfoTwoMulti'>Starting ₹99 | Toys & games</span>
        </div>
        </div>
       </div>
       {/* this comment seperate 4 sub boxes in 4/2 */}
       <div style={{marginTop: "-15px"}} className="twoSubBox">
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img style={{width: "150px"}} src={Deal3} alt="" />      
        </div>
        <div className="subBoxInfo">
        
        <span className='itemInfoTwoMulti'>Min. 60% off | Racks & holders</span>
        </div>
        </div>
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img style={{width: "150px"}} src={Deal4} alt="" />      
        </div>
        <div className="subBoxInfo">
       
        <span className='itemInfoTwoMulti'>Minimum 60% off | Symbol premium</span>
        </div>
        </div>
       </div>
       </div>
    </div>    
      
  )
}