import { connect, styled } from "frontity";
import Link from "./link";
import {useState} from 'react'

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Nav = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const data = state.source.get(state.router.link);
      const isCurrentPage = data.route.replaceAll('/', '') === link.replaceAll('/', '');

      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link 
            link={link} 
            className={isCurrentPage ? "current-page" : null} 
            aria-current={isCurrentPage ? "page" : null}>
            {name}
          </Link>
        </NavItem>
      );
    })}
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 8px 16px;
  color: rgba(255, 255, 255, 1);
  font-size: 1.25rem;
  box-sizing: border-box;
  flex-shrink: 0;

  .current-page {
    color: black;
  }
`;
