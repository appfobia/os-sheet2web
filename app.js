const express = require('express');
var helmet = require('helmet');

const app = express();
app.use(helmet());

const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));