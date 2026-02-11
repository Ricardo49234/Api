const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// Configuración del puerto
const PORT = process.env.PORT || 3000; // Render asigna process.env.PORT
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Rutas
app.get('/', (req, res) => {
  res.json({
    "Title": "Hola mundo, esta es mi primer API"
  });
});

// SUMAR
app.post('/sumar', (req, res) => {
  const { num1, num2 } = req.body;
  if (num1 == null || num2 == null) {
    return res.status(400).send({ error: 'Faltan numeros' });
  }
  res.send({ resultado: Number(num1) + Number(num2) });
});

// RESTAR
app.post('/restar', (req, res) => {
  const { num1, num2 } = req.body;
  if (num1 == null || num2 == null) {
    return res.status(400).send({ error: 'Faltan numeros' });
  }
  res.send({ resultado: Number(num1) - Number(num2) });
});

// MULTIPLICACION
app.post('/multiplicacion', (req, res) => {
  const { num1, num2 } = req.body;
  if (num1 == null || num2 == null) {
    return res.status(400).send({ error: 'Faltan numeros' });
  }
  res.send({ resultado: Number(num1) * Number(num2) });
});

// DIVISION
app.post('/dividir', (req, res) => {
  const { num1, num2 } = req.body;
  if (num1 == null || num2 == null) {
    return res.status(400).send({ error: 'Faltan numeros' });
  }
  if (Number(num2) === 0) {
    return res.status(400).send({ error: 'No se puede dividir entre 0' });
  }
  res.send({ resultado: Number(num1) / Number(num2) });
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


