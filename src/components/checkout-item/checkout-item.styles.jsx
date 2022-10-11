import styled, { css } from 'styled-components';

const attribute = css`
    width: 23%;
`;

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const Image = styled.img`
    width: 23%;
    padding-right: 15px;
`;

export const Name = styled.div`
    ${attribute}
`;

export const Price = styled.div`
    ${attribute}
`;

export const Quantity = styled.div`
    display: flex;
    ${attribute}
`;

export const QuantityArrow = styled.span`
    cursor: pointer;
`;

export const QuantityValue = styled.span`
    margin: 0 10px;
`;

export const RemoveItem = styled.div`
    width: 8%;
    text-align: center;
    cursor: pointer;
`;
