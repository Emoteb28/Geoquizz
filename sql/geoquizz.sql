-- Adminer 4.7.0 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `partie`;
CREATE TABLE `partie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `nb_photos` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `joueur` varchar(255) NOT NULL,
  `serie_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `serie_id` (`serie_id`),
  CONSTRAINT `partie_ibfk_1` FOREIGN KEY (`serie_id`) REFERENCES `serie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `desc` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `serie_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `serie_id` (`serie_id`),
  CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`serie_id`) REFERENCES `serie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `photo2partie`;
CREATE TABLE `photo2partie` (
  `partie_id` int(11) NOT NULL,
  `serie_id` int(11) NOT NULL,
  KEY `partie_id` (`partie_id`),
  KEY `serie_id` (`serie_id`),
  CONSTRAINT `photo2partie_ibfk_1` FOREIGN KEY (`partie_id`) REFERENCES `partie` (`id`),
  CONSTRAINT `photo2partie_ibfk_2` FOREIGN KEY (`serie_id`) REFERENCES `serie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `serie`;
CREATE TABLE `serie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ville` varchar(255) NOT NULL,
  `map_refs` varchar(255) NOT NULL,
  `dist` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- 2019-03-11 13:27:58