import React from 'react';
import { storiesOf } from '@storybook/react';

import LargeAgentCard from './LargeAgentCard';
import AgentMapCard from './AgentMapCard';
import SmallAgentCard from './SmallAgentCard';
import SmallHorizontalAgentCard from './SmallHorizontalAgentCard';

storiesOf('Agent Cards', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Large Agent Card', () => <LargeAgentCard />)
  .add('Agent Map Card', () => <AgentMapCard />)
  .add('Small Agent Card', () => <SmallAgentCard />)
  .add('Small Horizontal Agent Card', () => <SmallHorizontalAgentCard />)
