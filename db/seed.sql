\c big_apple_capstone;




INSERT INTO route (starting_destination_latitude, starting_destination_longitude, ending_destination_latitude, ending_destination_longitude, route_distance, route_elevation, route_distance_difference)
VALUES 
    (40.70074081255701, -73.80713098412038, 40.743142701461174, -73.94187888813546, 5534, 23.45, 200.22),
    (41.12345528287382, -75.19738927948282, 42.892692649629628, -75.29864294692864982, 5536, 24.45, 180.22);

INSERT INTO user_statistics (total_distance, routes_completed, average_elevation, route_avoided, user_id)
VALUES
    (10000,15,6.78,267,1),
    (10400,18,9.18,147,2);


INSERT INTO milestone (name, description)
VALUES ('First Milestone', 'Completed the first route'),
       ('Second Milestone', 'Completed the second route');


INSERT INTO user_milestone (milestone_id, user_id, route_id)
VALUES (1, 1, 1),
       (2, 2, 2);