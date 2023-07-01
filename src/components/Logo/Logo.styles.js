import styled from 'styled-components';

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 50px;
    align-items: center;
    justify-content: center;
    width: 120px;
    user-select: none;
`;

export const LogoImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
`;

export const StyledLogo = styled.div`
    width: 10px;
    height: 10px;
    background-color: #8C030A;
    margin-right: 15px;
    transform: rotate(45deg);
    box-shadow: 1px 5px #8F040690, 5px 1px #8F040690;
    margin-top: 3px;
    background-image: url('rks.png');
`;

export const LogoTitle = styled.p`
    color: white;
    font-family: Zen;
    font-weight: 100;
    font-size: 23px;
    text-shadow: 2px 1px #111;
`;

export const LogoTitleStyled = styled.span`
    font-weight: 700;
    color: #8F0406;
    text-shadow: 1px 2px #8F040690;
`;

export const LogoSubtitle = styled.p`
    color: white;
    font-family: Caveat;
    font-size: 14px;
    margin: 0;
    margin-left: 15px;
`;
