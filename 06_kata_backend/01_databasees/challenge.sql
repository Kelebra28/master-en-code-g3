-- Exercise: Describe Commands
-- Get a list of the tables in the database.

-- \dt

-- \dt c* 

-- Exercise: Select
-- Get a list of actors with the first name Julia.
SELECT * FROM actor WHERE first_name = 'Julia'

-- Get a list of actors with the first name Chris, Cameron, or Cuba.
-- OR
SELECT 
	* 
FROM 
	actor 
WHERE 
	first_name = 'Chris'
	OR 
	first_name = 'Cameron'
	OR
	first_name = 'Cuba';

-- IN
SELECT 
	* 
FROM 
	actor 
WHERE 
	first_name IN ('Chris','Cameron', 'Cuba')

-- Select the row from customer for customer named Jamie Rice.
SELECT 
	* 
FROM 
	customer
WHERE 
	first_name = 'Jamie'
	AND 
	last_name = 'Rice';

-- Select amount and payment_date from payment where the amount paid was less than $1.
SELECT 
	* 
FROM 
	payment
WHERE 
	amount < 1;

-- Exercise: Distinct
-- What are the different rental durations that the store allows?
SELECT DISTINCT
	rental_duration
FROM 
	film;

-- Exercise: Order By
-- What are the IDs of the last 3 customers to return a rental?
SELECT 
	*
FROM
	rental
WHERE return_date IS NOT NULL 
ORDER BY return_date DESC
LIMIT 3;

-- Exercise: Counting
-- How many films are rated NC-17? 
SELECT count(*) FROM film WHERE rating = 'NC-17';

-- How many are rated PG or PG-13?
SELECT count(*) FROM film WHERE rating = 'PG-13' OR rating = 'PG';

SELECT count(*) FROM film WHERE rating IN ('PG-13', 'PG');

-- Challenge: How many different customers have entries in the rental table? Hint
SELECT count(DISTINCT customer_id ) FROM rental;

-- Exercise: Group By
-- Does the average replacement cost of a film differ by rating?
SELECT
	rating,
	avg(replacement_cost)
FROM
	film
GROUP BY rating

-- Challenge: Are there any customers with the same last name?
SELECT  
	COUNT(last_name), 
	last_name 
FROM 
	customer 
GROUP BY last_name 
HAVING count(last_name) > 1;

-- No se repite

-- Exercise: Functions
-- What is the average rental rate of films? 
SELECT avg(rental_rate) FROM film;

-- Can you round the result to 2 decimal places?
SELECT round(avg(rental_rate), 2) FROM film;

-- Challenge: What is the average time that people have rentals before returning? Hint: the output you’ll get may include a number of hours > 24. You can use the function justify_interval on the result to get output that looks more like you might expect.
SELECT 
	justify_interval(avg(return_date - rental_date))
FROM
	rental;

-- Challenge 2: Select the 10 actors who have the longest names (first and last name combined).
SELECT 
	LENGTH(last_name || first_name) as lenght_full_name,
	last_name || ' ' || first_name as full_name
FROM 
	actor
ORDER BY lenght_full_name DESC
LIMIT 10;

-- Exercise: Count, Group, and Order
-- Which film (id) has the most actors? 
SELECT 
 	film_id,
 	count(actor_id)
FROM 
	film_actor
GROUP BY film_id
ORDER BY count(actor_id) DESC
LIMIT 1;

-- Which actor (id) is in the most films?
SELECT 
	concat(actor.first_name || ' ' || actor.last_name),
	film.title,
 	film_actor.actor_id,
 	count(film_actor.film_id)
FROM 
	film_actor
INNER JOIN 
	actor
ON actor.actor_id = film_actor.actor_id
INNER JOIN 
	film
ON film.film_id = film_actor.film_id
GROUP BY film_actor.actor_id, concat(actor.first_name || ' ' || actor.last_name), film.title
ORDER BY count(film_actor.film_id) DESC
LIMIT 1;


