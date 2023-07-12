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
                <StyledNavLink to={'/blog'} title={'Blog'}>{'Blog'}</StyledNavLink>
                <StyledNavLink to={'/competitions'} title={'Rozgrywki'}>{'Rozgrywki'}</StyledNavLink>
                <StyledNavLink to={'/squad'} title={'Kadra'}>{'Kadra'}</StyledNavLink>
                <StyledNavLink to={'/contact'} title={'Kontakt'}>{'Kontakt'}</StyledNavLink>
            </StyledNavLinkContainer>
            <HamburgerMenu/>
        </StyledNav>
    )
};

export default Navbar;
