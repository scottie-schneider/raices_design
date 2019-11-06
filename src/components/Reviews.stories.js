import React from 'react';
import { storiesOf } from '@storybook/react';

import ReviewHeader from './ReviewHeader';
import ReviewCard from './ReviewCard'

storiesOf('Review Elements', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Review Header', () => <ReviewHeader />)
  .add('Review Card', () => <ReviewCard />)
