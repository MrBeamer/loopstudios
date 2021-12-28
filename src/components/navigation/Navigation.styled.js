import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7.688rem;
`;

export const Logo = styled.img`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.direction};
  height: 22px;
  gap: 2rem;

  @media only screen and (max-width: 710px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  list-style-type: none;
  cursor: pointer;

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
