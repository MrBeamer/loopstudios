import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #000000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 160px;
  color: #ffff;
  padding: 2.75rem 10.313rem 2.063rem 10.313rem;

  @media only screen and (max-width: 948px) {
    grid-template-columns: 1fr;
    justify-items: center;
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

  @media only screen and (max-width: 948px) {
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

  @media only screen and (max-width: 948px) {
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
