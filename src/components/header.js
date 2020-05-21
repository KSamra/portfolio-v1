import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  margin-bottom: 1.45rem;
`;

const TitleWrapper = styled.div`
  margin: 0 auto;
  width: 100vh;
  padding: 1.45rem 1.0875rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const SLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rgb(10, 25, 47)`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div 
  //     style={{
  //       margin: `0 auto`,
  //       width: '100vw',
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
  <HeaderWrapper>
    <TitleWrapper>
      <Title>
        <SLink to='/'>
          {siteTitle}
        </SLink>
      </Title>
    </TitleWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
