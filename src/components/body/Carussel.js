import React, { useRef }from  'react'
import Laptop1 from "../../img/laptop1.jpg"
import Laptop2 from "../../img/laptop2.jpg"
import Laptop3 from "../../img/laptop3.jpg"
import Laptop4 from "../../img/laptop4.jpg"
import Laptop5 from "../../img/laptop5.jpg"
import Laptop6 from "../../img/laptop6.jpg"
import Laptop7 from "../../img/laptop7.jpg"
import Laptop8 from "../../img/laptop8.jpg"
import Laptop9 from "../../img/laptop9.jpg"
import Neckband from "../../img/neckband.png"
import Airpod from "../../img/airpod.jpg"
import Poco from "../../img/poco.jpg"
import Item1 from "../../img/item1.jpg"
import Item2 from "../../img/item2.jpg"
import Item3 from "../../img/item3.jpg"
import Item4 from "../../img/item4.jpg"
import "../cardcontainer.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export default function Cardcontainer() {

    const carouselRef = useRef(null);

  const scrollRight = () => {
    // Scrolls the container 1300px to the right
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 1300, // Positive value scrolls to the right
        behavior: 'smooth', // Makes the scroll smooth
      });
    }
  };

  const scrollLeft = () => {
    // Scrolls the container 1300px to the left
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -1300, // Negative value scrolls to the left
        behavior: 'smooth', // Smooth scrolling
      });
    }
}
  return (
    <div style={{height: '50vh'}}>
        <div className="mainhead2">
        <p className='text'>Blockbuster deals</p>
        <div className="containier-wrap">
       <span className='backbtn' onClick={scrollLeft}> <ArrowBackIosNewIcon/></span>
        <div className="cardContainer" ref={carouselRef} >
      
      <div className="card">
         
          <div className="cardImg">
          <img src={Laptop1} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>37% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹58,990 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹92,990.00</span></span>
          <span className='itemName'>Apple MacBook Air laptop</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Laptop2} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>31% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹66,190 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹95,890.00</span></span>
          <span className='itemName'>Lenovo LOQ 12th Gen</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Laptop3} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>38% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹47,990 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹76,990.00</span></span>
          <span className='itemName'>Asus Vivobook 15 Thin and Light</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Neckband} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>43% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹1,299 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹2,299.00</span></span>
          <span className='itemName'>Oneplus Bullet Z2</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Poco} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>32% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹18,990 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹27,990.00</span></span>
          <span className='itemName'>Poco X6 5G</span>
      </div>
        
      <div className="card">
          <div className="cardImg">
          <img src={Laptop4} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>30% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹49,190 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹70,990.00</span></span>
          <span className='itemName'>Lenovo Ideapad Slim 3</span>
      </div>
     
      <div className="card">
          <div className="cardImg">
          <img src={Laptop5} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>27% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹60,990 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹83,990</span></span>
          <span className='itemName'>ASUS TUF Gaming A15</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Laptop6} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>34% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹69,990 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹1,05,398</span></span>
          <span className='itemName'>Dell G15-5530</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Laptop7} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>32% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹57,990 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹84,838.00</span></span>
          <span className='itemName'>HP Victus Gaming Laptop</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Laptop8} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>32% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹39,990 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹59,109</span></span>
          <span className='itemName'>HP Laptop 15s</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Laptop9} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>46% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹37,990 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹70,838</span></span>
          <span className='itemName'>Asus Vivobook Go 15</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Airpod} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>39% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹1,999 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹3,299</span></span>
          <span className='itemName'>Oneplus Nord Buds 2</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Item1} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>58% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹7,499 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹18,000.00</span></span>
          <span className='itemName'>Aquaguard Sure Delight NTX-6</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Item2} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>60% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹7,999 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹19,999.00</span></span>
          <span className='itemName'>Sasmsung Galaxy Buds 2 pro</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Item3} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>21% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹1,499 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹1,900.00</span></span>
          <span className='itemName'>Apple 20W USB-C Power Adapter</span>
      </div>
      <div className="card">
          <div className="cardImg">
          <img src={Item4} alt="" />
          </div>
          <div className="cardinfo">
          <span className='badge'>85% off</span>
          <span className='itemInfoTwo'>Great Indian Festival</span>
          </div>
          <span className='priceInfo'>₹4,499 <span style={{fontSize: '11px'}}>M.R.P :</span><span className='mrp'>₹30,420.00</span></span>
          <span className='itemName'>Aristrocate Polypropylene</span>
      </div>
      
    </div>
        <span className='nextbtn' onClick={scrollRight}> <ArrowForwardIosIcon/></span>
        </div>
     
      </div>
    </div>
  )
}

