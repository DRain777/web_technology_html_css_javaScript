CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL,
    age INT NOT NULL,
    address TEXT NOT NULL
);

INSERT INTO employee
    (name, age, address)
VALUES
    ('Ян', 18, 'Москва');
INSERT INTO employee
    (name, age, address)
VALUES
    ('Петр', 22, 'Москва');
INSERT INTO employee
    (name, age, address)
VALUES
    ('Анна', 27, 'Питер');
INSERT INTO employee
    (name, age, address)
VALUES
    ('Юлия', 18, 'Новосибирск');
INSERT INTO employee
    (name, age, address)
VALUES
    ('Николай', 36, 'Новокузнецк');

SELECT name
FROM employee
WHERE address = 'Москва' AND age >= 18 AND age < 30;
