import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatBubbles from './ChatBubbles';

storiesOf('Chat', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Chat Bubbles', () => <ChatBubbles />)
