import styled from 'styled-components';
import React from 'react';

const Backdrop = props => {

    return (
      props.isOpen ? <StyledBackdrop onClick={props.clickHandler} /> : null
    )
};

export default Backdrop;

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.15);
  z-index: 7;

`;

