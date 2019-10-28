import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';

storiesOf('Inputs', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Text Inputs', () => <TextInput />)
  .add('Text Area Inputs', () => <TextAreaInput />)