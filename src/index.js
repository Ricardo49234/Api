const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// configuracion puerto 3000
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // 👈 FALTABA ESTO
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    "Title": "Hola mundo esta es mi primer api"
  });
});

app.post('/sumar', (req, res) => {
  const { num1, num2 } = req.body;

  if (!num1 || !num2) {
    return res.status(400).send({ error: 'Faltan Numeros' });
  }

  const resultado = Number(num1) + Number(num2);

  res.send({ resultado });
}); // 👈 aquí se cierra correctamente

console.log("aqui si corre el codigo");

app.listen(app.get('port'), () => {
  console.log("Servidor en el puerto 3000");
});
