import React from 'react';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Repositories() {
    const [ repositories, setRepositories ] = useState([]);
    const history = useHistory();
    useEffect(function(){
        const repos = localStorage.getItem('repositorios');
        if(repos !== null){
            setRepositories(JSON.parse(repos));
            localStorage.clear();
        }else{
            history.push('/');
        }
    },[]);

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