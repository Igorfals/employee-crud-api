/**
 * Arquivo: controllers/employee.controller.js
 * Descrição: arquivo responsável pela lógica do CRUD (API - Employee)
 * Data: 25/09/2024
 * Author: Igor Ferreira <@igor_fals - instagram>
 */

const db = require('../config/database');

// => Método responsável por criar um novo 'Employee':
exports.createEmployee = async (req, res) => {
  const { name, job_Role, salary, birth, employee_registration } = req.body;
  const { rows } = await db.query(
    "INSERT INTO employee(name, job_Role, salary, birth, employee_registration ) VALUES ($1,$2,$3,$4,$5)",
    [name, job_Role, salary, birth, employee_registration]
  );

  res.status(201).send({
    message: 'Employee added sucessfully',
    body: {
      employee: { name, job_Role, salary, birth, employee_registration }
    }
  })
};
