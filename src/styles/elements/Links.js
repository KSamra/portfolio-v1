import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

// Any reusable styled Links will go here.

export const SLink = styled(Link)`
  color: ${props => props.color};
  transition: color 1s ease;
  &:hover {
    color: pink; 
  }
`;

export const ListLink = ({to, children}) => (
  <li style={{display: 'inline-block', marginRight: '1rem'}}>
    <SLink to={to}>{children}</SLink>
  </li>
)