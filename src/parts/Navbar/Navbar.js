import React from "react";
import {
    NavLogo, StyledNav, StyledNavLink, StyledNavLinkContainer
} from "./Navbar.styles";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";

const Navbar = () => {
    return (
        <StyledNav>
            <NavLogo href={'/'} title={'Strona główna'}/>
            <StyledNavLinkContainer>
                <StyledNavLink to={'/'} title={'home'}>{'Start'}</StyledNavLink>
                <StyledNavLink to={'/todo-list'} title={'start'}>{'Rozgrywki'}</StyledNavLink>
                <StyledNavLink to={'/contact'} title={'contact'}>{'Kadra'}</StyledNavLink>
            </StyledNavLinkContainer>
            <HamburgerMenu/>
        </StyledNav>
    )
};

export default Navbar;
