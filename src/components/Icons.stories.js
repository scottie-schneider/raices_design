import React from 'react';
import { storiesOf } from '@storybook/react';

import Icons from './Icons';

storiesOf('Icons', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Icons', () => <Icons />)