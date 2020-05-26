import styled from 'styled-components';
import Nav from './Nav';
import Title from './Title';
import { breakpoints } from '../../theme'

const Header = styled.header`
  display: none;
  @media ${breakpoints.lg} {
    width: 100vw;
    margin-bottom: 1.45rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
`;

Header.Nav = Nav;
Header.Title = Title;

export default Header;
