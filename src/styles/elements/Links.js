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
  display: inline-block;

  background: transparent;
  border: 1px solid rgba(116, 70, 241, 1);
  padding: 2rem;
  color: rgba(116, 70, 241, 1);
  cursor: pointer;
  border-radius: 10px;

  :hover {
    background: rgba(116, 70, 241, .24)
  }

`;

