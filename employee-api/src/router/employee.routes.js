/**
 * Arquivo: routes/employee-routes.js
 * Descrição: arquivo responsável pelas rotas da API
 * Data: 25/09/2024
 * Author: Igor Ferreira <@igor_fals - instagram>
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// => Defenindo as rotas do CRUD - 'Employee'

// => Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

module.exports = router