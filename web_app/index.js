const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const morgan = require('morgan');

const api = require('./src').router;
dotEnv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true, }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.disable('etag'); // don't cache files

// backend
app.use('/api', api);

// frontend
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, "0.0.0.0", () => console.log(`Backend up and running on port:${PORT}`));
