/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectinString' (Cosmo DB & PostgreSQL)
 * Data: 25/09/2024
 * Author: Igor Ferreira <@igor_fals - instagram>
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');
const { text } = require('express');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client) => {
  console.log('Unexpected error on idle client', err)
  process.exit(-1)
})

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params)
}