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
  height: 22px;
`;

export const MenuItem = styled.li`
  margin-right: 32px;
  list-style-type: none;

  &:last-child {
    margin-right: 0;
  }

  &:hover::after {
    content: "";
    height: 2px;
    background: #fff;
    display: block;
    margin-top: 8px;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
`;
