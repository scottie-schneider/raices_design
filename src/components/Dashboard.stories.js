import React from 'react';
import { storiesOf } from '@storybook/react';

import GridDashboard from './GridDashboard';

storiesOf('Dashboard Layouts', module)
  .addDecorator(story => <div>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Dashboard 1', () => <GridDashboard />)