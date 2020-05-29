import React from 'react';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Repositories() {
    const [ repositories, setRepositories ] = useState([]);
    useEffect(()=>{
        const repos = localStorage.getItem('repositorios');
        setRepositories(JSON.parse(repos));
        localStorage.clear();
    }, []);

    return (
        <S.Container>
        <S.Title>Repositorios</S.Title>
        <S.List>
            { repositories.map((repository) => {
                return (
                    <S.ListItem>
                        { repository }
                    </S.ListItem>
                );
            }) }
        </S.List>
        <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    );
}

export default Repositories;