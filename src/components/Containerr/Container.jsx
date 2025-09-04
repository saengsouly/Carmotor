import React from "react";
import './Container.css'
import car1 from '../../assets/car1.jpg'
import car2 from '../../assets/ca2.jpg'
import car3 from '../../assets/car3.jpg'

function Container (){
    return(
     <div className="box4">
        <h2 className="h2">Featured Vehicles</h2>
        <p className="p2">Get star whit some of our top picks</p>
       <img className="box1" src={car2} alt="Car 2" />
       <img className="box2" src={car1} alt="Car 1" />
       <img className="box3" src={car3} alt="Car 3" />
     </div>
    )
}
export default Container