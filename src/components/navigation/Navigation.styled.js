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

  @media only screen and (max-width: 904px) {
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

  @media only screen and (max-width: 904px) {
    &:hover::after {
      content: unset;
    }
    &:hover {
      color: #108fc5;
    }
  }
`;

export const MenuLink = styled.a``;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 24px;

  font-size: 24px;
  line-height: 25px;
  font-family: Josefin Sans;
  text-transform: uppercase;

  position: fixed;
  padding: 0 24px;
  top: 0;
  left: 0;
  background-color: #000;
  width: 100vw;
  height: 100vh;
  transition: all 0.4s linear;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.div`
  color: #fff;
  font-size: 28px;
  margin-top: 46px;
`;

export const BurgerMenu = styled.div`
  color: #fff;
  font-size: 28px;
  display: none;
  @media only screen and (max-width: 904px) {
    display: block;
  }
`;
