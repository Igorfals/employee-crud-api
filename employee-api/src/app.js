/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por fazer a conexão com o arquivo 'server.js'
 * Data: 25/09/2024
 * Author: Igor Ferreira <@igor_fals - instagram>
 */

const express = require('express');
const cors = require('cors');

const app = express();

// Rotas da API (Employee):
const index = require('./router/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);

module.exports = app;
