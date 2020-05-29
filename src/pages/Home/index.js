import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function Home() {
  const [user, setUser] = useState('');
  const [ error, setError ] = useState(false);
  const history = useHistory();

  async function findRepositories(user) {
    try {
      const repos = await axios.get(`https://api.github.com/users/${user}/repos`);
      const repositories = repos.data.map(repository => repository.name);
      localStorage.setItem('repositorios', JSON.stringify(repositories));
      setError(false);
      history.push('/repositorios');
    }
    catch (err) {
      setError(true);
    }
  }

  return (
    <>
      <S.Container>
        <S.Input value={user} className="usuarioInput" placeholder="Usuário" onChange={e => setUser(e.target.value)} onKeyDown={e => e.keyCode === 13 ? findRepositories(user) : false} />
        <S.Button onClick={e => findRepositories(user)} >Buscar</S.Button>
      </S.Container>
      { error? <S.ErrorMessage>Ocorreu um erro!</S.ErrorMessage>: ''}
    </>
  );
}

export default Home;
