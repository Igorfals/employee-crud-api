/**
 * Arquivo: routes/index.js
 * Descrição: arquivo responsável pela chamada da API na aplicação no lado do Back-End
 * Data: 25/09/2024
 * Author: Igor Ferreira <@igor_fals - instagram>
 */
const express = require('express')

const router = express.Router()

router.get('/api/', (req, res) => {
  res.status(200).send({
    sucesso: 'true',
    message: 'Seja bem-vind(a) a api Node.js + PostgreSQL + Azure',
    version: '1.0.0'
  })
})

module.exports = router;
