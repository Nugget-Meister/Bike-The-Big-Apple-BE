DROP DATABASE IF EXISTS big_apple_capstone;
CREATE DATABASE big_apple_capstone;

\c big_apple_capstone;

CREATE TABLE user (
    user_id SERIAL PRIMARY KEY,
    first_name CHAR(32),
    last_name CHAR(32),
    email CHAR(64)
);

CREATE TABLE route (
    route_id SERIAL PRIMARY KEY,
    user_id INT
);

CREATE TABLE achievement (
    achievement_id SERIAL PRIMARY KEY,
    milestone_id INT,
    user_id INT
);

CREATE TABLE milestone (
    milestone_id SERIAL PRIMARY KEY,
    name CHAR(32),
    description CHAR(64)
);