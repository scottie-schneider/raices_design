import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatBubbles from './ChatBubbles';
import AgentListChatInterface from './AgentListChatInterface';
import HouseChatInterface from './HouseChatInterface'

storiesOf('Chat', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Chat Bubbles', () => <ChatBubbles />)
  .add('Agent List Chat Interface', () => <AgentListChatInterface />)
  .add('House Chat Interface', () => <HouseChatInterface />)
