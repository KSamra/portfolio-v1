import styled from 'styled-components';
import {SLink} from '../../elements/Links';
import React from 'react';


const Text = styled.h1`
  margin: 0;
`;


const Title = ({siteTitle}) => (
  <SLink to="/">
    <Text>
      {siteTitle}
    </Text>
  </SLink>
)

export default Title;



