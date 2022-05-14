require('dotenv').config();

const app = require('./app');

const port = process.env.app_PORT || 3001;

app.listen(port, () => console.log(`app rodando na porta ${port}`));