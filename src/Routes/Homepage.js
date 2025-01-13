import React, { useState } from "react";
import "./homepage.css";

const buttons = ['Book A Table', 'Explore Menu']
export default function Homepage() {
  return (
    <div className="first-section">
      <div className="first-sec-content">
        <h1>Best food for your taste</h1>
        <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
        <div className="buttons">
            {buttons.map((button,index)=>(
                <button key={index}>{button}</button>
            ))}
        </div>
      </div>
    </div>
  );
}
