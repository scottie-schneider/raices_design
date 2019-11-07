import React from 'react';
import { storiesOf } from '@storybook/react';

import LargeLeadCard from './LargeLeadCard';
import SmallLeadCard from './SmallLeadCard';
import SmallHorizontalAgentCard from './SmallHorizontalAgentCard';

storiesOf('Lead Cards', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Large Lead Card', () => <LargeLeadCard />)
  .add('Small Lead Card', () => <SmallLeadCard />)
  .add('Small Horizontal Lead Card', () => <SmallHorizontalAgentCard />)
