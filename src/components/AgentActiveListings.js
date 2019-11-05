import React from 'react';
import styled from 'styled-components'

import SmallHomeCard from './SmallHomeCard';

const ActiveListingsHolder = styled.div`   
  padding: 16px 0;
  display: grid;
  grid-gap: 16px 0;
  grid-template-columns: 16px 1fr 16px;
  align-content: start;
  * {
    grid-column: 2 / -2;
  }
  .listings {
    /* margin-right: 16px;
    margin-top: 25px;
    overflow-x: scroll;
    align-items: flex-start;
    justify-content: flex-start; */
    display: grid;
    width: 900px;
    grid-gap: 15px;
    grid-template-columns: 200px 200px 200px 200px;
    grid-auto-flow: column;
    grid-auto-columns: 200px;
    overflow-x: scroll;
    scroll-snap-type: x proximity;
    width: 100%;
    height: 150px;
    -ms-overflow-style: none;  // IE 10+
    scrollbar-width: none;  // Firefox
    ::-webkit-scrollbar {
      display: none;
    }
  }
  p {
    color: black;
  }
  .header {
    font-size: 17px;
    font-weight: bold;
  }
`


export default function AgentAboutMe() {
  return (
    <ActiveListingsHolder>
      <span className="header">Jim has 4 active listings</span>
      <div className="listings">
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
        <SmallHomeCard />
      </div>
    </ActiveListingsHolder>
  ); 
}
