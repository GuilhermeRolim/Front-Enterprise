import express from 'express';

const app = express();
const port = 3001;

app.get('/hello-world', (req, res) => {
  res.send('Hello-World');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});