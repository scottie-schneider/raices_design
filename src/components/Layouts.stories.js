import React from 'react';
import { storiesOf } from '@storybook/react';

import LayoutMap from './LayoutMap';
import LayoutAgentListDashboard from './LayoutAgentListDashboard';
import AgentListChatInterface from './AgentListChatInterface';
import HouseChatInterface from './HouseChatInterface'

storiesOf('Layouts', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Map', () => <LayoutMap />)
  .add('Agent List Dash', () => <LayoutAgentListDashboard />)
  .add('House Chat Interface', () => <HouseChatInterface />)
