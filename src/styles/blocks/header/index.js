import styled from "styled-components"
import Nav from "./Nav"
import Title from "./Title"
import Logo from "./Logo"
import { breakpoints } from "../../theme"

const Header = styled.header`
  display: none;
  @media ${breakpoints.lg} {
    width: 100vw;
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

Header.Nav = Nav
Header.Title = Title
Header.Logo = Logo

export default Header
