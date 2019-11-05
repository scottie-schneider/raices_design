// .storybook/config.js

// import { configure } from '@storybook/react';
// const req = require.context('../src', true, /\.stories.js$/);

// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);

import { configure } from '@storybook/react';

configure(require.context('../src/components', true, /\.stories\.js$/), module);