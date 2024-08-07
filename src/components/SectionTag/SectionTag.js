import styled, {css, keyframes} from "styled-components";

const fadeInTag = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 0.4;
    }
`;

const SectionTag = styled.div`
    position: absolute;
    left: -200px;
    color: black;    
    width: 450px;
    top: 45%;
    transform: rotate(270deg);
    font-family: ${({theme}) => theme.fontSecondary.family};
    font-size:  ${({theme}) => theme.fontSecondary.size.sm};
    margin: 0;
    user-select: none;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    text-align: center;
    opacity: 0;
    
    ${({animate}) => animate && css`
        animation: ${fadeInTag} 2s ease forwards;
    `}
     
    &:before,
    &:after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #8F0406;
    }

    &:not(:empty)::before {
        margin-right: .25em;
    }

    &:not(:empty)::after {
        margin-left: .25em;
    }
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        display: none;
    }
    
`;

export default SectionTag;
