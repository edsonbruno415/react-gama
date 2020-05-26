import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import * as S from './styled';

async function findRepositories(user) {
  const repos = await axios.get('https://api.github.com/users/edsonbruno415/repos');
  localStorage.setItem('repositorios', JSON.stringify(repos.data));
}

function Home() {
  const [user, setUser] = useState('');
  return (
    <S.Container>
      <S.Input value={user} className="usuarioInput" placeholder="Usuário" onChange={e => setUser(e.target.value)} />
      <S.Button onClick={e => findRepositories('user')}>Buscar</S.Button>
    </S.Container>
  );
}

export default Home;
