import React from 'react';
// import { Button } from '@storybook/react/demo';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid red;
`

export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);   
