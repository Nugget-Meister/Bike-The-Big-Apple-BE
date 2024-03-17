\c big_apple_capstone;


INSERT INTO app_user (user_id, firebase_UUID, first_name, last_name, email)
VALUES (1, 'UP6gYP7wmTUZFgmJVrmQZIUgWc13','Bing', 'Bong', 'BingBong@example.com'),
       (2, 'LsjpdMj4SeWVk5OvEdMFgmlNqO23', 'Jane', 'Smith', 'jane@example.com');


INSERT INTO route (user_id, distance_total, distance_traveled, completed, properties, date_completed)
VALUES 
    (1, 100, 50, true, '{"start": "Columbus Circle", "end": "Frederick Douglass Circle"}', '2024-03-25'),
    (2, 150, 100, false, '{"start": "Bark Slope Salon", "end": "Gold Street"}', '2024-03-02');


INSERT INTO milestone (milestone_id, name, description)
VALUES (1, 'First Milestone', 'Completed the first route'),
       (2, 'Second Milestone', 'Completed the second route');


INSERT INTO user_milestone (milestone_id, user_id, route_id)
VALUES (1, 1, 1),
       (2, 2, 2);