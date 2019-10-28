import React from 'react';
import { storiesOf } from '@storybook/react';

import PrimaryColors from './PrimaryColors';
import SecondaryColors from './SecondaryColors';
import BasicColors from './BasicColors';

storiesOf('Colors', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Primary Colors', () => <PrimaryColors />)
  .add('Secondary Colors', () => <SecondaryColors />)
  .add('Basic Colors', () => <BasicColors />)
