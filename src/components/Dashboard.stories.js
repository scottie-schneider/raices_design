import React from 'react';
import { storiesOf } from '@storybook/react';

import GridDashboard from './GridDashboard';

storiesOf('Grid Dashboard', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Dashboard 1', () => <GridDashboard />)