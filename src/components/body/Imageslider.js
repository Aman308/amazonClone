import React from 'react'
import "../imgslider.css"
import Carousel from "react-material-ui-carousel";
const data = [
 "https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Jupiter24/HERO1/J24_GW_PC_EventHero_Shop-Now_Static_2X._CB562511593_.jpg",
 "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Madhav/jupiter24/Iphone/41249/PC_Hero_3000x1200._CB562709879_.jpg",
 "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/SEP_24/Jup_teaser24/PC_Hero_3000x1200_20_Deals._CB562507633_.jpg",
 "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Jupiter24/Hero/Event/Comfort-bedsheets-TAG_v1._CB562522425_.jpg",
 "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/Jupiter/D1/PC/5-1._CB562161164_.jpg",
 "https://images-eu.ssl-images-amazon.com/images/G/31/img22/vernac-t/header/PC_Hero_3000x1200_Toddler_1._CB562359921_.jpg",
 "https://images-eu.ssl-images-amazon.com/images/G/31/img24/HPC/GW/Jup/PC-hero/PC_Hero_3000x1200_Lifestyle_02._CB562558941_.jpg",
 "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/dharshini/PC_Hero_3000x1200_WM_2x._CB562716146_.jpg"
]

export default function Imageslider() {
  return (
    <>
        <Carousel
            className="carousel"
            autoplay={true}
            animation="slide"
            indicators={false}
            navButtonAlwaysVisible={true}
            cycleNavigation={true}
            interval={4000}
            navButtonsProps={{
                style: {
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: 0,
                    marginTop: "-150px",
                    height: "100px",
                    border: "1px solid black",
                    zIndex: "2",
                    // dataBsInterval: "1000"
                    // data-bs-interval="10000"
                }
            }}>

            {
                data.map((img, i) => {
                    return (
                        <>
                            <img  style={{width: '100%'}} src={img} key={i} className="banner_img" alt='heroImg'/>
                        </>
                    )
                })
            }
   
    </Carousel>


    </>
)
}
