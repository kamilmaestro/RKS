import React from "react";
import {
    LogoContainer,
    LogoImgContainer,
    LogoSubtitle,
    LogoTitle,
    LogoTitleStyled,
    StyledLogo,
} from "./Logo.styles";
import ColoredText from "../ColoredText/ColoredText";

const Logo = ({href, title, className}) => {
    return (
        <LogoContainer href={href} as={href ? 'a' : 'div'} title={title} className={className}>
            <LogoImgContainer>
                <div style={{ width: '50px', height: '50px' }}>
                    <img src={'rksRem.png'} alt="Logo" style={{ width: '100%', height: '100%' }} />
                </div>
                <LogoTitle>{'RKS'}<LogoTitleStyled>{'Radgoszcz'}</LogoTitleStyled></LogoTitle>
            </LogoImgContainer>
        </LogoContainer>
    )
};

export default Logo;
