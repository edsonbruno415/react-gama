import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-itens: center;
`;
export const Input = styled.input`
    border: 1px solid #ddd;
    height: 2rem;
    padding: 0 0.5rem;
    border-radius: .25rem 0 0 .25rem;
    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    border: 1px solid #ddd;
    background: #000;
    color: #fff;
    border-radius: 0 0.25rem 0.25rem 0;
    outline: none;
    box-shadow: none;
    font-weight: bold;
    &:active{
        background: rgba(0,0,0,0.9);
    }
    &:hover{
        cursor: pointer;
    }
`;
