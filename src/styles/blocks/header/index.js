import styled from 'styled-components';
import Nav from './Nav';
import Title from './Title';



const Header = styled.header`
  width: 100vw;
  margin-bottom: 1.45rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`;

Header.Nav = Nav;
Header.Title = Title;

export default Header;
