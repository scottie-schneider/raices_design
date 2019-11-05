import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import AgentInfoBlock from './AgentInfoBlock';
import Image from './Image';
import AgentAboutMe from './AgentAboutMe';
import AgentActiveListings from './AgentActiveListings';

const AgentProfileLayout = styled.div`  
 body {
  font-size: 15px;
}

button {
  background: #ffc600;
  border: 0;
  padding: 10px 20px;
}

img {
  max-width: 100%;
}

/* .wrapper */

.wrapper {
  display: grid;
  grid-gap: 20px;
}

.top {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "hero hero cta1"
    "hero hero cta2"
}

.hero {
  grid-area: hero;
  min-height: 400px;
  background: white url(images/taco.jpg);
  background-size: cover;
  background-position: bottom right;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.hero > * {
  background: var(--yellow);
  padding: 5px;
}

.cta {
  background: var(--yellow);
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
}

.cta p {
  margin: 0;
}

.cta1 {
  grid-area: cta1;
}

.cta2 {
  grid-area: cta2;
}

.price {
  font-size: 60px;
  font-weight: 300;
}

/* Navigation */

.menu ul {
  display: grid;
  grid-gap: 10px;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.menu a {
  background: var(--yellow);
  display: block;
  text-decoration: none;
  padding: 10px;
  text-align: center;
  color: var(--black);
  text-transform: uppercase;
  font-size: 20px;
}

[aria-controls="menu-list"] {
  display: none;
}

/* Features! */

.features {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.feature {
  background: white;
  padding: 10px;
  border: 1px solid white;
  text-align: center;
  box-shadow: 0 0 4px  rgba(0,0,0,0.1);
}

.feature .icon {
  font-size: 50px;
}
.feature p {
  color: rgba(0,0,0,0.5);
}

/* About Section */

.about {
  background: white;
  padding:50px;
  display: grid;
  grid-template-columns: 400px 1fr;
  align-items: center;
}

/* Gallery! */

.gallery {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.gallery img {
  width: 100%;
}

.gallery h2 {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 20px;
  align-items: center;
}

.gallery h2:before, .gallery h2:after {
  display: block;
  content: '';
  height: 10px;
  background: linear-gradient(to var(--direction, left), var(--yellow), transparent);
}

.gallery h2:after {
  --direction: right;
}

@media (max-width: 1000px) {
  .menu {
    order: -1;
    perspective: 800px;
  }
  [aria-controls="menu-list"] {
    display: block;
    margin-bottom: 10px;
  }

  .menu ul {
    max-height: 0;
    overflow: hidden;
    transform: rotateX(90deg);
    transition: all 0.5s;
  }

  [aria-expanded="true"] ~ ul {
    display: grid;
    max-height: 500px;
    transform: rotateX(0);
  }

  [aria-expanded="false"] .close {
    display: none;
  }

  [aria-expanded="true"] .close {
    display: inline-block;
  }

  [aria-expanded="true"] .open {
    display: none;
  }

}

@media (max-width: 700px) {
  .top {
    grid-template-areas:
      "hero hero"
      "cta1 cta2"
  }
  /* About */
  .about {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .top {
    grid-template-areas:
      "hero"
      "cta1"
      "cta2"
  }
}
`

export default function LayoutAgentProfileGrid() {
  return (
    <AgentProfileLayout>
      <div className="wrapper">
      <div className="top">
        <header className="hero">
          <h1>Terry's Taco Joint</h1>
          <p>Pretty Good Tacos!</p>
        </header>
        <div className="cta">
          
        </div>
        <nav className="menu">
          <button aria-expanded="false" aria-controls="menu-list">
            <span className="open">☰</span>
            <span className="close">×</span>
            Menu
          </button>
          <ul id="menu-list">
            <li>
              <a href="">Tacos</a>
            </li>
            <li>
              <a href="">Beers</a>
            </li>
            <li>
              <a href="">Wines</a>
            </li>
            <li>
              <a href="">Desserts</a>
            </li>
            <li>
              <a href="">Reservations</a>
            </li>
          </ul>
        </nav>
        <section className="features">
          <div className="feature">
            <span className="icon">🌮</span>
            <h3>Tacos</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
          </div>
          <div className="feature">
            <span className="icon">🍺</span>
            <h3>Beer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
          </div>
          <div className="feature">
            <span className="icon">🍷</span>
            <h3>Wine</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
          </div>
          <div className="feature">
            <span className="icon">🎵</span>
            <h3>Music</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
          </div>
        </section>
        <section className="about">
          <img src="images/queso-taco.png" alt="Yummy Taco" className="about__mockup"/>
          <div className="about__details">
            <h2>Featured Taco</h2>
            <p>Slim Profile, easy to hold and loaded with cheese.</p>
            <p>This is the one you have been waiting for</p>
            <button>Learn More →</button>
          </div>
        </section>
        <section className="gallery">
          <h2>Instant Grams</h2>
          <img src="https://source.unsplash.com/random/201x201" alt=""/>
          <img src="https://source.unsplash.com/random/202x202" alt=""/>
          <img src="https://source.unsplash.com/random/203x203" alt=""/>
          <img src="https://source.unsplash.com/random/204x204" alt=""/>
          <img src="https://source.unsplash.com/random/205x205" alt=""/>
          <img src="https://source.unsplash.com/random/206x206" alt=""/>
          <img src="https://source.unsplash.com/random/207x207" alt=""/>
          <img src="https://source.unsplash.com/random/207x208" alt=""/>
          <img src="https://source.unsplash.com/random/207x209" alt=""/>
          <img src="https://source.unsplash.com/random/207x210" alt=""/>
        </section>
      </div>
    </div>
    </AgentProfileLayout>
  ); 
}