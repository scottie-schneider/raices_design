import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import Image from './Image'
import SmallRatingsComponent from './SmallRatingsComponent';

const SmallHomeCardHolder = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0px;
  columns: 1fr;
  background-color: #fff;
  height: 134px;
  width: 88px;
  min-width: 88px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 #D2D3D7;
  font-family: 'Fira Sans', sans-serif;
  overflow: hidden;
  color: #1E2227;
  margin-left: 16px;
  .info {
    height: 46px;
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;    
  }
  .address {
    font-size: 11px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
  }
  .price {
    font-size: 14px;
    color: #E67E22;
  }
`


export default function SmallHomeCard() {
  return (
    <SmallHomeCardHolder>
      <Image 
        src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/775_Henry_Smith_Street.jpg"}
        agent
        height={"88px"}
        width={"88px"}
        shadow={false}
      />
      <div className="info">
        <div className="address">123456 Harrel-Worthington St.</div>
        <div className="price">$360,000</div>
      </div>
    </SmallHomeCardHolder>
  ); 
}
