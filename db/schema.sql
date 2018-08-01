CREATE DATABASE postDB;
USE postDB;

CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  firstname varchar(255) DEFAULT NULL,
  lastname varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  password varchar(255) NOT NULL,
  last_login datetime DEFAULT NULL,
  status enum('active','inactive') DEFAULT 'active',
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)
) 

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
