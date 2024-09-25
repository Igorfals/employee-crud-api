/**
 * Arquivo: serve.js
 * Descrição: arquivo responsável por toda a configuração e execução do Back-end ('Employee')
 * Data: 25/09/2024
 * Author: Igor Ferreira <@igor_fals - instagram>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta...: ', port);

})