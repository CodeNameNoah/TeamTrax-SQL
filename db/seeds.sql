INSERT INTO department (name) VALUES ('Sales'), ('Engineering'), ('Finance');

INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Lead', 50000, 1),
  ('Salesperson', 20000, 1),
  ('Lead Engineer', 150000, 2),
  ('Software Engineer', 100000, 2),
  ('Accountant', 105000, 3),
  ('Finance Manager', 125000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Noah', 'Hoang', 1, NULL),
  ('Johnny', 'Ong', 5, NULL),
  ('Cindy', 'Lu', 3, NULL),
  ('Josh', 'Geka', 2, 1),
  ('Matthew', 'Nacua', 2, 1),
  ('Hannaur', 'Klevann', 4, 3),
  ('Neldad', 'Calderon', 2, 3),
  ('Nicholas', 'Rizzard', 2, 3),
  ('Mauricio', 'Medina', 4, 3),
  ('Emily', 'Chao', 6, 5);