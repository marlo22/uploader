require('dotenv').config();

const express = require('express');
const helmet = require('helmet');

const app = express();

const indexRouter = require('./controllers/index');

const { PORT } = process.env;

app.locals.env = {
  FILE_MAX_SIZE: process.env.FILE_MAX_SIZE,
  FILE_ALLOWED_FORMATS: process.env.FILE_ALLOWED_FORMATS
};

app.use(helmet());
app.set('view engine', 'pug');
app.use(indexRouter);

app.use('/bootstrap', express.static(`${__dirname}/node_modules/bootstrap/dist`));
app.use('/js', express.static(`${__dirname}/public/js`));
app.use('/css', express.static(`${__dirname}/public/css`));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Uploader is running on http://localhost:${PORT}.`);
});