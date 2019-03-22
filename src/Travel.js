// src/Travel.js
import React from "react";
import './App.css';

const Travel = ({ destination, country, photo, distance }) => (
    <div>
        <h2 cla>{destination}</h2>
        <h4>{country}</h4>
        <p>{distance}</p>
        <img src={photo} alt="" />
    </div>
);

export default Travel;

