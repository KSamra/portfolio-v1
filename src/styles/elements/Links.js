import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';
import {colors, breakpoints} from '../theme';
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

//If internal, use Gatsby Link. If not internal, use a normal achor
export const ButtonLink = ({to, internal, label}) => {

  if (internal) {
    return (
      <Button>
        <Link to={to}>
          {label}
        </Link>
      </Button>
    )
  } 

  return (
    <Button>
      <a href={to} rel="noreferrer noopener nofollow">
        {label}
      </a>
    </Button>
  )

};

const Button = styled.div`

  background: transparent;
  border: 1px solid ${colors.button_primary};
  padding: 1rem;
  color: ${colors.button_primary};
  cursor: pointer;
  border-radius: 10px;
  margin-top: 3rem;

  :hover {
    background: ${colors.button_light};
  }

  @media ${breakpoints.md} {
    padding: 2rem;
  }

`;

