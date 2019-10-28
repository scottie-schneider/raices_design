import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from './Image';

storiesOf('Images', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('200x250', () => <Image 
    src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg"}
    round={true}
    height={"250px"}
    width={"200px"}
    shadow
  />)
  .add('88x88', () => <Image 
    src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg"}
    round={true}
    height={"88px"}
    width={"88px"}
    shadow={true}
  />)
  .add('150x150 (agent profile)', () => <Image 
    src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg"}
    round={false}
    height={"150px"}
    width={"150px"}
    shadow={true}
    agent
  />)
  .add('330x140', () => <Image 
    src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg"}
    height={"140px"}
    width={"330px"}
    shadow={false}
    round={false}
  />)
  .add('62x62 (small agent profile)', () => <Image 
    src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg"}
    height={"62px"}
    width={"62px"}    
    profile
  />)