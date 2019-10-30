import React from 'react';
import { storiesOf } from '@storybook/react';

import BottomMenuUser from './BottomMenuUser';
import BottomMenuAgent from './BottomMenuAgent';

storiesOf('Bottom Menus', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('User Menu', () => <BottomMenuUser />)
  .add('Agent Menu', () => <BottomMenuAgent />)