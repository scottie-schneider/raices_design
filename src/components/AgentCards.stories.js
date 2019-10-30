import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatBubbles from './ChatBubbles';
import LargeAgentCard from './LargeAgentCard';

storiesOf('Agent Cards', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Large Agent Card', () => <LargeAgentCard />)
  .add('Agent Map Card', () => <ChatBubbles />)
  .add('Small Agent Card', () => <ChatBubbles />)
  .add('Small Horizontal Agent Card', () => <ChatBubbles />)
