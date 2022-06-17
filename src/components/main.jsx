import React from "react";
import Container from "./container";
import pic1 from "../images/icon-sedans.svg";
import pic2 from "../images/icon-suvs.svg";
import pic3 from "../images/icon-luxury.svg";
function Main(){
    return(
        <div className="main">
            <Container
                img={pic1}
                name="SEDANS"
                content="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
            />
            <Container
                img={pic2}
                name="SUVS"
                content="Take an SUV for its spacious interior,power,and versatility. Perfect for your next family vacation and off-road adventures."
            />
            <Container
                img={pic3}
                name="LUXURY"
                content="Cruise in the best car brands without the bloated prices. Enjoy the emhanced comfort of a luxury rental and arrive in style."
            />
        </div>
    )
}

export default Main;