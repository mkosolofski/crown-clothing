import styled from 'styled-components';
import {default as CheckoutItemComponent} from '../checkout-item/checkout-item.component';

export const CheckoutContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    margin: 50px auto 0;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    border-bottom: 1px solid darkgrey;
`;

export const Header = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;
