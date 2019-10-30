import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import LargeRatingsComponent from './LargeRatingsComponent';

storiesOf('Ratings Components', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Large Ratings Component', () => <LargeRatingsComponent />)