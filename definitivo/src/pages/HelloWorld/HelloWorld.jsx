import React, { useEffect, useState } from 'react';

function HelloWorld() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/hello-world')
      .then(res => res.json())
      .then(data => setMensagem(data.message))
      .catch(err => console.error('Erro:', err));
  }, []);

  return (
    <div>
      <h1>Mensagem do backend:</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default HelloWorld;
