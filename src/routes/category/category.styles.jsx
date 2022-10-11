import styled from 'styled-components';

export const CategoryTitleContainer = styled.div`
    font-size: 28px;
    margin-bottom: 25px;
`;

export const CategoriesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`;
