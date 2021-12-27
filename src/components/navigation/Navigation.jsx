import React from "react";
import {
  StyledNavigation,
  MenuItem,
  Logo,
  Menu,
  MenuLink,
} from "./Navigation.styled";
import logo from "../../assets/images/shared/logo.svg";

export default function Navigation() {
  return (
    <StyledNavigation>
      <Logo src={logo} />
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
    </StyledNavigation>
  );
}
