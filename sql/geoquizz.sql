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

INSERT INTO `partie` (`id`, `token`, `nb_photos`, `status`, `score`, `joueur`, `serie_id`) VALUES
(9,	'e3e80ac7523b9179cd5d9aed73c3569b2114d10a18c2b3ca86e18a987b5f33dc',	10,	0,	0,	'0mouad0',	1),
(10,	'b982bc2c6b5a520b462b6fde8184dab6fb90ebcdb1648c02247fb0a65e22239d',	10,	0,	0,	'0mouad0',	1),
(11,	'f7c2031318b4564d01a05ecb1bf41d3b8d5d56af059afe8b028f7b004b8fdcb3',	10,	0,	0,	'lk',	1),
(12,	'1b5af9fe79ebaff31d981dadb3f0efb1bb4c786586c87b76b3cbe86ca4bd9815',	10,	0,	0,	'0mouad0',	1),
(13,	'85656a6d221ab0babc6840c9edf9a84900b12ac0b9ea18cfe1984409ba5fa53a',	10,	0,	0,	'0mouad0',	1);

DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `id` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lng` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `serie_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `serie_id` (`serie_id`),
  CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`serie_id`) REFERENCES `serie` (`id`),
  CONSTRAINT `photo_ibfk_2` FOREIGN KEY (`serie_id`) REFERENCES `serie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `photo` (`id`, `desc`, `lat`, `lng`, `url`, `serie_id`) VALUES
('4af7900f-3563-4ab8-80af-f990326a1ac9',	'Pepiniere',	'48.698368',	'6.185178',	'4af7900f-3563-4ab8-80af-f990326a1ac9.jpg',	1),
('512c9492-19ad-433f-b6a8-6ac20ec5ab16',	'Musee de l&#39;ecole',	'48.682209',	'6.166271',	'512c9492-19ad-433f-b6a8-6ac20ec5ab16.jpg',	1),
('52379f61-d5b9-458e-9131-2e22f28a1e0e',	'Gare de Nancy',	'48.690470',	'6.174369',	'52379f61-d5b9-458e-9131-2e22f28a1e0e.jpg',	1),
('7f994533-e3ae-4879-b935-da6eb86acf88',	'rueFelixFaure',	'48.678210',	'6.165279',	'7f994533-e3ae-4879-b935-da6eb86acf88.jpg',	1),
('89ef39d0-a175-40db-bc8a-4347453d392f',	'basilique',	'1.326',	'2.3256',	'89ef39d0-a175-40db-bc8a-4347453d392f.jpg',	4),
('8e63e9eb-d7f2-48dd-b051-be229d952775',	'porteCrafe',	'48.699086',	'6.177795',	'8e63e9eb-d7f2-48dd-b051-be229d952775.jpg',	1),
('957df2d8-e288-4344-9103-c133846c2e97',	'Institut Universitaire de Technologie Charlemagne',	'48.683049',	'6.161091',	'957df2d8-e288-4344-9103-c133846c2e97.jpg',	1),
('9bd10277-9660-4db8-a72f-cf6f3e8fd108',	'La Meurthe',	'48.673731',	'6.213664',	'9bd10277-9660-4db8-a72f-cf6f3e8fd108.jpg',	1),
('a265301c-deae-499f-a139-f7cb2937b706',	'Place Stan',	'48.693795',	'6.183220',	'a265301c-deae-499f-a139-f7cb2937b706.jpg',	1),
('a29d49e8-6042-480c-8b3b-d7673ed930e5',	'villaMajorelle',	'48.686686',	'6.163525',	'a29d49e8-6042-480c-8b3b-d7673ed930e5.jpg',	1),
('bf079377-6aa8-4d2d-9c7b-0d1d4f5a7422',	'cimetiaireSud',	'48.673293',	'6.189485',	'bf079377-6aa8-4d2d-9c7b-0d1d4f5a7422.jpg',	1),
('c0a89d5f-97ee-4816-bc72-a01d76431440',	'Museum-Aquarium',	'48.695943',	'6.188008',	'c0a89d5f-97ee-4816-bc72-a01d76431440.jpg',	1),
('c2b7e3a1-159e-4710-8de5-30902336bbbc',	'materniteRegionale',	'48.681349',	'6.190020',	'c2b7e3a1-159e-4710-8de5-30902336bbbc.jpg',	1),
('ce929f60-0147-4ef9-b693-ec7ce00ea41f',	'tourMarcelBrot',	'48.678147',	'6.202624',	'ce929f60-0147-4ef9-b693-ec7ce00ea41f.jpg',	1),
('d7627d2c-df83-4e7e-ac70-d822febb19b2',	'eglise saint epvre',	'48.696221',	'6.179904',	'd7627d2c-df83-4e7e-ac70-d822febb19b2.jpg',	1);

DROP TABLE IF EXISTS `photo2partie`;
CREATE TABLE `photo2partie` (
  `partie_id` int(11) NOT NULL,
  `photo_id` varchar(255) NOT NULL,
  KEY `partie_id` (`partie_id`),
  KEY `photo_id` (`photo_id`),
  CONSTRAINT `photo2partie_ibfk_1` FOREIGN KEY (`partie_id`) REFERENCES `partie` (`id`),
  CONSTRAINT `photo2partie_ibfk_2` FOREIGN KEY (`photo_id`) REFERENCES `photo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `photo2partie` (`partie_id`, `photo_id`) VALUES
(9,	'4af7900f-3563-4ab8-80af-f990326a1ac9'),
(9,	'd7627d2c-df83-4e7e-ac70-d822febb19b2'),
(9,	'a265301c-deae-499f-a139-f7cb2937b706'),
(9,	'9bd10277-9660-4db8-a72f-cf6f3e8fd108'),
(9,	'c0a89d5f-97ee-4816-bc72-a01d76431440'),
(9,	'7f994533-e3ae-4879-b935-da6eb86acf88'),
(9,	'ce929f60-0147-4ef9-b693-ec7ce00ea41f'),
(9,	'52379f61-d5b9-458e-9131-2e22f28a1e0e'),
(9,	'a29d49e8-6042-480c-8b3b-d7673ed930e5'),
(9,	'bf079377-6aa8-4d2d-9c7b-0d1d4f5a7422'),
(10,	'4af7900f-3563-4ab8-80af-f990326a1ac9'),
(10,	'7f994533-e3ae-4879-b935-da6eb86acf88'),
(10,	'8e63e9eb-d7f2-48dd-b051-be229d952775'),
(10,	'52379f61-d5b9-458e-9131-2e22f28a1e0e'),
(10,	'c2b7e3a1-159e-4710-8de5-30902336bbbc'),
(10,	'a265301c-deae-499f-a139-f7cb2937b706'),
(10,	'512c9492-19ad-433f-b6a8-6ac20ec5ab16'),
(10,	'ce929f60-0147-4ef9-b693-ec7ce00ea41f'),
(10,	'c0a89d5f-97ee-4816-bc72-a01d76431440'),
(10,	'a29d49e8-6042-480c-8b3b-d7673ed930e5'),
(11,	'ce929f60-0147-4ef9-b693-ec7ce00ea41f'),
(11,	'512c9492-19ad-433f-b6a8-6ac20ec5ab16'),
(11,	'7f994533-e3ae-4879-b935-da6eb86acf88'),
(11,	'bf079377-6aa8-4d2d-9c7b-0d1d4f5a7422'),
(11,	'8e63e9eb-d7f2-48dd-b051-be229d952775'),
(11,	'9bd10277-9660-4db8-a72f-cf6f3e8fd108'),
(11,	'c0a89d5f-97ee-4816-bc72-a01d76431440'),
(11,	'4af7900f-3563-4ab8-80af-f990326a1ac9'),
(11,	'c2b7e3a1-159e-4710-8de5-30902336bbbc'),
(11,	'd7627d2c-df83-4e7e-ac70-d822febb19b2'),
(12,	'bf079377-6aa8-4d2d-9c7b-0d1d4f5a7422'),
(12,	'7f994533-e3ae-4879-b935-da6eb86acf88'),
(12,	'512c9492-19ad-433f-b6a8-6ac20ec5ab16'),
(12,	'a265301c-deae-499f-a139-f7cb2937b706'),
(12,	'c0a89d5f-97ee-4816-bc72-a01d76431440'),
(12,	'8e63e9eb-d7f2-48dd-b051-be229d952775'),
(12,	'9bd10277-9660-4db8-a72f-cf6f3e8fd108'),
(12,	'957df2d8-e288-4344-9103-c133846c2e97'),
(12,	'c2b7e3a1-159e-4710-8de5-30902336bbbc'),
(12,	'52379f61-d5b9-458e-9131-2e22f28a1e0e'),
(13,	'957df2d8-e288-4344-9103-c133846c2e97'),
(13,	'512c9492-19ad-433f-b6a8-6ac20ec5ab16'),
(13,	'52379f61-d5b9-458e-9131-2e22f28a1e0e'),
(13,	'c0a89d5f-97ee-4816-bc72-a01d76431440'),
(13,	'4af7900f-3563-4ab8-80af-f990326a1ac9'),
(13,	'9bd10277-9660-4db8-a72f-cf6f3e8fd108'),
(13,	'a265301c-deae-499f-a139-f7cb2937b706'),
(13,	'7f994533-e3ae-4879-b935-da6eb86acf88'),
(13,	'd7627d2c-df83-4e7e-ac70-d822febb19b2'),
(13,	'a29d49e8-6042-480c-8b3b-d7673ed930e5');

DROP TABLE IF EXISTS `serie`;
CREATE TABLE `serie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ville` varchar(255) NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lng` varchar(255) NOT NULL,
  `dist` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `serie` (`id`, `ville`, `lat`, `lng`, `dist`) VALUES
(1,	'Nancy',	'48.692055',	'6.184417',	13),
(4,	'metz',	'48.8534',	'2.3488',	13);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user` (`id`, `fullname`, `email`, `password`) VALUES
(1,	'mouad mounach',	'mouad@gmail.com',	'$2y$10$gTGJymzboekpLJfiA.2m6ecT8EtBV/QvhZGJC57/vvrcTUQIA4SV6'),
(2,	'mouad mounach',	'mounach@gmail.com',	'$2y$10$.DxZjHoHlv8GYPqjDKOu4eg2nLILmXy7iIp3pyvc0ABRNxVmzvEdq'),
(3,	'salah',	'salah@gmail.com',	'$2y$10$5Cm9ig4LLx2A9ImoQQnck.5HgiUkQWEwFRS0cNb02kvhcSwk48NsG');

-- 2019-03-15 15:12:03