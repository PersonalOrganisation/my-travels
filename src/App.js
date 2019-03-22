import React, { Component } from 'react';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travel
          destination="San Francisco" 
          country="USA"
          distance="9 161 km"
          photo="https://farm8.staticflickr.com/7161/6663212147_53a1a87a10_b.jpg"
        />
        <Travel
          destination="Lisbonne"
          country="PORTUGAL"
          distance="1 470 km"
          photo="https://farm4.staticflickr.com/3898/14377663581_89e794b5d0_b.jpg"
        />
      </div>
    );
  }
}

export default App;

