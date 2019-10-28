import React from 'react';
import { storiesOf } from '@storybook/react';

import LargeTab from './LargeTab';
import SmallTab from './SmallTab';

storiesOf('Tabs', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Large Tab', () => <LargeTab />)
  .add('Small Tab', () => <SmallTab />)
