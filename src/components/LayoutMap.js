import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import HomeMapCard from './HomeMapCard';

const MapLayout = styled.div`  
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1.5fr auto; 
  grid-template-rows: auto;
  height: 100vh;
  grid-template-areas:
    "map houseCards"
    "map houseCards";
  .bottomNav {
    display: none;
  }
  .map {
    grid-area: map;
    margin-bottom: 10px;
    min-height: 500px;
    background: white url("https://res.cloudinary.com/dvqw5uhrr/image/upload/v1572896259/Raices/Screen_Shot_2019-11-04_at_2.36.41_PM.png");
    background-size: cover;
  }
  .houseCards {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 331px));
    margin-right: 10px;
    min-height: 500px;
    overflow-y: scroll;
    grid-area: houseCards;
    margin-bottom: 10px;        
    grid-gap: 20px;
    height: 100%;
  }
  .houseCard {
    border: 1px solid purple;
    height: 228px;
  }
  .footer {
    grid-area: footer;
    border: 1px solid red;
  }
  @media (max-width: 1000px) {
    grid-template-areas: 
      "map map"
      "houseCards houseCards";
    .houseCards {
      margin-right: 0px;
      height: inherit;
      overflow: visible;
    }
  }
  @media (max-width: 600px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "map"
      "houseCards"
      "bottomNav";
    .bottomNav {
      position: fixed;
      display: flex;  
      flex: 1;
      bottom: 0;
      margin: 0;
      width: 100%;
      /* max-width: 450px; */
      background: #fff;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
}
`

export default function LayoutMap() {
  return (
    <MapLayout>
      <div class="map">
      </div>
      <div class="houseCards">
        <HomeMapCard className="houseCard"/>
        <HomeMapCard className="houseCard"/>
        <HomeMapCard className="houseCard"/>
        <HomeMapCard className="houseCard"/>
        <HomeMapCard className="houseCard"/>
        <HomeMapCard className="houseCard"/>
        <HomeMapCard className="houseCard"/>
      </div>
      <div class="bottomNav">
        I'm the bottom Nav
      </div>
    </MapLayout>
  ); 
}