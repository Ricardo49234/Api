const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// Configuración del puerto
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Para parsear JSON en el body
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
  if (!num1 || !num2) {
    return res.status(400).send({ error: 'Faltan numeros' });
  }
  const resultado = Number(num1) + Number(num2);
  res.send({ resultado });
});

// RESTAR
app.post('/restar', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    return res.status(400).send({ error: 'Faltan numeros' });
  }
  const resultado = Number(num1) - Number(num2);
  res.send({ resultado });
});

// MULTIPLICACION
app.post('/multiplicacion', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    return res.status(400).send({ error: 'Faltan numeros' });
  }
  const resultado = Number(num1) * Number(num2);
  res.send({ resultado });
});

// DIVISION
app.post('/dividir', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    return res.status(400).send({ error: 'Faltan numeros' });
  }
  if (Number(num2) === 0) {
    return res.status(400).send({ error: 'No se puede dividir entre 0' });
  }
  const resultado = Number(num1) / Number(num2);
  res.send({ resultado });
});

// Inicio del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor en el puerto ${app.get('port')}`);
});

