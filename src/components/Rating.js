import React, { useState } from "react";
import ReactStars from "react-star-rating-component"


function Rating({setRating}){
const ratingChanged = (newrating) => {
  setRating(newrating)}
  
          return (
            <div>
            <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          </div>
          )
  };

export default Rating;