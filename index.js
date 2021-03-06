require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const fileUpload = require('express-fileupload');

const app = express();

const indexRouter = require('./controllers/index');
const uploadRouter = require('./controllers/upload');
const downloadRouter = require('./controllers/download');
const removeRouter = require('./controllers/remove');
const policyRouter = require('./controllers/policy');
const searchRouter = require('./controllers/search');

const { PORT } = process.env;

app.locals.env = {
  FILE_MAX_SIZE: process.env.FILE_MAX_SIZE,
  FILE_ALLOWED_FORMATS: process.env.FILE_ALLOWED_FORMATS
};

const translations = require(`./translations/${process.env.LANGUAGE}`);
app.locals.translations = translations.client;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(fileUpload());
app.set('view engine', 'pug');

app.use(indexRouter);
app.use(uploadRouter);
app.use(downloadRouter);
app.use(removeRouter);
app.use(policyRouter);
app.use(searchRouter);

app.use('/bootstrap', express.static(`${__dirname}/node_modules/bootstrap/dist`));
app.use('/js', express.static(`${__dirname}/public/js`));
app.use('/css', express.static(`${__dirname}/public/css`));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Uploader is running on http://localhost:${PORT}.`);
});