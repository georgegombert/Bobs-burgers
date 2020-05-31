CREATE DATABASE burgers_db;

USE burgers_db;

CREATE table burgers(
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(90) NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);