import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="sobre">Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="descubra">Descubra</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="serviços">Serviços</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="inscricao">Inscrever-me</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/entrar">Entrar</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
