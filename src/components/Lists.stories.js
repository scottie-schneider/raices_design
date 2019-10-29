import React from 'react';
import { storiesOf } from '@storybook/react';

import AgentListSelect from './AgentListSelect';

storiesOf('Lists', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Agent List Select', () => <AgentListSelect />)
