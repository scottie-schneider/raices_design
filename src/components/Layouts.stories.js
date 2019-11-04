import React from 'react';
import { storiesOf } from '@storybook/react';

import LayoutMapHouse from './LayoutMapHouse';
import LayoutMapAgent from './LayoutMapAgent';
import LayoutAgentListDashboard from './LayoutAgentListDashboard';
import AgentListChatInterface from './AgentListChatInterface';
import HouseChatInterface from './HouseChatInterface'

storiesOf('Layouts', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Map (House search)', () => <LayoutMapHouse />)
  .add('Map (Agent search)', () => <LayoutMapAgent />)
  .add('Agent List Dash', () => <LayoutAgentListDashboard />)
  .add('Agent Map', () => <HouseChatInterface />)
