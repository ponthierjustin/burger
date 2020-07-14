DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT auto_increment,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT false,
    primary key (id)
);