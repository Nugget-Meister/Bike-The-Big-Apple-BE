\c big_apple_capstone;




INSERT INTO route (starting_destination_latitude, starting_destination_longitude, ending_destination_latitude, ending_destination_longitude)
VALUES 
    (40.70074081255701, -73.80713098412038, 40.743142701461174, -73.94187888813546),
    (41.12345528287382, -75.19738927948282, 42.892692649629628, -75.29864294692864982);



INSERT INTO milestone (name, description)
VALUES ('First Milestone', 'Completed the first route'),
       ('Second Milestone', 'Completed the second route');


INSERT INTO user_milestone (milestone_id, user_id, route_id)
VALUES (1, 1, 1),
       (2, 2, 2);