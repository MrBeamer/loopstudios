import React, { useState } from "react";
import {
  StyledNavigation,
  MenuItem,
  Logo,
  Menu,
  MenuLink,
  MobileMenu,
  FlexContainer,
  CloseButton,
  BurgerMenu,
} from "./Navigation.styled";
import logo from "../../assets/images/shared/logo.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpenClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <StyledNavigation>
      {!isOpen ? (
        <>
          <Logo src={logo} alt="logo" />
          <Menu>
            <MenuItem>
              <MenuLink>About</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Careers</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Events</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Products</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>Support</MenuLink>
            </MenuItem>
          </Menu>
          <BurgerMenu>
            <i className="fas fa-bars" onClick={handleIsOpenClick}></i>
          </BurgerMenu>
        </>
      ) : (
        <MobileMenu>
          <FlexContainer>
            <Logo
              margin="40px 24px 159px 0"
              width="192px"
              src={logo}
              alt="logo"
            />
            <CloseButton>
              <i className="fas fa-times" onClick={handleIsOpenClick}></i>
            </CloseButton>
          </FlexContainer>
          <MenuItem>
            <MenuLink>About</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink>Careers</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink>Events</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink>Products</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink>Support</MenuLink>
          </MenuItem>
        </MobileMenu>
      )}
    </StyledNavigation>
  );
}
