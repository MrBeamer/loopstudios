import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 123px;
`;

export const Logo = styled.img``;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  margin-right: 32px;
  list-style-type: none;

  &:last-child {
    margin-right: 0;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
`;
