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
(49,	'f7867783c9cefc0f0576444d6ff2b5f602e4d081a63fcc3d2e93f61a2104a56d',	10,	0,	20,	'0mouad0',	1),
(50,	'624b498a62922079cac315518cf3992e1597132125d3c7788cf8cb706bedc8b9',	10,	0,	0,	'0mouad0',	1),
(51,	'7e652d1772d103772e99486a8cdb4285bc89829e552e4dbd802dca43b6b063e0',	10,	1,	12,	'0mouad0',	1),
(52,	'558e3a0d3c768f5813d885d0531095d56b9f492b6e7a2ca25509f46bd777c0cc',	10,	1,	20,	'0mouad0',	1),
(53,	'3ac1e3657e58c59e503d72bc9ed2d17e78a1fb0d6acd2e28b99964ebb3bea65a',	10,	1,	4,	'0mouad0',	1),
(54,	'9415f1420aeb36b74982c8134317488a361c565b9c9d1ea8313613e045c5cc75',	10,	0,	0,	'ayoub',	1),
(55,	'cfdd3e8fecac67db367a5e8ae1bb7c05110a4d28e538c6027974fec635f70f23',	10,	1,	12,	'mouad mounach',	1),
(56,	'f2a08d98d5a7d00357809991038d94f2beaf07676a4cbfe5d66471548e2d7ebc',	10,	1,	17,	'ayoub',	1);

DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `id` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lng` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `serie_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `serie_id` (`serie_id`),
  CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`serie_id`) REFERENCES `serie` (`id`),
  CONSTRAINT `photo_ibfk_2` FOREIGN KEY (`serie_id`) REFERENCES `serie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `photo` (`id`, `desc`, `lat`, `lng`, `url`, `serie_id`) VALUES
('2ab579ef-f4fe-4f30-862d-e3c5e08f52e2',	'Place Stan',	'48.693795',	'6.183220',	'2ab579ef-f4fe-4f30-862d-e3c5e08f52e2.jpg',	1),
('38911c08-ea0e-4d46-8cab-5017a6b63552',	'porteCrafe',	'48.699086',	'6.177795',	'38911c08-ea0e-4d46-8cab-5017a6b63552.jpg',	1),
('3f8f15ea-29db-452f-a4ba-3d9c688d310e',	'rueFelixFaure',	'48.678210',	'6.165279',	'3f8f15ea-29db-452f-a4ba-3d9c688d310e.jpg',	1),
('5808337a-bdda-44b2-9540-c652caa87882',	'Pepiniere',	'48.698368',	'6.185178',	'5808337a-bdda-44b2-9540-c652caa87882.jpg',	1),
('7e737dbe-a976-4017-b587-a851e14be93f',	'Musee de l&#39;ecole',	'48.682209',	'6.166271',	'7e737dbe-a976-4017-b587-a851e14be93f.jpg',	1),
('92b7c3ba-1503-4112-b107-d7e3147fee19',	'eglise saint epvre',	'48.696221',	'6.179904',	'92b7c3ba-1503-4112-b107-d7e3147fee19.jpg',	1),
('9a8eab6c-b49b-4c12-b14c-970641248322',	'La Meurthe',	'48.673731',	'6.213664',	'9a8eab6c-b49b-4c12-b14c-970641248322.jpg',	1),
('b5a27dc6-8e2d-47d1-a261-596775a97629',	'cimetiaireSud',	'48.673293',	'6.189485',	'b5a27dc6-8e2d-47d1-a261-596775a97629.jpg',	1),
('c4da86f5-314d-45d1-a21c-12e9fdef5092',	'materniteRegionale',	'48.681349',	'6.190020',	'c4da86f5-314d-45d1-a21c-12e9fdef5092.jpg',	1),
('d0e71fac-bb03-425d-ac81-d1eb8f99020e',	'villaMajorelle',	'48.686686',	'6.163525',	'd0e71fac-bb03-425d-ac81-d1eb8f99020e.jpg',	1),
('e8b50232-35ec-4a36-92e8-5670baf32c07',	'tourMarcelBrot',	'48.678147',	'6.202624',	'e8b50232-35ec-4a36-92e8-5670baf32c07.jpg',	NULL),
('e9d6c9c2-b59f-4776-8a3b-13dd6ee4e942',	'tourMarcelBrot',	'48.678147',	'6.202624',	'e9d6c9c2-b59f-4776-8a3b-13dd6ee4e942.jpg',	NULL),
('fc669c80-e080-4234-ad0f-73d876df9b3b',	'tourMarcelBrot',	'48.678147',	'6.202624',	'fc669c80-e080-4234-ad0f-73d876df9b3b.jpg',	1);

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
(49,	'3f8f15ea-29db-452f-a4ba-3d9c688d310e'),
(49,	'5808337a-bdda-44b2-9540-c652caa87882'),
(49,	'92b7c3ba-1503-4112-b107-d7e3147fee19'),
(49,	'9a8eab6c-b49b-4c12-b14c-970641248322'),
(49,	'38911c08-ea0e-4d46-8cab-5017a6b63552'),
(49,	'd0e71fac-bb03-425d-ac81-d1eb8f99020e'),
(49,	'2ab579ef-f4fe-4f30-862d-e3c5e08f52e2'),
(49,	'c4da86f5-314d-45d1-a21c-12e9fdef5092'),
(49,	'b5a27dc6-8e2d-47d1-a261-596775a97629'),
(49,	'7e737dbe-a976-4017-b587-a851e14be93f'),
(50,	'fc669c80-e080-4234-ad0f-73d876df9b3b'),
(50,	'9a8eab6c-b49b-4c12-b14c-970641248322'),
(50,	'7e737dbe-a976-4017-b587-a851e14be93f'),
(50,	'c4da86f5-314d-45d1-a21c-12e9fdef5092'),
(50,	'2ab579ef-f4fe-4f30-862d-e3c5e08f52e2'),
(50,	'5808337a-bdda-44b2-9540-c652caa87882'),
(50,	'3f8f15ea-29db-452f-a4ba-3d9c688d310e'),
(50,	'38911c08-ea0e-4d46-8cab-5017a6b63552'),
(50,	'b5a27dc6-8e2d-47d1-a261-596775a97629'),
(50,	'd0e71fac-bb03-425d-ac81-d1eb8f99020e'),
(51,	'38911c08-ea0e-4d46-8cab-5017a6b63552'),
(51,	'd0e71fac-bb03-425d-ac81-d1eb8f99020e'),
(51,	'3f8f15ea-29db-452f-a4ba-3d9c688d310e'),
(51,	'c4da86f5-314d-45d1-a21c-12e9fdef5092'),
(51,	'9a8eab6c-b49b-4c12-b14c-970641248322'),
(51,	'fc669c80-e080-4234-ad0f-73d876df9b3b'),
(51,	'92b7c3ba-1503-4112-b107-d7e3147fee19'),
(51,	'5808337a-bdda-44b2-9540-c652caa87882'),
(51,	'7e737dbe-a976-4017-b587-a851e14be93f'),
(51,	'2ab579ef-f4fe-4f30-862d-e3c5e08f52e2'),
(52,	'b5a27dc6-8e2d-47d1-a261-596775a97629'),
(52,	'9a8eab6c-b49b-4c12-b14c-970641248322'),
(52,	'92b7c3ba-1503-4112-b107-d7e3147fee19'),
(52,	'2ab579ef-f4fe-4f30-862d-e3c5e08f52e2'),
(52,	'38911c08-ea0e-4d46-8cab-5017a6b63552'),
(52,	'5808337a-bdda-44b2-9540-c652caa87882'),
(52,	'fc669c80-e080-4234-ad0f-73d876df9b3b'),
(52,	'7e737dbe-a976-4017-b587-a851e14be93f'),
(52,	'd0e71fac-bb03-425d-ac81-d1eb8f99020e'),
(52,	'c4da86f5-314d-45d1-a21c-12e9fdef5092'),
(53,	'92b7c3ba-1503-4112-b107-d7e3147fee19'),
(53,	'7e737dbe-a976-4017-b587-a851e14be93f'),
(53,	'c4da86f5-314d-45d1-a21c-12e9fdef5092'),
(53,	'b5a27dc6-8e2d-47d1-a261-596775a97629'),
(53,	'3f8f15ea-29db-452f-a4ba-3d9c688d310e'),
(53,	'9a8eab6c-b49b-4c12-b14c-970641248322'),
(53,	'38911c08-ea0e-4d46-8cab-5017a6b63552'),
(53,	'2ab579ef-f4fe-4f30-862d-e3c5e08f52e2'),
(53,	'd0e71fac-bb03-425d-ac81-d1eb8f99020e'),
(53,	'fc669c80-e080-4234-ad0f-73d876df9b3b'),
(54,	'38911c08-ea0e-4d46-8cab-5017a6b63552'),
(54,	'fc669c80-e080-4234-ad0f-73d876df9b3b'),
(54,	'9a8eab6c-b49b-4c12-b14c-970641248322'),
(54,	'2ab579ef-f4fe-4f30-862d-e3c5e08f52e2'),
(54,	'd0e71fac-bb03-425d-ac81-d1eb8f99020e'),
(54,	'5808337a-bdda-44b2-9540-c652caa87882'),
(54,	'92b7c3ba-1503-4112-b107-d7e3147fee19'),
(54,	'b5a27dc6-8e2d-47d1-a261-596775a97629'),
(54,	'c4da86f5-314d-45d1-a21c-12e9fdef5092'),
(54,	'3f8f15ea-29db-452f-a4ba-3d9c688d310e'),
(55,	'd0e71fac-bb03-425d-ac81-d1eb8f99020e'),
(55,	'2ab579ef-f4fe-4f30-862d-e3c5e08f52e2'),
(55,	'9a8eab6c-b49b-4c12-b14c-970641248322'),
(55,	'fc669c80-e080-4234-ad0f-73d876df9b3b'),
(55,	'7e737dbe-a976-4017-b587-a851e14be93f'),
(55,	'c4da86f5-314d-45d1-a21c-12e9fdef5092'),
(55,	'b5a27dc6-8e2d-47d1-a261-596775a97629'),
(55,	'5808337a-bdda-44b2-9540-c652caa87882'),
(55,	'38911c08-ea0e-4d46-8cab-5017a6b63552'),
(55,	'92b7c3ba-1503-4112-b107-d7e3147fee19'),
(56,	'38911c08-ea0e-4d46-8cab-5017a6b63552'),
(56,	'9a8eab6c-b49b-4c12-b14c-970641248322'),
(56,	'c4da86f5-314d-45d1-a21c-12e9fdef5092'),
(56,	'92b7c3ba-1503-4112-b107-d7e3147fee19'),
(56,	'7e737dbe-a976-4017-b587-a851e14be93f'),
(56,	'2ab579ef-f4fe-4f30-862d-e3c5e08f52e2'),
(56,	'b5a27dc6-8e2d-47d1-a261-596775a97629'),
(56,	'fc669c80-e080-4234-ad0f-73d876df9b3b'),
(56,	'd0e71fac-bb03-425d-ac81-d1eb8f99020e'),
(56,	'5808337a-bdda-44b2-9540-c652caa87882');

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
(1,	'Nancy',	'48.692055',	'6.184417',	100),
(4,	'metz',	'48.8534',	'2.3488',	100);

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
(3,	'salah',	'salah@gmail.com',	'$2y$10$5Cm9ig4LLx2A9ImoQQnck.5HgiUkQWEwFRS0cNb02kvhcSwk48NsG'),
(4,	'kutuc',	'kutuc@test.fr',	'$2y$10$oZ1NUNjL6sAaC469pqZno.QK2pcfKlsO3ZR/myttgfHjAzcf6JZQm');

-- 2019-03-19 02:00:49