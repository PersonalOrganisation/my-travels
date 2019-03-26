// src/Travel.js
import React from "react";
import './App.css';

const Travel = ({ city, country,distance, photo }) => (
    <div>
        <h2>{city}</h2>
        <h4>{country}</h4>
        <p>{distance}</p>
        <img src={photo} alt="" />
    </div>
);

export default Travel;

