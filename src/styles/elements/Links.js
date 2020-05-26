import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

// Any reusable styled Links will go here.

export const SLink = styled(Link)`
  color: ${props => props.color};
  transition: color 300ms ease;
  &:hover {
    color: pink; 
  }
`;

export const ListLink = ({to, children, color}) => (
  <li style={{display: 'inline-block', marginRight: '1.5rem', fontSize: 'inherit'}}>
    <SLink to={to} color={color}>{children}</SLink>
  </li>
)