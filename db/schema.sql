DROP DATABASE IF EXISTS big_apple_capstone;
CREATE DATABASE big_apple_capstone;

\c big_apple_capstone;


CREATE TABLE route (
   route_id SERIAL PRIMARY KEY, 
   starting_destination_latitude FLOAT,
   starting_destination_longitude FLOAT,
   ending_destination_latitude FLOAT,
   ending_destination_longitude FLOAT,
   route_distance FLOAT, 
   route_elevation FLOAT,
   route_distance_difference FLOAT
);

CREATE TABLE user_statistics (
    user_statistics_id SERIAL PRIMARY KEY,
    total_distance FLOAT,
    routes_completed INT,
    average_elevation FLOAT,
    route_avoided FLOAT,
    user_id INT
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

