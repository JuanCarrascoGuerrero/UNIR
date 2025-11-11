-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: gimnasio
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autores` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `autores` WRITE;
/*!40000 ALTER TABLE `autores` DISABLE KEYS */;
/*!40000 ALTER TABLE `autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `edad` int unsigned NOT NULL,
  `genero` enum('M','F') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_inscripcion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cuota` decimal(4,2) unsigned NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `dni` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `monitores_id` int DEFAULT NULL,
  `staff_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (21,'Stalone','Batecok','15 Helena Terrace','sbatecokk@imageshack.us',28,'M','2021-04-09 14:00:00',16.90,'2017-04-27','309632997g',21,12),(22,'Lula','O\'Henecan','8339 Erie Park','lohenecanl@histats.com',71,'F','2017-11-27 19:00:00',16.90,'1965-01-16','142913706n',22,12),(23,'Laney','McCamish','0 2nd Point','lmccamishm@last.fm',64,'M','2019-06-30 14:00:00',39.90,'1995-02-14','352893494r',91,13),(24,'Dorey','Goggen','9590 Village Terrace','dgoggenn@tmall.com',40,'F','2017-10-16 14:00:00',16.90,'1972-05-02','529183263d',5,13),(25,'Romario','Garcia','33662 Talisman ','egeareo@gmail.fr',34,'M','2017-08-24 14:00:00',20.90,'1961-12-06','976916926V',25,13),(26,'Gilemette','Quinnette','3374 Debra Street','gquinnettep@4shared.com',27,'F','2016-12-11 19:00:00',39.90,'1973-09-12','646998403s',26,12),(27,'Carolan','Harber','','charberq@tripod.com',26,'F','2020-04-25 14:00:00',16.90,'2003-07-31','759950979n',5,12),(28,'Pearl','Wartnaby','C Barco 27, Madrid','dwartnabyr@theguardian.com',56,'F','2020-01-27 19:00:00',39.90,'1986-01-28','371217632h',28,13),(29,'Joycelin','Sacker','50 Declaration Place','jsackers@aol.com',56,'F','2019-07-03 14:00:00',16.90,'1969-01-09','051159619k',29,12),(30,'Gareth','Draysay','6831 Di Loreto Avenue','gdraysayt@eepurl.com',50,'M','2020-07-13 14:00:00',16.90,'1968-08-11','345816750b',5,12),(31,'Ringo','Clem','9 Monica Place','rclemu@tinyurl.com',32,'M','2018-07-19 14:00:00',39.90,'1960-07-07','427000097e',5,13),(32,'Bruis','Iacovielli','9 Del Mar Park','biacovielliv@hao123.com',43,'M','2020-05-22 14:00:00',16.90,'2005-12-19','765409381l',32,5),(33,'Wenonah','Roubay','09 Jenna Trail','wroubayw@digg.com',47,'F','2021-02-06 19:00:00',39.90,'1975-11-25','192860146e',33,NULL),(34,'Anabelle','Geldart','7958 Spenser Circle','ageldartx@ebay.com',31,'F','2017-11-15 19:00:00',16.90,'2016-09-23','828823923o',91,NULL),(35,'Floris','Thecham','6692 Sutherland Center','fthechamy@cocolog-nifty.com',72,'F','2018-04-18 14:00:00',19.90,'2007-07-26','420772216j',91,NULL),(36,'Carola','Rosenblath','99 Thackeray Place','crosenblathz@cbslocal.com',26,'F','2018-02-01 19:00:00',16.90,'1969-03-15','503229277x',36,NULL),(37,'Katuscha','Crannach','2 Stephen Park','kcrannach10@mozilla.org',39,'F','2016-07-30 14:00:00',39.90,'2002-02-16','596891627f',37,NULL),(38,'Carlyn','Shillan','2370 Cody Avenue','cshillan11@ocn.ne.jp',50,'F','2020-02-27 19:00:00',39.90,'2011-03-03','745648620s',91,NULL),(39,'Ramon','Hirtz','5999 Sunfield Pass','rhirtz12@wiley.com',29,'M','2018-06-15 14:00:00',39.90,'1975-10-23','715202972y',39,NULL),(40,'Budd','Blacklock','42647 Thackeray Hill','bblacklock13@livejournal.com',75,'M','2020-05-18 14:00:00',39.90,'2002-08-27','385077906p',40,NULL),(41,'Gerrie','Hatherall','45 Stephen Trail','ghatherall14@geocities.jp',42,'F','2017-11-03 19:00:00',39.90,'2021-04-30','804718072l',12,NULL),(44,'Tatum','Hansemann','66 Nevada Point','thansemann17@webnode.com',43,'F','2020-10-13 14:00:00',39.90,'1981-05-09','834462241a',21,NULL),(45,'Leodora','Lightwing','3 Oakridge Trail','llightwing18@is.gd',42,'F','2019-03-18 19:00:00',16.90,'2007-09-21','200550262a',45,NULL),(46,'Nolan','Lovekin','72 Prairieview Center','nlovekin19@printfriendly.com',72,'M','2020-11-23 19:00:00',16.90,'1977-12-16','176552537h',46,NULL),(47,'Ferdie','Haston','03610 Lillian Circle','fhas_ton1a@slideshare.net',74,'M','2016-07-17 14:00:00',16.90,'1998-04-04','518179291c',91,NULL),(48,'Eugene','Gough','4399 Westend Center','egough1b@ucoz.com',66,'M','2016-08-18 14:00:00',16.90,'1989-09-23','504005780m',12,NULL),(49,'Clemente','Olifaunt','51 Northwestern Point','colifaunt1c@blogspot.com',59,'M','2019-02-19 19:00:00',16.90,'1996-11-09','288949468d',49,NULL),(50,'Kain','Woolward','32 Prairieview Avenue','kwoolward1d@dion.ne.jp',55,'M','2017-01-29 19:00:00',16.90,'2015-11-25','751493176d',12,NULL),(51,'Kristi','Bohman','54 Westend Way','kbohman1e@soundcloud.com',60,'F','2019-06-18 14:00:00',39.90,'1968-07-31','769702894p',91,NULL),(52,'Luisa','Laverock','8066 Center Lane','llaverock1f@github.com',23,'F','2019-06-26 14:00:00',16.90,'1980-07-17','324270299i',52,NULL),(53,'Marsh','Noulton','58 Graceland Trail','mnoulton1g@nsw.gov.au',63,'M','2019-07-14 14:00:00',39.90,'2016-08-06','128265610c',53,NULL),(54,'Hill','Danielli','56 Thackeray Hill','hdanielli1h@tmall.com',45,'M','2017-10-04 14:00:00',16.90,'2014-07-18','202792381t',91,NULL),(55,'Osbert','Carverhill','0277 Darwin Park','ocarverhill1i@baidu.com',64,'M','2019-07-09 14:00:00',16.90,'1977-02-08','349918153e',55,NULL),(56,'Merell','Vasovic','69384 Dakota Way','mva_sovic1j@alexa.com',25,'M','2017-04-13 14:00:00',39.90,'1998-04-17','634812216t',56,NULL),(57,'Ollie','Darben','36 Bowman Parkway','odarben1k@webeden.co.uk',33,'M','2017-07-28 14:00:00',39.90,'2005-11-27','864265129p',57,NULL),(58,'Shae','Anfossi','0223 Schurz Drive','sanfossi1l@de.vu',67,'F','2018-11-17 19:00:00',39.90,'2006-02-21','364951093x',58,NULL),(59,'Rafe','Durand','65614 Mesta Road','rdur_and1m@gravatar.com',33,'M','2017-04-17 14:00:00',16.90,'1995-07-02','027308983p',59,NULL),(60,'Gail','Jollie','95238 Dunning Avenue','gjollie1n@nhs.uk',23,'M','2018-07-01 14:00:00',39.90,'1983-12-30','aaaaaaaa8',60,NULL),(61,'Carolann','Mandal','57 Cascade Hill','cmandal1o@salon.com',20,'F','2017-02-15 19:00:00',16.90,'1985-09-23','165247107d',61,NULL),(62,'Garrett','Catcherside','2 Harbort Junction','gcatcherside1p@simplemachines.org',53,'M','2019-07-18 14:00:00',16.90,'2017-04-07','011992113w',62,NULL),(63,'Diena','Josilevich','5 1st Drive','djosilevich1q@prnewswire.com',64,'F','2019-07-21 14:00:00',16.90,'2007-08-19','072849552p',63,NULL),(64,'Lemar','Allon','657 Green Alley','lallon1r@tripod.com',66,'M','2020-10-16 14:00:00',16.90,'2004-03-09','924040156g',64,NULL),(65,'Adamo','Ubsdell','9211 Lyons Alley','aubsdell1s@yahoo.com',60,'M','2020-07-11 14:00:00',16.90,'1995-04-23','017694183p',65,NULL),(66,'Ania','Earney','934 Luster Junction','aearney1t@ftc.gov',38,'F','2018-12-18 19:00:00',16.90,'1963-11-02','331802559x',66,NULL),(67,'Corabel','Headford','52 Nelson Park','cheadford1u@zimbio.com',78,'F','2019-12-06 19:00:00',49.90,'1973-10-27','581918306f',67,NULL),(68,'Jerrilee','Hallyburton','28347 Northview Hill','jhallyburton1v@chicagotribune.com',37,'F','2016-08-20 14:00:00',16.90,'1973-01-01','772482388j',68,NULL),(69,'Barde','Schoular','6030 Fair Oaks Pass','bschoular1w@nydailynews.com',38,'M','2019-04-03 14:00:00',16.90,'2013-03-26','906767526x',69,NULL),(70,'Horten','Frere','38870 Johnson Terrace','hfrere1x@360.cn',47,'M','2017-11-10 19:00:00',39.90,'2020-09-23','180702013m',70,NULL),(71,'Sherman','Feathers','4579 Charing Cross Center','sfeathers1y@tmall.com',24,'M','2016-10-30 19:00:00',16.90,'1966-05-12','992249436x',71,NULL),(72,'Haydon','Coger','50 Arapahoe Plaza','hcoger1z@economist.com',66,'M','2019-12-15 19:00:00',16.90,'1999-04-09','659987726y',72,NULL),(73,'Minne','Crass','2043 Continental Parkway','mcrass20@hexun.com',34,'F','2016-07-24 14:00:00',16.90,'2005-11-29','639738852a',91,NULL),(74,'Asa','Duffell','43625 Lyons Circle','aduffell21@seesaa.net',72,'M','2016-08-20 14:00:00',39.90,'2020-11-17','477849554u',74,NULL),(75,'Jonathon','Slater','596 Almo Lane','jslater22@pen.io',67,'M','2019-09-08 14:00:00',39.90,'1962-01-15','822574866q',75,NULL),(76,'Meriel','Fowells','9608 Corben Circle','mfowells23@so-net.ne.jp',43,'F','2019-09-27 14:00:00',16.90,'1974-05-01','045533860x',76,NULL),(77,'Kaine','MacKenzie','48434 Southridge Road','kmackenzie24@amazon.co.jp',32,'M','2018-03-14 19:00:00',16.90,'2014-12-07','015939865a',77,NULL),(78,'Ellynn','Girsch','9 Packers Trail','egirsch25@chronoengine.com',66,'F','2018-05-18 14:00:00',39.90,'2015-07-20','429646041m',91,NULL),(79,'Justin','Hazle','065 Manufacturers Crossing','jhazle26@wufoo.com',69,'M','2021-01-12 19:00:00',16.90,'1969-05-07','621700496a',2,NULL),(80,'Witty','Franchi','80124 Milwaukee Road','wfranchi27@squarespace.com',39,'M','2019-10-14 14:00:00',16.90,'2010-08-23','006967227v',3,NULL),(81,'Larisa','Hallibone','56 2nd Court','lhallibone28@accuweather.com',34,'F','2016-08-18 14:00:00',16.90,'1974-02-14','732850555u',81,NULL),(82,'Virginia','Jerzak','635 5th Parkway','vjerzak29@webeden.co.uk',32,'F','2020-07-29 14:00:00',16.90,'2017-10-19','069127182v',91,NULL),(83,'Odille','Rosbrough','2018 Victoria Parkway','orosbrough2a@unesco.org',68,'F','2016-08-07 14:00:00',39.90,'1981-06-15','939805619x',83,NULL),(84,'Noell','Francescozzi','461 Algoma Plaza','nfrancescozzi2b@zdnet.com',52,'F','2018-07-25 14:00:00',16.90,'1971-10-17','103165319y',84,NULL),(85,'Angelines','Vautre','41 Kipling Court','lvautre2c@jiathis.com',26,'F','2019-10-13 14:00:00',39.90,'1968-09-11','216724920j',85,NULL),(86,'Renell','Kerrigan','17 Hanson Street','rkerrigan2d@sohu.com',25,'F','2018-02-03 19:00:00',39.90,'1967-05-14','803333355z',86,NULL),(87,'Hale','Sinfield','07 Carey Crossing','hsinfield2e@dmoz.org',59,'M','2018-10-21 14:00:00',16.90,'1987-01-15','020193739r',91,NULL),(88,'Drew','Holywell','70614 Thackeray Place','dholywell2f@tumblr.com',60,'M','2021-04-30 14:00:00',16.90,'2019-02-18','077660129y',88,NULL),(89,'Damita','Daviddi','975 Amoth Hill','ddaviddi2g@smugmug.com',55,'F','2020-11-24 19:00:00',39.90,'1964-08-20','821047555n',89,NULL),(90,'Peta','Topping','334 Larry Junction','ptopping2h@economist.com',32,'F','2020-09-12 14:00:00',16.90,'1988-03-03','868317926z',91,NULL),(91,'Curt','Cleator','514 Little Fleur Hill','ccleator2i@nba.com',61,'M','2021-03-07 19:00:00',16.90,'1991-11-03','402621604k',91,NULL),(92,'Alexis','Patinkin','62049 Morningstar Place','apatinkin2j@vinaora.com',32,'M','2020-10-19 14:00:00',16.90,'2004-05-31','388188251p',92,NULL),(94,'Flemming','Churchley','129 Kipling Park','fchurchley2l@forbes.com',50,'M','2018-07-18 14:00:00',39.90,'2000-12-09','010547249m',94,NULL),(95,'Rafferty','Dauncey','05 Laurel Hill','rdauncey2m@vimeo.com',33,'M','2016-05-26 14:00:00',16.90,'1973-11-06','242747140l',95,NULL),(96,'Noelani','Ritson','444 Hansons Alley','nritson2n@bloglovin.com',71,'F','2018-07-11 14:00:00',39.90,'2002-03-17','792405952j',91,NULL),(97,'Elisha','Lias','91642 Welch Point','elias2o@elpais.com',51,'M','2019-10-05 14:00:00',16.90,'1992-08-06','542210764a',91,NULL),(98,'Rudie','McLeod','05 Fairview Avenue','rmcleod2p@state.tx.us',67,'M','2019-07-19 14:00:00',39.90,'1976-03-15','109456596r',91,NULL),(99,'Nikolas','Charlick','74723 Clove Way','ncharlick2q@globo.com',62,'M','2019-10-16 14:00:00',16.90,'1976-08-08','818521105u',91,NULL),(100,'Ricca','Beveredge','9 Talisman Crossing','rbeveredge2r@tamu.edu',60,'F','2021-03-04 19:00:00',39.90,'1974-08-19','485706377o',100,NULL),(139,'Ángel','Ruiz','Calle Falsa 123','angel@gmail.com',29,'M','2025-02-05 10:03:40',16.90,'1997-06-10','89182937T',NULL,NULL),(140,'Ángel','Ruiz','Calle Falsa 123','angel1@gmail.com',29,'M','2025-02-05 10:10:25',16.90,'1997-06-10','89182937T',NULL,NULL),(142,'Ángel','Ruiz','Calle Falsa 123','angel2@gmail.com',29,'M','2025-02-05 10:53:56',16.90,'1997-06-10','89182937T',NULL,NULL),(148,'Inés','Romero','Gran Vía 34','inesita@imageshack.us',32,'F','2025-03-31 14:25:00',16.90,'2017-04-26','309632997g',NULL,NULL),(152,'Mario','Gron','1Hetr','mario@imageshack.us',28,'M','2025-11-11 09:42:10',16.90,'2010-04-27','309632997g',NULL,NULL),(153,'Alvar','Gron','1Hetr','alvar@imageshack.us',28,'M','2025-11-11 09:42:42',16.90,'2010-04-27','309632997g',NULL,NULL);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes_has_ejercicios`
--

DROP TABLE IF EXISTS `clientes_has_ejercicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes_has_ejercicios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `clientes_id` int NOT NULL,
  `ejercicios_id` int NOT NULL,
  `duracion` time NOT NULL,
  `repeticiones` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes_has_ejercicios`
--

LOCK TABLES `clientes_has_ejercicios` WRITE;
/*!40000 ALTER TABLE `clientes_has_ejercicios` DISABLE KEYS */;
INSERT INTO `clientes_has_ejercicios` VALUES (1,46,9,'00:33:36',89),(2,46,6,'00:52:41',80),(3,43,10,'00:09:37',60),(4,42,3,'00:34:36',10),(5,34,4,'00:25:18',64),(6,8,7,'00:51:00',74),(7,46,7,'00:04:33',10),(8,32,1,'00:19:51',20),(10,28,8,'00:34:32',61),(13,16,7,'00:02:05',70),(14,16,3,'00:20:32',15);
/*!40000 ALTER TABLE `clientes_has_ejercicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ejercicios`
--

DROP TABLE IF EXISTS `ejercicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ejercicios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejercicios`
--

LOCK TABLES `ejercicios` WRITE;
/*!40000 ALTER TABLE `ejercicios` DISABLE KEYS */;
INSERT INTO `ejercicios` VALUES (1,'dominadas'),(2,'pesas'),(3,'cinta correr'),(4,'eliptica'),(6,'abdominales'),(7,'flexiones'),(8,'spinning'),(9,'hit'),(10,'natacion');
/*!40000 ALTER TABLE `ejercicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monitores`
--

DROP TABLE IF EXISTS `monitores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monitores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `experiencia` int unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monitores`
--

LOCK TABLES `monitores` WRITE;
/*!40000 ALTER TABLE `monitores` DISABLE KEYS */;
INSERT INTO `monitores` VALUES (1,'Joaquin',6),(2,'Glenna Shepherd',19),(3,'Tamara Solomon',16),(4,'Isabelle Rowe',13),(5,'Nora Contreras',14),(6,'Bryar Simon',7),(7,'Hu Buck',16),(8,'Dolan Shannon',12),(9,'Theodore Ballard',20),(10,'Amela Gill',6),(11,'Christen Gibbs',11),(12,'Dexter Sutton',12),(13,'Ezekiel Kidd',10),(14,'Fulton Carrillo',5),(15,'Deacon Le',14),(16,'Forrest Potts',13),(17,'Cooper Richardson',5),(18,'Ulric Hall',10),(19,'Lane Hammond',9),(20,'Troy Frye',8),(21,'Prescott Mendoza',9),(23,'Adrienne Johns',7),(24,'Thomas Hurley',7),(25,'Harlan Mccullough',11),(26,'Anne Wilkins',16),(27,'Carissa Moon',11),(28,'Cheyenne Sharp',9),(29,'Ria Stout',18),(30,'Zena Buckner',7),(31,'McKenzie Cooley',2),(32,'Halla Alexander',19),(33,'Lysandra Robles',18),(34,'Sloane Sheppard',18),(35,'Upton Blackwell',19),(36,'Hanae Gutierrez',3),(37,'Jolene Martin',2),(38,'Paloma Mcdonald',17),(39,'Cadman Cochran',9),(40,'Francis Kelley',7),(41,'Kasimir Montgomery',15),(42,'Laurel Lee',14),(43,'Lane Adkins',7),(44,'Carol Mccullough',19),(45,'Shad Strong',5),(46,'Austin Foster',7),(47,'Daquan Watkins',20),(48,'Knox Mitchell',16),(49,'Alfonso Blair',7),(50,'Phoebe Collier',3),(51,'Joshua Young',8),(52,'Anthony Williams',5),(53,'Otto Lewis',12),(54,'Jesse Vance',20),(55,'Robert Burch',11),(56,'Kato Fowler',13),(57,'Megan Wyatt',13),(58,'Zia Garza',15),(59,'Nash Howe',2),(60,'Edan Odom',15),(61,'Tanner Little',19),(62,'Chester Workman',17),(63,'Barrett Rojas',19),(64,'Dai Mack',2),(65,'Jamal Mckinney',2),(66,'Anthony Bradley',7),(67,'Thor Frye',4),(68,'Nehru Hoover',19),(69,'Natalie Hopkins',18),(70,'Elton Cross',19),(71,'Lenore Cooke',10),(72,'Maia Castillo',12),(73,'Kaye Vinson',14),(74,'Keiko Duffy',3),(75,'Patience Clark',7),(76,'Flavia Schwartz',13),(77,'Kitra Bruce',15),(78,'Kermit Terry',6),(79,'Camden Cunningham',2),(80,'Germaine Martin',5),(81,'Carl Finley',18),(82,'Desirae Powell',12),(83,'Nolan Clarke',15),(84,'Bruno Guy',2),(85,'Knox Mullins',18),(86,'Micah Shepard',9),(87,'Sheila Wooten',5),(88,'Jasmine Stuart',9),(89,'Edan Walsh',5),(90,'Keegan Galloway',7),(91,'Rina Griffin',18),(92,'Heidi Richmond',3),(93,'Rajah Snow',7),(94,'Daria Baldwin',8),(95,'Rose Stout',14),(96,'Phelan Miles',11),(97,'Emerald Baxter',14),(98,'Ori Bell',14),(99,'Ashton Cline',11),(100,'Meredith Herman',8),(101,'Ramón García',14),(102,'Ramón',34),(103,'Rosalía',32),(104,'Roberto',34),(105,'Manuela',13),(109,'Ramiro Márquez',12),(111,'Lorena',8),(112,'Rosario',12),(113,'Pedrito',12);
/*!40000 ALTER TABLE `monitores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `categoria` varchar(100) DEFAULT NULL,
  `autor_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `autor_id` (`autor_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`autor_id`) REFERENCES `autores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rol` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuarios_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-11 17:46:59
