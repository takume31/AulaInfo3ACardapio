import pkg from 'pg';
import express from 'express';
import cors from 'cors';

const { Client } = pkg;
const app = express();
const PORT = 5174; 

app.use(cors()); // Permite requisições de outras origens, útil para desenvolvimento local

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'BANCO DE DADOS',
  password: 'takume31',
  port: 5432,
});

// Conectar ao banco de dados
async function connectDB() {
  try {
    await client.connect();
    console.log('Conexão com o PostgreSQL estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao PostgreSQL:', error);
  }
}

// Rota para buscar alunos
app.get('/api/alunos', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM ALUNO');
    res.json(result.rows); // Retorna os dados em formato JSON
    console.log('Alunos buscados com sucesso!');
  } catch (err) {
    console.error('Erro ao buscar dados:', err);
    res.status(500).send('Erro ao buscar dados');
  }
});

// Iniciar o servidor
app.listen(PORT, async () => {
  await connectDB(); // Conectar ao banco de dados
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
