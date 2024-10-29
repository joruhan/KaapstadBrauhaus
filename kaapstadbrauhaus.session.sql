CREATE DATABASE RestaurantDB;
USE RestaurantDB;

-- 'Registered Users'
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    date_of_birth DATE,
    password VARCHAR(255)
);

-- 'RestaurantTables'
CREATE TABLE RestaurantTables (
    table_id INT AUTO_INCREMENT PRIMARY KEY,
    table_number INT UNIQUE,
    num_seats INT,
    table_location VARCHAR(50)
);

-- 'Bookings' registered
CREATE TABLE Bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    table_id INT,
    booking_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (table_id) REFERENCES RestaurantTables(table_id)
);

-- 'Friends' complete in iteration 2
CREATE TABLE Friends (
    friend_id INT AUTO_INCREMENT PRIMARY KEY,
    friend_name VARCHAR(100),
    group_size INT,
    table_id INT,
    FOREIGN KEY (table_id) REFERENCES RestaurantTables(table_id)
);

-- 'Events'
CREATE TABLE Events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_type VARCHAR(100),
    event_description VARCHAR(255),
    event_date DATE,
    event_duration TIME
);

USE RestaurantDB;

-- Insert sample data into Users table
INSERT INTO Users (first_name, last_name, email, phone, date_of_birth, password)
VALUES 
('John', 'Doe', 'johndoe@example.com', '1234567890', '1985-04-12', 'password123'),
('Jane', 'Smith', 'janesmith@example.com', '0987654321', '1992-08-23', 'password456'),
('Alice', 'Brown', 'alicebrown@example.com', '1231231234', '1988-03-14', 'password789');

-- Insert sample data into RestaurantTables table
INSERT INTO RestaurantTables (table_number, num_seats, table_location)
VALUES 
(1, 4, 'Near window'),
(2, 2, 'Center of room'),
(3, 6, 'Private corner');

-- Insert sample data into Bookings table
INSERT INTO Bookings (user_id, table_id, booking_date)
VALUES 
(1, 1, '2024-11-01 19:00:00'),
(2, 2, '2024-11-02 20:00:00'),
(3, 3, '2024-11-03 18:30:00');

-- Insert sample data into Friends table
INSERT INTO Friends (friend_name, group_size, table_id)
VALUES 
('Michael Johnson', 2, 1),
('Sarah Lee', 3, 2),
('David Brown', 4, 3);

-- Insert sample data into Events table
INSERT INTO Events (event_type, event_description, event_date, event_duration)
VALUES 
('Birthday Party', 'Celebrating John\'s 40th birthday', '2024-12-05', '02:00:00'),
('Business Meeting', 'Annual business review meeting', '2024-11-15', '01:30:00'),
('Wedding Reception', 'Alice and Bob\'s wedding', '2025-01-20', '03:00:00');
