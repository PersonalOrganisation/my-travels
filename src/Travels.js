// src/Travel.js
import React from "react";
import './App.css';
import Travel from './Travel';

const travels = [
    {
    city:
    "San Francisco",
    country: 
    "Usa",
    distance:
    "8000 km",
    photo:
    "https://cdn12.picryl.com/photo/2016/12/31/golden-gate-bridge-golden-gate-bridge-golden-gate-san-francisco-architecture-b53e54-1024.jpg"
    },
    {
    city:
    "Lisbonne",
    country: 
    "Portugal",
    distance:
    "1470 km",
    photo:
    "https://farm4.staticflickr.com/3898/14377663581_89e794b5d0_b.jpg"
    },
    {
    city:
    "Dubrovnik",
    country: 
    "Croatie",
    distance:
    "1800 km",
    photo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Dubrovnik_june_2011..JPG/1024px-Dubrovnik_june_2011..JPG"
    },
    {
    city:
    "Rome",
    country: 
    "Italie",
    distance:
    "1289 km",
    photo:
    "https://farm9.staticflickr.com/8588/16076914571_6046d564d6_b.jpg"
    },
    {
    city:
    "Barcelone",
    country: 
    "Espagne",
    distance:
    "763 km",
    photo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Barcelone_-_Parc_G%C3%BCell_-_Entr%C3%A9e.jpg/1024px-Barcelone_-_Parc_G%C3%BCell_-_Entr%C3%A9e.jpg"
    }
  ];
  
  const Travels = () => (
    <div>
      {travels.map(travel => (
    <Travel city={travel.city} country={travel.country} distance={travel.distance} photo={travel.photo} />
  ))}
    </div>
  );
  
export default Travels;

