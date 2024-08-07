import styled, {css, keyframes} from 'styled-components';

const fadeInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-15px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const AboutSection = styled.div`
   background-color: white;
   min-height: 570px;   
   width: 100%;
   text-align: center; 
   position: relative;
   padding-bottom: 25px;
`;

export const AboutTitle = styled.p`
    color: black;
    margin: 0;
    padding: 55px 0 30px 0;
    font-family: ${({theme}) => theme.fontSecondary.family};
    font-size: ${({theme}) => theme.fontSecondary.size.title};
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        font-size: ${({theme}) => theme.fontSecondary.size.titleSmall};
    }
`;

export const AboutInfo = styled.p`
    color: black;
    font-family: ${({theme}) => theme.fontSecondary.family};
    margin: 0;
    font-size: ${({theme}) => theme.fontSecondary.size.xl};
    opacity: 0;
    animation-delay: 0.5s;
    margin-left: 25px;
    margin-right: 25px;
       
    ${({animate}) => animate && css`
        animation: ${fadeInRight} 2s ease forwards;
    `}
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        font-size: ${({theme}) => theme.fontSecondary.size.lg};
    } 
`;

export const FaqContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;    
    margin-bottom: 0px;
    flex-wrap: wrap;
`;
