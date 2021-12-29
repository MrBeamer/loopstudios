import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #000000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: auto;
  color: #ffff;
  padding: 2.75rem 10.313rem 2.063rem 10.313rem;

  @media only screen and (max-width: 1150px) {
    padding: 3.5rem 3.25rem 3.5rem 3.25rem;
  }

  @media only screen and (max-width: 830px) {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 24px;
  }
`;

export const Copyright = styled.p`
  justify-self: end;
  grid-column: 2;
  grid-row: 2;
  font-weight: normal;
  font-size: 0.938rem;
  line-height: 1.563rem;
  color: #fff;
  opacity: 0.5;

  @media only screen and (max-width: 830px) {
    grid-column: 1;
    grid-row: 4;
    justify-self: center;
  }
`;

export const Socials = styled.ul`
  justify-self: end;
  grid-column: 2;
  grid-row: 1;
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  color: #fff;

  @media only screen and (max-width: 830px) {
    grid-column: 1;
    grid-row: 3;
    justify-self: center;
  }
`;

export const SocialItem = styled.li`
  cursor: pointer;
  list-style: none;

  &:hover::after {
    content: "";
    height: 2px;
    background: #fff;
    display: block;
    margin-top: 3px;
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;

  @media only screen and (max-width: 830px) {
    flex-direction: column;
    grid-row: 2/2;
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

export const Logo = styled.img`
  margin-bottom: 20px;
  width: 144px;

  @media only screen and (max-width: 830px) {
    margin-bottom: 0;
  }
`;
