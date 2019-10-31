import React from 'react';
import { storiesOf } from '@storybook/react';

import LargeHomeCard from './LargeHomeCard';
import HomeMapCard from './HomeMapCard';
import SmallHomeCard from './SmallHomeCard';
import SmallHorizontalHomeCard from './SmallHorizontalHomeCard';

storiesOf('Home Cards', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Large Home Card', () => <LargeHomeCard />)
  .add('Home  Map Card', () => <HomeMapCard />)
  .add('Small Home Card', () => <SmallHomeCard />)
  .add('Small Horizontal Home Card', () => <SmallHorizontalHomeCard />)
