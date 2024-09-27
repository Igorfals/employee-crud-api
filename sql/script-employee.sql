CREATE TABLE employee (
	employee_Id uuid PRIMARY KEY NOT null DEFAULT uuid_generate_v4(),
	name VARCHAR(255) NOT NULL,
	job_Role VARCHAR(255) NOT NULL,
	salary NUMERIC(5,2) NOT NULL,
	birth DATE NOT NULL,
	employee_registration INTEGER NOT NULL
)