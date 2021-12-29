import React from "react";
import {
  StyledFooter,
  Copyright,
  Socials,
  SocialItem,
  SocialLink,
  MenuItem,
  MenuLink,
  Menu,
  Logo,
} from "./Footer.styled.js";

import logo from "../../assets/images/shared/logo.svg";

export default function Footer() {
  return (
    <StyledFooter>
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
      <Socials>
        <SocialItem>
          <SocialLink>
            <i className="fab fa-facebook-square"></i>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <i className="fab fa-twitter-square"></i>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <i className="fab fa-pinterest-square"></i>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <i className="fab fa-instagram-square"></i>
          </SocialLink>
        </SocialItem>
      </Socials>
      <Copyright>© 2021 Loopstudios. All rights reserved.</Copyright>
    </StyledFooter>
  );
}
