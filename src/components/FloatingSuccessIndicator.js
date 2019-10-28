import React from 'react';
import styled from 'styled-components'

import CheckIcon from './icons/CheckIcon'

const FloatingSuccessIndicatorStyle = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: #6EB43F;
  color: #fff;
  border: none !important;
  box-shadow: 0px 2px 4px 0px #000 !important;
  outline: none;
  :active {
    background-color: #3D7D13 !important;
    box-shadow: 0px 0px 4px 0px #000 !important;    
  }
  :hover {
    background-color: #4A8C1E;
  }
  :focus {
    box-shadow: 0px 2px 4px 0px #000 !important;
    outline: none;
  }
`

export default function FloatingSuccessIndicator() {
  return (
    <FloatingSuccessIndicatorStyle>
      <CheckIcon fill={"#fff"}/>
    </FloatingSuccessIndicatorStyle>
  );
}
