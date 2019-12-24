CREATE DATABASE  IF NOT EXISTS `kinhdoanhtourdulich` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `kinhdoanhtourdulich`;
-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: kinhdoanhtourdulich
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `accounts` (
  `idAccount` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `phone` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `role` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'user',
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `avatar` varchar(200) DEFAULT '/img/avatarDefault.jpg',
  `idFacebook` varchar(200) DEFAULT NULL,
  `idGoogle` varchar(200) DEFAULT NULL,
  `website` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `gender` varchar(100) DEFAULT 'none',
  `birthdate` datetime DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idAccount`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `phone_UNIQUE` (`phone`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `idFacebook_UNIQUE` (`idFacebook`),
  UNIQUE KEY `idGoogle_UNIQUE` (`idGoogle`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (6,'name','email','0983982930','user','email3','$2a$10$Y49SHMgqXl6xTw7ovBUFOuQduXywptZ7QeyItgmP2Is1B0k.M9Qse','2019-11-29 08:43:33','/img/avatarDefault.jpg',NULL,NULL,NULL,NULL,NULL,NULL,'new',NULL,NULL),(7,'ithoangtan','ithoangtan@gmail.com','0983982933','administrator','ithoangtan@gmail.com','$2a$10$Y49SHMgqXl6xTw7ovBUFOuQduXywptZ7QeyItgmP2Is1B0k.M9Qse','2019-11-29 10:47:51','/img/avatarDefault.jpg',NULL,NULL,NULL,NULL,NULL,NULL,'new',NULL,NULL),(8,'8','8','8','8','8','8','2019-09-09 00:00:00','8','8','8','8','8','8','1996-09-09 00:00:00','edited','2019-12-17 23:02:37','2019-12-17 23:03:34');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `accounts_BEFORE_UPDATE` BEFORE UPDATE ON `accounts` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `addresses` (
  `idAddress` int(11) NOT NULL AUTO_INCREMENT,
  `provinceOrCity` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `districtOrTown` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `communeOrWard` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idTour` int(11) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idAddress`),
  KEY `FK_Addresses_Tours` (`idTour`),
  CONSTRAINT `FK_Addresses_Tours` FOREIGN KEY (`idTour`) REFERENCES `tours` (`idtour`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `addresses_BEFORE_UPDATE` BEFORE UPDATE ON `addresses` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `evaulates`
--

DROP TABLE IF EXISTS `evaulates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `evaulates` (
  `idEvaulate` int(11) NOT NULL AUTO_INCREMENT,
  `numberStar` int(11) DEFAULT NULL,
  `title` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `contentEvaulate` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idTour` int(11) DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idEvaulate`),
  KEY `FK_Evaulates_Accounts` (`idAccount`),
  KEY `FK_Evaulates_Tours` (`idTour`),
  CONSTRAINT `FK_Evaulates_Accounts` FOREIGN KEY (`idAccount`) REFERENCES `accounts` (`idaccount`),
  CONSTRAINT `FK_Evaulates_Tours` FOREIGN KEY (`idTour`) REFERENCES `tours` (`idtour`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaulates`
--

LOCK TABLES `evaulates` WRITE;
/*!40000 ALTER TABLE `evaulates` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaulates` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `evaulates_BEFORE_UPDATE` BEFORE UPDATE ON `evaulates` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `favorites` (
  `idFavorite` int(11) NOT NULL AUTO_INCREMENT,
  `idAccount` int(11) DEFAULT NULL,
  `idTour` int(11) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idFavorite`),
  KEY `FK_Favorites_Tours` (`idTour`),
  KEY `FK_Favorites_Accounts` (`idAccount`),
  CONSTRAINT `FK_Favorites_Accounts` FOREIGN KEY (`idAccount`) REFERENCES `accounts` (`idaccount`),
  CONSTRAINT `FK_Favorites_Tours` FOREIGN KEY (`idTour`) REFERENCES `tours` (`idtour`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `favorites_BEFORE_UPDATE` BEFORE UPDATE ON `favorites` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `images` (
  `idImage` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '/img/error.jpg',
  `status` varchar(200) DEFAULT 'done',
  `name` varchar(200) DEFAULT 'error',
  `idTour` int(11) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idImage`),
  KEY `FK_Images_Tours` (`idTour`),
  CONSTRAINT `FK_Images_Tours` FOREIGN KEY (`idTour`) REFERENCES `tours` (`idtour`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=178 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (164,'/img/1575110775686_italian-landscape-mountains-nature.jpg','done',' 1575110775686_italian-landscape-mountains-nature.jpg',67,'new','2019-11-30 17:46:15',NULL,NULL),(165,'/img/1575110779391_phuong-phap-chup-anh-phong-canh.jpg','done',' 1575110779391_phuong-phap-chup-anh-phong-canh.jpg',67,'new','2019-11-30 17:46:19',NULL,NULL),(167,'/img/1575113186326_pexels-photo-372166.jpeg','done',' 1575113186326_pexels-photo-372166.jpeg',67,'new','2019-11-30 18:26:26',NULL,NULL),(168,'/img/1575113452049_chup-anh-phong-canh.jpg','done',' 1575113452049_chup-anh-phong-canh.jpg',67,'new','2019-11-30 18:30:52',NULL,NULL),(174,'/img/1576396544196_italian-landscape-mountains-nature.jpg','done',' 1576396544196_italian-landscape-mountains-nature.jpg',67,'new','2019-12-15 14:55:44',NULL,NULL),(175,'/img/1576396566503_italian-landscape-mountains-nature.jpg','done',' 1576396566503_italian-landscape-mountains-nature.jpg',67,'new','2019-12-15 14:56:06',NULL,NULL),(176,'/img/1576400628844_chup-anh-phong-canh.jpg','done',' 1576400628844_chup-anh-phong-canh.jpg',66,'new','2019-12-15 16:03:48',NULL,NULL),(177,'/img/1576408598613_italian-landscape-mountains-nature.jpg','done',' 1576408598613_italian-landscape-mountains-nature.jpg',69,'deleted','2019-12-15 18:16:38','2019-12-17 23:22:16',NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `images_BEFORE_UPDATE` BEFORE UPDATE ON `images` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `noticeto`
--

DROP TABLE IF EXISTS `noticeto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `noticeto` (
  `idNoticeTo` int(11) NOT NULL AUTO_INCREMENT,
  `idNotification` int(11) DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idNoticeTo`),
  KEY `FK_NoticeTo_Accounts` (`idAccount`),
  KEY `FK_NoticeTo_Notifications` (`idNotification`),
  CONSTRAINT `FK_NoticeTo_Accounts` FOREIGN KEY (`idAccount`) REFERENCES `accounts` (`idaccount`),
  CONSTRAINT `FK_NoticeTo_Notifications` FOREIGN KEY (`idNotification`) REFERENCES `notifications` (`idnotification`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticeto`
--

LOCK TABLES `noticeto` WRITE;
/*!40000 ALTER TABLE `noticeto` DISABLE KEYS */;
/*!40000 ALTER TABLE `noticeto` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `noticeto_BEFORE_UPDATE` BEFORE UPDATE ON `noticeto` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `notifications` (
  `idNotification` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `title` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `contentNotification` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `dateTime` datetime(6) DEFAULT NULL,
  `dateAdded` datetime DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idNotification`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `notifications_BEFORE_UPDATE` BEFORE UPDATE ON `notifications` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orderdetails` (
  `idOrderDetail` int(11) NOT NULL AUTO_INCREMENT,
  `unitPrice` double DEFAULT NULL,
  `amountPeople` int(11) DEFAULT NULL,
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `idOrder` int(11) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idOrderDetail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetails` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `orderdetails_BEFORE_UPDATE` BEFORE UPDATE ON `orderdetails` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orders` (
  `idOrder` int(11) NOT NULL AUTO_INCREMENT,
  `PIN` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `totalPrice` double DEFAULT NULL,
  `numberPeople` int(11) DEFAULT '1',
  `numberChildren` int(11) DEFAULT '0',
  `address` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `notes` varchar(200) DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idOrder`),
  KEY `FK_Orders_Accounts` (`idAccount`),
  CONSTRAINT `FK_Orders_Accounts` FOREIGN KEY (`idAccount`) REFERENCES `accounts` (`idaccount`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (2,'123456789','verify','2019-12-09 11:14:48',2599000,1,1,'[\"Hồ Chí Minh\", \"Thủ Đức\", \"Bình Thọ\"]','0983982933','itk160454@gmail.com','Haha',6,'new',NULL,NULL),(3,'123456789','verify','2019-12-09 11:14:49',2599000,1,1,'[\"Hồ Chí Minh\", \"Thủ Đức\", \"Bình Thọ\"]','0983982933','itk160454@gmail.com','Haha',6,'new',NULL,NULL),(17,'-379104642','0','2019-12-09 13:44:59',540,1,0,'0','123456789','0','0',8,'new',NULL,NULL),(18,'-379033473','0','2019-12-09 13:46:17',540,1,0,'0','123456789','0','0',8,'new',NULL,NULL),(19,'-378976250','0','2019-12-09 13:47:11',50,1,0,'0','123456789','0','0',8,'new',NULL,NULL),(20,'-378871594','0','2019-12-09 13:48:51',50,1,0,'0','123456789','0','0',8,'new',NULL,NULL),(21,'-378660813','0','2019-12-09 13:52:25',540,1,0,'0','123456789','0','0',8,'new',NULL,NULL),(22,'1575874336819','verify','2019-12-09 13:53:04',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',8,'new',NULL,NULL),(23,'1575874467465','verify','2019-12-09 13:54:38',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',8,'new',NULL,NULL),(24,'1575874882093','verify','2019-12-09 14:01:32',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',8,'new',NULL,NULL),(25,'1575874963867','verify','2019-12-09 14:02:51',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',8,'new',NULL,NULL),(26,'1575875215342','verify','2019-12-09 14:07:04',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',8,'new',NULL,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `orders_BEFORE_UPDATE` BEFORE UPDATE ON `orders` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `paymethod`
--

DROP TABLE IF EXISTS `paymethod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `paymethod` (
  `idPayMethod` int(11) NOT NULL AUTO_INCREMENT,
  `typeCard` varchar(100) DEFAULT NULL,
  `numberCard` varchar(100) DEFAULT NULL,
  `expirationDay` datetime DEFAULT NULL,
  `ownerName` varchar(100) DEFAULT NULL,
  `nameBank` varchar(100) DEFAULT NULL,
  `numberBank` varchar(100) DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `amountReceived` float DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idPayMethod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymethod`
--

LOCK TABLES `paymethod` WRITE;
/*!40000 ALTER TABLE `paymethod` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymethod` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `paymethod_BEFORE_UPDATE` BEFORE UPDATE ON `paymethod` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `posts` (
  `idPost` int(11) NOT NULL AUTO_INCREMENT,
  `contentPost` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idPost`),
  KEY `FK_Posts_Accounts` (`idAccount`),
  CONSTRAINT `FK_Posts_Accounts` FOREIGN KEY (`idAccount`) REFERENCES `accounts` (`idaccount`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `posts_BEFORE_UPDATE` BEFORE UPDATE ON `posts` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `schedules` (
  `idSchedule` int(11) NOT NULL AUTO_INCREMENT,
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `idTour` int(11) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idSchedule`),
  UNIQUE KEY `idTour_UNIQUE` (`idTour`),
  CONSTRAINT `FK_Schedules_Tours` FOREIGN KEY (`idTour`) REFERENCES `tours` (`idtour`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
INSERT INTO `schedules` VALUES (40,'2019-11-30 17:39:57','<h3><strong>Schedule tour here!!!!</strong></h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=kJQP7kiw5Fk\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/kJQP7kiw5Fk\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><p>&nbsp;</p><p>asdasdas</p><blockquote><p>dasdasd</p><p>asd</p><p>a</p></blockquote><ol><li>sd<strong>asdasd</strong></li></ol><figure class=\"table\"><table><tbody><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>&nbsp;</td><td>1</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;đâsasd asd asd á dd</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;asdas á dá d&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp; asd asd á dá d</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td><p>&nbsp; asd asd asd asd á d</p><p>á da</p><p>sd&nbsp;</p><p>á&nbsp;</p></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>',66,'new',NULL,NULL),(41,'2019-11-30 17:46:02','<h3>Hi, You can start editing your travel scheduleas</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=-U-r-b2rPLA\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/-U-r-b2rPLA\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><figure class=\"image image-style-side\"><img src=\"https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg\" srcset=\"https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_180 180w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_360 360w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_540 540w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_720 720w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_900 900w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1080 1080w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1260 1260w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1440 1440w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1620 1620w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1733 1733w\" sizes=\"100vw\" width=\"1733\"><figcaption>OK all</figcaption></figure>',67,'new',NULL,NULL),(42,'2019-12-07 14:24:40','<h3>Hi, You can start editing your travel schedule</h3>',68,'new',NULL,NULL),(43,'2019-12-15 18:16:21','<h3>Hi, You can start editing your travel schedule</h3>',69,'deleted','2019-12-17 23:22:16',NULL);
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `schedules_BEFORE_UPDATE` BEFORE UPDATE ON `schedules` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tours`
--

DROP TABLE IF EXISTS `tours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tours` (
  `idTour` int(11) NOT NULL AUTO_INCREMENT,
  `titleTour` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` double DEFAULT NULL,
  `sale` double DEFAULT NULL,
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `departureDay` datetime DEFAULT NULL,
  `describe` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `address` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `vocationTime` varchar(200) DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idTour`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tours`
--

LOCK TABLES `tours` WRITE;
/*!40000 ALTER TABLE `tours` DISABLE KEYS */;
INSERT INTO `tours` VALUES (66,'Mùa hè với Hoa Anh Đào nhé',999,18,'2019-11-30 17:39:57','2019-04-11 00:00:00','123456765432121212','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','4 days 3 nights',7,'edited',NULL,'2019-12-17 23:18:01'),(67,'test 00000000000000000001',50,3,'2019-11-30 17:46:02','2019-12-04 00:00:00','test 00000000000000000001','test 00000000000000000001','10 days 9 nights',7,'new',NULL,NULL),(68,'test 00000000000000000002',10,0,'2019-12-07 14:24:40','2019-12-18 00:00:00','qweqwe','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','6 days 5 nights',7,'new',NULL,NULL),(69,'Mùa hè với Hoa Anh Đào nhé',10,0,'2019-12-15 18:16:21','2019-12-17 00:00:00','12345665432','187 Dien Bien Phu, Da Kao Ward','2 Ngày 1 Đêm',7,'deleted','2019-12-17 23:22:16',NULL);
/*!40000 ALTER TABLE `tours` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tours_AFTER_INSERT` AFTER INSERT ON `tours` FOR EACH ROW BEGIN
	INSERT INTO schedules(`data`, `idTour`)
        VALUES('<h3>Hi, You can start editing your travel schedule</h3>', NEW.idTour);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tours_BEFORE_UPDATE` BEFORE UPDATE ON `tours` FOR EACH ROW BEGIN
	IF new.statusAction = 'edited' THEN
        SET new.dateEdited = current_time();
    ELSEIF new.statusAction = 'deleted' THEN
		SET new.dateDeleted = current_time();
        UPDATE `kinhdoanhtourdulich`.`images` SET `statusAction` = 'deleted' WHERE NEW.idTour = `kinhdoanhtourdulich`.`images`.idTour;
         UPDATE `kinhdoanhtourdulich`.`schedules` SET `statusAction` = 'deleted' WHERE NEW.idTour = `kinhdoanhtourdulich`.`schedules`.idTour;
    END IF;	
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping events for database 'kinhdoanhtourdulich'
--

--
-- Dumping routines for database 'kinhdoanhtourdulich'
--
/*!50003 DROP PROCEDURE IF EXISTS `spsearchEngineTour` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spsearchEngineTour`(p_search NVARCHAR(100),p_dayStart DATETIME,p_dayEnd DATETIME, p_price FLOAT)
BEGIN
	DECLARE v_likeSearch NVARCHAR
	(100) DEFAULT Concat
	('%',p_search,'%');
	SELECT *
	FROM tours INNER JOIN schedules
		on tours.idTour = schedules.idTour
	WHERE (tours.titleTour LIKE v_likeSearch
		OR tours.describe LIKE v_likeSearch
		OR tours.price	 LIKE v_likeSearch
		OR tours.address LIKE v_likeSearch
		OR tours.vocationTime LIKE v_likeSearch
		OR schedules.data LIKE v_likeSearch)
		AND (tours.departureDay <= p_dayEnd
		AND tours.departureDay >= p_dayStart)
        AND tours.price <= p_price
	ORDER BY tours.titleTour ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-21 10:24:27
