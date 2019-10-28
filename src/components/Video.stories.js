import React from 'react';
import { storiesOf } from '@storybook/react';

import Video from './Video';

storiesOf('Video', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  // .addDecorator(withKnobs)
  .add('Youtube Embed (iframe)', () => <Video />)
