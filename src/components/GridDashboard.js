import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const DashStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "header"
    "main"
    "footer";
  height: 100vh;
  .header, footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    background-color: #648ca6;
  }
  .header {
    grid-area: header;
    background-color: #648ca6;
  }
  .sidenav {
    display: none; /* Will be hidden on mobile */
    flex-direction: column;
    grid-area: sidenav;
    background-color: #394263;
  }
  .sidenav__list {
    padding: 0px;
    margin-top: 85px;
    list-style-type: none;
  }
  .sidenav__list-item {
    padding: 20px 20px 20px 40px;
    color: #ddd;
  }
  .sidenav__list-item:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
  .main {
    grid-area: main;
    background-color: #8fd4d9;
  }
  .main-header {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    padding: 20px;
    height: 150px;
    background-color: #e3e4e6;
    color: slategray;
  }
  .main-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    grid-auto-rows: 94px;
    grid-gap: 20px;
    margin: 20px;
  }
  .overviewcard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #d3d3;
  }
  .main-cards {
    column-count: 1;
    column-gap: 20px;
    margin: 20px;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #82bef6;
    margin-bottom: 20px;
    -webkit-column-break-inside: avoid;
    padding: 24px;
    box-sizing: border-box;
  }
    /* Force varying heights to simulate dynamic content */
  .card:first-child {
    height: 485px;
  }
  .card:nth-child(2) {
    height: 200px;
  }
  .card:nth-child(3) {
    height: 265px;
  }
  .footer {
    grid-area: footer;
    background-color: #648ca6;
  }
  /* Non-mobile styles, 750px breakpoint */
  @media only screen and (min-width: 46.875em) {
    /* show the sidenav */ 
    grid-template-columns: 240px 1fr; /* Show the side nav for non mobile screens */ 
    grid-template-areas: 
      "sidenav header"
      "sidenav main"
      "sidenav footer";
    .sidenav {
      display: flex;
      flex-direction: column;
    }    
  }
  /* Medium sized screen breakpoint (tablet, 1050px) */
  @media only screen and (min-width: 65.625em) {
    /* break out main cards into two columns */ 
    .main-cards {
      column-count: 2;
    }
  }
  /* Hamburger menu icon, stays fixed on mobile for any possible scrolling */
  .menu-icon {
    position: fixed;
    display: flex;
    top: 5px;
    left: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 1;
    cursor: pointer;
    padding: 12px;
    background-color: #DADAE3;
  }

  /* Make room for the menu icon on mobile */
  .header__search {
    margin-left: 42px;
  }

  /* Mobile-first side nav styles */
  .sidenav {
    grid-area: sidenav;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 240px;
    position: fixed;
    overflow-y: auto;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    z-index: 2; /* Needs to sit above the hamburger menu icon */
    background-color: #394263;
    transform: translateX(-245px);
    transition: all .6s ease-in-out;
  }

  /* The active class is toggled on hamburger and close icon clicks */
  .sidenav.active {
    transform: translateX(0);
  }

  /* Only visible on mobile screens */
  .sidenav__close-icon {
    position: absolute;
    visibility: visible;
    top: 8px;
    right: 12px;
    cursor: pointer;
    font-size: 20px;
    color: #ddd;
  }

  /* Non-mobile styles for side nav responsiveness, 750px breakpoint */
  @media only screen and (min-width: 46.875em) {
    .sidenav {
      position: relative; /* Fixed position on mobile */
      transform: translateX(0);
    }

    .sidenav__close-icon {
      visibility: hidden;
    }
  }
`

export default function GridDashboard() {
  return (
    <DashStyle>
      <header className="header">
      <i className="fas fa-bars header__menu"></i>
        <div className="header__search">Search...</div>
        <div className="header__avatar">Your face</div>
      </header>
      {/*<!-- Dashboard main menu icon and side nav close icon -->*/}

      <div className="grid-container">
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
      </div>

      <aside className="sidenav">
        <div className="sidenav__close-icon">
          <i className="fas fa-times"></i>
        </div>
      </aside>
      <aside className="sidenav">
        <ul className="sidenav__list">
          <li className="sidenav__list-item">Item One</li>
          <li className="sidenav__list-item">Item Two</li>
          <li className="sidenav__list-item">Item Three</li>
          <li className="sidenav__list-item">Item Four</li>
          <li className="sidenav__list-item">Item Five</li>
        </ul>
      </aside>
      <main className="main">
        
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        <div className="main-overview">
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Info</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Info</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Info</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Info</div>
          </div>
        </div>
        <div className="main-cards">
          <div className="card">Card</div>
          <div className="card">Card</div>
          <div className="card">Card</div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__copyright">&copy; 2019</div>
        <div className="footer__signature">Made with love by Scottie</div>
      </footer>
    </DashStyle>
  );
}
