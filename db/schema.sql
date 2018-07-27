CREATE DATABASE postDB;
USE postDB;

CREATE TABLE user
(
	id int AUTO_INCREMENT,
	firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    username varchar(255),
    EmailAddress VARCHAR(255) NOT NULL UNIQUE,
	hola VARCHAR(255) NOT NULL,
	passwordUser BINARY(64) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE showGuides
(
    NoGuia varchar(255) NOT NULL,
	Paqueteria varchar(255) NOT NULL,
    Origen varchar(255),
	Destino varchar(255),
    Estatus varchar(255),
	PRIMARY KEY (NoGuia)
);

CREATE UNIQUE INDEX idGuide
ON showGuides (NoGuia);
