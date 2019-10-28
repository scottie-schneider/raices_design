import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import PrimaryButton from './PrimaryButton';
import SmallButton from './SmallButton';
import FloatingAddButtonLarge from './FloatingAddButtonLarge';
import FloatingAddButtonSmallGrey from './FloatingAddButtonSmallGrey';
import FloatingSuccessIndicator from './FloatingSuccessIndicator';
import SendMessageButton from './SendMessageButton';

storiesOf('Buttons', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Primary', () => <PrimaryButton />)
  .add('Small', () => <SmallButton />)
  .add('Floating Add Button, Large', () => <FloatingAddButtonLarge />)
  .add('Floating Add Button, Small, Grey', () => <FloatingAddButtonSmallGrey />)
  .add('Floating Success Indicator', () => <FloatingSuccessIndicator />)
  .add('Send Message Button', () => <SendMessageButton />)