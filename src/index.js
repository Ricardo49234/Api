const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// Puerto (Render usa process.env.PORT)
const PORT = process.env.PORT || 3000;

app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

/* ============================
   RUTA PRINCIPAL
============================ */

app.get('/', (req, res) => {
  res.json({
    Title: "API Operaciones y Figuras Geométricas"
  });
});

/* ============================
   OPERACIONES BÁSICAS
============================ */

app.post('/sumar', (req, res) => {
  const { num1, num2 } = req.body;

  if (num1 == null || num2 == null) {
    return res.status(400).json({ error: 'Faltan números' });
  }

  res.json({ resultado: Number(num1) + Number(num2) });
});

app.post('/restar', (req, res) => {
  const { num1, num2 } = req.body;

  if (num1 == null || num2 == null) {
    return res.status(400).json({ error: 'Faltan números' });
  }

  res.json({ resultado: Number(num1) - Number(num2) });
});

app.post('/multiplicar', (req, res) => {
  const { num1, num2 } = req.body;

  if (num1 == null || num2 == null) {
    return res.status(400).json({ error: 'Faltan números' });
  }

  res.json({ resultado: Number(num1) * Number(num2) });
});

app.post('/dividir', (req, res) => {
  const { num1, num2 } = req.body;

  if (num1 == null || num2 == null) {
    return res.status(400).json({ error: 'Faltan números' });
  }

  if (Number(num2) === 0) {
    return res.status(400).json({ error: 'No se puede dividir entre 0' });
  }

  res.json({ resultado: Number(num1) / Number(num2) });
});

/* ============================
   CUADRADO
============================ */

app.post('/cuadrado/area', (req, res) => {
  const { lado } = req.body;

  if (lado == null) {
    return res.status(400).json({ error: "Falta el lado" });
  }

  const area = Number(lado) * Number(lado);

  res.json({ figura: "Cuadrado", area });
});

app.post('/cuadrado/perimetro', (req, res) => {
  const { lado } = req.body;

  if (lado == null) {
    return res.status(400).json({ error: "Falta el lado" });
  }

  const perimetro = 4 * Number(lado);

  res.json({ figura: "Cuadrado", perimetro });
});

/* ============================
   TRIÁNGULO
============================ */

app.post('/triangulo/area', (req, res) => {
  const { base, altura } = req.body;

  if (base == null || altura == null) {
    return res.status(400).json({ error: "Faltan base o altura" });
  }

  const area = (Number(base) * Number(altura)) / 2;

  res.json({ figura: "Triángulo", area });
});

app.post('/triangulo/perimetro', (req, res) => {
  const { lado1, lado2, lado3 } = req.body;

  if (lado1 == null || lado2 == null || lado3 == null) {
    return res.status(400).json({ error: "Faltan lados" });
  }

  const perimetro =
    Number(lado1) +
    Number(lado2) +
    Number(lado3);

  res.json({ figura: "Triángulo", perimetro });
});

/* ============================
   CÍRCULO
============================ */

app.post('/circulo/area', (req, res) => {
  const { radio } = req.body;

  if (radio == null) {
    return res.status(400).json({ error: "Falta el radio" });
  }

  const area = Math.PI * Math.pow(Number(radio), 2);

  res.json({ figura: "Círculo", area });
});

app.post('/circulo/perimetro', (req, res) => {
  const { radio } = req.body;

  if (radio == null) {
    return res.status(400).json({ error: "Falta el radio" });
  }

  const perimetro = 2 * Math.PI * Number(radio);

  res.json({ figura: "Círculo", perimetro });
});

/* ============================
   INICIAR SERVIDOR
============================ */

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


