import React from 'react'
import Watch from "../../img/watch.jpg"
import Shoes from "../../img/shoes.jpg"
import Keybord from "../../img/keybord.jpg"
import Mousepad from "../../img/mousepad.jpg"
import Phone1 from "../../img/phone1.jpg"
import Phone2 from "../../img/phone2.jpg"
import Phone3 from "../../img/phone3.jpg"
import Phone4 from "../../img/phone4.jpg"
import Acessories from "../../img/acessories.jpg"
import Asus from "../../img/asus.jpg"
import "../box.css"
export default function Box() {
  return (
    <div>
      <div className="mainBoxHolder">
       <div className="mainBox">
       <p className='text'>Keep Shoping for</p>
       <div className="twoSubBox">
        <div className="subBoxHolder">
       <div className="subBox">
         <img src={Watch} alt="" />      
        </div>
        <div className="subBoxInfo">
        <span className='itemInfo'>Wrist Watch for Men</span>
        </div>
        </div>
        <div className="subBoxHolder">
       <div className="subBox">
         <img style={{width: "130px"}} src={Shoes} alt="" />      
        </div>
        <div className="subBoxInfo">
        <span className='itemInfo'>Shoes for Men</span>
        </div>
        </div>
       </div>
       {/* this comment seperate 4 sub boxes in 4/2 */}
       <div className="twoSubBox">
        <div className="subBoxHolder">
       <div className="subBox">
         <img style={{width: "130px"}} src={Keybord} alt="" />      
        </div>
        <div className="subBoxInfo">
        <span className='itemInfo'>Gaming Keybords</span>
        </div>
        </div>
        <div className="subBoxHolder">
       <div className="subBox">
         <img style={{width: "130px"}} src={Mousepad} alt="" />      
        </div>
        <div className="subBoxInfo">
        <span className='itemInfo'>Mousepad</span>
        </div>
        </div>
       </div>
       </div>
       {/* This comment seperate Main boxes */}
       
       <div className="mainBoxTwo">
       <p className='text'>Deals based on your shopping trends</p>
       <div  className="twoSubBox">
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img src={Phone1} alt="" />      
        </div>
        <div className="subBoxInfo">
        <span className='badge'>15% off</span>
        <span className='itemInfoTwo'>Great Indian Festival</span>
        </div>
        </div>
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img  src={Phone2} alt="" />      
        </div>
        <div className="subBoxInfo">
        <span className='badge'>15% off</span>
        <span className='itemInfoTwo'>Great Indian Festival</span>
        </div>
        </div>
       </div>
       {/* this comment seperate 4 sub boxes in 4/2 */}
       <div style={{marginTop: "-10px"}} className="twoSubBox">
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img  src={Phone3} alt="" />      
        </div>
        <div className="subBoxInfo">
        <span className='badge'>15% off</span>
        <span className='itemInfoTwo'>Great Indian Festival</span>
        </div>
        </div>
        <div className="subBoxHolder">
       <div className="subBoxTwo">
         <img src={Phone4} alt="" />      
        </div>
        <div className="subBoxInfo">
        <span className='badge'>15% off</span>
        <span className='itemInfoTwo'>Great Indian Festival</span>
        </div>
        </div>
       </div>
       </div>
     {/* This comment seperate Main boxes */}
     <div className="mainBoxThree">
        <p className='text'>Up to 80% off | Electronics & accessories</p>
        <div className="subBoxThreeHold">
        <div className="subBoxThree">
                <img  src={Acessories} alt="" /> 
        </div>
       
        </div>
      </div>
     {/* This comment seperate Main boxes */}
     <div className="mainBoxFour">
      <div className="sepbox">
      <p className='text'>Asus</p>
      <p className='text-smx'>Asus Zenbook 15 Oled</p>
      </div>
        
        <div className="subBoxThreeHold">
        
                <img style={{marginRight: "12px"}}  src={Asus} alt="" /> 
      
       
        </div>
      </div>
      </div>
       </div>
      
  )
}
