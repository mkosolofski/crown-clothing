import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const Image = styled.img`
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
`;

export const ProductCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    &:hover { 
        opacity: 0.8;
        & {StyledButton} {
            opacity: 0.85;
            display: flex;
        }
    }
    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
    }

`;

export const FooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const FooterName = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const FooterPrice = styled.span`
    width: 10%;
`;
