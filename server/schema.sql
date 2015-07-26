CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `objectId` INTEGER NOT NULL AUTO_INCREMENT,
  `userID` INTEGER NOT NULL,
  `text` VARCHAR(140) NULL DEFAULT NULL,
  `roomname` VARCHAR(15) NOT NULL DEFAULT 'Lobby',

  PRIMARY KEY (`objectId`)
);

/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(15) NOT NULL UNIQUE,
  PRIMARY KEY (`id`)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

