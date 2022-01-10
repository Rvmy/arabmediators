import styled from "styled-components";
import { ContainerStyle } from "../../styles/globalStyle";

export const Nav = styled.nav`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: ${({ scrollNav }) =>
    scrollNav ? "rgba(0, 0, 0, 0.9);" : "transpatent"};
  transition: 0.3s all ease;
  z-index: 10;
`;

export const NavContainer = styled(ContainerStyle)`
  display: flex;
  justify-content: space-between;
  color: #7a6670;
  text-decoration: none;
  user-select: none;
  ${ContainerStyle}
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavLogo = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavMenu = styled.ul`
  justify-content: flex-end;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 960px) {
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 100px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.3s ease;
    justify-content: normal;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  margin: 5px;

  @media screen and (max-width: 960px) {
    width: 80%;
  }
`;

export const NavLinks = styled.a`
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 14px 16px;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  transition: all 0.1s ease-in-out;
  color: #7a6670;
  &:hover {
    color: #fff;
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;
  }
`;
