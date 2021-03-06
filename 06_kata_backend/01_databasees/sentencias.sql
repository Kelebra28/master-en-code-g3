-- Crear Database 
CREATE DATABASE databasename;

-- Borrar Database
DROP DATABASE IF NOT EXISTS databasename;

-- Seleccionar Database en PSQL
\c databasename;

-- Seleccionar Database en sql
SELECT DATABASE databasename;

-- Crear tabla
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);

-- Crear tabla PK

CREATE TABLE table_name
(
    id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 ),
    PRIMARY KEY (id)
);

-- Crear tabla con PK y serialiado

CREATE TABLE table_name (
    column1 SERIAL PRIMARY KEY,
    column2 datatype,
    column3 datatype,
   ....
);

-- Borrar tabla
DROP TABLE table_name;

-- Borrar datos de la tabla;
TRUNCATE TABLE table_name;

-- Inserta el valor en cada columna descrita
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

-- Toma el valor secuencial de las colmunas
INSERT INTO table_name 
VALUES (value1, value2, value3);

-- Actualiza todos los registros
UPDATE table_name
SET column1 = value1, column2 = value2, ... ;

-- Actualizar un registro en especifico
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

-- Borrar todos los registros de la tabla 
-- CUIDADO
DELETE FROM table_name;

-- borrar los registros que cumplan con la condicion
DELETE FROM table_name WHERE condition;


-- Operadores que sirven en la sentencia Where
Operator	Description
=	        Igual
>	        Mayor que 
<	        Menor que
>=	        Mayor que  or igual
<=	        Menor que  or igual
<> or !=	No es igual
AND	        Operador logico Y - AND
OR	        Operador logico O - OR
NOT	        Negar valores booleanos

-- Traerme todas las columnas y registros de una tabla
SELECT * FROM table_name;

-- Traerme solo las columnasa seleccionados
SELECT column1, column2, ...
FROM table_name;

-- Traerme solo las columnasa seleccionados y los registros 
-- Con coinsidencias en la sentencia
SELECT column1, column2, ...
FROM table_name
WHERE condition;

-- Agregando limites a la sentecia
SELECT * FROM table_name LIMIT 1;

-- Inicia en el orden de los registros indicados
SELECT * FROM table_name OFFSET 1;

SELECT * FROM table_name 
WHERE id BETWEEN 2 AND 5 LIMIT 3 OFFSET 1;

-- Trae los datos de un rango en especifico
SELECT * FROM table_name 
WHERE condition BETWEEN [menor] AND [mayor];

-- Trae los datos de los registros que solicito
SELECT * FROM table_name 
WHERE condition IN (n1, n2, ...);

-- Traeme los valores de la condicion que sean nullos
SELECT * FROM table_name 
WHERE condition IS NULL;

-- Ordena de manera ascendente
SELECT * FROM table_name 
ORDER BY column_name;

-- Ordena de manera descente
SELECT * FROM table_name 
ORDER BY column_name DESC;

-- Traeme los valores unicos de la consulta 
SELECT DISTINCT column_name FROM table_name;

-- Funcionees aritmeticas

-- El valor minimo de la columna
SELECT min(column_name) FROM table_name;

-- El valor maximo de la columna
SELECT max(column_name) FROM table_name;

-- Total de registros en una tabla 
SELECT count(*) FROM table_name;

-- Traer el numero de registros unicos sin incluir datos nullos
SELECT count(DISTINCT column_name) from table_name;

-- Agrupar querys por columna
SELECT 
	column_name,
	count(*)
FROM
	table_name
GROUP BY 
	column_name;

-- Sentencias para buscar dentro de una agrupacion
SELECT 
	column_name,
	count(*)
FROM
	table_name
GROUP BY 
	column_name
HAVING 
	condition;

-- Para trabajar con fechas es parecido a trabajar con strings
SELECT * FROM table_name WHERE condition (column_namee_date < 'YYYY-MM-DD')

-- Para trabajar con zonas horarios, el default es 00:00:00
SELECT * FROM table_name WHERE condition (column_namee_date > 'YYYY-MM-DD HH:MM:SS')
























-- SELECT 
-- 	customer_id
-- FROM 
-- 	payment
-- WHERE
-- 	amount = min(amount);