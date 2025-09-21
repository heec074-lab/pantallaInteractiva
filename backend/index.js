const express = require('express');
const cors = require('cors');
const pool = require('./db'); 

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

app.get('/asignaturas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM asignatura');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la DB');
  }
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
