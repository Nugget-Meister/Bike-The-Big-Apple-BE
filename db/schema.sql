DROP DATABASE IF EXISTS big_apple_capstone;
CREATE DATABASE big_apple_capstone;

\c big_apple_capstone;

CREATE TABLE app_user (
    user_id SERIAL PRIMARY KEY,
    firebase_UUID VARCHAR(32),
    first_name VARCHAR(32),
    last_name VARCHAR(32),
    email VARCHAR (64)

);

CREATE TABLE route (
    route_id SERIAL PRIMARY KEY,
    user_id INT,
    distance_total INT,
    distance_traveled INT,
    completed BOOLEAN,
    properties JSONB,
    date_completed DATE
);

CREATE TABLE milestone (
    milestone_id SERIAL PRIMARY KEY,
    name CHAR(32),
    description CHAR(64)
);

CREATE TABLE user_milestone (
    user_milestone_id SERIAL PRIMARY KEY,
    milestone_id INT,
    user_id INT,
    route_id INT
);

