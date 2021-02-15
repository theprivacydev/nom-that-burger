DROP DATABASE IF EXISTS nom_burgers_db;

CREATE DATABASE nom_burgers_db;

USE nom_burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);


