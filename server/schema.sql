CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `message`;

CREATE TABLE `message` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `objectID` INTEGER NOT NULL,
  `message` VARCHAR(140) NULL DEFAULT NULL,
  `room` VARCHAR(15) NOT NULL DEFAULT 'Lobby',
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(15) NOT NULL DEFAULT 'Anonymous',
  PRIMARY KEY (`id`)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

