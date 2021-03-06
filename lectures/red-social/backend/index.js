const express = require('express'); // Middleware express
require('dotenv').config(); // Acceder variables .env
const debug = require('debug')('server');
const cors = require('cors');
const chalk = require('chalk');
const morgan = require('morgan'); // Middleware morgan para ver en consola las peticiones

require('./src/configs/ddbbConfig'); // Configuración de ddbb (mongoose)

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json()); // Si viene petición con datos .json los añade en el body

const usersRouter = require('./src/routers/userRouter');

server.use('/api/users', usersRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`),
);
