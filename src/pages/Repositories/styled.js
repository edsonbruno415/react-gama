import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    max-width: 991px;
    margin: 0 auto;
`
export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`;

export const List = styled.ul`
    list-style: none;
    width: 100%;
    padding: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: 0.5rem 0;
    background: #000;
    width: 100%;
    color: #fff;
    padding: 0.5rem;
`;

export const LinkHome = styled(Link)`
    display: block;
    margin: 0.5rem 0;
    background: #000;
    color: #fff;
    padding: 0.5rem;
    text-decoration: none;
    text-align: center;
    width: 4rem;
    margin: 0 auto;

    &:hover{
        background: gray;
        cursor: pointer;
    }
`;