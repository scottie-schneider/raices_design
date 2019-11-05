import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import AgentInfoBlock from './AgentInfoBlock';
import Image from './Image';
import AgentAboutMe from './AgentAboutMe';
import AgentActiveListings from './AgentActiveListings';

const AgentProfileLayout = styled.div`  
  display: grid;
  overflow: hidden;
  width: auto!important;
  grid-gap: 10px;
  grid-template-columns: auto; 
  grid-template-rows: auto;
  grid-template-areas:
    "profile"
    "infoBlock"
    "aboutMe"
    "activeListings"
    "reviews"
    "contactInfo"
    "addButton";
  .profile {
    grid-area: profile;
  }
  .infoBlock {
    grid-area: infoBlock;
  }
  .aboutMe {
    grid-area: aboutMe;
  }
  .activeListings {
    grid-area: activeListings;
    overflow-x: scroll;
  }
  .reviews {
    grid-area: reviews;
    border: 1px solid red;
  }
  .contactInfo {
    grid-area: contactInfo;
  }
  .addButton {
    grid-area: addButton;
  }

  @media (max-width: 600px) {
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

export default function LayoutAgentProfile() {
  return (
    <AgentProfileLayout>
      <div className="profile">
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg"}
          height={"362px"}
          width={"375px"}    
        />
      </div>
      <div className="infoBlock">
        <AgentInfoBlock />
      </div>
      <div className="aboutMe">
        <AgentAboutMe />
      </div>
      <div className="activeListings">        
        <AgentActiveListings />
      </div>
      <div class="reviews">
        <p>Reviews</p>
      </div>
      <div className="contactInfo">
        <p>Contact Info</p>
      </div>
      <div className="addButton">
        <button>Add as agent</button>
      </div>
    </AgentProfileLayout>
  ); 
}