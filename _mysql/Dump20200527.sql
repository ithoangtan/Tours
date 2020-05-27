-- MySQL dump 10.13  Distrib 5.7.28, for Win64 (x86_64)
--
-- Host: l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com    Database: azmszdk4w6h5j1o6
-- ------------------------------------------------------
-- Server version	5.7.23-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED='';

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts` (
  `idAccount` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `role` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'user',
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `avatar` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '/img/avatarDefault.jpg',
  `idFacebook` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `idGoogle` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `website` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'none',
  `birthdate` datetime DEFAULT NULL,
  `verify` tinyint(1) NOT NULL DEFAULT '0',
  `type` varchar(100) DEFAULT NULL,
  `verifyToken` varchar(100) DEFAULT NULL,
  `ipCurrent` varchar(100) DEFAULT '0.0.0.0',
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateEdited` datetime DEFAULT NULL,
  `dateDeleted` datetime DEFAULT NULL,
  PRIMARY KEY (`idAccount`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (6,'names','email','0983982930','user','email3s','$2a$10$Y49SHMgqXl6xTw7ovBUFOuQduXywptZ7QeyItgmP2Is1B0k.M9Qse','/img/avatarDefault.jpg',NULL,NULL,'abc.xyz',' asd','Male','0000-00-00 00:00:00',0,'account',NULL,'0.0.0.0','deleted','2019-11-28 11:43:33','2020-04-05 00:34:16','2020-04-06 08:30:00'),(7,'ithoangtan','ithoangtan@gmail.com','0983982933','administrator','ithoangtan@gmail.com','$2a$10$Y49SHMgqXl6xTw7ovBUFOuQduXywptZ7QeyItgmP2Is1B0k.M9Qse','/img/avatarDefault.jpg',NULL,NULL,'as','sa','Male','1996-09-06 00:00:00',1,'account',NULL,'0.0.0.0','edited','2019-11-29 03:47:51','2020-04-06 10:48:48',NULL),(8,'8','8','8','8','8','8','8','8','8','8','8','8','1996-09-09 00:00:00',1,'account',NULL,'0.0.0.0','edited','2019-09-09 00:00:00','2020-03-23 05:15:12','2019-12-17 23:02:37'),(28,'Hoàng Trọng Tấn Nguyeenx','it10069001@gmail.com','84983982933','user','Hoàng Tấn','$2a$10$wGU9oarS/jb1d/a8xvo/Le.Y5v9xB.wZV0UzqAmPq39GQ13se9Y7i','/img/1578112680898_anh-avatar-dep-5.jpg',NULL,NULL,'kinhdaonhtourdulich.comn','12345432151651','none','1996-09-05 10:00:00',1,'account','xWs7d7Jcw70fKM9r1SzrGGiwjwgU4cUM','0.0.0.0','edited','2019-12-24 18:26:59','2020-03-23 05:15:13',NULL),(29,'Hoàng Trọng Tấn','itk160454@gmail.com','8498392933','user','Hoàng Tấn','$2a$10$Eg8u594yDcqdYgZ6IjGoSe5Ddj6XQ/pQFI4aFs/Hy.gys4Q/s/rra','/img/1578038868984_cầu hiền lương.jpg',NULL,NULL,'abc.xyz',' ','none','0000-00-00 00:00:00',1,'guest','verified','0.0.0.0','edited','2020-01-03 08:06:36','2020-03-23 05:15:13',NULL),(58,'Nguyen Ngoc Hoang Vy','16110530@student.hcmute.edu.vn','undefined','user','16110530@student.hcmute.edu.vn','undefined','https://lh6.googleusercontent.com/-tDYrwj6S_iQ/AAAAAAAAAAI/AAAAAAAAAJc/AAKWJJOuIjqGYxgHxUorgb6Y00_lc_RYYg/photo.jpg','undefined','101424687774185419511',NULL,NULL,'none',NULL,0,NULL,'undefined','0.0.0.0','new','2020-04-24 07:20:12',NULL,NULL),(62,'Simple Good','ngochoang1237@gmail.com','undefined','user','ngochoang1237@gmail.com','undefined','https://lh3.googleusercontent.com/a-/AOh14GhO-WJA5VztOxO2LTDVlZK2qdwGkUs0sdMCm9iP','undefined','101232678297238579813',NULL,NULL,'none',NULL,0,NULL,'undefined','0.0.0.0','new','2020-05-20 03:49:55',NULL,NULL);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`accounts_BEFORE_UPDATE` BEFORE UPDATE ON `accounts` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `idAddress` int(11) NOT NULL AUTO_INCREMENT,
  `provinceOrCity` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `districtOrTown` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `communeOrWard` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `idTour` int(11) DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idAddress`),
  KEY `FK_Addresses_Tours` (`idTour`),
  CONSTRAINT `FK_Addresses_Tours` FOREIGN KEY (`idTour`) REFERENCES `tours` (`idTour`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`addresses_BEFORE_UPDATE` BEFORE UPDATE ON `addresses` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;

--
-- Table structure for table `configs`
--

DROP TABLE IF EXISTS `configs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `configs` (
  `idConfig` int(11) NOT NULL AUTO_INCREMENT,
  `infoType` varchar(100) DEFAULT 'general',
  `configs` varchar(1000) DEFAULT '[]',
  `image` varchar(100) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idConfig`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configs`
--

LOCK TABLES `configs` WRITE;
/*!40000 ALTER TABLE `configs` DISABLE KEYS */;
INSERT INTO `configs` VALUES (3,'AuthorInfo','{\"nameAuthor\":\"Name\",\"describeAuthor\":\"description\",\"isNameAuthorEdited\":true,\"isDescribeAuthorEdited\":true}','/img/1585967129812_tour-1.jpg',NULL,'edited','2020-04-03 09:54:32',NULL,NULL),(4,'menu','{}',NULL,NULL,'new',NULL,NULL,NULL),(5,'logo','{}',NULL,NULL,'new',NULL,NULL,NULL),(6,'info','{}',NULL,NULL,'new',NULL,NULL,NULL),(7,'social','{}',NULL,NULL,'new',NULL,NULL,NULL),(8,'footer','{}',NULL,NULL,'new',NULL,NULL,NULL);
/*!40000 ALTER TABLE `configs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluates`
--

DROP TABLE IF EXISTS `evaluates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evaluates` (
  `idEvaluate` int(11) NOT NULL AUTO_INCREMENT,
  `numberStarHotel` int(11) DEFAULT NULL,
  `numberStarFood` int(11) DEFAULT NULL,
  `numberStarVehicle` int(11) DEFAULT NULL,
  `numberStarTourGuide` int(11) DEFAULT NULL,
  `numberStarSchedule` int(11) DEFAULT NULL,
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `contentEvaluate` varchar(2000) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `idTour` int(11) DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `rateAverage` int(11) DEFAULT '0',
  `rateTitle` varchar(45) DEFAULT NULL,
  `typeEvaluate` varchar(45) DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idEvaluate`),
  KEY `FK_Evaulates_Accounts` (`idAccount`),
  KEY `FK_Evaulates_Tours` (`idTour`),
  CONSTRAINT `FK_Evaulates_Accounts` FOREIGN KEY (`idAccount`) REFERENCES `accounts` (`idAccount`),
  CONSTRAINT `FK_Evaulates_Tours` FOREIGN KEY (`idTour`) REFERENCES `tours` (`idTour`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluates`
--

LOCK TABLES `evaluates` WRITE;
/*!40000 ALTER TABLE `evaluates` DISABLE KEYS */;
INSERT INTO `evaluates` VALUES (1,3,4,4,4,4,'Chuyến tham quan thú vị ','Tôi đánh giá cao tour du ngoạn 4 đảo vịnh Nha Trang trong 1 ngày này. Phải nói là tôi rất hài lòng về chuyến tham quan này, một chuyến đi quá tuyệt vời, không chê vào đâu được cả, từ hướng dẫn viên vui vẻ, nhiệt tình cho đến bác tài vui tính và chạy xe khá êm. Ăn uống cũng rất là ngon. Không gian và khung cảnh xung quanh thật là tuyệt vời, tôi không thể nào quên được dù chỉ có vỏn vẹn 1 ngày mà thôi. Tôi rất hài lòng về chuyến đi này. Các địa điểm tham quan vô cũng đẹp.',3,58,4,'Rất ổn','personal','new','2020-05-19 13:35:26',NULL,NULL),(3,4,3,5,5,4,'Cảnh đẹp, thú vị','Nghỉ Dưỡng Du Thuyền Hạ Long – Tàu Golden Cruise 5* đáng giá, thú vị. Hướng dẫn viên thân thiện, nhiệt tình',1,62,4,'Rất ổn','friend','new','2020-05-20 04:00:55',NULL,NULL),(4,4,4,4,5,4,'Thức ăn ngon, cảnh đẹp','Vừa rồi chúng tôi có một chuyến đi vui vẻ và thú vị khi thamm gia tour du ngoạn 4 đảo vịnh Nha Trang. Với không khí vui nhộn trên tàu, hướng dẫn viên rất nhiệt tình, vui vẻ, được tham quan nhiều nơi, khám phá nhiều thứ cộng với việc lái tàu an toàn của bác tài thì tôi khá hài lòng về chuyến đi này. Ở đây tôi được tham quan những cảnh vật nhiên nhiên của các đảo, lặn ngắm san hô dưới biển. Tuy nhiên tôi cảm thấy bữa trưa trên Hòn Một ăn có chưa được ngon lắm nhưng cũng ok so với không khí biển, bên cạnh đó thì do chuyến đi vừa rồi của tôi có gió nhiều nên tôi chưa được tham quan Bãi Tranh ở đây. Tôi hơi tiếc vì điều đó nhưng nhìn chung thì chuyến đi của tôi diễn ra vui vẻ.',3,62,4,'Rất ổn','heart',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `evaluates` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`evaluates_AFTER_INSERT` AFTER INSERT ON `evaluates` FOR EACH ROW
BEGIN
	-- tính trung bình của tất cả các đánh giá
    DECLARE _voteAvg float default 0;
	SET _voteAvg = (SELECT AVG(evaluates.rateAverage) FROM azmszdk4w6h5j1o6.evaluates where idTour=NEW.idTour);
    -- sửa tour. votes
    UPDATE azmszdk4w6h5j1o6.tours SET votes = _voteAvg WHERE tours.idTour = NEW.idTour;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`evaulates_BEFORE_UPDATE` BEFORE UPDATE ON `evaluates` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`evaluates_AFTER_UPDATE` AFTER UPDATE ON `evaluates` FOR EACH ROW
BEGIN
	-- tính trung bình của tất cả các đánh giá
    DECLARE _voteAvg float default 0;
	SET _voteAvg = (SELECT AVG(evaluates.rateAverage) FROM azmszdk4w6h5j1o6.evaluates where idTour=NEW.idTour);
    -- sửa tour. votes
    UPDATE azmszdk4w6h5j1o6.tours SET votes = _voteAvg WHERE tours.idTour = NEW.idTour;
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
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favorites` (
  `idFavorite` int(11) NOT NULL AUTO_INCREMENT,
  `idAccount` int(11) DEFAULT NULL,
  `idTour` int(11) DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idFavorite`),
  KEY `FK_Favorites_Tours` (`idTour`),
  KEY `FK_Favorites_Accounts` (`idAccount`),
  CONSTRAINT `FK_Favorites_Accounts` FOREIGN KEY (`idAccount`) REFERENCES `accounts` (`idAccount`),
  CONSTRAINT `FK_Favorites_Tours` FOREIGN KEY (`idTour`) REFERENCES `tours` (`idTour`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`favorites_BEFORE_UPDATE` BEFORE UPDATE ON `favorites` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `idImage` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '/img/error.jpg',
  `status` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'done',
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'error',
  `idTour` int(11) DEFAULT NULL,
  `idPost` int(11) DEFAULT NULL,
  `idConfig` int(11) DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idImage`),
  KEY `FK_Images_Tours` (`idTour`),
  CONSTRAINT `FK_Images_Tours` FOREIGN KEY (`idTour`) REFERENCES `tours` (`idTour`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'/img/1589788175155_du-lich-ly-son-tour-quang-ngai-ly-son-hoi-an-da-nang-he-2016-bao-gom-ve-may-bay-tu-ha-noi-732-slide-tours-57189d9fe4b68.jpg','done',' 1589788175155_du-lich-ly-son-tour-quang-ngai-ly-son-hoi-an-da-nang-he-2016-bao-gom-ve-may-bay-tu-ha-noi-732-slide-tours-57189d9fe4b68.jpg',1,NULL,NULL,'deleted','2020-05-18 07:49:35','2020-05-19 11:55:35',NULL),(2,'/img/1589788180763_unnamed (1).jpg','done',' 1589788180763_unnamed (1).jpg',1,NULL,NULL,'deleted','2020-05-18 07:49:40','2020-05-19 11:55:35',NULL),(3,'/img/1589791346636_1553835727_dao-ly-son2.jpg','done',' 1589791346636_1553835727_dao-ly-son2.jpg',NULL,1,NULL,'new','2020-05-18 08:42:26',NULL,NULL),(4,'/img/1589880056641_small_atr1435951987_tour-du-ngoan-4-dao-vinh-nha-trang-trong-1-ngay.jpg','done',' 1589880056641_small_atr1435951987_tour-du-ngoan-4-dao-vinh-nha-trang-trong-1-ngay.jpg',3,NULL,NULL,'deleted','2020-05-19 09:20:56','2020-05-22 08:35:41',NULL),(5,'/img/1589880061862_ufu1435951987_tour-du-ngoan-4-dao-vinh-nha-trang-trong-1-ngay.jpg','done',' 1589880061862_ufu1435951987_tour-du-ngoan-4-dao-vinh-nha-trang-trong-1-ngay.jpg',3,NULL,NULL,'deleted','2020-05-19 09:21:19','2020-05-22 08:35:42',NULL),(6,'/img/1589880256435_fdf1435951988_tour-du-ngoan-4-dao-vinh-nha-trang-trong-1-ngay.jpg','done',' 1589880256435_fdf1435951988_tour-du-ngoan-4-dao-vinh-nha-trang-trong-1-ngay.jpg',3,NULL,NULL,'deleted','2020-05-19 09:24:18','2020-05-22 08:35:42',NULL),(7,'/img/1589889345869_1553835727_dao-ly-son2.jpg','done',' 1589889345869_1553835727_dao-ly-son2.jpg',1,NULL,NULL,'deleted','2020-05-19 11:55:45','2020-05-22 08:35:15',NULL),(8,'/img/1589889352968_Dao-Ly-Son-1.jpg','done',' 1589889352968_Dao-Ly-Son-1.jpg',1,NULL,NULL,'deleted','2020-05-19 11:55:53','2020-05-22 08:35:16',NULL),(9,'/img/1589889361420_du-lich-ly-son-tour-quang-ngai-ly-son-hoi-an-da-nang-he-2016-bao-gom-ve-may-bay-tu-ha-noi-732-slide-tours-57189d9fe4b68.jpg','done',' 1589889361420_du-lich-ly-son-tour-quang-ngai-ly-son-hoi-an-da-nang-he-2016-bao-gom-ve-may-bay-tu-ha-noi-732-slide-tours-57189d9fe4b68.jpg',1,NULL,NULL,'deleted','2020-05-19 11:56:01','2020-05-22 08:35:16',NULL),(10,'/img/1589889403656_unnamed.jpg','done',' 1589889403656_unnamed.jpg',2,NULL,NULL,'deleted','2020-05-19 11:56:43','2020-05-22 08:32:50',NULL),(11,'/img/1589889407983_unnamed (1).jpg','done',' 1589889407983_unnamed (1).jpg',2,NULL,NULL,'deleted','2020-05-19 11:56:48','2020-05-22 08:32:52',NULL),(12,'/img/1590057231647_tfd_191017020257_356301.png','done',' 1590057231647_tfd_191017020257_356301.png',5,NULL,NULL,'new','2020-05-21 10:33:51',NULL,NULL),(13,'/img/1590057236860_tfd_181116095356_532831.jpg','done',' 1590057236860_tfd_181116095356_532831.jpg',5,NULL,NULL,'new','2020-05-21 10:33:56',NULL,NULL),(14,'/img/1590069293265_d3756f155c9f4fb98b7f3ca35f249c13.jpg','done',' 1590069293265_d3756f155c9f4fb98b7f3ca35f249c13.jpg',6,NULL,NULL,'new','2020-05-21 13:54:53',NULL,NULL),(15,'/img/1590069303899_780_crop_2_hon_rua_binh_ba.jpg','done',' 1590069303899_780_crop_2_hon_rua_binh_ba.jpg',6,NULL,NULL,'new','2020-05-21 13:55:04',NULL,NULL),(16,'/img/1590070465612_koe1421037598_du-lich-mien-tay-song-nuoc-my-tho-ben-tre-1-ngay.jpg','done',' 1590070465612_koe1421037598_du-lich-mien-tay-song-nuoc-my-tho-ben-tre-1-ngay.jpg',7,NULL,NULL,'new','2020-05-21 14:14:25',NULL,NULL),(17,'/img/1590070567916_wrt1421037550_du-lich-mien-tay-song-nuoc-my-tho-ben-tre-1-ngay.jpg','done',' 1590070567916_wrt1421037550_du-lich-mien-tay-song-nuoc-my-tho-ben-tre-1-ngay.jpg',7,NULL,NULL,'new','2020-05-21 14:16:08',NULL,NULL),(18,'/img/1590070577852_qod1421037566_du-lich-mien-tay-song-nuoc-my-tho-ben-tre-1-ngay.jpg','done',' 1590070577852_qod1421037566_du-lich-mien-tay-song-nuoc-my-tho-ben-tre-1-ngay.jpg',7,NULL,NULL,'new','2020-05-21 14:16:17',NULL,NULL),(19,'/img/1590072107899_224284501.jpg','done',' 1590072107899_224284501.jpg',NULL,2,NULL,'new','2020-05-21 14:41:48',NULL,NULL),(20,'/img/1590127140843_du-lich-phu-quoc-3-ngay-2-dem.jpg','done',' 1590127140843_du-lich-phu-quoc-3-ngay-2-dem.jpg',8,NULL,NULL,'new','2020-05-22 05:59:00',NULL,NULL),(21,'/img/1590127145505_xod1421396280_tour-du-lich-phu-quoc-the-muc-dem-1-ngay.jpg','done',' 1590127145505_xod1421396280_tour-du-lich-phu-quoc-the-muc-dem-1-ngay.jpg',8,NULL,NULL,'new','2020-05-22 05:59:05',NULL,NULL),(22,'/img/1590128147953_oxp1436146811_tour-du-lich-cu-lao-cham-trong-1-ngay-dl3.jpg','done',' 1590128147953_oxp1436146811_tour-du-lich-cu-lao-cham-trong-1-ngay-dl3.jpg',9,NULL,NULL,'new','2020-05-22 06:15:48',NULL,NULL),(23,'/img/1590128159456_sgy1436146812_tour-du-lich-cu-lao-cham-trong-1-ngay-dl3.jpg','done',' 1590128159456_sgy1436146812_tour-du-lich-cu-lao-cham-trong-1-ngay-dl3.jpg',9,NULL,NULL,'new','2020-05-22 06:15:59',NULL,NULL),(26,'/img/1590129173507_kinh-nghiem-du-lich-ha-noi-1.jpg','done',' 1590129173507_kinh-nghiem-du-lich-ha-noi-1.jpg',10,NULL,NULL,'new','2020-05-22 06:32:53',NULL,NULL),(27,'/img/1590129179478_cauthehuc.png','done',' 1590129179478_cauthehuc.png',10,NULL,NULL,'new','2020-05-22 06:32:59',NULL,NULL),(28,'/img/1590129838300_Quảng-trường-Lâm-Viên-Đà-Lạt.png','done',' 1590129838300_Quảng-trường-Lâm-Viên-Đà-Lạt.png',NULL,3,NULL,'new','2020-05-22 06:43:58',NULL,NULL),(29,'/img/1590130175048_shutterstock_457851628.jpg','done',' 1590130175048_shutterstock_457851628.jpg',NULL,4,NULL,'new','2020-05-22 06:49:35',NULL,NULL),(30,'/img/1590130387750_orange-baking-class-youtube-thumbnail-15837483370941883581683.png','done',' 1590130387750_orange-baking-class-youtube-thumbnail-15837483370941883581683.png',NULL,5,NULL,'new','2020-05-22 06:53:07',NULL,NULL),(31,'/img/1590131085864_top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-1.jpg','done',' 1590131085864_top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-1.jpg',NULL,6,NULL,'new','2020-05-22 07:04:45',NULL,NULL),(32,'/img/1590136436493_hqdefault.jpg','done',' 1590136436493_hqdefault.jpg',2,NULL,NULL,'new','2020-05-22 08:33:56',NULL,NULL),(33,'/img/1590136438971_ly-son-1-e1509706803776.jpg','done',' 1590136438971_ly-son-1-e1509706803776.jpg',2,NULL,NULL,'new','2020-05-22 08:33:59',NULL,NULL),(34,'/img/1590136441850_unnamed (2).jpg','done',' 1590136441850_unnamed (2).jpg',2,NULL,NULL,'new','2020-05-22 08:34:01',NULL,NULL),(35,'/img/1590136444715_gioi-thieu-ban-do-du-lich-quang-ngai-vntrip.vn_-e1510565790364.png','done',' 1590136444715_gioi-thieu-ban-do-du-lich-quang-ngai-vntrip.vn_-e1510565790364.png',2,NULL,NULL,'new','2020-05-22 08:34:04',NULL,NULL),(36,'/img/1590136521508_tf_191211101324_831910.jpg','done',' 1590136521508_tf_191211101324_831910.jpg',1,NULL,NULL,'new','2020-05-22 08:35:21',NULL,NULL),(37,'/img/1590136524894_du-thuyen-golden-cruises-9999.jpg','done',' 1590136524894_du-thuyen-golden-cruises-9999.jpg',1,NULL,NULL,'new','2020-05-22 08:35:25',NULL,NULL),(38,'/img/1590136606671_19510157_1363043060412258_1740856846236437359_n.jpg','done',' 1590136606671_19510157_1363043060412258_1740856846236437359_n.jpg',3,NULL,NULL,'new','2020-05-22 08:36:46',NULL,NULL),(39,'/img/1590136612626_img].jpg','done',' 1590136612626_img].jpg',3,NULL,NULL,'new','2020-05-22 08:36:52',NULL,NULL),(40,'/img/1590136677349_19510157_1363043060412258_1740856846236437359_n.jpg','done',' 1590136677349_19510157_1363043060412258_1740856846236437359_n.jpg',4,NULL,NULL,'new','2020-05-22 08:37:57',NULL,NULL),(41,'/img/1590136682289_tf_200505033734_602991.jpg','done',' 1590136682289_tf_200505033734_602991.jpg',4,NULL,NULL,'new','2020-05-22 08:38:03',NULL,NULL),(42,'/img/1590136685190_tfd_200220061906_362657.jpg','done',' 1590136685190_tfd_200220061906_362657.jpg',4,NULL,NULL,'new','2020-05-22 08:38:05',NULL,NULL),(43,'/img/1590136688000_tfd_200505033710_537137.jpg','done',' 1590136688000_tfd_200505033710_537137.jpg',4,NULL,NULL,'new','2020-05-22 08:38:08',NULL,NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`images_BEFORE_UPDATE` BEFORE UPDATE ON `images` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;

--
-- Table structure for table `mails`
--

DROP TABLE IF EXISTS `mails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mails` (
  `idMail` int(11) NOT NULL AUTO_INCREMENT,
  `from` varchar(100) DEFAULT NULL,
  `to` varchar(100) DEFAULT NULL,
  `subject` varchar(200) DEFAULT NULL,
  `content` mediumtext,
  `status` varchar(100) DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateEdited` datetime DEFAULT NULL,
  `dateDeleted` datetime DEFAULT NULL,
  PRIMARY KEY (`idMail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mails`
--

LOCK TABLES `mails` WRITE;
/*!40000 ALTER TABLE `mails` DISABLE KEYS */;
/*!40000 ALTER TABLE `mails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noticeto`
--

DROP TABLE IF EXISTS `noticeto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `noticeto` (
  `idNoticeTo` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(100) DEFAULT 'unread',
  `idNotification` int(11) DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idNoticeTo`),
  KEY `FK_NoticeTo_Accounts` (`idAccount`),
  KEY `FK_NoticeTo_Notifications` (`idNotification`),
  CONSTRAINT `FK_NoticeTo_Accounts` FOREIGN KEY (`idAccount`) REFERENCES `accounts` (`idAccount`),
  CONSTRAINT `FK_NoticeTo_Notifications` FOREIGN KEY (`idNotification`) REFERENCES `notifications` (`idNotification`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticeto`
--

LOCK TABLES `noticeto` WRITE;
/*!40000 ALTER TABLE `noticeto` DISABLE KEYS */;
/*!40000 ALTER TABLE `noticeto` ENABLE KEYS */;
UNLOCK TABLES;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`noticeto_BEFORE_UPDATE` BEFORE UPDATE ON `noticeto` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `idNotification` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `contentNotification` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'Nội dung thông báo là',
  `dateTime` datetime(6) DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateEdited` datetime DEFAULT NULL,
  `dateDeleted` datetime DEFAULT NULL,
  PRIMARY KEY (`idNotification`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`notifications_BEFORE_UPDATE` BEFORE UPDATE ON `notifications` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orderdetails` (
  `idOrderDetail` int(11) NOT NULL AUTO_INCREMENT,
  `unitPrice` double DEFAULT NULL,
  `amountPeople` int(11) DEFAULT NULL,
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `idOrder` int(11) DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idOrderDetail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetails` ENABLE KEYS */;
UNLOCK TABLES;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`orderdetails_BEFORE_UPDATE` BEFORE UPDATE ON `orderdetails` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `idOrder` int(11) NOT NULL AUTO_INCREMENT,
  `PIN` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `totalPrice` double DEFAULT NULL,
  `numberPeople` int(11) DEFAULT '1',
  `numberChildren` int(11) DEFAULT '0',
  `numberYoung` int(11) DEFAULT '0',
  `numberBaby` int(11) DEFAULT '0',
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `notes` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `buyer` varchar(100) DEFAULT NULL,
  `travelerType` varchar(100) DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `idTour` int(11) DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idOrder`),
  KEY `FK_Orders_Accounts` (`idAccount`),
  CONSTRAINT `FK_Orders_Accounts` FOREIGN KEY (`idAccount`) REFERENCES `accounts` (`idAccount`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'1589789456731','verify',3790000,1,0,0,0,'[\"Yên Bái\",\"Nghĩa Lộ\",\"Trung Tâm\"]','0983982933','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,1,'new','2020-05-18 08:10:58',NULL,NULL),(2,'1589789537877','verify',3790000,1,0,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,1,'new','2020-05-18 08:12:18',NULL,NULL),(3,'1589789577625','verify',3790000,1,0,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,1,'new','2020-05-18 08:12:59',NULL,NULL),(4,'1589789586914','verify',3790000,1,0,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,1,'new','2020-05-18 08:13:08',NULL,NULL),(5,'1589790471095','verify',3790000,1,0,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,1,'new','2020-05-18 08:27:52',NULL,NULL),(6,'1589790558357','verify',0,1,0,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,0,'new','2020-05-18 08:29:20',NULL,NULL),(7,'1589790563336','verify',0,1,0,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,0,'new','2020-05-18 08:29:25',NULL,NULL),(8,'1589790585095','verify',0,1,0,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,0,'new','2020-05-18 08:29:49',NULL,NULL),(9,'1589790648909','verify',3790000,1,0,0,0,'[\"Yên Bái\",\"Nghĩa Lộ\",\"Trung Tâm\"]','0983982933','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,1,'new','2020-05-18 08:30:50',NULL,NULL),(10,'1589790695351','verify',3790000,1,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,1,'new','2020-05-18 08:31:37',NULL,NULL),(11,'1589953861900','verify',9096000,1,1,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,1,'new','2020-05-20 05:51:02',NULL,NULL),(12,'1589954251933','verify',9096000,1,1,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,1,'new','2020-05-20 05:57:32',NULL,NULL),(13,'1589955452793','verify',638400,1,1,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,3,'new','2020-05-20 06:17:33',NULL,NULL),(14,'1589957107626','verify',3790000,1,0,0,0,'[\"Yên Bái\",\"Nghĩa Lộ\",\"Trung Tâm\"]','0983982933','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,1,'new','2020-05-20 06:45:08',NULL,NULL),(15,'1589957166602','verify',1729000,2,1,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,3,'new','2020-05-20 06:46:06',NULL,NULL),(16,'1589957508086','verify',1729000,2,1,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,3,'new','2020-05-20 06:51:48',NULL,NULL),(17,'1589964040899','verify',266000,1,0,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,3,'new','2020-05-20 08:40:41',NULL,NULL),(18,'1589957508086','verify',665000,2,1,0,0,'Hồ Chí Minh,Thủ Đức,Trường Thọ','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,3,'new','2020-05-20 08:42:34',NULL,NULL),(19,'1589957508086','verify',665000,2,1,0,0,'Hồ Chí Minh,Thủ Đức,Trường Thọ','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,3,'new','2020-05-20 08:43:56',NULL,NULL),(20,'1589957508086','verify',665000,2,1,0,0,'Hồ Chí Minh,Thủ Đức,Trường Thọ','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,3,'new','2020-05-20 08:45:23',NULL,NULL),(21,'1589957508086','verify',665000,2,1,0,0,'Hồ Chí Minh,Thủ Đức,Trường Thọ','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,3,'new','2020-05-20 08:45:34',NULL,NULL),(22,'1589957508086','verify',665000,2,1,0,0,'Hồ Chí Minh,Thủ Đức,Trường Thọ','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,3,'new','2020-05-20 08:45:48',NULL,NULL),(23,'1589966533292','verify',7580000,1,2,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,1,'new','2020-05-20 09:22:13',NULL,NULL),(24,'1589967163977','closed',9475000,2,1,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,1,'edited','2020-05-20 09:32:44',NULL,'2020-05-27 08:28:53'),(25,'1589967350502','verify',9475000,2,1,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,1,'new','2020-05-20 09:35:50',NULL,NULL),(26,'1590208155949','verify',5681000,2,0,0,0,'[\"Yên Bái\",\"Nghĩa Lộ\",\"Trung Tâm\"]','0983982933','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,4,'new','2020-05-23 04:29:17',NULL,NULL),(27,'1590208276626','verify',5681000,2,0,0,0,'[\"Yên Bái\",\"Nghĩa Lộ\",\"Trung Tâm\"]','0983982933','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,4,'new','2020-05-23 04:31:18',NULL,NULL),(28,'1590211051982','verify',798000,2,2,0,0,'[\"Yên Bái\",\"Nghĩa Lộ\",\"Trung Tâm\"]','0983982933','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,3,'new','2020-05-23 05:17:34',NULL,NULL),(29,'1590564678226','verify',5681000,2,0,0,0,'[\"Yên Bái\",\"Nghĩa Lộ\",\"Trung Tâm\"]','0983982933','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,4,'new','2020-05-27 07:31:29',NULL,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`orders_BEFORE_UPDATE` BEFORE UPDATE ON `orders` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;

--
-- Table structure for table `paymethod`
--

DROP TABLE IF EXISTS `paymethod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paymethod` (
  `idPayMethod` int(11) NOT NULL AUTO_INCREMENT,
  `typeCard` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `numberCard` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `expirationDay` datetime DEFAULT NULL,
  `ownerName` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `nameBank` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `numberBank` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `amountReceived` float DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idPayMethod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymethod`
--

LOCK TABLES `paymethod` WRITE;
/*!40000 ALTER TABLE `paymethod` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymethod` ENABLE KEYS */;
UNLOCK TABLES;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`paymethod_BEFORE_UPDATE` BEFORE UPDATE ON `paymethod` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `idPost` int(11) NOT NULL AUTO_INCREMENT,
  `titlePost` varchar(200) DEFAULT NULL,
  `describe` varchar(1000) DEFAULT NULL,
  `contentPost` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `status` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  `tags` varchar(200) DEFAULT '[]',
  `views` int(11) DEFAULT '0',
  `vote` int(11) DEFAULT '0',
  `idAccount` int(11) DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idPost`),
  KEY `FK_Posts_Accounts` (`idAccount`),
  CONSTRAINT `FK_Posts_Accounts` FOREIGN KEY (`idAccount`) REFERENCES `accounts` (`idAccount`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Kinh Nghiệm Du Lịch Đảo Lý Sơn Từ Đà Nẵng Chi Tiết Nhất','Nổi tiếng với vẻ đẹp như “chốn thiên đường” giữa lòng biển rộng, Lý Sơn chắc chắn là hòn đảo được nhiều phượt thủ nhắm tới trong hành trình du lịch của mình. Cách trung tâm thành phố Đà Nẵng chỉ khoảng 130km, tuy nhiên để đến Lý Sơn không phải điều đơn giản. Vì vậy, đừng bỏ qua kinh nghiệm du lịch đảo Lý Sơn từ Đà Nẵng chi tiết do Mytour giới thiệu dưới đây. ','<h2>1. Cách di chuyển từ Đà Nẵng đến đảo Lý Sơn&nbsp;</h2><p><strong>- Từ Đà Nẵng đến Quảng Ngãi&nbsp;</strong></p><p>Để đến với Lý Sơn điều đầu tiên bạn cần làm là tìm hiểu cách đi từ <a href=\"https://mytour.vn/c65/khach-san-tai-da-nang.html\">Đà Nẵng</a> đến Quảng Ngãi. Dù&nbsp;bạn là người du lịch&nbsp;đảo Lý Sơn tự túc, điều này&nbsp;không quá khó. Theo đó, có hai phương thức di chuyển chủ yếu mà bạn có thể chọn lựa là mô tô hoặc tàu lửa.&nbsp;</p><figure class=\"image\"><img src=\"https://lh6.googleusercontent.com/aX5nAXSopzcB6JfYGi40NXsGDs6xlH2REYKmaN-96nYO7w5BFB-Fr5BF_nBdkK3FcrlzZ6gJktl-3XyyngPcEX3S1FMRLDvyXW3XD574nrBiL8XT8GpaPagSn6PF7Cnx0iQdGnZQ\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @annatasia_huyn&nbsp;</p><figure class=\"image\"><img src=\"https://lh5.googleusercontent.com/nIOvsaMEjlKdgDwI3ymoDVjE6NFNZKDOTHSzo9lNJwgUFjOZB6Q33AgGcK_cw4Aoy_Tsaj7WZHts_KaoYM4nKjvmVAjraLHaKrPLOKSdxr9Bfe0kQRnY9Ts438H1V1s1rydFzFya\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @fivitel_danang&nbsp;</p><figure class=\"image\"><img src=\"https://lh6.googleusercontent.com/naCuiZJINe9IVBVNJALs_V_UXyJY2txH-11I0JyrBdcmzVHYOxJNGQ29DJOY2Jx14UpT7u5kzeR9ENym75b4ENM0oPTNb-semE0WWoGaRIvyFiY4fdwFW1NDe3rLTi0BG-6eVg1E\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @hello__jeon__&nbsp;</p><p>Với các phượt thủ, mô tô có thể là phương tiện quen thuộc và mang đến cảm giác chủ động hơn, tiết kiệm hơn so với tàu lửa. Tuy nhiên trên thực tế, đi tàu lửa lại mang đến kha khá lợi ích như đảm bảo an toàn, tránh nguy cơ phát sinh sự cố giao thông, xe cộ cũng như mang đến cơ hội để bạn được thư giãn sau nhiều ngày rong ruổi trước đó, tiếp thêm sức mạnh cho hành trình du lịch Lý Sơn sắp tới.</p><p><strong>- Từ cảng Sa Kỳ (Quảng Ngãi) đến đảo Lý Sơn&nbsp;</strong></p><p>Để đến Lý Sơn từ Quảng Ngãi, bạn sẽ phải di chuyển tới cảng Sa Kỳ để đón tàu. Lưu ý là tại đây chỉ có duy nhất một chuyến khởi hành từ 6h30 - 8h30 nên hãy chú ý “canh” thời gian để tránh bỏ lỡ tàu, vừa tiết kiệm thời gian công sức, vừa hạn chế được khả năng “thất thoát”.&nbsp;</p><h2>2. Hướng dẫn tới các điểm vui chơi trên đảo Lý Sơn&nbsp;</h2><figure class=\"image\"><img src=\"https://lh6.googleusercontent.com/acmB25vtyTc2xtNmXyHLG3W_Lauv64qnEwlRuzvR8MupzVHZwuoVq9GrEkF2qTGnBIwKpHw6HKzP4xfoBaHCvD-9vYQrNOVLi7t77YxhhmbXJP9JvG-iJ1iAs97rlKsmw3Wza1eO\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @xeo_lin_lar&nbsp;</p><figure class=\"image\"><img src=\"https://lh3.googleusercontent.com/IeniD6GSJe7IBudjS2MkZBDyzfWnF8wa84dHyRTygbJRiypNfb7OI5D3CE2OWPVrpyx1MeUvbjqdBO_IJ4ku0UVxEqwlFfCI4ZmBfy0_7uoKl5FOMZnhQmds4i-a_yHuNMJluo3p\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @tranggbeobeo&nbsp;</p><p>Chính thức đặt chân và bắt đầu hành trình du lịch đảo Lý Sơn, bạn sẽ có điều kiện ghé thăm rất nhiều điểm vui chơi trên đảo dựa trên hướng dẫn của chính những người dân địa phương thân thiện, mến khách. Trong đó, điểm đến đặc biệt phải kể tới đầu tiên chính là bãi tắm <a href=\"https://mytour.vn/location/12078-di-thuyen-thung-ngam-san-ho-o-dao-be-ly-son.html\">đảo Bé</a>. Dù diện tích khá khiêm tốn nhưng bãi tắm đảo Bé lại mang vẻ đẹp vô cùng hấp dẫn với bãi cát trắng mịn được ôm lấy bởi nước biển xanh trong tươi mát cùng những vách đá vừa hùng vĩ, vừa thơ mộng.&nbsp;</p><figure class=\"image\"><img src=\"https://lh6.googleusercontent.com/27TIkHUOGpAEUCo6VO8kzvJAcESOVY4PIElSZu1gJNl381UOijmc74mG38yyvuV2AHJ8ZvjgbXzKCb6GotaxIzZlZqNTNUQtbA_e-ck5Q1r1dM_xGr_gT_GMcV_kMzgmUEeZ_gov\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @lindathuw&nbsp;</p><figure class=\"image\"><img src=\"https://lh3.googleusercontent.com/-C2AG92weS3VA_ZUyHFbzeVxHErlGX-8j-kyJFQhXBZW0eHooT8FKWW28sgrdXUN9kcHOWYPCD7zZ4Q01CW23mEY0Q5hxfBa6H104KGrSV8OkPGUgau4RVWqZ5d5DEXYXAXxOI1J\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @hoangtuanxia&nbsp;</p><p><strong>Ở đâu khi đi du lịch tại </strong><a href=\"https://mytour.vn/c48/khach-san-tai-quang-ngai.html\"><strong>Quảng Ngãi ?</strong></a></p><p><a href=\"https://mytour.vn/13155-khach-san-muong-thanh-holiday-ly-son.html\">Khách sạn Mường Thanh Holiday Lý Sơn</a></p><p>Giá từ: <strong>375,000 đ</strong></p><p>Bên cạnh bãi tắm đảo Bé, bạn cũng đừng quên ghé qua cổng Tò Vò - vòm đá nham thạch hoàn toàn tự nhiên, được đánh giá đẹp hàng đầu Việt Nam và là địa điểm check in sống ảo được rất nhiều bạn trẻ yêu thích. Từ cầu cảng qua cổng chào chính của Lý Sơn rồi rẽ trái, men theo đường đến chùa Đục là bạn có thể tìm thấy nơi này. Bất kể tới đây vào bình minh hay hoàng hôn, bạn chắc chắn sẽ đều có được những bức hình ưng ý.&nbsp;</p><figure class=\"image\"><img src=\"https://lh5.googleusercontent.com/lB3SJoLLi3YJWwHC0vvFFKIK9FkZKk1Ko01gwQIZ5gbbAL--VVgn8OcFRI0OtySuxxwrrHVuzik3Jydeak8B_xqkKLdzdXFEM5jh13hhk2uRPvZ4A8EXHaiW1P8kQcmaMjqHxUNa\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @hamytims&nbsp;</p><figure class=\"image\"><img src=\"https://lh6.googleusercontent.com/lHsBXlsmOBzDVzqUiIXnFOiU2Ip1OpPH7rClDlQvL996rfLLfvYT67P2F6pC8TrfIRU_tbcAnKEmt2a1kVWoi5Xn7nyOwvTht-CrzrHPZ-bcWwKZAvrRZLfBWMGiTy1CBkgfubS4\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @liti57&nbsp;</p><p>Ngoài ra, nếu yêu thích hoạt động leo núi, bạn có thể tìm đến đỉnh Thới Lới khi du lịch đảo Lý Sơn. Với độ cao lên tới 149m - cao nhất đảo Lý, đây chắc chắn là điểm đến hoàn hảo cho những ai đang mong chờ cơ hội được chiêm ngưỡng toàn bộ vẻ đẹp tự nhiên mà quyến rũ của đảo. Ngoài ra, còn rất rất nhiều điểm <a href=\"https://mytour.vn/location/11340-10-diem-check-in-dao-ly-son-cuc-chat-ma-ban-khong-the-bo-qua.html\">check-in đảo Lý Sơn</a> khác mà bạn có thể khám phá thêm nếu có nhiều thời gian dừng chân tại hòn đảo này.</p><h2>3. Du lịch&nbsp;Lý Sơn ăn gì?&nbsp;</h2><p>Đến Lý Sơn, bạn hoàn toàn không phải lo lắng nhiều về vấn đề ăn uống bởi danh sách những món đặc sản không thể bỏ qua sau đây:&nbsp;</p><p>Các loại gỏi: Gỏi rong biển, gỏi tỏi, gỏi sứa.&nbsp;</p><figure class=\"image\"><img src=\"https://lh3.googleusercontent.com/GUUvLleInY1xM12aE5nL4Zz_ruVjJ2HRzEFSe19XptDhwwxjwZo5p3YJ6dygjlRZJPGlDknDWLVrQKwjvBl09tVaY0ipvKclXqN7NxKv0tVBBbbQGqQuzqPk3zjjJzPNlWmC9jp9\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @changchang.93&nbsp;</p><figure class=\"image\"><img src=\"https://lh3.googleusercontent.com/aiPorxqqFJLYl-CgBgRHGFUtgj-vUV2jmwF0zyemTNyq10JApO8EKkIxgTJYDZQdySFKHX1_jiKkz-aAxiT_eX4Bkv6VkmTEtax4fmcQeQ0bITlj2MYLMU9P3FDYBJVWv4T_fCH6\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @hungdes&nbsp;</p><p>Dù chỉ là những món ăn đơn giản, quen thuộc với nhiều người dân Lý Sơn, tuy nhiên những loại gỏi tại đây lại gây ấn tượng mạnh với du khách, đặc biệt là gỏi sứa. Vị mềm, ngọt của sứa hòa với vị chát của chuối, vị béo của đậu phộng rang và hương gia vị rau thơm, rau quế chắc chắn sẽ mang đến cho bạn món ăn đặc sắc ngày hè.&nbsp;</p><p>Các loại hải sản</p><figure class=\"image\"><img src=\"https://lh5.googleusercontent.com/YOOc0n1Y9862dZbbi-Ugw5i9jU-Kqfq31-pSs3cTil_K41Kjvgbj-x61H4bvobLpoYE09p4MPHBeu1eCS2euFvvePzw0MSuZdjH8lBJJq3y4m-Pd4RcQh2T08Ovpxo7G4MoyTN1c\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @gio_an.nguyen&nbsp;</p><figure class=\"image\"><img src=\"https://lh6.googleusercontent.com/jZB7bkSuANMJnmBKnVSjGTxuSLNiX5qQveEIDOQAo9o32DI2OnGqc1o49IiMGNIbldh1k8rQB_voGuX67K9mE_sshffDTxtgZR9CkfuJ8AuXOjlMCx63czGbOqW-YHQihKCNMnVF\" alt=\"du-lich-dao-ly-son\"></figure><p>Ảnh: @heyingblog&nbsp;</p><p>Bên cạnh gỏi, hải sản cũng là sản phẩm đặc trưng của Lý Sơn thu hút nhiều khách du lịch, trong đó tiêu biểu có thể kể đến một số món ấn tượng như: cua Huỳnh Đế, cua dẹt, hàu son xào, cá tà ma, ốc tượng…&nbsp;</p><p>Trên đây là kinh nghiệm du lịch đảo&nbsp;Lý Sơn từ Đà Nẵng chi tiết mà bạn có thể tham khảo. Hãy ghi nhớ phương thức di chuyển, một vài điểm đến đáng chú ý và những món ăn đặc sắc nơi đây để tự mình thử nghiệm khi đến với hòn đảo xinh đẹp này.&nbsp;</p>','undefined','undefined','[\"Biển đảo\"]',0,3,7,'edited','2020-05-18 08:41:18',NULL,'2020-05-20 04:29:00'),(2,'Kinh nghiệm du lịch Nha Trang tự túc cho các tín đồ “cuồng đi”','Nha Trang được coi là một địa điểm khá thú vị cho dân du lịch, bởi thành phố này là một trong những nơi “hiếm có khó tìm” khi có cả cát trắng, biển xanh, nắng vàng và núi non trùng điệp nữa. Để có thể khám phá tất tần tật chốn thiên đường này, bạn cần có một bộ các kinh nghiệm du lịch Nha Trang đúng không nào? Hãy để Traveloka chia sẻ bộ bí kíp đó ngay cho bạn nhé!','<p>Tạm rời xa thành phố đầy khói bụi, xe cộ và sự ồn ào, bạn hãy cùng bạn bè và người thân về với vùng biển yên bình, với làn nước mát lạnh, sự trong lành trong từng hơi thở và thả mình vào bầu không khí mang theo làn hơi biển cả. Từ bây giờ hãy trang bị cho mình kinh nghiệm du lịch Nha Trang, biết thêm về vùng đất thiên đường này cũng là một cách để chuyến đi thêm phần trọn vẹn.</p><h2><strong>1. Đến Nha Trang mùa nào đẹp?</strong></h2><p>Là một thành phố mang trong mình khí hậu ôn hòa, mùa đông không quá lạnh, hạ cũng chẳng quá gay gắt nên Nha Trang có thể chào đón bạn bất cứ lúc nào. Nhưng với kinh nghiệm du lịch Nha của Traveloka, khoảng thời gian đẹp nhất cho bạn chính là khoảng thời gian từ tháng 1 đến tháng 8 (đẹp nhất là tháng 7,8 và đầu tháng 9). Lúc này thời tiết tại đây khá dịu, khô mát và thoáng đãng là thời điểm đẹp nhất để có thể khám phá Nha Trang một cách trọn vẹn.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-11.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Biển Nha Trang\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-11.jpg 3008w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-11-300x199.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-11-768x511.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-11-640x426.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-11-585x389.jpg 585w\" sizes=\"100vw\" width=\"3008\"></figure><p>Nha Trang đẹp nhất là vào tháng 7,8 và đầu tháng 9. @dung.dreamy</p><p>Vào khoảng tháng 9 đến tháng 12, tức mùa cuối năm sẽ xuất hiện các cơn mưa rả rích kéo dài. Những trận mưa này sẽ ít nhiều làm ảnh hưởng đến chuyến đi khám phá của bạn, nhưng với một số người, họ sẽ thích Nha Trang se lạnh một cách khác biệt tại thời điểm này. Nếu có dịp đi vào thời gian này bạn nên chuẩn bị ký các dụng cụ cần thiết như ô, áo mưa để đối phó với các trận mưa bất ngờ nhé!</p><h2><strong>2. Cách di chuyển đến Nha Trang</strong></h2><p>Có rất nhiều phương tiện để đi du lịch Nha Trang như máy bay, tàu hỏa, xe khách. Bạn có thể lựa chọn phương tiện tùy theo khả năng tài chính của mình cũng như thời gian du lịch nghỉ dưỡng của mình là bao lâu.</p><p><i><strong>Cách di chuyển tới Nha Trang bằng máy bay</strong></i></p><p>Bạn nên chọn những chuyến bay đáp ở sân bay Cam Ranh, sau đó bắt taxi để đi vào thành phố Nha Trang. (Lưu ý: Khi mua vé bạn nên mua vé bay khứ hồi để phòng trường hợp hết vé nhé). Một số hãng máy bay có đường bay khứ hồi bạn nên tham khảo:</p><ul><li>Trong nước: Vietnam Airlines, Jetstar, Vietjet Air khởi hành từ Sài Gòn, Hà Nội, Đà Nẵng.</li><li>Quốc tế: Korean Air, Air France, Vietnam Airlines, Jetstar khởi hành từ Singapore, Moscow, Incheon, Fukuoka, Nagoya, Osaka, Tokyo Haneda, Tokyo Narita.</li></ul><p>Giá vé máy bay tùy theo từng thời điểm mua vé, chặng bay và hãng máy bay mà có giá vé khác nhau. Có 2 tuyến bay chính là Sài Gòn &amp; Hà Nội:</p><ul><li>Giá vé Sài Gòn – Nha Trang: Thấp nhất khoảng 400.000 VND / vé / chiều / người</li><li>Giá vé Hà Nội – Nha Trang: Thấp nhất khoảng 500.000 VND / vé / chiều / người</li></ul><p><i><strong>Hướng dẫn cách đi du lịch tới Nha Trang bằng tàu hỏa</strong></i></p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-27.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Ga tàu hỏa Nha Trang\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-27.jpg 3008w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-27-300x168.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-27-768x431.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-27-640x359.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-27-585x328.jpg 585w\" sizes=\"100vw\" width=\"3008\"></figure><p>Đi du lịch tới Nha Trang bằng tàu hỏa. @Internet</p><p>Đi tàu hỏa từ Hà Nội tới Nha Trang: Giá vé thấp nhất 527.000 VND, tùy theo loại tàu đi, loại chỗ ngồi mà giá cả khác nhau nhé.</p><ul><li>Chiều đi: Tàu SE1, SE3, SE5, SE7, SE9</li><li>Chiều về: Tàu SE2, SE4, SE6, SE8, SE10</li></ul><p>Từ Sài Gòn – Nha Trang: Giá vé tham khảo thấp nhất khoảng 169.000 VND, tùy theo từng loại ghế và loại tàu.</p><ul><li>Chiều đi: SE2, SE4, SE6, SE8, SE10, SE12, SE22, SE28, SQN2, SNT2</li><li>Chiều về: SE1, SE3, SE5, SE7, SE9, SE21, SQN1, SNT1</li></ul><p><i><strong>Đi du lịch Nha Trang bằng xe khách</strong></i></p><p>Hà Nội: Bạn có thể đi ra bến xe Mỹ Đình, bến xe Lương Yên… để bắt xe đi Nha Trang. Với cẩm nang kinh nghiệm du lịch Nha Trang, để tiết kiệm kinh phí du lịch Nha Trang bạn nên lựa chọn đi xe khách Hoàng Long, xe giường nằm chất lượng khá tốt mà giá vé lại rẻ 710.000 VND / người / giường.</p><p>Sài Gòn: Một số hãng xe khách đi Nha Trang giá rẻ, chất lượng bạn nên tham khảo:</p><ul><li>Nhà xe Phương Trang –&nbsp;1900 6067</li><li>Nhà xe Minh Dũng – 0283 519 0519</li><li>Nhà xe Liên Hưng – 1900 6772</li><li>Nhà xe Phương Nam –&nbsp;028 3838 9292</li><li>Nhà xe Trà Lan Viên –&nbsp;091 734 31 79</li><li>Nhà xe Cúc Tùng – 1900 2231</li><li>Nhà xe Hà Linh –&nbsp;0258 3817 566</li></ul><p>Đà Lạt: Có nhà xe Phương Trang –&nbsp;1900 6067</p><h2><strong>3. Ở đâu tại Nha Trang&nbsp;</strong></h2><p>Tại thiên đường nghỉ dưỡng này thì bạn không cần lo đến việc sẽ không kiếm được nơi lưu trú phù hợp với nhu cầu của mình. Cùng điểm qua một số nhu cầu lưu trú phổ biến và nơi lưu trú phù hợp với từng như cầu nhé!</p><ul><li><i><strong>Khách sạn phù hợp cho gia đình</strong></i></li></ul><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-38.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Khách sạn Sen Việt Premium Hotel Nha Trang\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-38.jpg 1024w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-38-300x200.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-38-768x512.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-38-640x426.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-38-585x390.jpg 585w\" sizes=\"100vw\" width=\"1024\"></figure><p>Khách sạn Sen Việt Premium Hotel Nha Trang. @Internet</p><p>Với một gia đình thì diện tích là một tiêu chí được đặt lên hàng đầu mỗi khi lên kế hoạch du lịch. Không gian hoàn toàn thoải mái và thoáng đãng vừa đủ cho tất cả các thành viên trong gia đình có thể sum vầy nhưng vẫn có không gian riêng. Các trang thiết bị, dụng cụ vệ sinh được trang bị tại gia. Có phòng sinh hoạt chung, khu vực ăn uống của cả gia đình và phòng bếp cho các bà nội trợ mỗi khi “nhớ nghề”. Nhiều phòng ngủ chắc chắn sẽ là lựa chọn tuyệt vời để đảm bảo không gian riêng tư và không gian sinh hoạt cho cả gia đình.&nbsp;<a href=\"https://www.traveloka.com/vi-vn/hotel/vietnam/white-lion-hotel-nha-trang-1000000502685?utm_id=2jIboaI2&amp;utm_source=blog.traveloka.com&amp;utm_medium=referral&amp;utm_campaign=AD-VN-HO-OM-BLOG-Na-Na&amp;utm_term=KNDLNTTTCCTDCD-TGT-anchortext\">White Lion Hotel Nha Trang </a>và <a href=\"https://www.traveloka.com/vi-vn/hotel/vietnam/v-hotel-nha-trang-3000020009806?utm_id=2jIboaI2&amp;utm_source=blog.traveloka.com&amp;utm_medium=referral&amp;utm_campaign=AD-VN-HO-OM-BLOG-Na-Na&amp;utm_term=KNDLNTTTCCTDCD-TGT-anchortext\">Khách sạn V Nha Trang</a> là những nơi đáp ứng được các tiêu chí đó</p><ul><li><i><strong>Khách sạn phù hợp cho nhóm bạn</strong></i></li></ul><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-36.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Khách sạn Queen Ann Nha Trang\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-36.jpg 1024w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-36-300x200.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-36-768x512.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-36-640x426.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-36-585x390.jpg 585w\" sizes=\"100vw\" width=\"1024\"></figure><p>Khách sạn Queen Ann Nha Trang. @Internet</p><p>Đi đâu không quan trọng, quan trọng là ”ở” cùng nhau, chính là tiêu chí của nhóm các bạn trẻ khi đi du lịch. Với không gian xinh xắn, vô vàng các góc sống ảo giúp bạn chẳng cần đi đâu xa, ở ngay trong căn hộ vẫn có hình check-in sang chảnh. Mức giá phải chẳng cũng là một điểm sáng khiến cho các nhóm bạn trẻ đưa ra quyết định, Và vị trí địa lý thuận lợi cũng là một điểm cộng, gần các khu vui chơi giải trí hoặc những địa điểm nổi tiếng tại Nha Trang hay thậm chí là nằm gần các khu ăn vặt sầm uất cũng là một tiêu chí mà các bạn nên xem xét, ví dụ như: <a href=\"https://www.traveloka.com/vi-vn/hotel/vietnam/apollo-hotel-nha-trang-3000010037482?utm_id=2jIboaI2&amp;utm_source=blog.traveloka.com&amp;utm_medium=referral&amp;utm_campaign=AD-VN-HO-OM-BLOG-Na-Na&amp;utm_term=KNDLNTTTCCTDCD-TGT-anchortext\">Apollo Hotel Nha Trang</a>, <a href=\"https://www.traveloka.com/vi-vn/hotel/vietnam/senkotel-hotel-nha-trang-3000010023795?utm_id=2jIboaI2&amp;utm_source=blog.traveloka.com&amp;utm_medium=referral&amp;utm_campaign=AD-VN-HO-OM-BLOG-Na-Na&amp;utm_term=KNDLNTTTCCTDCD-TGT-anchortext\">Khách sạn Senkotel Nha Trang</a> và <a href=\"https://www.traveloka.com/vi-vn/hotel/vietnam/queen-ann-nha-trang-hotel-3000010039314?utm_id=2jIboaI2&amp;utm_source=blog.traveloka.com&amp;utm_medium=referral&amp;utm_campaign=AD-VN-HO-OM-BLOG-Na-Na&amp;utm_term=KNDLNTTTCCTDCD-TGT-anchortext\">Khách sạn Queen Ann Nha Trang</a></p><ul><li><i><strong>Khách sạn phù hợp cho cặp đôi</strong></i></li></ul><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-1.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Nagar Hotel Nha Trang\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-1.jpg 2048w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-1-300x149.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-1-768x382.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-1-640x318.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-1-585x291.jpg 585w\" sizes=\"100vw\" width=\"2048\"></figure><p>Nagar Hotel Nha Trang. @Internet</p><p>Một không gian riêng tư tọa lạc gần sát biển với không khí trong lành, pha lẫn chút lãng mạn sẽ làm cho các cặp đôi dễ dàng có thiện cảm ngay từ cái nhìn đầu tiên như <a href=\"https://www.traveloka.com/vi-vn/hotel/vietnam/sun-city-hotel-nha-trang-1000000430754?utm_id=2jIboaI2&amp;utm_source=blog.traveloka.com&amp;utm_medium=referral&amp;utm_campaign=AD-VN-HO-OM-BLOG-Na-Na&amp;utm_term=KNDLNTTTCCTDCD-TGT-anchortext\">Sun City Hotel Nha Trang</a>, <a href=\"https://www.traveloka.com/vi-vn/hotel/vietnam/seaway-hotel-nha-trang-1000000675771?utm_id=2jIboaI2&amp;utm_source=blog.traveloka.com&amp;utm_medium=referral&amp;utm_campaign=AD-VN-HO-OM-BLOG-Na-Na&amp;utm_term=KNDLNTTTCCTDCD-TGT-anchortext\">Khách sạn Seaway Nha Trang</a><a href=\"https://www.traveloka.com/vi-vn/hotel/vietnam/nha-trang-beach-apartment-1000000542001\">.</a> <a href=\"https://www.traveloka.com/vi-vn/hotel/vietnam/nagar-hotel-3000020002445?utm_id=2jIboaI2&amp;utm_source=blog.traveloka.com&amp;utm_medium=referral&amp;utm_campaign=AD-VN-HO-OM-BLOG-Na-Na&amp;utm_term=KNDLNTTTCCTDCD-TGT-anchortext\">Nagar Hotel Nha Trang</a>. Nếu bạn chưa từng ngắm hoàng hôn tại Nha Trang thì đây sẽ là một địa điểm lý tưởng. Một buổi chiều hẹn hò bên ô của sổ với gió biển và hoàng hôn thật sự rất đáng để thử với người ấy.</p><ul><li>Tham khảo ngay <a href=\"https://blog.traveloka.com/vn/top-nhung-khach-san-nha-trang-gan-bien/\"><i><strong>danh sách những khách sạn Nha Trang gần biển</strong></i></a> để kỳ nghỉ thêm phần thi vị</li></ul><h2><strong>4. Các điểm tham quan ở Nha Trang</strong></h2><p>Để có thể khám phá hết các địa điểm đẹp, độc và lạ ở Nha Trang chắc hẳn bạn sẽ phải cần một khoảng thời gian khá dài đấy. Cho nên nếu chuyến đi của bạn chỉ với thời gian giới hạn, kinh nghiệm du lịch Nha Trang của Traveloka sẽ giúp bạn bằng cách gợi ý một số địa điểm nổi bật nhất tại thành phố biển này phù hợp với lịch trình ngắn ngày của bạn nhé.</p><p><i><strong>Vinpearl Land Nha Trang</strong></i></p><p>Tọa lạc trên đảo Hòn Tre, Vinpearl land được nhiều người biết đến như một thiên đường vui chơi thu nhỏ giữa lòng Nha Trang. Hằng năm, khu vui chơi này thu hút hàng triệu lượt khách tham quan từ mọi nơi trên thế giới với các trò chơi nổi đình đám như những khu trò chơi mạo hiểm, cảm giá mạnh, thủy cung, khu vui chơi cho trẻ em, công viên nước và những rạp chiếu phim 4D cũng vô cùng thú vị.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-41.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Vinpearl Land Nha Trang\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-41.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-41-240x300.jpg 240w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-41-768x959.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-41-512x640.jpg 512w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-41-585x731.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Một góc Vinpearl Land tựa trời Âu. @ngthanh</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-17.jpg\" alt=\"\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-17.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-17-240x300.jpg 240w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-17-768x960.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-17-512x640.jpg 512w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-17-585x731.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Bạn có thể tha hồ có những tấm ảnh “sống ảo” để đời. @chaeng1016</p><p>Đa phần du khách đến đây đều chọn phương tiện di chuyển là cáp treo để có thể ngắm và tận hưởng cảm giác lơ lửng giữa biển trời bao la. Đây là hệ thống cáp treo vượt biển dài nhất Việt Nam 3.32 km và độ cao trung bình khoảng 45 m so với mặt nước biển.</p><p><i><strong>Đảo Hòn Tằm</strong></i></p><p>Đảo Hòn Tằm chỉ cách thành phố Nha Trang 7 km về phía Đông Nam và rất dễ dàng di chuyển ra vào đảo. Hãy tưởng tượng bạn sẽ cảm thấy như thế nào khi nằm dựa lưng trên chiếc ghế tre đặt trên bờ cát trắng sạch, đẹp và mịn. Tận hưởng từng hơi thở của biển, của cây cối và khung cảnh bình yên đến lạ tại Hòn Tằm.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-42.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Hòn Tằm\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-42.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-42-150x150.jpg 150w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-42-300x300.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-42-768x768.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-42-640x640.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-42-585x585.jpg 585w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-42-220x220.jpg 220w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-42-80x80.jpg 80w\" sizes=\"100vw\" width=\"1080\"></figure><p>Hòn Tằm và những góc ảnh “để đời”. @zhelan_je</p><p>Thật không có gì sai khi người ta mệnh danh Hòn Tằm là “đảo xanh” tại Nha Trang. Không chỉ làm say đắm du khách bằng biển xanh cát trắng và rừng nhiệt đới xanh tươi, tại đây còn níu chân du khách bằng các trò chơi cảm giác mạnh, bạn sẽ được dịp nô đùa với nước bằng các hoạt động sau:&nbsp;chơi golf trên đảo, cưỡi moto nước, lượn dù kéo, flyboard (ván bay), chèo thuyền kayak,… nằm ở khu giải trí Sparkling Waves và khu Sunset Villas. Và đáng kể đến là hoạt động lặn ngắm san hô và đi bộ dưới biển cực độc đáo. Nước biển trong xanh, nên mò ngọc trai luôn là hoạt động thú vị và được nhiều lựa chọn khi đến Hòn Tằm nhất.</p><p>Đặc biệt, Cầu Gỗ Hòn Tằm là một địa điểm check-in yêu thích của giới trẻ khi đến đây. Đến Nha Trang mà không check in ở cây cầu này thì uổng lắm đấy! Cây cầu là nơi thuyền cập bến, phong cảnh đẹp chỗ lý tưởng cho ra đời hàng trăm tấm hình sống ảo chất lừ. Bật mí cho các bạn đây là địa điểm chụp ảnh cưới yêu thích số một Nha Trang đó nha!</p><p><i><strong>Vịnh Ninh Vân</strong></i></p><p>Vịnh nằm cách thành phố biển Nha Trang khoảng 60 km, thuộc địa bàn xã Ninh Vân, thị xã Ninh Hòa, tỉnh Khánh Hòa. Khác biệt với không khí náo nhiệt tại thành phố Nha Trang, Vinh Ninh Vân mang trong mình vẻ đẹp của người con gái hiền dịu, nhẹ nhàng. Xung quanh bao phủ bởi mây trời và nước biển trong rất hoang sơ và thanh bình. Những bãi cát trắng mịn chen lẫn với các rừng cây và các mõm đá nhấp nhô, xa xa lại có lác đác vài ba căn nhà của cư dân làng chài. Tất cả mọi thứ hòa vào nhau, tạo thành một bức tranh vừa hùng vĩ vừa nên thơ.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-40.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Vịnh Ninh Vân\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-40.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-40-300x213.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-40-768x546.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-40-640x455.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-40-585x416.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Vinh Ninh Vân và những góc trời êm dịu. @Internet</p><p>Tại đây thích hợp cho những chuyến đi nghỉ dưỡng ngắn ngày, những chuyến đi với mục đích tìm về chốn hoang sơ để tạm gác lại sự ồn ào náo nhiệt và xô bồ của thế giới ngoài kia. Traveloka gợi ý cho bạn một điểm nghỉ dưỡng cực kỳ yên bình tại vịnh Ninh Vân – <a href=\"https://blog.traveloka.com/vn/resort-dep-o-nha-trang-lalya-villas-ninh-van-bay/\"><i><strong>L’Alya Ninh Van Bay</strong></i></a>.</p><p><i><strong>Hang Heo</strong></i></p><p>Hang Heo thuộc địa phận thôn Lương Sơn, xã Vĩnh Lương cách trung tâm thành phố Nha Trang khoảng 16 km về phía Bắc. Để di chuyển được tới hang Heo ở Nha Trang cũng không hề khó chút nào. Men theo con đường Phạm Văn Đồng, đi hết dốc cuối cùng, chưa tới cảng cá Vĩnh Lương thấy một quán nước mía bên đường là đến. Đi bộ vào bên trong khoảng 200 m sẽ bắt gặp một bãi đá có hình dạng rất đẹp cong vòng theo bờ biển, dài khoảng gần cây số.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-29.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Hang Heo\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-29.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-29-240x300.jpg 240w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-29-768x960.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-29-512x640.jpg 512w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-29-585x731.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Bãi đá tại Hang Heo, nơi sống ảo quen thuộc của các tín đồ du lịch. @ths.95</p><p>Một trong những thứ hấp dẫn tại Nha Trang, không thể không kể đến hệ thống hang động. Và kinh nghiệm du lịch Nha Trang của Traveloka sẽ giới thiệu cho bạn một hang động với cái tên rất dung dị – Hang Heo.&nbsp;</p><p>Tên gọi hang Heo dung dị theo những người dân nơi đây kể lại xuất phát từ tích cũ, đó là ngày trước những người dân làng chài ở đây đi biển về, thường thấy heo rừng trên núi Cô Tiên chạy xuống. Đây là một bãi đá tự nhiên có màu sẫm với hình thù gai góc. Nơi đây vừa có biển, vừa có vách đá, vừa có cây leo xanh ngắt xen kẽ với nhau tạo nên cảnh quan hùng vĩ.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-30.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Hang Heo\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-30.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-30-240x300.jpg 240w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-30-768x960.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-30-512x640.jpg 512w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-30-585x731.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Nếu bạn không muốn đi ra các hòn đảo xa xôi thì hang Heo là một sự lựa chọn rất lý tưởng để khám phá. @cuongkhii</p><p>Để đến được hang Heo, bạn chỉ cần đi theo con đường biển Phạm Văn Đồng. Cứ đi hết đến con dốc cuối cùng, chưa tới cảng cá Vĩnh Lương sẽ gặp một quán nước mía. Đi bộ vào bên trong chừng 200 m sẽ gặp một bãi đá cong vòng theo bờ biển, dài khoảng gần cây số đó là hang Heo. Chắc chắn khi lần đầu tiên chạm mặt, ai cũng phải xuýt xoa vì nét đẹp hoang sơ và cực kỳ ấn tượng của nó. Ngoài ra, nước ở đây rất mát và sạch, nên nhiều người dân địa phương thường đến đây tắm biển.</p><p><i><strong>Cảng Hòn Rớ</strong></i></p><p>Một khi đã đến với biển cả thì sẽ thật tiếc nuối nếu bạn không một lần ghé thăm cảng Hòn Rớ – một nơi tề tựu đủ những âm thanh và hình ảnh của người dân chài. Hòn Rớ thuộc xã Phước Đồng, cách trung tâm TP Nha Trang (Khánh Hòa) khoảng 7 km về hướng đông nam. Đến đây, du khách không chỉ được ngắm nhìn cuộc sống nhộn nhịp của làng chài, của những tàu thuyền cập bến mà còn có thể lựa mua được nhiều món hải sản tươi ngon, mới đánh bắt về.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-15.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Cảng Hòn Rớ\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-15.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-15-271x300.jpg 271w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-15-768x849.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-15-579x640.jpg 579w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-15-585x647.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Hòa mình vào cuộc sống của ngư dân miền Duyên hải nam trung bộ. @hhuyennhiii</p><p>Cảng cá Hòn Rớ nằm cách trung tâm thành phố khoảng 7 km, thuộc địa phận xã Phước Đồng, cách Bãi Dài 20 km. Đây được xem là cảng cá lớn nhất khu vực Nam Trung Bộ nên tập trung rất nhiều tàu bè lớn nhỏ. Lưu ý là bạn nên đến đây vào sáng sớm để vừa có thể đón cảnh bình minh tuyệt đẹp vừa hòa bình vào không khí nhộn nhịp của cảng cá.&nbsp;</p><p><i><strong>Nhà Thờ Đá</strong></i></p><p>Nhà thờ toạ lạc trên đỉnh đồi Hoàng Lân, đầu đường Nguyễn Trãi giao với đường Thái Nguyên (Ngã 6). Một địa điểm không nên bỏ qua khi đến Nha Trang chính là Nhà thờ Nha Trang hay còn gọi lại nhà thờ Núi. Nhà thờ được giới nhiếp ảnh săn lùng bởi kiến trúc gothic đặc trưng không khác gì các nhà thờ tại Châu Âu. Người người vào đây đều mê mẩn với&nbsp; mái vòm rộng, những ô cửa hình hoa hồng.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-19.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Nhà thờ Núi\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-19.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-19-240x300.jpg 240w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-19-768x960.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-19-512x640.jpg 512w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-19-585x731.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Kiến trúc Gothic đặc sắc tại nhà thờ Núi. @linhtra_n</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-21.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Nhà thờ Núi\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-21.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-21-240x300.jpg 240w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-21-768x960.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-21-512x640.jpg 512w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-21-585x731.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Bên trong nhà thờ cũng làm du khách “choáng ngợp” không kém. @kirabrgwndt</p><p>Lưu ý khi đến chụp ảnh, bạn nên ăn mặc kín đáo và giữ yên lặng nhé!</p><p>Giờ mở cửa, giờ làm lễ và giá vé nhà thờ đá Nha Trang:</p><p>– Giờ mở cửa nhà thờ:&nbsp;</p><ul><li>Ngày thường: 5:30 – 17:00&nbsp;</li><li>Chủ Nhật: 5:00 – 7:00, 11:00 – 16:30</li></ul><p>– Giờ làm lễ nhà thờ:&nbsp;</p><ul><li>Ngày thường: 4:45, 17:00&nbsp;</li><li>Chủ Nhật: 5:00, 7:00, 9:30, 15:00, 16:30, 18:30&nbsp;</li></ul><p>– Giá vé tham quan nhà thờ: không phí, vào tự do.</p><p><i><strong>Tháp Bà Ponagar</strong></i></p><p>Tháp được tọa lạc trên đỉnh một ngọn đồi nhỏ cao 10-12 m ngay bên cạnh sông Cái tại Nha Trang. Cách trung tâm thành phố tầm 2 km về phía Bắc trên đường 2/4 nay thuộc phường Vĩnh Phước.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-6.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Tháp Bà Ponagar\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-6.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-6-240x300.jpg 240w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-6-768x960.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-6-512x640.jpg 512w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-6-585x731.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Sự trang nghiêm xem lẫn nét độc đáo của tháp bà Ponagar. @anyamezenceva</p><p>Một quần thể kiến trúc đã góp phần làm nên tên tuổi của thành phố này, Tháp nổi bần bật bên bờ sông Cái, thu hút mọi ánh nhìn của du khách từ phương xa. Tại đây người Chăm Pa thờ phụng nữ thần Ponagar, chính vì thế khi đến đây bạn nên chú ý quần áo không được quá phản cảm nhé.</p><p><i><strong>Con đường hoa giấy Bạch Thái Bưởi</strong></i></p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-35.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - đường Bạch Thái Bưởi\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-35.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-35-240x300.jpg 240w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-35-768x960.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-35-512x640.jpg 512w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-35-585x731.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Dàn hoa giấy phủ rợp 2 bên đường Bạch Thái Bưởi. @imthinhph</p><p>Tại Nha Trang, có một con đường quen thuộc mà người ta luôn miệng hỏi nhau rằng: “Đường Bạch Thái Bưởi hoa giấy nở chưa?”. Dù đây là con đường nhỏ và rất ngắn nhưng thay vào đó con đường này có khoảng 60 cây hoa giấy cứ đầu hạ là cả con đường rợp màu hoa, khiến cho chính người dân ở đây cũng có thú vui ra trước nhà ngồi ngắm.</p><p>Đây cũng là địa điểm quen thuộc cho các “nháy” có được những bức ảnh tuyệt đẹp với nền hồng của hoa.</p><p><i><strong>Ga Nha Trang</strong></i></p><p>Từng được mệnh danh là nhà ga đẹp thứ nhì Đông Dương, chỉ sau ga Đà Lạt. Nhờ kiến trúc đẹp mắt, màu sắc trông rất Tây mà nhiều bạn trẻ đến đây không thể không giơ máy lên làm vài bức ảnh lưu lại làm kỉ niệm.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-18.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Ga tàu hỏa Nha Trang\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-18.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-18-150x150.jpg 150w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-18-300x300.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-18-768x768.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-18-640x640.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-18-585x585.jpg 585w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-18-220x220.jpg 220w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-18-80x80.jpg 80w\" sizes=\"100vw\" width=\"1080\"></figure><p>Những mảng màu mang đậm nét Tây Âu của nhà ga Nha Trang. @decay_starbucks</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-28.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Ga tàu hỏa Nha Trang\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-28.jpg 960w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-28-300x240.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-28-768x614.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-28-640x512.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-28-585x468.jpg 585w\" sizes=\"100vw\" width=\"960\"></figure><p>Nếu bạn di chuyển đến Nha Trang bằng tàu hỏa thì hãy tranh thủ check-in ở đây luôn nhé. @vhnhi97</p><p><i><strong>Cầu sắt</strong></i></p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-34.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - cầu sắt nha trang\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-34.jpg 849w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-34-191x300.jpg 191w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-34-768x1204.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-34-408x640.jpg 408w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-34-585x917.jpg 585w\" sizes=\"100vw\" width=\"849\"></figure><p>Kiến trúc đối xứng của cầu sắt sẽ tạo nên những bức ảnh tuyệt vời. @vhnhi97</p><p>Được xây dựng từ thời Pháp thuộc nên cầu Sắt mang chất hoài cổ, nhiều bạn trẻ chọn cây cầu này để chụp ảnh cũng vì lý do đó. Cầu Sắt bắc qua sông Cái, đoạn gần khu tắm bùn Thác Bà, view ở đây đủ đẹp để bạn có thể vừa ngắm cảnh vừa có những bức ảnh cực đẹp để check – in Nha Trang nhé.</p><ul><li>Địa chỉ: 17 Thái Nguyên, Phước Tân, Thành phố Nha Trang, Khánh Hòa</li></ul><p><i><strong>Nhà Alexander Yersin – Hòn Bà</strong></i></p><p>Đỉnh núi Hòn Bà được mệnh danh là “Đà Lạt của thành phố biển Nha Trang” vì nằm ở độ cao 1500 m, nơi đây có khí hậu ôn đới, rất mát mẻ. Trên đỉnh Hòn Bà chính là ngôi nhà của Bác sĩ Alexandre Yersin. Ngôi nhà gỗ cổ kính vẫn giữ vẹn nguyên những nét bình yên mộc mạc chính là địa điểm lý tưởng cho những dân “nghiện chụp ảnh” đấy nhé.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-31.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Nhà của bác sĩ Alexander Yersin tại Hòn Bà\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-31.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-31-300x200.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-31-768x512.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-31-640x427.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-31-585x390.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Nhà của bác sĩ Alexander Yersin tại Hòn Bà. @mikhelevich</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-32.jpg\" alt=\"\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-32.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-32-300x226.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-32-768x577.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-32-640x481.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-32-585x440.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Một địa điểm “sống ảo” được các bạn trẻ địa phương yêu thích. @dqsinh</p><p>Để đến Hòn Bà, từ QL 1A, bạn rẽ vào đường đi xã Suốt Cát (huyện Cam Lâm). Đi khoảng 1 km, bạn sẽ gặp cột cây số đầu tiên báo đường đến đỉnh Hòn Bà là 37 km. Thời gian di chuyển từ trung tâm TP. Nha Trang đến đỉnh Hòn Bà khoảng hai giờ. Bạn có thể tham khảo toàn cảnh về Hòn Bà tại <a href=\"https://blog.traveloka.com/vn/kinh-nghiem-di-hon-ba-nha-trang/\"><i><strong>bài viết này</strong></i></a> của Traveloka nhé.</p><p><i><strong>Cầu Gỗ Điệp Sơn</strong></i></p><p>Cầu gỗ lung linh như giữa trời Tây chính là địa điểm “sống ảo” được tất thảy các bạn trẻ yêu thích tại Nha Trang. Tại đây các bạn có thể nhìn thẳng ra được đảo Điệp Sơn – Nơi nổi tiếng với con đường dưới mực nước biển… Chụp hình ở đây thì dù theo phong cách nào cũng đẹp khỏi bàn luôn, cực lung linh đấy nhé!</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-24.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Cầu gỗ Điệp Sơn\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-24.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-24-240x300.jpg 240w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-24-768x960.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-24-512x640.jpg 512w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-24-585x731.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Khúc cầu được giới trẻ đổ xô check-in khi đến Nha Trang. @ho.ngan212</p><ul><li>Địa chỉ: Nằm ở địa phận xã Vạn Lương, huyện Vạn Ninh, tỉnh Khánh Hoà, cầu gỗ Ngọc Trai cách trung tâm Vạn Giã khoảng 3 km tính từ Quốc lộ 1A</li></ul><p><i><strong>Bãi đá rêu</strong></i></p><p>Đây tuy không phải là một trong những địa điểm tham quan ở Nha Trang nổi tiếng nhưng lại là nơi chụp ảnh cưới có tiếng. Ngay giữa trung tâm thành phố biển Nha Trang nổi lên một bãi đá rêu dài khoảng 100 m với nhiều hình thù đá phủ rêu khác nhau, vô cùng đẹp mắt.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-8.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Bãi đá rêu\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-8.jpg 3008w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-8-300x168.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-8-768x431.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-8-640x359.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-8-585x328.jpg 585w\" sizes=\"100vw\" width=\"3008\"></figure><p>Bãi rêu bao bọc xung quanh nhà hàng Nha Trang View. @dung.dreamy</p><p>Tầm chiều tà, khi thủy triều rút, bãi rêu xanh hiện ra, nhìn lớp rêu phủ đều vẫn nhau vô cùng mịn màng, lên ảnh đẹp khỏi bàn cãi luôn. Bãi rêu này nằm ở phía chân cầu Trần Phú ngay trung tâm thành phố. Hiện tượng rêu phủ này chỉ xuất hiện một vài lần trong năm, đặc biệt vào mùa nước lớn, thủy triều lên kéo theo rong rêu từ dưới biển lên.</p><ul><li>Địa chỉ: Bãi rêu bao bọc xung quanh nhà hàng Nha Trang View, Lầu Ông Tư, đường Trần Phú, cách cầu Trần Phú khoảng 100 m về phía Nam</li></ul><h2><strong>5. Ăn gì ở Nha Trang</strong></h2><p>Sẽ chẳng mấy ngạc nhiên khi vùng đất này được xem như một thiên đường ẩm thực, bởi tại đây bạn sẽ được thưởng thức 1001 món ăn lạ được chế biến từ hải sản. Có nhiều bạn sẽ thắc mắc là hải sản có thể ăn ở tất cả mọi vùng biển mà nhưng Traveloka xin thưa là sẽ không có ở đâu có thể chế biến được những món lạ và đặc trưng như tại Nha Trang đâu nhé. Mình cùng điểm qua một số món ăn làm nên tên tuổi của vùng duyên hải nam trung bộ này nha:</p><p><i><strong>Bún, bánh canh chả cá</strong></i></p><p>Đối với món này, chả cá được chiên vàng ươm ăn với sợi bún nhỏ cùng nước lèo đậm vị, có chút cay nồng. Sẽ có các nước nêm dành riêng cho khẩu vị mỗi người.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-13.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Bún cá\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-13.jpg 3024w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-13-225x300.jpg 225w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-13-768x1024.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-13-480x640.jpg 480w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-13-585x780.jpg 585w\" sizes=\"100vw\" width=\"3024\"></figure><p>Tô bún cá đầy ấp đồ ăn tại Nha Trang. @Internet</p><ul><li>Bánh canh vỉa hè: 9 Trần Văn Ơn, Lộc Thọ</li><li>Bún cá Đức: B8 Phan Bội Châu</li></ul><p><i><strong>Bún cá dầm</strong></i></p><p>Nghe rất lạ đúng không nào, đây không phải là cá dầm ra đâu nhé, đây là một loại cá có tên là cá Dầm đấy. Không giống những loại bún có nước lèo làm từ xương heo, bò mà nước lèo của loại bún này được hầm trực tiếp bằng xương cá Dầm tạo nên hương vị rất khác biệt đấy nhé!</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-12.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - bún cá Dầm\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-12.jpg 1200w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-12-300x200.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-12-768x512.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-12-640x427.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-12-585x390.jpg 585w\" sizes=\"100vw\" width=\"1200\"></figure><p>Trứng cá Dầm – “cực phẩm” Nha Trang. @Internet</p><p><i><strong>Bánh mì chả cá</strong></i></p><p>Chả cũng được chiên vừa chín tới, nhưng ở Nha Trang sợi chả cá sẽ thon và dài chứ không như chả cá cây giống ở những nơi khác. Đặc biệt hơn cả là phần nước mắm chan vào bánh mì, mỗi nơi tại Nha Trang sẽ có nước mắm khác nhau nhưng nhìn chung là đều rất ngon và khác biệt với những bánh mì chả cá vùng khác.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-10.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Bánh mì chả cá\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-10.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-10-150x150.jpg 150w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-10-300x300.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-10-768x768.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-10-640x640.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-10-585x585.jpg 585w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-10-220x220.jpg 220w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-10-80x80.jpg 80w\" sizes=\"100vw\" width=\"1080\"></figure><p>Bánh mì chả cá với nước sốt đặc biệt. @foodaholic</p><p><i><strong>Bún sứa</strong></i></p><p>Bún sứa được mệnh danh là đặc sản Nha Trang, nếu đến đây mà chưa thử bún sứa coi như bạn đã mất một phần của chuyến đi rồi đấy. Sứa tại Nha Trang rất tươi và giòn, cảm giác nhai rất vui miệng. Bún sứa được ăn kèm với nước mắm chấm, bạn có thể chấm sứa hoặc cho vào thẳng trong tô.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-14.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - bún sứa\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-14.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-14-240x300.jpg 240w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-14-768x961.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-14-512x640.jpg 512w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-14-585x732.jpg 585w\" sizes=\"100vw\" width=\"1080\"></figure><p>Nhìn sứa tươi đã thấy thèm rồi! @Internet</p><ul><li>Bún sứa Năm Beo: B2 chung cư Phan Bội Châu</li><li>Bún cá sứa: 170 Bạch Đằng</li></ul><p><i><strong>Nem nướng Ninh Hòa</strong></i></p><p>Nem Ninh Hòa được làm từ thịt lợn tươi vừa mổ xong, dùng khăn sạch lau khô rồi đem thái thành từng lát mỏng. Sau đó đem trộn với các gia vị đường, muối, hạt tiêu rồi đem bóp trộn thật đều tay cho thịt ngấm gia vị săn chắc lại. Tiếp đến thêm một chút da heo thái mỏng vào trộn cùng rồi đem gói thật kỹ vào lá chùm ruột hoặc lá khế… để nơi thoáng mát vài ngày là ăn được. Món ăn tưởng chừng như chế biến đơn giản, nhưng lại là món ăn ngon, hấp dẫn nhất ở Nha Trang mà kinh nghiệm du lịch Nha Trang của Traveloka khuyên bạn nên thử.</p><ul><li>Nem nướng Đặng Văn Quyên: 16A Lãn Ông</li><li>Nem nướng Ngọc Tiên: 59 Lê Thành Phương</li></ul><p><i><strong>Bánh đập</strong></i></p><p>Món bánh được kết hợp giữa bánh tráng nướng và bánh ướt tạo nên hương vị độc đáo, mới lạ. Khi ăn bạn phải đập cho nó bể ra để xé thành từng miếng nhỏ, nên vì thế mà người ta gọi là bánh đập đấy. Có thể dùng kèm với thịt nướng, thịt luộc hay lòng lợn… chấm kèm với mắm nêm đặc trưng của người dân vùng biển sẽ vô cùng hấp dẫn đấy. Từng miếng với vị giòn rụm của bánh tráng, mềm mềm của bánh ướt và mùi vị đậm đà của mắm nêm chắc chắn sẽ khiến bạn nhớ mãi hương vị này cho mà xem.</p><figure class=\"image\"><img src=\"https://blog.traveloka.com/source/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-9.jpg\" alt=\"Kinh nghiệm du lịch Nha Trang - Bánh đập\" srcset=\"https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-9.jpg 1080w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-9-150x150.jpg 150w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-9-300x300.jpg 300w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-9-768x768.jpg 768w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-9-640x640.jpg 640w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-9-585x585.jpg 585w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-9-220x220.jpg 220w, https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2020/02/kinh-nghiem-du-lich-nha-trang-9-80x80.jpg 80w\" sizes=\"100vw\" width=\"1080\"></figure><p>Cùng thưởng thức món bánh lạ này nhé! @Internet</p><ul><li>Quán bánh đập: 16A Hồng Lĩnh</li></ul><p><strong>Gợi ý</strong> <strong>một số địa điểm bán đồ ăn ngon, đặc sản giá rẻ ở Nha Trang</strong>:</p><ul><li>Phở Bắc Hải: 76 Quang Trung.</li><li>Bún bò <a href=\"https://blog.traveloka.com/vn/resort-hue-ecolodge/\">Huế</a> 100: 100 Ngô Gia Tự.</li><li>Bún thịt nướng: 163 Hoàng Văn Thụ.</li><li>Bánh canh Cô Lộc: 30 Phan Chu Trinh.</li><li>Cháo hải sản: 6 Ngô Sĩ Liên.</li><li>Cơm tấm Trung: 10/4 Lý Tự Trọng.</li><li>Hải sản Chiêu Anh: 86 Trần Phú.</li><li>Quán ốc 24: 24 Ngô Đức Kế.</li><li>Quán Vịt cầu Dứa: Dưới chân cầu Dứa, đường 23 tháng 10.</li><li>Quán hủ tiếu khô: 30 Bạch Đằng.</li></ul><p>Ngoài những món ăn kể trên, Nha Trang còn rất nhiều những đặc sản hấp dẫn khó cưỡng khác mà bạn có thể tìm thấy ngay <a href=\"https://blog.traveloka.com/vn/10-mon-an-ngon-nha-trang-noi-tieng-va-noi-tim-ra-chung\"><i><strong>tại bài viết này</strong></i></a>.</p><h2><strong>6. Một vài kinh nghiệm du lịch Nha Trang khác cho chuyến đi suôn sẻ</strong></h2><ul><li>Vào mùa hè, mùa lễ hội, Nha Trang vô cùng đông đúc với khách du lịch. Nếu có nhu cầu du lịch Nha Trang tự túc vào dịp này thì bạn nên đặt trước phòng khách sạn để đảm bảo được nơi nghỉ ngơi yêu thích nhất.</li><li>Tuy thời tiết không khắc nghiệt nhưng khi du lịch Nha Trang, bạn vẫn nên chuẩn bị đầy đủ nón, kính râm, áo khoác, kem chống nắng… để bảo vệ.</li><li>Đừng quên chuẩn bị dép đi biển, lẫn giày thể thao để thuận tiện cho những chuyến khám phá.</li><li>Các đặc sản nổi tiếng của Nha Trang là yến, các loại khô… Bạn nên mua yến tại các trung tâm uy tín, còn các loại đặc sản khác có thể dễ dàng tìm mua tại chợ Đầm.</li></ul><p>Nhắc đến thành phố biển thì đa số mọi người chỉ nghĩ đến việc ăn, ngủ và tắm biển thôi, ít ai biết được còn có nhiều địa điểm tham quan ở Nha Trang “nóng hổi” đến như vậy, đã vậy còn không hề tốn một đồng nào nữa chứ. Rủ ngay đứa bạn chuyên làm phó nháy đi Nha Trang để “tác nghiệp” ngay thôi!. Bên trên là một số chia sẻ từ kinh nghiệm du lịch Nha Trang tự túc của Traveloka để bạn “bỏ túi” trước chuyến đi. Đừng quên tận hưởng hết mình thành phố biển xinh đẹp này và lưu lại những kí ức khó quên nhất nhé!</p>','undefined','undefined','undefined',0,0,7,'edited','2020-05-21 14:39:48',NULL,'2020-05-21 14:45:44'),(3,'Du lịch Đà Lạt – Cẩm nang du lịch Đà Lạt từ A đến Z','Du lịch Đà Lạt với cẩm nang đầy đủ và súc tích nhất từ iVIVU.com. Cẩm nang du lịch Đà Lạt giới thiệu các điểm đến thú vị, địa điểm ăn uống và nhiều thông tin bổ ích để bạn tham khảo trước khi đến thành phố hoa xinh đẹp này.','<h2><strong>Tổng quan du lịch Đà Lạt</strong></h2><p><br>Đà Lạt là thủ phủ của tỉnh Lâm Đồng. Với độ cao 1.500 m trên mặt nước biển, Đà Lạt tiết trời mát lạnh và là nơi nghỉ dưỡng lý tưởng ở khu vực miền Nam. Từng một thời nổi tiếng với các điểm tham quan như Thung lũng Tình Yêu, Hồ Than Thở, Đồi Thông Hai Mộ, Thác Voi…, Đà Lạt ngày nay không còn giữ được vẻ hoang sơ như xưa. Các điểm tham quan chính hiện nay khi du lịch Đà Lạt gồm có Hồ Xuân Hương, Đỉnh Langbiang, Dinh Bảo Đại, Biệt Điện Trần Lệ Xuân, Thiền Viện Trúc Lâm, Hồ Tuyền Lâm, nhà ga Đà Lạt (Nhà ga Trại Mát)… Chỉ cách Sài Gòn chừng 300km, thành phố Đà Lạt là nơi nghỉ dưỡng tuyệt vời, giúp du khách thoát khỏi cái oi bức nóng nực của vùng đồng bằng Nam Bộ.</p><p>&nbsp;</p><h2><strong>Di chuyển: Phương tiện, di chuyển khi du lịch Đà Lạt</strong></h2><p><a href=\"https://www.ivivu.com/ve-may-bay/ho-chi-minh-di-da-lat?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>Máy bay</strong>:</a><a href=\"https://www.ivivu.com/ve-may-bay/?utm_source=blog_banner&amp;utm_medium=hothotel&amp;utm_campaign=internal\">&nbsp;</a>Hiện có chuyến bay thẳng từ Hà Nội, Đà Nẵng hoặc TP.HCM tới sân bay Liên Khương (Đà Lạt) của Vietnam Airlines và Vietjetair. Giá vé trong khoảng từ 900.000 VND đến 1.600.000 VND, và thời gian bay từ 50 phút đến 1 tiếng 40 phút.</p><p>Lưu ý: Từ sân bay Liên Khương, bạn có thể bắt xe bus của sân bay về trung tâm thành phốvới giá 50.000VND; hoặc đi taxi khoảng 300.000VND/lượt. &nbsp;Xe buýt sân bay sẽ chạy liên tục trong ngày, điểm dừng cuối tại thành phố Đà Lạt là đường Lê Thị Hồng Gấm, ngay chợ Đà Lạt. Bạn nên hỏi các bác tài xế đường đi và địa chỉ khách sạn bạn đã đặt để xuống xe ở điểm dừng gần nhất.</p><p><strong>Xe khách</strong>:&nbsp;Xe Phương Trang và xe Thành Bưởi có nhiều chuyến đi và về tuyến Sài Gòn – Đà Lạt, giá vé dao động khoảng 230.000 VND (giường nằm)/vé/chiều. Các chuyến xe chạy liên tục, mỗi chuyến cách nhau từ 30 phút đến 1 tiếng.</p><p><i>Số điện thoại liên hệ:</i></p><p>ĐT xe Phương Trang: 08.3837 5570 – 08. 38 333 468</p><p>ĐT xe Thành Bưởi: 08. 38 306 306 – 08. 38 308 090</p><p><strong>Xe Limousine:&nbsp;</strong>Dàn siêu xe Minh Trí Limousine là dòng xe VIP nhập khẩu hoàn toàn với khoang hành khách gồm 9 ghế ngồi massage. Cụ thể, 4 hàng ghế trước bọc da sang trọng các bạn có thể xoay, ngã, trượt thoải mái và 3 hàng ghế sau được gập thành giường, mang đến không gian vừa sang trọng lại thoải mái trong suốt chuyến hành trình. Giá vé: 250.000 đồng/vé. Hotline đặt vé: (063) 655 9999 – (063) 350 8989</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/du-lich-da-lat-ivivu.com-3.jpg\" alt=\"Đoạn đường đẹp như tranh vẽ của đèo Prenn. Ảnh: caonguyendatravel.com.\"></figure><p><i>Đoạn đường đẹp như tranh vẽ của đèo Prenn. Ảnh: caonguyendatravel.com.</i></p><p>&nbsp;</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/Du-lich-da-lat-ivivu-2.jpg\" alt=\"Các bạn trẻ thích thú khi đi ngang cung đường đẹp như tranh của Đà Lạt. Ảnh: ST\"></figure><p><i>Các bạn trẻ thích thú khi đi ngang cung đường đẹp như tranh của Đà Lạt. Ảnh: ST</i></p><p><strong>Phương tiện đi lại tại Đà Lạt</strong>:</p><p>Xe máy: giá từ 80.000 – 120.000 VND/ngày.</p><p>Xe đạp đôi: 20.000VND/giờ. Để thuê được xe đạp hay xe máy bạn cần đem theo CMND nhé.</p><p>Thuê xe ôtô: Giá thuê trong ngày (từ 8h00 – 17h00) từ 1 triệu đồng trở lên, quá giờ tính 100.000 VND/giờ.</p><p>Xe bus: Các tuyến xe bus từ bến xe tại trung tâm thành phố Đà Lạt theo các tuyến đường về các xã, huyện của Đà Lạt, Lâm&nbsp;Đồng. Giá vé tính toàn tuyến hoặc theo từng chặng, từ 4.000 – 30.000 VND/người.</p><h2><strong>Tham quan: Di tích, núi rừng, điểm tham quan khác của du lịch Đà Lạt</strong></h2><p><strong>KHU TRUNG TÂM ĐÀ LẠT – HỒ XUÂN HƯƠNG – CHỢ ĐÀ LẠT</strong></p><p><strong>Chợ Đà Lạt và chợ Âm Phủ</strong>: điểm đến không thể bỏ qua của du lịch Đà Lạt. Có bán các quần áo ấm second-hand rất đẹp, cùng với các loại đặc sản như nước cốt dâu tằm, trà atisô, thập cẩm sấy khô, các loại mứt và đậu ngự.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/Du-lich-da-lat-ivivu-11.jpg\" alt=\"Khu vực chợ Đà Lạt nhìn từ trên cao. Ảnh: Lư Quyền\"></figure><p><i>Khu vực chợ Đà Lạt nhìn từ trên cao. Ảnh: Lư Quyền</i></p><p><strong>Hồ Xuân Hương:</strong> Biểu tượng của du lịch Đà Lạt. Sáng sớm, và hoàng hôn là thời điểm Hồ Xuân Hương đẹp nhất. Có các trò chơi đạp vịt, đi xuồng máy hay chèo thuyền cao su trên hồ.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/Du-lich-da-lat-ivivu-9.jpg\" alt=\"Hoàng hôn trên hồ Xuân Hương. Ảnh: Dzung Viet Le\"></figure><p><i>Hoàng hôn trên hồ Xuân Hương. Ảnh: Dzung Viet Le</i></p><p><strong>Dinh Bảo Đại hay còn gọi là dinh III</strong>: dinh thự đẹp đẽ và trang nhã nằm trên ngọn đồi cao 1539m. Vị trí: Trên đường Triệu Việt Vương, cách trung tâm Đà Lạt 2,5 km về phía Nam.</p><p><strong>Ga xe lửa Đà Lạt</strong>: số 1 Quang Trung, Đà Lạt, ga Đà Lạt. Đây là địa điểm chụp hình quen thuộc của du khách.</p><p><strong>Vườn Hoa Đà Lạt</strong>: nằm ở số 2 Phù Đổng Thiên Vương, cách trung tâm thành phố 2km. Người đi du lịch Đà Lạt thường ghé thăm vườn hoa để được chiêm ngưỡng muôn hoa đua sắc và săn những bức hình đẹp.</p><p>[/box]</p><p><strong>Nhà thờ chính tòa Đà Lạt (nhà thờ Con Gà)</strong>: trên đỉnh tháp chuông có hình con gà lớn. Đây là nhà thờ lớn nhất Đà Lạt, một trong những công trình kiến trúc tiêu biểu và cổ xưa nhất của thành phố này do người Pháp để lại.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/nhung-trai-nghiem-da-lat-tuyet-voi-cho-mua-he-ivivu-1.jpg\" alt=\"Không du khách nào tới Đà Lạt mà không thé thăm nhà thờ chánh tòa, hay còn gọi là nhà thờ con gà, một biểu tượng về kiến trúc của vùng đất này.Ảnh: Hải Vinh photo\"></figure><p><i>Không du khách nào tới Đà Lạt mà không thé thăm nhà thờ chánh tòa, hay còn gọi là nhà thờ con gà, một biểu tượng về kiến trúc của vùng đất này.Ảnh: Hải Vinh photo</i></p><p><strong>Viện Sinh Học Tây Nguyên/Phân Viện Sinh học Đà Lạt</strong>: nằm trên đỉnh đồi Tùng Lâm cách trung tâm thành phố Đà Lạt gần 10km trên đường đi Suối Vàng. Ngoài khung cảnh đẹp, Phân Viện Sinh học còn là &nbsp;một bảo tàng động vật và vườn thực vật.</p><p><strong>Nhà thờ Domaine de Marie/Lãnh địa Đức Bà</strong>: còn gọi là Nhà thờ Mai Anh. Nằm trên đường Ngô Quyền cách trung tâm khoảng 1 km về phía tây nam. Nhà thờ được xây dựng theo phong cách châu Âu thế kỷ 17, có sự kết hợp hài hòa giữa kiến trúc phương Tây với kiến trúc của dân tộc thiểu số vùng Tây Nguyên.</p><p><strong>Trường Cao Đẳng Sư Phạm Đà Lạt</strong>: được Hội Kiến trúc sư thế giới công nhận là một trong số 1.000 công trình xây dựng độc đáo của thế giới trong thế kỷ 20. Điểm nhấn của dãy nhà hình vòng cung là tháp chuông, gọi là “Nhà Cong”.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/Du-lich-da-lat-ivivu-7.jpg\" alt=\"Hoàng hôn ngập nắng ở trường Cao đẳng Sư Phạm Đà Lạt. Ảnh: HD Photo (Đào Hữu Độ)\"></figure><p><i>Hoàng hôn ngập nắng ở trường Cao đẳng Sư Phạm Đà Lạt. Ảnh: HD Photo (Đào Hữu Độ)</i></p><p><strong>Ga Trại Mát – chùa Linh Phước</strong>: Tại Trại Mát có các điểm tham quan du lịch như trại nghỉ mát của Vua Bảo Đại, chợ Trại Mát hay chùa Linh Phước. Chùa Linh Phước có kiến trúc khảm sành độc đáo, đặc biệt có tượng con rồng làm bằng 12.000 vỏ chai bia nên chùa còn được gọi là chùa Ve Chai.</p><p><strong>KHU PHÍA BẮC TRUNG TÂM ĐÀ LẠT</strong>:</p><p><strong>Thung lũng Tình Yêu</strong>: là địa danh thơ mộng và trữ tình nhất khi du lịch Đà Lạt, cách trung tâm thành phố khoảng 6km về hướng Đông Bắc. Du khách có thể men leo lên đồi Vọng Cảnh và ngắm nhìn toàn cảnh Thung lũng Tình Yêu.</p><p>&nbsp;</p><p><a href=\"https://www.ivivu.com/khach-san-da-lat?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>Khách sạn Đà Lạt tốt nhất cho cặp đôi</strong></a><strong> – Giá từ 309.000 VND</strong></p><p>&nbsp;</p><p><strong>Thung lũng Suối Vàng / Hồ Suối Vàng: </strong>Từ trung tâm Đà Lạt theo hướng bắc đi Lạc Dương, đến km 7 Tùng Lâm rẽ trái, vượt qua đoạn đường dài khoảng 12km sẽ đến hồ Suối Vàng. Đường đi Suối Vàng đẹp mê li, nên mang theo đồ ăn và bạt trải, thích chỗ nào dừng lại picnic chỗ đó luôn.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/thung-lung-vang-ivivu.jpg\" alt=\"Thung lũng Suối Vàng. Ảnh: Duy Lalang\"></figure><p><i>Thung lũng Suối Vàng. Ảnh: Duy Lalang</i></p><p><strong>Núi Lang Biang</strong>: Cách khu trung tâm 12 km về phía Bắc. Đến chân núi có hai cách lựa chọn: leo núi hoặc đi xe jeep. 1 xe jeep bao trọn là 180.000 nghìn , nếu đi lẻ thì phải chờ xe đủ 6 người mỗi người 50.000 nghìn tiền xe , đi hết chừng 15 phút là lên đỉnh. Nếu chọn leo núi (đi theo đường nhựa lên đỉnh) bạn phải đi khoảng 7 – 8 km, mất 1h30′ mới lên tới đỉnh. Đường lên đỉnh núi hai bên là thông và hoa dại. Trên đỉnh núi là cảnh đẹp mê hồn, và bạn cũng có thể thưởng thức các món nướng tại đây.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/langbiang-ivivu.jpg\" alt=\"Ảnh:  _irbis_\"></figure><p><i>Ảnh: _irbis_</i></p><p><strong>Làng Cù Lần</strong>: điểm tham quan mới toanh của du lịch Đà Lạt,&nbsp;là một ngôi làng nhỏ xinh đẹp, lãng mạn nằm lọt thỏm giữa hàng ngàn héc-ta rừng nguyên sinh hoang dã dưới chân đỉnh núi Lang Biang trải rộng,&nbsp;&nbsp;cách khu du lịch Thung Lũng Vàng 9 km vào hướng Suối Vàng – Suối Bạc.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/lang-cu-lan-ivivu-1.jpg\" alt=\"Ảnh: dalatmimosatravel\"></figure><p><i>Ảnh: dalatmimosatravel</i></p><p>&nbsp;</p><h4><strong>THAM KHẢO MỘT SỐ TOUR DU LỊCH ĐÀ LẠT GIÁ ƯU ĐÃI TỪ IVIVU.COM</strong></h4><p><strong>1. </strong><a href=\"https://www.ivivu.com/du-lich/tour-da-lat-3n3d-bbq-lua-trai-cong-chieng-tay-nguyen/452?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>Tour Đà Lạt 3N3Đ : BBQ – Lửa Trại Cồng Chiêng Tây Nguyên</strong></a></p><p><strong>2.&nbsp;</strong><a href=\"https://www.ivivu.com/du-lich/tour-da-lat-3n2d-hcm-da-lat/189?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>Tour Đà Lạt 3N2D: HCM – Đà Lạt</strong></a></p><p><strong>3. </strong><a href=\"https://www.ivivu.com/du-lich/tour-da-lat-2n1d-ngam-hoa-da-quy-doi-che/571?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>Tour Đà Lạt 2N1D: Ngắm Hoa Dã Quỳ – Đồi Chè</strong></a></p><p>&nbsp;</p><p><strong>KHU PHÍA NAM TRUNG TÂM </strong><a href=\"https://www.ivivu.com/khach-san-da-lat?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>ĐÀ LẠT</strong></a>:</p><p><strong>Hồ Tuyền Lâm</strong>: nằm ở độ cao 1000 mét so với mực nước biển, cách trung tâm 5km về phía Nam, trên đoạn đường đèo Prenn.Tại đây bạn có thể thuê thuyền ra đảo. Một chiếc khứ hồi là 200.000 đồng, nên thuê chung với khách khác để tiết kiệm. Hoặc bạn cũng có thể đi vòng bờ hồ ( rẽ trái ) men theo con đường ra đảo. Ra đảo thì cứ tự nhiên thưởng thức thịt rừng. Nhớ mang theo tấm bạt trải ngồi cho vui. Cảnh đẹp, tha hồ tạo dáng. Trưa thuê võng 7.000 đồng/ giờ mắc giữa hai cây thông nằm ngủ.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/Ve-me-hoac-cua-ho-Tuyen-Lam-sang-som-mua-dong-ivivu-10.jpg\" alt=\"Chiếc thuyền mỏng manh dần chìm vào làn sương mù dày đặc của hồ Tuyền Lâm. Ảnh: Nguyễn Hải Vinh\"></figure><p><i>Chiếc thuyền mỏng manh dần chìm vào làn sương mù dày đặc của hồ Tuyền Lâm. Ảnh: Nguyễn Hải Vinh</i></p><p><strong>Thiền viện Trúc Lâm</strong>: nằm trên núi Phụng Hoàng, phía trên Hồ Tuyền Lâm. Đây không chỉ là thiền viện lớn nhất Lâm Đồng mà còn là điểm tham quan hấp dẫn của du lịch Đà Lạt. Đối diện cổng thiền viện có trạm cáp treo. Đi cáp treo ngắm cảnh thành phố và rừng thông (50.000 đồng/ vé khứ hồi).</p><p><strong>Thác Prenn</strong>: Toạ lạc ngay đầu đèo Prenn, trên quốc lộ 20 từ Sài Gòn lên Ðà Lạt, cách trung tâm 10 km về hướng nam. Đến với thác Prenn, ngoài việc ngắm dòng thác kì vĩ và những đồi thông bao la, du khách còn có dịp thưởng thức món cháo cá lóc đặc sản giá chỉ từ 160.000 – 200.000 VND cho 4 người ăn.</p><p><strong>Thác Datanla</strong>: hấp dẫn du khách với dòng nước trong veo chảy qua 7 tầng núi đá rồi dội xuống những phiến đá lớn, tung bọt trắng xóa. Cách trung tâm 5km, nằm khoảng giữa đèo Prenn. Từ quốc lộ 20 rẽ xuống dốc khoảng 300m là tới một thung lũng nhỏ, du khách sẽ gặp thác Datanla với cảnh trí đầy hấp dẫn và đậm nét hoang sơ.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/Du-lich-da-lat-ivivu-13.jpg\" alt=\"Thác Datanla hấp dẫn du khách với nhiều trò chơi mạo hiểm. Ảnh: ST\"></figure><p><i>Thác Datanla hấp dẫn du khách với nhiều trò chơi mạo hiểm. Ảnh: ST</i></p><p><strong>KHU VỰC XA TRUNG TÂM </strong><a href=\"https://www.ivivu.com/khach-san-da-lat?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>THÀNH PHỐ ĐÀ LẠT</strong></a></p><p><strong>Đồi chè Cầu Đất</strong>: với những cánh đồng chè xanh ngát và đặc biệt rợp một trời hoa dã quỳ vào những tháng cuối năm. Từ trung tâm thành phố, chỉ cần chạy thẳng theo đường Trần Hưng Đạo – Hùng Vương và xem chỉ dẫn đường lên Trại Mát, từ đó bạn hỏi bất cứ người dân ven đường nào để đến thôn Xuân Trường. Do ở độ cao trên 1.650m so với mặt nước biển, nên khí hậu ở đồi chè mát mẻ quanh năm. Đồi chè cho tham quan tự do, không thu tiền phí hay bất cứ một khoản thu nào khác. Khi thấy cổng chào của nhà máy chè Cầu Đất hãy mạnh dạn bước vào.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/Du-lich-da-lat-ivivu-4.jpg\" alt=\"Trải dài trên diện tích 230 ha, đồi chè Cầu Đất dễ khiến những tín đồ của màu xanh lá phải ngỡ ngàng trước cảnh sắc “đất xanh ngắt, trời xanh trong”. Ảnh: Linh Ly Thanh\"></figure><p><i>Trải dài trên diện tích 230 ha, đồi chè Cầu Đất dễ khiến những tín đồ của màu xanh lá phải ngỡ ngàng trước cảnh sắc “đất xanh ngắt, trời xanh trong”. Ảnh: Linh Ly Thanh</i></p><p><strong>Thác Voi – chùa Linh Ẩn</strong>: nằm ở thị trấn Nam Ban, huyện Lâm Hà, cách thành phố Đà Lạt 25km về hướng Tây Nam. Thác Liêng Rơwoa hay còn gọi là Thác Voi là một trong những thác nước đẹp của Tây Nguyên với chiều cao hơn 30m, rộng chừng 15m. Phía sau dòng thác trắng xóa là những hang động sâu hun hút đầy bí ẩn như hang Dơi, hang Gió… Chùa Linh Ẩn nằm trong khu thắng cảnh Thác Voi. Trong khuôn viên chùa thờ rất nhiều tượng Phật kích thước lớn và được chạm trổ công phu.</p><p><strong>Thị trấn D’ran</strong>: nằm dưới chân đèo D’ran trên đường lên du lịch Đà Lạt, thuộc huyện Đơn Dương. Thị trấn D’ran nổi tiếng với loài hoa dã quỳ màu vàng rực và vườn hồng trĩu quả. Tại đây còn có món đặc sản nem nướng hương vị khó quên.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/Dran-thi-tran-ngu-vui-giua-cao-nguyen-ivivu-91.jpg\" alt=\"Nhắc đến D’ran, không thể không nhắc đến những vườn hồng trĩu quả. Ảnh: Cỏ Biếc\"></figure><p><i>Nhắc đến D’ran, không thể không nhắc đến những vườn hồng trĩu quả. Ảnh: Cỏ Biếc</i></p><p><strong>Thác Pongour</strong>: còn gọi là thác Bảy tầng toạ lạc tại huyện Đức Trọng, cách Đà Lạt 50 km. Thác cao 40m, trải dài 7 tầng và rộng gần 100m. Pongour là thác nước duy nhất của Lâm Đồng tổ chức ngày hội dân tộc Tây Nguyên hằng năm vào rằm tháng Giêng.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/thac-pongour-ivivu.jpg\" alt=\"Thác Pongour còn gọi là thác Bảy tầng. Ảnh: ST\"></figure><p><i>Thác Pongour còn gọi là thác Bảy tầng. Ảnh: ST</i></p><p><strong>Thác Dambri</strong>: Ở vị trí cách khoảng 100km từ Đà Lạt đi xuống, 200km từ TP. HCM đi lên theo quốc lộ 20, thác Dambri (thuộc khu du lịch sinh thái Dambri) nằm cách thành phố Bảo Lộc khoảng 18 km theo hướng đông bắc. Đây là ngọn thác cao nhất Lâm Đồng với chiều cao trên 40m. tạo thành 2 dòng chảy cao thấp rất hùng vĩ.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/thac-dam-ri-ivivu-1.jpg\" alt=\"Ảnh:@vymach96\"></figure><p><i>Ảnh:@vymach96</i></p><p><a href=\"https://www.ivivu.com/blog/2017/01/ngoi-chua-tren-may-dep-kho-tin-o-tay-nguyen/\"><strong>Chùa Linh Quy Pháp Ấn</strong></a></p><p>Cách thành phố Bảo Lộc khoảng 21km về phía Nam, chùa Linh Quy Pháp Ấn tọa lạc tại Đồi 45, Thôn 4, Lộc Thành, Bảo Lâm, Lâm Đồng – được mệnh danh là chốn bồng lai tiên cảnh với những cánh “cổng trời”, nơi bạn có thể phóng tầm mắt nhìn ngắm cả một khoảng không gian rộng lớn và hòa mình vào đất trời, núi non.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/linh-quy-phan-an-ivivu-1.jpg\" alt=\"Ảnh: Thành Trần \"></figure><p><i>Ảnh: Thành Trần</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/linh-quy-phan-an-ivivu-2.jpg\" alt=\"Ảnh: Mộng Kha\"></figure><p><i>Ảnh: Mộng Kha</i></p><p>Để đến chùa Linh Quy Pháp Ấn, từ thành phố Bảo Lộc, bạn di chuyển theo đường Trần Phú, đến ngã 3 Đại Binh rẽ phải. Đến đây, bạn sẽ gặp đường vô xã Lộc Thành (Quốc lộ 55), đi ngang qua chợ Lộc Thành, bạn sẽ gặp cầu Đa Trăng, chạy qua cầu, chạy thẳng 1 đoạn gặp ngã 3 rồi rẽ phải gặp chùa Niết Bàn, chạy thẳng gặp ngã tư rẽ phải. Tiếp tục chạy thẳng, rồi rẽ trái theo hướng thôn văn hóa (Thôn 4 – Xã Lộc Thành), qua thôn văn hóa chạy khoảng 2km (nhìn bên tay trái có một con hẻm nhỏ) rẽ trái men theo hướng lên dốc, rồi rẽ trái theo bảng hướng dẫn (Quán Chiếu Đường) là tới Linh Quy Pháp Ấn.</p><p>&nbsp;</p><h2><strong>Ăn: Quán ăn, ăn vặt, đặc sản của </strong><a href=\"https://www.ivivu.com/khach-san-da-lat?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>du lịch Đà Lạt</strong></a></h2><p>Du lịch Đà Lạt còn là dịp để bạn thưởng thức những đặc sản Đà Lạt gồm rượu vang và rượu cần, các loại trái cây (hồng tàu, hồng khía, hồng trứng; bơ, đào long, dâu tây, dâu tằm,…), các loại mứt, trà Bảo Lộc, trà Atiso, và các loại rau củ quả (cải bắp, cải thảo, bó xôi, súp lơ, atisô, cần tây, đậu Hà Lan, cà rốt, khoai tây, su su, cải ngọt)…</p><p><strong>CÁC ĐỊA ĐIỂM ĂN UỐNG NỔI BẬT CỦA DU LỊCH ĐÀ LẠT</strong>:</p><p><strong>Lẩu gà lá é:</strong> Quán Tao Ngộ ở đầu đường 3/4 (cách Hồ Xuân Hương khoảng 2km).&nbsp;Một nồi lẩu gà lá é giá 200.000 đồng có khoảng có nửa con gà chặt miếng, 1 đĩa bún sợi to, 1 đĩa nấm sò, ít măng củ thái quân cờ và dĩ nhiên không thể thiếu 1 đĩa rau lá é, rất đáng để thử.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/lau-ga-la-e-ivivu-1.jpg\" alt=\"Ảnh: @Tâm Thảo Lê\"></figure><p><i>Ảnh: @Tâm Thảo Lê</i></p><p><strong>Lẩu bò Ba Toa:&nbsp;</strong>Món lẩu thứ 2 nhất định phải nếm ở Đà Lạt chính là lẩu bò ở khu Ba Toa. Lẩu bò ở đây nổi tiếng với những miếng bò dày, to, dài. Chưa kể trong nồi còn có thêm gân, đuôi, gầu đầy đặn chỉ nhìn đã thấy bụng muốn sôi sùng sục.&nbsp;Chưa kể giá lẩu cũng rất hợp lý, một nồi lẩu nhiều thịt cho 4 người ăn chỉ khoảng 250.000 đồng là thoải mái.&nbsp;Khu Ba Toa tràn ngập những quán lẩu, nhưng tiêu biểu nhất là A Ba Toa, Thanh Tâm. Ngoài ra lẩu bò Ba Toa quán Gỗ ở đường Hoàng Diệu cũng rất đáng để ghé.</p><p><strong>Cơm lam Ayun – Tam Nguyên:&nbsp;</strong>Quán nằm trên đoạn đường Ankroet lên làng Cù Lần, chủ nhân là cặp vợ chồng dân tộc J’rai.&nbsp;Quán đặc biệt bởi những quy tắc gắt gao mà cô chủ đặt ra. Muốn ăn, bạn phải gọi trước một ngày và khi đến phải đọc password là 3 số cuối của điện thoại mới được sắp chỗ ngồi. Quán này có check in trên Google Maps là “Cơm lam Ayun” nên mọi người có thể tìm được đường đi dễ dàng, nằm trên đường Ankroet vào làng Cù Lần. Bạn thấy vườn dâu Mỹ Tiên bên tay phải đi thêm 20 m thì quán nằm bên trái.</p><p><strong>Bánh ướt lòng gà – 47 Tăng Bạt Hổ</strong></p><p>Sự kết hợp độc đáo giữa bánh ướt và lòng gà đã gợi sự tò mò của không ít du khách khi đến Đà Lạt. Để rồi khi nếm thử, ai nấy đều thích thú với hương vị rất lạ mà lôi cuốn của món ăn. Đó là vị dẻo mềm của bánh cùng vị thơm, ngọt của thịt gà. Để thưởng thức, các bạn hãy tìm đến quán bánh ướt trên đường Tăng Bạt Hổ, gần chợ Đà Lạt.</p><p><strong>Bánh tráng nướng – 180 Bùi Thị Xuân</strong></p><p>Cứ đi dọc đường Bùi Thị Xuân đến khi thấy một quán nhỏ, ấm áp, nhiều người quây quần và cô chú nướng bánh hiền hậu, bạn sẽ đến đúng nơi. Một chiếc bánh thập cẩm 21.000 đồng gồm trứng gà, một miếng phô mai, muỗng patê gan, bò khô và mayonaise phía trên. Bánh mới nướng xong có hương thơm nức và khói bay nghi ngút. Quán đông, lối phục vụ ở đây là bàn nào đến trước thì sẽ được phục vụ liên tiếp cho đến khi no mới thôi.</p><p><strong>Nem nướng Bà Hùng – 254 Phan Đình Phùng</strong></p><p>Được làm từ nạc heo xay rồi quết chặt lên một cây đũa, nướng chín, ăn chung với bánh tráng cuốn nhỏ chiên giòn, đồ chua và rau thơm, nem nướng trở thành một trong những món không thể bỏ qua khi <strong>du lịch Đà Lạt.</strong> Điểm nhấn chính là nước chấm được làm từ gan, tôm, thịt và đậu xay nhuyễn tạo thành một hỗn hợp rất đặc biệt. Ngoài quán nem nướng Bà Hùng nổi danh, dọc đường Phan Đình Phùng cũng còn rất nhiều quán bán nem nướng ngon.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/mon-ngon-da-lat-ivivu-3.jpg\" alt=\" Ảnh: ST\"></figure><p><i>Ảnh: ST</i></p><p><strong>Bún bò Công – số 1 Phù Đổng Thiên Vương</strong></p><p>Nằm ngay ngã 5 Đại Học, trên đường xuất phát đi Lang Biang, bún bò Công là địa chỉ ăn sáng nổi tiếng tại Đà Lạt. Tô bún đậm đà chỉ 35.000 đồng nhưng lớn và có đầy đủ thịt với giò. Buổi sáng Đà Lạt còn mờ sương, gọi tô bún nghi ngút khói ra kèm ly đậu nành nóng hổi là bạn nạp đủ năng lượng để chuẩn bị leo đỉnh Lang Biang.</p><p><strong>Ốc bưu nhồi thịt – 33 Hai Bà Trưng</strong></p><p>Món này rất nổi tiếng với người Đà Lạt, đặc biệt là quán 33 đường Hai Bà Trưng. Thịt ốc bươu được nhồi chung với nạc heo, băm nhuyễn, thêm vài lát sả để khử mùi khiến cho bạn muốn ăn ngay khi nhìn thấy thố ốc thơm phức này. Chính chủ quán cho biết, sở dĩ món này đặc biệt là nhờ vào chén nước chấm với công thức pha chế gia truyền của cụ chủ quán đời thứ nhất. Đôi khi bạn phải chờ 5 – 10 phút mới có chỗ trống. Giá mỗi phần vào khoảng 50.000 đồng.</p><p><strong>Bánh canh giò chả – 15 Nhà Chung</strong></p><p>Một tô bánh canh bao gồm chả chiên, cá viên, giò heo và thịt. Đặc biệt bánh canh được làm từ gạo xay theo cách riêng của quán nên sợi trong mà vẫn dai. Đây là một trong những món ngon vào buổi sáng của người Đà Lạt, bởi món ăn ấm nóng, rất hợp với không khí se lạnh của vùng. Nhiều hàng trên đường Xuân Chung bên hông nhà thờ Con Gà bán món ăn này, nhưng quán bánh canh Xuân An số 15 Nhà Chung được nhiều du khách đánh giá là ngon và vừa ăn nhất.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/mon-ngon-da-lat-ivivu-6.jpg\" alt=\"Ảnh: dalattours\"></figure><p><i>Ảnh: dalattours</i></p><p><strong>Sữa đậu nành nóng – Chợ đêm Đà Lạt</strong></p><p>Là thức uống quen thuộc với nhiều người nhưng sữa đậu nành ăn kèm quẩy nóng trong không khí se lạnh của Đà Lạt lại là trải nghiệm rất khác biệt. Bên cạnh sữa đậu nành, bạn có thể đổi vị bằng các loại sữa đậu xanh, đậu đen hay ca cao nóng và các loại bánh ngọt đa dạng ở các quán hàng rong bán món này trong chợ đêm Đà Lạt.</p><p><strong>Sữa chua phô mai – 48 Khe Sanh</strong></p><p>Đây là món ăn được nhiều bạn trẻ “truy tìm” khi đến Đà Lạt, được làm như sữa chua thông thường nhưng khéo léo cho thêm phô mai trong nguyên liệu. Sữa chua phô mai có vị béo, dẻo, chua chua, được bán ở số 48 đường Khe Sanh, với giá 7.000 đồng một hũ.</p><p><strong>Cháo gà, miến gà – 10A Huyền Trân Công Chúa</strong></p><p>Thời tiết se lạnh của Đà Lạt khiến món cháo gà, miến gà rất đắt hàng. Sau khi lang thang ngắm thành phố buổi đêm, dừng chân quán nhỏ, thưởng thức tô cháo gà nấu loãng, bỏ nhiều hành và tiêu để thêm ấm bụng. Các quán ngon nên ghé ở đường Phan Bội Châu, Nguyễn Công Trứ, Huyền Trân Công Chúa… với giá 25.000-30.000 đồng một tô, gỏi gà từ 40.000 đồng một đĩa.</p><p><strong>Bánh mì xíu mại – Góc ngã ba Trần Nhật Duật – Hoàng Diệu</strong></p><p>Ăn kèm với bánh mì là bát xíu mại làm nước ninh xương trong váng mỡ béo ngậy cùng viên thịt bé xíu, cộng thêm chút hành lá thái nhuyễn, tuy nhiên khi ăn lại rất thanh mà không hề ngấy. Có 3 cách phổ biến để thưởng thức là xé nhỏ bánh mì cho vào bát xíu mại, để nguyên miếng bánh mì lớn chấm nước dùng hoặc bỏ xíu mại vào giữa chiếc bánh mì. Ngoài các quán gần cổng trường học, cổng chợ, bạn có thể đến ngã ba Trần Nhật Duật – Hoàng Diệu để cảm nhận được hương vị đúng điệu của món ăn.</p><p><strong>THAM KHẢO </strong><a href=\"https://www.ivivu.com/du-lich/tour-da-lat-3n2d-hcm-da-lat/189?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>TOUR ĐÀ LẠT 3N2D: HCM – ĐÀ LẠT</strong></a><strong> VỚI GIÁ CHỈ&nbsp;2.068.000 VND</strong></p><p>&nbsp;</p><h2><a href=\"https://www.ivivu.com/khach-san-da-lat?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>Khách sạn Đà Lạt</strong></a></h2><p>Khách sạn Đà Lạt rất đa dạng, tùy thuộc vào điều kiện của cá nhân bạn có thể dễ dàng lựa chọn cho mình một khách sạn thích hợp.&nbsp;Danh sách khách sạn Đà Lạt hiện đã khá đầy đủ trên iVIVU.com, có nhiều mức giá cho bạn lựa chọn. Dưới đây là những khách sạn Đà Lạt được khách hàng iVIVU.com yêu thích nhất thời gian qua:</p><p><a href=\"https://www.ivivu.com/khach-san-da-lat/khu-nghi-duong-terracotta-da-lat?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>Khu nghỉ dưỡng Terracotta Đà Lạt</strong></a></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/khu-nghi-duong-terracotta-da-lat-1-800x450.jpg\" alt=\"khu-nghi-duong-terracotta-da-lat-1-800x450\"></figure><p><a href=\"https://www.ivivu.com/khach-san-da-lat/swiss-belresort-tuyen-lam-da-lat?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>Swiss Belresort Tuyền Lâm</strong></a></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/swiss-belresort-tuyen-lam-da-lat-59-800x450.jpg\" alt=\"swiss-belresort-tuyen-lam-da-lat-59-800x450\"></figure><p><a href=\"https://www.ivivu.com/khach-san-da-lat/ana-mandara-villas-da-lat-resort-spa\"><strong>Ana Mandara Villas Đà Lạt Resort &amp; Spa</strong></a></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/ana-mandara-villas-da-lat-resort-800x450.jpg\" alt=\"ana-mandara-villas-da-lat-resort--800x450\"></figure><p><a href=\"https://www.ivivu.com/khach-san-da-lat/khu-nghi-duong-sam-tuyen-lam\"><strong>Sam Tuyền Lâm Resort</strong></a></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/khu-nghi-duong-sam-tuyen-lam-15-800x450.jpg\" alt=\"khu-nghi-duong-sam-tuyen-lam-15-800x450\"></figure><p><a href=\"https://www.ivivu.com/khach-san-da-lat/khach-san-muong-thanh-da-lat?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>Khách sạn Mường Thanh Đà Lạt&nbsp;</strong></a></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/cam-nang-du-lich-da-lat-ivivu-2.jpg\" alt=\"Ảnh: iVIVU.com\"></figure><p><i>Ảnh: iVIVU.com</i></p><p>&nbsp;</p><h2><a href=\"https://www.ivivu.com/blog/2017/02/danh-sach-mot-loat-homestay-o-da-lat-moi-toanh-save-ve-de-di-dan-trong-nam-2017/\"><strong>Homestay Đà Lạt</strong></a></h2><p>Dưới đây là danh sách một loạt homestay mới toanh ở <a href=\"https://www.ivivu.com/blog/2013/09/du-lich-da-lat-cam-nang-tu-a-den-z/\">Đà Lạt</a>, các bạn cứ “save” về để đi dần trong năm 2017 nhé.</p><p><strong>Home of Dreamers</strong></p><p>Tuy cách decor không quá cầu kì nhưng Home of Dreamer sẽ thu hút bạn ngay từ ánh nhìn đầu tiên nhờ không gian vừa cổ điển lại vô cùng yên bình. Theo lời nhận xét của một du khách từng ở đây thì “<i>phòng ốc sạch sẽ, view toàn cảnh thì “so romantic”… Nhìn đâu đâu cũng nghề nghệ thích lắm… Đã vậy còn có nuôi thêm mấy em chó nữa ôi trời ơi thích vô cùng mỗi lần ra vào homestay là phải ngó ngang nựng chúng nó 1 phát…</i>“. Giá phòng đôi ở đây giao động từ 500-700.000 đồng, phòng dorm giá 150.000 đồng.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/02/danh-sach-mot-loat-homestay-moi-toanh-o-da-lat-de-di-dan-trong-nam-2017-ivivu-3.jpg\" alt=\"Ảnh: Home of Dreamers\"></figure><p><i>Ảnh: Home of Dreamers</i></p><p><i>Địa chỉ:</i> 2/35 Nam Hồ – Đà Lạt. Điện thoại: 096 537 7565. Email: homeofdreamers.vn@gmail.com</p><p><strong>Dalat80s.NhàMình</strong></p><p>Nhà Mình mang phong cách kiến trúc của những ngôi nhà thời thập niên 80, một chút hơi thở của kiến trúc châu Âu kết hợp với nét nhà của người dân tộc địa phương thời bấy giờ. Khi khách bước vào Nhà Mình sẽ không cảm giác đây là một quán café, hay một khách sạn xa lạ; thay vào đó là một ngôi nhà được bố trí quen thuộc mang không khí ấm áp gia đình. Giá phòng tham khảo:&nbsp;130-450.000 đồng tùy theo loại phòng.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/02/danh-sach-mot-loat-homestay-moi-toanh-o-da-lat-de-di-dan-trong-nam-2017-ivivu-21.jpg\" alt=\"danh-sach-mot-loat-homestay-moi-toanh-o-da-lat-de-di-dan-trong-nam-2017-ivivu-21\"></figure><p><i>Địa chỉ:&nbsp;</i>Lô B9 KQH Ngô Quyền – Bạch Đằng. Điện thoại: 0908942266</p><p><strong>Dalat Lacasa Homestay II</strong></p><p>Với kiến trúc tinh tế, pha lẫn chút hoài cổ và hơi hướm phong cách Morocco Dalat Lacasa Homestay II cũng là địa chỉ bạn nên “save” nếu đang có ý định đi Đà Lạt. Do thiết kế nhà theo phong cách Morocco nên ngay khi bước vào homestay bạn sẽ thấy màu trắng được sử dụng rất nhiều cho các không gian như: nội thất, cầu thang, hành lang, ban công…&nbsp;Tại homestay này có rất nhiều loại phòng cho bạn lựa chọn tùy theo số lượng người đi và nhu cầu của bạn. Giá phòng tham khảo: 300-450.000 đồng tùy loại phòng.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/02/danh-sach-mot-loat-homestay-moi-toanh-o-da-lat-de-di-dan-trong-nam-2017-ivivu-13.jpg\" alt=\"Ảnh: uyenvaa\"></figure><p><i>Ảnh: uyenvaa</i></p><p><i>Địa chỉ:</i> 59 Thủ Khoa Huân.&nbsp; Điện thoại: 097 272 82 05</p><p><a href=\"https://www.ivivu.com/blog/2017/01/check-in-doi-mot-nguoi-cafe-homestay-moi-chat-lu-giua-long-da-lat/\"><strong>Đợi Một Người</strong></a></p><p>Tọa lạc tại đường Khởi Nghĩa Bắc Sơn, P.10, TP. Đà Lạt (gần Dinh 2), cách Hồ Xuân Hương 5 phút xe máy, Đợi Một Người – Cafe &amp; Homestay bao quanh bởi vườn cà phê nằm trên ngọn đồi cao, view bao quát cả vùng thung lũng rộng lớn. Homestay xinh xắn này&nbsp;hiện có cả phòng dorm và phòng riêng, với thiết kế mộc mạc mang âm hưởng country, nhẹ nhàng.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/02/danh-sach-mot-loat-homestay-moi-toanh-o-da-lat-de-di-dan-trong-nam-2017-ivivu-14.jpg\" alt=\"Ảnh: Đợi Một Người\"></figure><p><i>Ảnh: Đợi Một Người</i></p><p><i>Địa chỉ:&nbsp;</i>Khởi Nghĩa Bắc Sơn. Điện thoại: 063 6557 587</p><p><a href=\"https://www.ivivu.com/blog/2017/01/check-in-vanda-garden-hill-homestay-da-lat-moi-toanh-sieu-hay-ho/\"><strong>Vanda Garden Hill</strong></a></p><p>Tọa lạc ở số 39 Triệu Việt Vương, cách trung tâm thành phố chỉ khoảng 10 phút đi xe nên rất thuận tiện để vừa có những trải nghiệm nghỉ dưỡng xanh tươi, vừa thỏa thích thăm thú các địa điểm nổi tiếng của Đà Lạt. Vanda Garden Hill Đà Lạt có nhiều căn phòng cho bạn lựa chọn như: phòng đôi Big Owl, phòng đơn nhỏ Little Owl, phòng đơn lớn Full Moon… Đặc biệt, Vanda Garden Hill Đà Lạt còn xây thêm những căn bungalow nhỏ hình tam giác siêu dễ thương nằm dọc con dốc dành cho các cặp đôi. Giá phòng tham khảo: 250-450.000 đồng tùy loại phòng.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/11/danh-sach-mot-loat-homestay-moi-toanh-o-da-lat-de-di-dan-trong-nam-2017-ivivu-22.jpg\" alt=\"Ảnh: Vanda Garden Hill\"></figure><p><i>Ảnh: Vanda Garden Hill</i></p><p><i>Địa chỉ:</i>&nbsp;39 Triệu Việt Vương. Điện thoại 0633.970. 788 – 0977.494.888</p><p><a href=\"https://www.ivivu.com/khach-san-da-lat/nha-gio-homestay-da-lat?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\"><strong>Nhà Gió – The Dalat Old-Home</strong></a></p><p>Tọa lạc ở địa chỉ&nbsp;50 (số cũ) Nguyễn An Ninh,&nbsp;Nhà Gió – The Dalat Old-Home là nơi không quá gần trung tâm nhưng đủ để bạn tận hưởng thiên nhiên, cây cối, nghe tiếng chim hót vào buổi sáng. Nhà Gió hiện có các loại phòng dorm, đơn, đôi, family theo phong cách của những năm 70, 80, cực kì ấm cúng và dễ thương.&nbsp;Giá phòng tham khảo: 110-700.000 đồng tùy loại phòng.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/11/danh-sach-mot-loat-homestay-moi-toanh-o-da-lat-de-di-dan-trong-nam-2017-ivivu-25.jpg\" alt=\"Ảnh: Nhà Gió\"></figure><p><i>Ảnh: Nhà Gió</i></p><p><a href=\"https://www.ivivu.com/blog/2017/02/wine-valley-homestay-diem-luu-tru-hinh-thung-ruou-vang-cuc-doc-dao-o-da-lat/\"><strong>Wine Valley Homestay</strong></a></p><p>Nằm cách trung tâm Đà Lạt khoảng 2km, Wine Valley Homestay chính là điểm lưu trú mới toanh, được giới trẻ săn đón trải nghiệm với phòng ốc thiết kế độc – lạ bởi những thùng rượu vang đậm chất Đà Lạt. Homestay ra đời từ ý tưởng muốn tạo ra một không gian để khách đến lưu trú cảm thấy thoải mái như ở nhà và tiếp xúc với mọi thứ đúng chất Đà Lạt. Ở đây tuy không lớn so với những nơi khác nhưng cũng đủ góc để bạn tha hồ chụp hình sống ảo. Giá phòng tham khảo: 150-350.000 đồng tùy loại phòng.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/02/danh-sach-mot-loat-homestay-moi-toanh-o-da-lat-de-di-dan-trong-nam-2017-ivivu-28.jpg\" alt=\"Ảnh: Lộc Nguyễn\"></figure><p><i>Ảnh: Lộc Nguyễn</i></p><h2><strong>Những địa điểm chụp ảnh tuyệt đẹp tại Đà Lạt</strong></h2><p><strong>Ma rừng lữ quán</strong></p><p>Vẫn giữ được vẻ đẹp hoang sơ của rừng núi nhưng chủ nhân Ma rừng lữ quán đã tạo ra khung cảnh “huyền ảo” từ hồ cá, cây cảnh hay những ngôi nhà gỗ làm mê hoặc du khách khi đặt chân đến.&nbsp;Để vào Ma rừng lữ quán bạn sẽ phải qua những đoạn đường đất, đá gồ ghề cách trung tâm thành phố Đà Lạt khoảng chừng 25km theo hướng Suối Vàng. Tuy đoạn đường để đến được nơi đây hơi khó khăn nhưng khi đã chinh phục những cung đường đó bạn sẽ không khỏi trầm trồ khen gợi trước vẻ đẹp mà nơi này mang lại.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/top-10-dia-diem-chup-amj-mien-phi-o-da-lat-ivivu-10.jpg\" alt=\"Ảnh: Lan Anh\"></figure><p><i>Ảnh: Ma Rừng Lữ Quán</i></p><p><strong>Làng hoa Vạn Thành</strong></p><p>Nằm cách trung tâm thành phố khoảng 3 km, chạy theo đường 3/2, đến khách sạn Sài Gòn – Đà Lạt rẽ tay trái về hướng Cam Ly, bạn sẽ được chiêm ngưỡng làng hoa nổi tiếng và lâu đời nhất ở Đà Lạt.&nbsp;Không chỉ xanh ngát bởi những cánh đồng hoa rộng lớn, những cánh hoa đủ loại, đủ màu từ màu trắng giản dị tinh khôi, hồng phấn dịu dàng đến vàng kiêu sa hay đỏ nhung lộng lẫy sẽ luôn đủ sức làm bạn đắm chìm vào thế giới hoa đa dạng và rực rỡ đến quên cả lối về.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/top-10-dia-diem-chup-amj-mien-phi-o-da-lat-ivivu-1.jpg\" alt=\"Làng hoa Vạn Thành là một trong sáu làng hoa truyền thống của thành phố, nơi trồng hoa hồng nhiều nhất tại Đà Lạt. Ảnh: Lan Anh\"></figure><p><i>Làng hoa Vạn Thành là một trong sáu làng hoa truyền thống của thành phố, nơi trồng hoa hồng nhiều nhất tại Đà Lạt. Ảnh: Lan Anh</i></p><p><strong>Đồi cỏ tranh Lạc Dương</strong></p><p>Với diện tích hơn 10 hecta cỏ tranh thì giờ đây ngọn đồi cỏ trắng xóa ở xã Đa Sar, huyện Lạc Dương đã trở thành địa điểm du lịch và chụp hình lý tưởng dành cho nhiều du khách, đặc biệt là giới trẻ và những bạn đam mê, yêu phong cảnh thiên nhiên, núi rừng.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/canh-dong-co-lau-da-lat-ivivu-9.jpg\" alt=\"Cánh đồng cỏ lau kéo dài, lấp ló giữa những áng mây không biết từ khi nào đã trở thành một nét đẹp của phố núi Đà Lạt. Ảnh: Hoằng Bùi\"></figure><p><i>Cánh đồng cỏ lau kéo dài, lấp ló giữa những áng mây không biết từ khi nào đã trở thành một nét đẹp của phố núi Đà Lạt. Ảnh: Hoằng Bùi</i></p><p>Được biết vào những ngày đầu mùa hè, tháng 5, tháng 6 thì loại cỏ này mọc rất nhanh và nở bông trắng rộ khắp các vùng Tây Nguyên.&nbsp;Để đến đồi cỏ tranh này bạn phải đi hơn 40km đường dài, trong đó có cả đường rừng nên phương tiện thích hợp nhất chính là xe máy.</p><p><strong>Hoa tam giác mạch Tà Nung</strong></p><p>Vườn hoa tam giác mạch Đà Lạt tọa lạc tại xã Tà Nung, huyện Lâm Hà trên đường từ Đà Lạt đến thác Voi. Tuy không quá lớn như một cánh đồng ở Tây Bắc, nhưng nó cũng đủ làm du khách xôn xao và hồi hộp mong một lần được đến đây để chiêm ngưỡng màu hoa trắng hồng hấp dẫn của loài hoa mang tên tam giác mạch.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/hoa-tam-giac-mach-da-lat-ivivu-6.jpg\" alt=\"Ảnh: Truyền Trần\"></figure><p><i>Ảnh: Truyền Trần</i></p><p><strong>Đồi Thiên Phúc Đức</strong></p><p>Đồi Thiên Phúc Đức là một trong những địa điểm ngắm mây lý tưởng nhất thành phố. Nằm ở vị trí đối diện với LangBiang nên từ đây bạn có thể chiêm ngưỡng bức tranh hùng vĩ của địa danh nổi tiếng bậc nhất này khi du lịch Đà Lạt.&nbsp;Độc đáo nhất ở đây là hình ảnh cây thông cô đơn trên ngọn đồi, có dáng nghiêng về một phía như đang đợi chờ một ai, lẻ loi cô độc giữa cái se lạnh của Đà Lạt.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/top-10-dia-diem-chup-amj-mien-phi-o-da-lat-ivivu-28.jpg\" alt=\"Ảnh: Tiến Đà Lạt\"></figure><p><i>Ảnh: Tiến Đà Lạt</i></p><p><strong>Dalat Milk Farm</strong></p><p>Dalat Milk Farm thuộc xã Tu Tra, huyện Đơn Dương, tỉnh Lâm Đồng. Nông trại này hấp dẫn các bạn trẻ tìm đến bởi những cánh đồng hoa rộng mênh mông, hồ nước xanh thơ mộng và cả đàn bò sữa đáng yêu. Để đến Dalat Milk Farm, bạn đi xe máy từ trung tâm thành phố Đà Lạt về hướng huyện Đức Trọng theo quốc lộ 20 khoảng 25 km, gặp ngã ba Bồng Lai, rẽ trái vào 10 km.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/dalat-milk-farm-ivivu-9.png\" alt=\"Ảnh:@dhb.khanh\"></figure><p><i>Ảnh:@dhb.khanh</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/dalat-milk-farm-ivivu-13.png\" alt=\"Ảnh:@theora_gn\"></figure><p><i>Ảnh:@theora_gn</i></p><p>Với khung cảnh thơ mộng, Dalat Milk Farm không chỉ là điểm chụp choẹt của giới trẻ mà nó còn là chốn bình yên để bạn thư giãn, tận hưởng một không gian riêng tư và hoàn toàn tách biệt sự ồn ào của thành thị.</p><p><strong>Quảng trường Lâm Viên</strong></p><p>Là một trong những địa điểm được giới trẻ “săn đón” nhiều nhất vào đầu năm 2016. Công trình Quảng trường Lâm Viên Đà Lạt hút hồn bởi những kiến trúc cực chất, lạ để bạn thỏa sức thể hiện phong cách riêng chính mình.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/top-10-dia-diem-chup-amj-mien-phi-o-da-lat-ivivu-27.jpg\" alt=\"Ảnh: Hương Giang\"></figure><p><i>Ảnh: Hương Giang</i></p><p>Quảng trường Lâm Viên tọa lạc giữa “trái tim” của thành phố hoa, hướng ra hồ Xuân Hương với tổng diện tích lên đến 72.000 m². Không chỉ nổi bật với không gian rộng, thoáng mà Quảng trường Lâm Viên còn ấn tượng với công trình nghệ thuật khổng lồ với khối bông hoa dã quỳ và khối nụ hoa được thiết kế bằng kính màu lạ mắt.</p><p><strong>Trung tâm văn hóa Thanh thiếu niên, số 13 Đinh Tiên Hoàng</strong></p><p>Mới nổi trong thời gian gần đây, Trung tâm văn hóa Thanh thiếu niên nằm ở số 13 Đinh Tiên Hoàng là một địa điểm được nhiều bạn trẻ đua nhau tới chụp hình. Nơi đây đặc biệt rất thích hợp cho những bạn muốn có hình đẹp, mà lại mang phong cách độc lạ và cá tính.&nbsp;Điểm thu hút của nơi này chính là khu khán đài chất lừ của trung tâm. Khu này ở ngoài trời và khá rộng, đủ rộng để các bạn có thể thoải mái dựng bất cứ một concept ảnh nào mà mình muốn. Ngoài ra, khu vực này còn khiến bạn choáng ngợp với những hàng ghế trắng xếp san sát nhau nhìn cực Tây, chính điều này đã giúp các bạn trẻ có những bức ảnh hơi bụi bặm và chẳng đụng hàng với nơi nào cả.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/nhung-dia-diem-chup-hinh-cuc-chat-o-da-lat-ivivu-4.jpg\" alt=\"Ảnh: IG_mynimal.bygau\"></figure><p><i>Ảnh: IG_mynimal.bygau</i></p><p><strong>Đồi hoa lavender hồ Tuyền Lâm</strong></p><p>Đồi hoa lavender hay còn được gọi là hoa oải hương mới này được trồng trong khuôn viên khu du lịch Lavender Đà Lạt, thuộc khu vực hồ Tuyền Lâm (cách trung tâm Đà Lạt khoảng 7km). Tuy cùng nằm trên con đường vào Đường hầm Điêu khắc nhưng khu du lịch Lavender còn khá hoang sơ. Cây được trồng trên triền đồi rộng đến hàng ngàn mét vuông và tạo thành từng luống nhìn rất đẹp mắt.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/hoa-lavender-da-lat-ivivu-1.jpg\" alt=\"Đồi hoa rộng hàng ngàn mét vuông được trồng thành từng luống rất đẹp mắt. Ảnh: Yến Trịnh\"></figure><p><i>Đồi hoa rộng hàng ngàn mét vuông được trồng thành từng luống rất đẹp mắt. Ảnh: Yến Trịnh</i></p><p><strong>Các homestay ở Đà Lạt</strong></p><p>Với mong muốn giúp du khách tìm cho mình một nơi chốn nghỉ chân vừa thanh bình, vừa đẹp và vừa có thể chụp hình check-in lung linh nên nhiều chủ nhà nghỉ ở Đà Lạt đã đầu tư, thiết kế và bố trí homestay theo phong cách cực “chất”. Đến với các homestay này du khách sẽ có cảm giác mình đang ở một quán cà phê hay một studio nghệ thuật.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2013/09/nhung-dia-diem-chup-hinh-cuc-chat-o-da-lat-ivivu-7.jpg\" alt=\"Ảnh: Nhà của Tre – Tre’s house Facebook\"></figure><p><i>Ảnh: Nhà của Tre – Tre’s house Facebook</i></p><p><i>Một vài homestay chụp hình đẹp các bạn có thể tham khảo:</i></p><p>– Là Nhà homestay, địa chỉ: 77 Hoàng Diệu, Đà Lạt.</p><p>– Tre’s house, địa chỉ: 149A Võ Trường Toản, Đà Lạt.</p><p>– Le Bleu, địa chỉ: Phố Lý Tự Trong , Đà Lạt</p><p>– HomeFarm, địa chỉ: 17/1 Triệu Việt Vương, Đà Lạt.<br>&nbsp;</p><h2><a href=\"https://www.ivivu.com/blog/2017/04/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-ban-phai-check-in-dan-trong-nam-2017/\"><strong>Quán cà phê đẹp ở Đà Lạt&nbsp;</strong></a></h2><p><a href=\"https://www.ivivu.com/blog/2017/03/hot-du-lich-da-lat-check-in-quan-ca-phe-container-view-360-do-giua-doi-che-cau-dat/\"><strong>Quán cà phê container ở&nbsp;&nbsp;đồi chè Cầu Đất</strong></a></p><p>Quán cà phê container view 360 độ mới toanh giữa đồi chè Cầu Đất, hiện đang trở thành một trong những điểm được check-in nhiều nhất của giới trẻ khi đến <a href=\"https://www.ivivu.com/blog/2013/09/du-lich-da-lat-cam-nang-tu-a-den-z/\"><strong>du lịch Đà Lạt</strong></a>. Được xây dựng giữa đồi chè quán cà phê nhỏ xinh được sơn với màu sắc nổi bật, vừa tiện cho khách du lịch ngắm cảnh view 360 độ, lại vừa có cảm giác gần gũi với thiên nhiên. Đặc biệt, đến đây bạn sẽ được thưởng thức những món bánh và cà phê nóng hổi, tươi ngon.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/11/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-1.jpg\" alt=\"Ảnh: Sứa\"></figure><p><i>Ảnh: Sứa</i></p><p><strong>Panorama</strong></p><p>Đà Lạt có rất nhiều quán cà phê thiết kế đẹp, và Panorama là một trong số đó, quán như một căn nhà kính treo lơ lửng giữa trời. Đúng như tên gọi, từ bất kỳ chỗ ngồi nào của quán, bạn cũng có thể phóng mắt ra 360 độ xung quanh mà không hề bị khuất tầm nhìn. Địa chỉ:&nbsp;Vòng xoay 723 Trại Mát, Phường 11, Đà Lạt.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/11/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-9.png\" alt=\"Ảnh: aaaabird\"></figure><p><i>Ảnh: aaaabird</i></p><p><strong>Bùi Văn Ngọ Coffee</strong></p><p>Quán được thiết kế sang trọng, xung quanh toàn kính. Điểm cộng của quán là view siêu đẹp, từ đây nhìn ngang sẽ thấy xe cộ đổ đèo, nhìn lên thấy lối lên cáp treo khá đẹp mắt và đặc biệt là nhìn thấy cả rừng thông. Địa chỉ:&nbsp;31 Đường 3 Tháng 4</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/11/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-10.png\" alt=\"Ảnh: wowvalerkina\"></figure><p><i>Ảnh: wowvalerkina</i></p><p><strong>Demi’70s</strong></p><p>Không gian quán đẹp,&nbsp;ấm cúng, đồ uống ngon và có nhiều món độc, lạ để bạn lựa chọn. Đặc biệt quán còn có những chú thỏ vô cùng dễ thương dễ “đốn tim” du khách. Ngoài ra, điểm cộng là chủ quán siêu dễ thương và nhiệt tình. Địa chỉ:&nbsp;123 Yersin</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/04/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-121.jpg\" alt=\"Ảnh: Demi\'70s\"></figure><p><i>Ảnh: Demi’70s</i></p><p><a href=\"https://www.ivivu.com/blog/2016/11/thongdalat-space-quan-ca-phe-vuon-uom-ngap-tran-mau-xanh-o-da-lat/\"><strong>THONGDALAT.space</strong></a></p><p>Tọa lạc ở địa chỉ lầu 1, 90 Bùi Thị Xuân THONGDALAT.space là một quán cà phê được xây dựng dựa trên ý tưởng từ những khu nhà kính trồng hoa ở Đà Lạt với không gian kính toàn là kính.&nbsp;Ngay khi bước chân vào quán bạn sẽ cảm nhận được cây cối có ở khắp mọi nơi, khiến không gian của quán ngập tràn màu xanh.&nbsp;Menu của quán khá đa dạng từ cà phê truyền thống đến matcha, Italian Coffee… với giá khoảng từ 20-39.000 đồng tùy loại. Ngoài các loại thức uống, đến THONGDALAT.space bạn còn có thể thưởng thức các loại bánh như Brownie hay Salted Caramel vô cùng hấp dẫn. Địa chỉ: Lầu 1, 90 Bùi Thị Xuân</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/04/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-17.jpg\" alt=\"Ảnh: thongdalat.space\"></figure><p><i>Ảnh: thongdalat.space</i></p><p><strong>Mistyforest</strong></p><p>Đây là một trong những quán cà phê phong cách Bắc Âu đầu tiên ở Đà Lạt, đẹp, lạ và thích hợp để sống ảo. Đặc biệt trong quán có chỗ thiết kế y chang lều cắm trại, ngồi chụp hình bao đẹp. Địa chỉ:&nbsp;124 Bạch Đằng</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/04/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-19.png\" alt=\"Ảnh: nolucky271\"></figure><p><i>Ảnh: nolucky271</i></p><p><strong>F Coffee &amp; Shop</strong></p><p>Quán nằm trong một con hẻm, tuy nhiên cũng không khó tìm. Tuy không gian quán hơi nhỏ nhưng được trang trí rất đẹp mắt với nhiều cây xanh, quán có cả không gian trong nhà lẫn ngoài trời, ngồi ở đâu cũng thích. Đặc biệt, điểm nổi bật của quán là&nbsp;các loại thức uống homemade vô cùng ngon. Địa chỉ:&nbsp;386/10A Phan Đình Phùng</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/11/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-27.png\" alt=\"Ảnh: foodydalat\"></figure><p><i>Ảnh: foodydalat</i></p><p><strong>Maybe Blue Coffee</strong></p><p>Quán có không gian khá rộng, có 2 tầng, cách bày trí khá đẹp mắt, chia ra thành các khoảng không gian khác nhau, có khu ngồi ngoài trời, có khu ngồi trong nhà. Lúc mở cửa đi vào sẽ thấy ngay kệ sách đặt giữa với chùm đèn nhiều màu rất bắt mắt. Điểm cộng cho quán là có rất nhiều sách hay. Địa chỉ:&nbsp;5 Lê Hồng Phong</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/04/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-24.png\" alt=\"Ảnh: lai.france\"></figure><p><i>Ảnh: lai.france</i></p><p><strong>School Bus Coffee</strong></p><p>Quán nằm trong một con hẻm rất sâu, bên cạnh trường đại học Yersin. Quán nhỏ nhỏ, nhìn ở ngoài thì dễ thương,&nbsp;decor theo kiểu xe bus với tone vàng đen nổi bật, bên trong thiết kế họa tiết hiện đại. Địa chỉ:&nbsp;25 Tôn Thất Tùng</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/11/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-25.png\" alt=\"Ảnh: nolucky271\"></figure><p><i>Ảnh: nolucky271</i></p><p><strong>An Cafe</strong></p><p>Nằm lửng bên con dốc Ba tháng Hai, với diện tích 200m² quán cà phê An là điểm dừng chân lý tưởng cho những ai yêu thích thiên nhiên và muốn tìm đến một nơi mang&nbsp;phong cách đậm chất mộc mạc của Đà Lạt.&nbsp;Bàn ghế của An đều được làm từ gỗ với thiết kế tinh tế làm cho không gian quán trở nên sang trọng hơn và ở mỗi chiếc bàn đều được bày trí những chậu cây nhỏ xinh như: rau cải, rau húng, bạc hà…&nbsp;Điều đặc biệt nhất ở cà phê An chính là bạn có thể thấy tất tần tật các loại rau, cải ở bất cứ đâu trong quán, từ khu vườn nhỏ bên ngoài cho đến kệ, bàn và những lối đi. Địa chỉ:&nbsp;63Bis Đường 3 Tháng 2</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/11/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-31.png\" alt=\"Ảnh: byoo99\"></figure><p><i>Ảnh: byoo99</i></p><p><a href=\"https://www.ivivu.com/blog/2016/06/sunshine-tim-dia-chi-ngam-da-lat-voi-view-sieu-dep-va-chup-anh-ao-thoi-roi/\"><strong>Sunshine Tím</strong></a></p><p>Nằm dưới một con dốc nhỏ trên đường Trần Hưng Đạo, Sunshine Tím thoạt nhìn bên ngoài không có gì nổi bật nhưng khi bước xuống dưới quán bạn sẽ có cảm giác “vỡ òa” vì view cực đẹp nhìn thẳng ra hồ Xuân Hương và đồi thông. Nếu như bên trong được trang trí theo kiểu lãng mạn, với tông tím chủ đạo, có hoa đào, có piano, thì bên ngoài được trang trí khá “chất”, quán tận dụng lốp xe cũ, khung cửa cũ, treo các chai thủy tinh hay đèn dầu xưa.&nbsp;Không gian quán khá yên bình, mát mẻ và vô cùng thích hợp với những ai muốn tìm một góc yên tĩnh hoặc nhóm bạn muốn cùng nhau “trốn” thì Sunshine Tím sẽ là địa chỉ “không thể tuyệt hơn” trong chuyến<i><strong> du lịch Đà Lạt.</strong></i> Địa chỉ:&nbsp;9 Trần Hưng Đạo</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/11/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-34.jpg\" alt=\"Ảnh: Sunshine Tím\"></figure><p><i>Ảnh: Sunshine Tím</i></p><p>&nbsp;</p><p><a href=\"https://www.ivivu.com/blog/2016/02/me-linh-coffee-garden-quan-ca-phe-co-view-dep-ngat-ngay-o-da-lat/\"><strong>Mê Linh Coffee Garden</strong></a></p><p>Được mệnh danh là quán cà phê có view đẹp nhất ở Đà Lạt, Mê Linh Coffee Garden tọa lạc ở địa chỉ tổ 20, thôn 4, xã Tà Nung, TP. Đà Lạt, được nhiều du khách <i>du lịch Đà Lạt</i> yêu thích và tìm đến không chỉ nhờ hương vị cà phê chồn đúng chất mà còn sở hữu tầm nhìn có một không hai ở Đà Lạt. Mê Linh Coffee Garden được thiết kế mở, đảm bảo cho bạn một tầm nhìn trọn vẹn 360 độ và ngay dưới chân Mê Linh Coffee Garden là một trang trại cà phê nhỏ, phía trước mặt là hồ Đập Cam Ly. Muốn đến đây, bạn phải vượt qua 20km đoạn đường từ trung tâm Đà Lạt, giữ vững tay lái qua đèo Tà Nung rồi chạy vào đường tỉnh 725.&nbsp;Địa chỉ:&nbsp;tổ 20, thôn 4, xã Tà Nung, TP. Đà Lạt.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/04/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-36.jpg\" alt=\"Ảnh: Gal Reicher\"></figure><p><i>Ảnh: Gal Reicher</i></p><p><a href=\"https://www.ivivu.com/blog/2016/10/dalat-train-villa-quan-ca-phe-nho-xinh-phai-ghe-neu-den-da-lat/\"><strong>Dalat Train Villa</strong></a></p><p>Tọa lạc trong khuôn viên của khu biệt thự đường sắt nổi tiếng, Dalat Train Villa nằm bên trong một toa tàu lửa lâu năm và sở hữu khung cảnh lãng mạn với view nhìn được khắp thành phố.&nbsp;Điều đặc biệt khiến cho quán cà phê này nổi tiếng chính là do nó nằm bên trong một toa tàu lửa lâu năm. Không gian quán khá nhỏ nhưng được sắp xếp gọn gàng, nội thất độc đáo với màu xanh coban dịu mắt và màu ghế gỗ ép vàng tạo cảm giác nhẹ nhàng. Trên tường cũng có treo nhiều bức tranh xinh xinh, đặc biệt là các bức tranh về hình ảnh của những chiếc xe lửa khắp nơi trên thế giới. Địa chỉ: 1 Quang Trung</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/04/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-37.jpg\" alt=\"Ảnh: Dalat Train Villa\"></figure><p><i>Ảnh: Dalat Train Villa</i></p><p><a href=\"https://www.ivivu.com/blog/2016/05/la-viet-coffee-diem-hen-ly-tuong-de-chup-choet-va-thuong-thuc-ca-phe-nguyen-chat-o-da-lat/\"><strong>Là Việt Coffee</strong></a></p><p>Là Việt Coffee có thể xem là một ví dụ hiếm hoi với mô hình quán cà phê theo kiểu “công xưởng”. Nơi đây&nbsp;được chia làm 2 khu chính: Từ cửa chính đi vào là khu vực ghế ngồi dành cho khách với trần nhà cao, tạo không gian thật rộng và thoáng.&nbsp;Khu phía dưới là khu “chế biến” cà phê, tại đây bạn sẽ có dịp quan sát các công đoạn từ rang, xay cho tới đóng gói, chế biến cà phê theo đúng tiêu chuẩn của Mỹ bằng các máy móc hiện đại và nếu thích bạn cũng có thể mua cà phê về làm quà tặng.&nbsp;Đặc biệt ngoài quán cafe, Là Việt còn là công ty chuyên cung cấp cafe sạch (đa số arabica) và có các tour tham quan kèm học chế biến cà phê khá thú vị dành cho du khách.&nbsp;Địa chỉ:&nbsp;200 Nguyễn Công Trứ</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/11/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-41.jpg\" alt=\"Ảnh: goasiatravel.com\"></figure><p><i>Ảnh: goasiatravel.com</i></p><p><a href=\"https://www.ivivu.com/blog/2016/11/up-coffee-dalat-diem-den-moi-sieu-xinh-ban-phai-check-in-khi-den-da-lat/\"><strong>UP Coffee Dalat</strong></a></p><p>UP Coffee Dalat “hút hồn” du khách bởi không gian mang phong cách vừa “vintage” vừa hiện đại, tạo cảm giác cực kì ấm cúng. Quán được chia làm nhiều khu vực, từ trong nhà, sát cửa sổ, sân thượng, mà ngồi đâu cũng lại có cái thú vị riêng của nó.&nbsp;Thiết kế của UP Coffee Dalat cũng rất được đầu tư và sáng tạo. Bàn ghế trong nhà chủ yếu là bàn gỗ nhỏ đơn giản với màu nâu trầm, ở mỗi bàn còn được đặt một bình hoa nhỏ rất tinh tế. Điểm nhấn của UP Coffee Dalat là sở hữu view toàn thành phố Đà Lạt, với tầm nhìn ra: dãy núi Langbiang, núi Hòn Bồ, Dinh toàn quyền, Dinh 1,2,3, đồi Robin, tháp bưu điện, nhà thờ Con Gà, trường cao đẳng sư phạm, đồi Chủng viện… Địa chỉ:&nbsp;6 Triệu Việt Vương</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/04/update-them-mot-loat-quan-ca-phe-dep-o-da-lat-de-ban-check-in-dan-trong-nam-2017-ivivu-44.jpg\" alt=\"Ảnh: UP Coffee Dalat\"></figure><p><i>Ảnh: UP Coffee Dalat</i></p><p>&nbsp;</p><h3><a href=\"https://www.ivivu.com/blog/2017/03/cap-nhat-bang-gia-ve-tham-quan-da-lat-nam-2017/\"><strong>Cập nhật bảng giá vé tham quan Đà Lạt năm 2017</strong></a></h3><p>Với bảng giá vé này,&nbsp;<a href=\"https://www.ivivu.com/?utm_source=blog_ivivu&amp;utm_medium=post_link&amp;utm_campaign=internal\">iVIVU.com</a>&nbsp;hy vọng các bạn sẽ có thêm nhiều thông tin tham khảo để có một chuyến <i>du lịch Đà Lạt</i> trọn vẹn nhất.</p><p><strong>Dinh 1:</strong> Có 2 loại vé là 30.000 đồng và 150.000 đồng (vé trọn gói bao gồm luôn các dịch vụ chụp hình với xe ngựa, ngựa, chụp hình hóa trang vua chúa…)</p><p><strong>Thung lũng tình yêu:</strong> 100.000 đồng/ người lớn – 40.000 đồng/ trẻ em. Giá vé trên đã bao gồm vé vào cổng tham quan, thưởng ngoạn toàn bộ cảnh quan thung lũng bằng xe điện, du ngoạn và khám phá vẻ đẹp thiên nhiên bằng Pedalo.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/03/cap-nhat-bang-gia-ve-tham-quan-da-lat-2017-ivivu-3.png\" alt=\"Ảnh: oanhtk42\"></figure><p><i>Ảnh: oanhtk42</i></p><p><strong>Làng Cù Lần:&nbsp;</strong></p><p><i>Vé tham quan:</i>&nbsp;Người lớn: 40.000 đồng/khách. Trẻ em đi kèm người lớn dưới 1m: miễn phí, trên 1m tính vé người lớn.</p><p><i>Vé Teambuiding:&nbsp;</i>Giá: 90.000 đồng/khách. Thời gian sử dụng: 8h00 – 17h00 (sử dụng sân cỏ, mặt hồ, suối, rừng đã được trang bị các trò chơi kỹ năng). Lưu ý: chỉ nhận đoàn khách có số lượng tối thiểu 30 người.</p><p><i>Vé không gian đốt lửa trại:&nbsp;</i>Giá 90.000 đồng/khách. Thời gian sử dụng: 17h00 – 21h00. Lưu ý: chỉ nhận đoàn khách có số lượng tối thiểu 30 người.</p><p><i>Các dịch vụ khác:</i></p><p>+Tour xe địa hình khám phá Cù Lần băng suối, vượt rừng, tham quan: giá 150.000 đồng/khách (Xe tối thiểu 4 người , tối đa 5 người ).</p><p>+ Hóa trang thành người dân tộc: 40.000 đồng/bộ.</p><p>+ Thả cá xuống suối để bắt: 250.000 đồng/kg (chế biến sau khi kết thúc trò chơi).</p><p>+ Tắm tiên (tắm tiên dưới suối thiên nhiên và tắm lại nước sạch trong rừng thiên nhiên): 30.000 đồng/người.</p><p><strong>Ma Rừng Lữ Quán: </strong>vé tham quan 10.000 đồng/người. Miễn phí vé đối với học sinh, sinh viên, người cao tuổi.&nbsp;Giá lưu trú trong những căn nhà gỗ ở đây khoảng 100.000 đồng/người/ngày. Nếu bạn đi cùng gia đình, muốn ở với không gian riêng tư thì nên thuê nguyên căn với giá 1 triệu/ngày cho 6 người.</p><p><strong>Langbiang:&nbsp;</strong>30.000 đồng/người lớn&nbsp;và 20.000 đồng/trẻ em. Vé xe jeep: 60.000 đồng/người, 400.000 đồng / 1 xe.</p><p><strong>Đường hầm điêu khắc Đà Lạt:</strong> 40.000 đồng/người lớn và 20.000 đồng trẻ em.</p><p><strong>Khu Du Lịch Đồi Mộng Mơ:</strong>&nbsp;50.000 đồng/ người lớn và&nbsp;30.000 đồng/ trẻ em.</p><p><strong>Vườn hoa thành phố Đà Lạt:</strong>&nbsp;30.000 đồng /người lớn và 15.000 đồng/ trẻ em.</p><p><strong>Cáp treo Thiền Viện Trúc Lâm khứ hồi:&nbsp;</strong>Giá vé khứ hồi cho người lớn là 80.000 đồng.</p><p><strong>Biệt thự Hằng Nga (Crazy house):</strong>&nbsp;40.000 đồng/người lớn và 20.000 đồng trẻ em.</p><p><strong>Dinh Bảo Đại:</strong> 20.000 đồng/người.</p><p><strong>Vườn quốc gia Bidoup – Núi Bà:&nbsp;</strong>40.000 đồng/người lớn và 20.000 đồng trẻ em.</p><p><strong>Thung lũng vàng:</strong></p><p>Vé tham quan:<strong>&nbsp;</strong>40.000 đồng/người lớn và 20.000 đồng trẻ em.</p><p>Đạp vịt trên hồ: 60.000 đồng / giờ / thuyền.</p><p>Trang phục hóa trang: 20.000 đồng/bộ (Tây Nguyên) và&nbsp;22.000 đồng/bộ (Ấn Độ, Nhật Bản)</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/03/cap-nhat-bang-gia-ve-tham-quan-da-lat-2017-ivivu-5.png\" alt=\"Ảnh: vone.travel\"></figure><p><i>Ảnh: vone.travel</i></p><p><strong>XQ sử quán:&nbsp;</strong>20.000 đồng/ người (tùy thời điểm, có những lúc thu tiền vé, có lúc miễn phí).</p><p><strong>Hồ than thở: </strong>20.000 đồng/ người.</p><p><strong>Sở thú Zoodoo:&nbsp;</strong>100.000 đồng/ người lớn, 50.000 đồng/ trẻ nhỏ dưới 1,2m và miễn phí cho trẻ dưới 90cm.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/03/cap-nhat-bang-gia-ve-tham-quan-da-lat-2017-ivivu-2.png\" alt=\"Ảnh: trangmai_jane\"></figure><p><i>Ảnh: trangmai_jane</i></p><p><strong>Khu du lịch thác Dambri:&nbsp;</strong>150.000 đồng/người lớn, 100.000 đồng/trẻ em. Giá này đã bao gồm vé vào cổng, vé thang máy, vé xe trượt ống Alpine Coaster, tất cả các trò chơi tại khu du lịch Dambri.</p><p><strong>Thác Camly: </strong>20.000 đồng/ người.</p><p><strong>Thác Pongour: </strong>10.000 đồng.</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2017/03/cap-nhat-bang-gia-ve-tham-quan-da-lat-2017-ivivu-6.png\" alt=\"Ảnh: svetaleo\"></figure><p><i>Ảnh: svetaleo</i></p>','undefined','undefined','undefined',0,0,7,'edited','2020-05-22 06:41:59',NULL,'2020-05-22 06:47:01'),(4,'18 mẹo tiết kiệm tiền đi du lịch dễ dàng hơn lúc nào hết','Đã bao nhiêu lần bạn ngậm ngùi ở nhà vì lỡ tay xài số tiền dành dụm cho chuyến du lịch trong mơ? Năm 2016 này, đừng lặp lại “bi kịch” cũ nữa mà hãy thử áp dụng 18 mẹo nhỏ do các phượt thủ và blogger du lịch trên khắp thế giới mách nước, đảm bảo bạn sẽ luôn để dành đủ tiền để vi vu từ A đến Z!','<p>&nbsp;</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-1.png\" alt=\"1. Tham gia vào các nhóm du lịch, phượt trên Facebook để nhận thông tin về các đợt giảm giá khủng. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>1. Tham gia vào các nhóm du lịch, phượt trên Facebook để nhận thông tin về các đợt giảm giá khủng. (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-2.jpg\" alt=\"2. Hãy linh động. Cụ thể, nếu bạn muốn đi du lịch ở một nơi, hãy linh động về giờ giấc. Nếu bạn muốn đi du lịch qua nhiều nơi, hãy linh động về vị trí của những nơi đó. Tuy nhiên chỉ được chọn 1 trong 2 cách trên thôi. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>2. Hãy linh động. Cụ thể, nếu bạn muốn đi du lịch ở một nơi, hãy linh động về giờ giấc. Nếu bạn muốn đi du lịch qua nhiều nơi, hãy linh động về vị trí của những nơi đó. Tuy nhiên chỉ được chọn 1 trong 2 cách trên thôi. (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-3.png\" alt=\" 3. Gợi ý tặng voucher hay phiếu quà tặng, giảm giá có liên quan đến du lịch trong tất cả các dịp bạn được nhận quà, từ sinh nhật, lễ tốt nghiệp hay lễ lớn. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>3. Gợi ý tặng voucher hay phiếu quà tặng, giảm giá có liên quan đến du lịch trong tất cả các dịp bạn được nhận quà, từ sinh nhật, lễ tốt nghiệp hay lễ lớn. (Ảnh minh họa – Nguồn: Internet)</i></p><p>&nbsp;</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-4.jpg\" alt=\" 4. Thay vì cố gắng ăn nhín nhịn thèm, chọn đồ rẻ tiền mà ăn trong chuyến du lịch thì tại sao không làm điều đó ở nhà để tiết kiệm tiền nhỉ? Đi du lịch là để trải nghiệm một nền ẩm thực mới đầy thú vị kia mà! (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>4. Thay vì cố gắng ăn nhín nhịn thèm, chọn đồ rẻ tiền mà ăn trong chuyến du lịch thì tại sao không làm điều đó ở nhà để tiết kiệm tiền nhỉ? Đi du lịch là để trải nghiệm một nền ẩm thực mới đầy thú vị kia mà! (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-5.jpg\" alt=\"5. Tạo một tài khoản ngân hàng để tiết kiệm tiền cho chuyến du lịch. Tuyệt đối không đụng đến tài khoản đó. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>5. Tạo một tài khoản ngân hàng để tiết kiệm tiền cho chuyến du lịch. Tuyệt đối không đụng đến tài khoản đó. (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-6.jpg\" alt=\"6. Sử dụng thẻ tín dụng (credit card) và thẻ ghi nợ (debit card), vì hai chiếc thẻ này sẽ giúp bạn không bị mất một khoản tiền vô ích khi rút tiền ở nước ngoài. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>6. Sử dụng thẻ tín dụng (credit card) và thẻ ghi nợ (debit card), vì hai chiếc thẻ này sẽ giúp bạn không bị mất một khoản tiền vô ích khi rút tiền ở nước ngoài. (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-7.jpg\" alt=\" 7. Xin nghỉ để đi du lịch vào những ngày giữa tuần nếu bạn không muốn mất thêm một khoản tiền kha khá vào vé máy bay. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>7. Xin nghỉ để đi du lịch vào những ngày giữa tuần nếu bạn không muốn mất thêm một khoản tiền kha khá vào vé máy bay. (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-8.jpg\" alt=\" 8. Nhận thông báo qua email từ các hãng hàng không giá rẻ hoặc các trang chuyên bán vé máy bay để nhận được thông tin giảm giá vé sớm nhất. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>8. Nhận thông báo qua email từ các hãng hàng không giá rẻ hoặc các trang chuyên bán vé máy bay để nhận được thông tin giảm giá vé sớm nhất. (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-9.jpg\" alt=\" 9. Sử dụng ứng dụng Rome 2 Rio. Ứng dụng này cung cấp cho bạn tất tần tật những phương tiện từ công cộng đến cá nhân ở bất cứ nơi đâu trên thế giới, từ đó bạn có thể lựa chọn phương tiện nào phù hợp và rẻ nhất. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>9. Sử dụng ứng dụng Rome 2 Rio. Ứng dụng này cung cấp cho bạn tất tần tật những phương tiện từ công cộng đến cá nhân ở bất cứ nơi đâu trên thế giới, từ đó bạn có thể lựa chọn phương tiện nào phù hợp và rẻ nhất. (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-10.png\" alt=\" 10. Trước khi vội vàng đặt vé máy bay khứ hồi, sao bạn không thử đặt vé máy bay theo từng lượt đi và lượt về riêng biệt? Có khi lại rẻ hơn đến không ngờ đấy. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>10. Trước khi vội vàng đặt vé máy bay khứ hồi, sao bạn không thử đặt vé máy bay theo từng lượt đi và lượt về riêng biệt? Có khi lại rẻ hơn đến không ngờ đấy. (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-11.jpg\" alt=\" 11. Lợi dụng chuyến bay có transit. Ý tưởng này dựa trên sự thật rằng giá vé máy bay đắt hay rẻ phụ thuộc vào nhu cầu thị trường chứ không phải khoảng cách, nên đặt vé cho một chặng bay dài và “lòng vòng” rẻ hơn chuyến bay thẳng rất nhiều. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>11. Lợi dụng chuyến bay có transit. Ý tưởng này dựa trên sự thật rằng giá vé máy bay đắt hay rẻ phụ thuộc vào nhu cầu thị trường chứ không phải khoảng cách, nên đặt vé cho một chặng bay dài và “lòng vòng” rẻ hơn chuyến bay thẳng rất nhiều. (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-12.jpg\" alt=\"12. Vẫn là tận dụng chuyến bay đa hành trình, bởi bạn có thể tiết kiệm hơn và thăm được thêm một điểm du lịch nữa. Chẳng hạn, nếu bạn muốn bay từ TP.HCM đến Kuala Lumpur, đừng chọn chuyến bay thẳng mà đặt vé máy bay từ TP.HCM đến Singapore rồi mới đến Kuala Lumpur. Tương tự, nếu muốn trở về TP.HCM, sao không đặt một chuyến bay từ Kuala Lumpur đến Thái Lan rồi về lại TP.HCM? (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>12. Vẫn là tận dụng chuyến bay đa hành trình, bởi bạn có thể tiết kiệm hơn và thăm được thêm một điểm du lịch nữa. Chẳng hạn, nếu bạn muốn bay từ TP.HCM đến Kuala Lumpur, đừng chọn chuyến bay thẳng mà đặt vé máy bay từ TP.HCM đến Singapore rồi mới đến Kuala Lumpur. Tương tự, nếu muốn trở về TP.HCM, sao không đặt một chuyến bay từ Kuala Lumpur đến Thái Lan rồi về lại TP.HCM? (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-13.jpg\" alt=\"13. Du lịch trái mùa. Đừng chọn những chuyến đi vào dịp lễ hội hay mùa đông khách của một đất nước nào đó, chẳng hạn như hãy đến Malaysia vào tháng 11, Thái Lan vào tháng 1… (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>13. Du lịch trái mùa. Đừng chọn những chuyến đi vào dịp lễ hội hay mùa đông khách của một đất nước nào đó, chẳng hạn như hãy đến Malaysia vào tháng 11, Thái Lan vào tháng 1… (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-14.jpg\" alt=\" 14. Tận dụng các trang “ở nhờ không mất tiền” như Couchsurfing hay Airbnb hoặc bạn bè nước ngoài để tiết kiệm được khoản nhà ở nhé. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>14. Tận dụng các trang “ở nhờ không mất tiền” như Couchsurfing hay Airbnb hoặc bạn bè nước ngoài để tiết kiệm được khoản nhà ở nhé. (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-15.jpg\" alt=\"15. Mang theo đồ ăn vặt, đừng tốn cả một đống tiền vào những món đồ ăn vặt ở sân bay vì chúng mắc kinh khủng! (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>15. Mang theo đồ ăn vặt, đừng tốn cả một đống tiền vào những món đồ ăn vặt ở sân bay vì chúng mắc kinh khủng! (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-16.jpg\" alt=\"16. Tậu một chiếc thẻ Priority Pass để không phải phát cáu khi quá cảnh lâu hay bị hoãn chuyến bay. Thật ra chiếc thẻ này rất xứng đáng để bạn đầu tư, vì khi tính chi li ra từng khoản dịch vụ mà bạn được hưởng tại sân bay nếu có chiếc thẻ này thì bạn sẽ không còn phải lăn tăn nhiều nữa. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>16. Tậu một chiếc thẻ Priority Pass để không phải phát cáu khi quá cảnh lâu hay bị hoãn chuyến bay. Thật ra chiếc thẻ này rất xứng đáng để bạn đầu tư, vì khi tính chi li ra từng khoản dịch vụ mà bạn được hưởng tại sân bay nếu có chiếc thẻ này thì bạn sẽ không còn phải lăn tăn nhiều nữa. (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-18.jpg\" alt=\" 17. Tìm kiếm về chính sách giảm giá của những nơi bạn sắp đến. Nhiều bảo tàng trên thế giới, đặc biệt ở châu Âu, thường có loại vé giá rẻ dành cho người dưới 25 tuổi. Hay như ở Pháp, vé xem phim chỉ có 1 đô la vì họ muốn khuyến khích du khách khám phá văn hóa Pháp. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>17. Tìm kiếm về chính sách giảm giá của những nơi bạn sắp đến. Nhiều bảo tàng trên thế giới, đặc biệt ở châu Âu, thường có loại vé giá rẻ dành cho người dưới 25 tuổi. Hay như ở Pháp, vé xem phim chỉ có 1 đô la vì họ muốn khuyến khích du khách khám phá văn hóa Pháp. (Ảnh minh họa – Nguồn: Internet)</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2016/01/18-meo-tiet-kiem-tien-di-du-lich-de-dang-hon-luc-nao-het-ivivu-19.jpg\" alt=\" 18. Bắt chước người bản xứ, họ sử dụng phương tiện công cộng nào thì ta cứ thế mà đi theo. (Ảnh minh họa - Nguồn: Internet)\"></figure><p><i>18. Bắt chước người bản xứ, họ sử dụng phương tiện công cộng nào thì ta cứ thế mà đi theo. (Ảnh minh họa – Nguồn: Internet)</i></p><h4>&nbsp;</h4>','undefined','undefined','undefined',0,0,7,'edited','2020-05-22 06:48:51',NULL,'2020-05-22 06:50:46'),(5,'Mẹo đi máy bay an toàn trong mùa dịch (Covid-19)','Việc phải sử dụng phương tiện công cộng trong thời điểm Covid-19 đang bùng phát là nỗi lo lắng của nhiều người.','<p>Dưới đây là một số mẹo bạn có thể áp dụng khi đi máy bay nhằm hạn chế tối đa khả năng lây nhiễm nCoV.</p><p><strong>Chọn vị trí ngồi gần cửa sổ</strong></p><p>Theo khuyến cáo của Tổ chức Y tế Thế giới (WHO), với những chuyến bay ngắn, thời gian bay dưới 3 tiếng, hành khách có thể lựa chọn chỗ ngồi cạnh cửa sổ để hạn chế sự lây nhiễm. So với vị trí cạnh lối đi, ghế cạnh cửa sổ sẽ tiếp xúc với hành khách đi<i><strong> máy bay</strong></i> ít hơn 5 lần. Và nếu có thể, hãy chọn vị trí hàng ghế không có ai ngồi cùng.</p><p>&nbsp;</p><figure class=\"image\"><img src=\"https://media.phapluatplus.vn/resize/410x232/files/sonhai/2020/03/13/bia-1609.jpg\" alt=\"Pháp Luật Plus - chống covid-19 khi đi máy bay - các bài viết về ...\"></figure><p><i>Vị trí ngồi gần cửa sổ có thể giúp bạn hạn chế tiếp xúc với nhiều người. Ảnh: iStock.</i></p><p><strong>Bảo vệ bản thân một cách tối đa</strong></p><p>Bạn nên đeo khẩu trang, găng tay cao su sử dụng một lần, kính mắt, đồ bảo hộ để chắc chắn sẽ không tiếp xúc với bất kỳ nguồn lây bệnh nào trên máy bay.</p><p><strong>Khử trùng quanh chỗ ngồi và nơi tiếp xúc trên máy bay</strong></p><p>Các hãng hàng không sử dụng chất tẩy rửa để đảm bảo <i>máy bay</i> được làm sạch. Tuy nhiên, để an toàn hơn, bạn nên làm sạch lần nữa các vị trí như tay vịn, khay đựng đồ ăn, nắp khoang hành lý trên máy bay, tay nắm cửa toilet, ghế, chỗ để tay, tựa đầu, khóa dây an toàn, khay ăn, tạp chí, nút bấm, màn hình… Bạn nên mang theo bình xịt khuẩn, nước rửa tay khô khử trùng… để có thể vệ sinh bất kỳ chỗ nào mình tiếp xúc.</p><p><strong>Giữ vệ sinh tay và không chạm lên mặt</strong></p><p>Bạn có thể vô tình chạm vào các bề mặt đồ vật quanh chỗ ngồi trên<strong> máy bay</strong> mà không hay biết về việc bị lây bệnh. Virus Covid-19 lây lan qua những tia dịch li ti, chúng có thể tồn tại trên đó tới 9 ngày trong điều kiện thuận lợi.</p><p>Việc sờ tay vào mặt sau khi tiếp xúc với những bề mặt có chứa virus chính là tác nhân lây nhiễm virus. Vì vậy, sau khi tiếp xúc với những vật dụng trên máy bay, bạn nên rửa tay với nước và xà phòng trong ít nhất 20 giây. Ngoài ra, bạn cũng không nên đưa tay lên mắt, mũi, miệng khi chưa rửa tay. Trong trường hợp không thể rửa tay ở nhà vệ sinh, bạn cũng có thể sử dụng nước rửa tay có cồn để thay thế.</p><p><strong>Thực hiện khai báo y tế</strong></p><p>Hãy thực hiện khai báo y tế một cách đầy đủ với các nhân viên y tế làm việc tại sân bay để tiến hành theo dõi cũng như có biện pháp cách ly nếu bạn có những biểu hiện nhiễm bệnh. Ngoài ra, bạn nên tuân thủ nghiêm chỉnh các quy định tại sân bay để công tác phòng chống dịch đạt được hiệu quả nhất.</p>','undefined','undefined','undefined',0,0,7,'edited','2020-05-22 06:52:17',NULL,'2020-05-22 07:03:13'),(6,'Top 10 quán ăn ngon Vũng Tàu nhất định phải thử','Ngoài ghé thăm các bãi biển tuyệt đẹp, thưởng thức những quán ăn ngon Vũng Tàu được gợi ý dưới đây sẽ khiến chuyến đi của bạn trở nên trọn vẹn hơn.','<h2><strong>Top 10 quán ăn ngon Vũng Tàu nhất định phải thử</strong></h2><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-1.jpg\" alt=\"Lẩu cá đuối Hoàng Minh: Đây là địa chỉ bán lẩu cá đuối được nhiều người đánh giá ngon nhất nhì ở Vũng Tàu. Sau khi làm sạch rồi tẩm ướp đậm đà, cá đuối ăn cùng nước lẩu chua cay và măng, nhúng kèm các loại rau tươi. Quán có khá nhiều chi nhánh, mức giá trung bình một nồi đầy đủ dao động từ 150.000-300.000 đồng. Ảnh: Dqueahh.fooddiary. \"></figure><p><i><strong>Lẩu cá đuối Hoàng Minh:</strong> Đây là địa chỉ <strong>quán ăn ngon Vũng Tàu</strong> được nhiều người đánh giá ngon nhất nhì ở Vũng Tàu. Sau khi làm sạch rồi tẩm ướp đậm đà, cá đuối ăn cùng nước lẩu chua cay và măng, nhúng kèm các loại rau tươi. Quán có khá nhiều chi nhánh, mức giá trung bình một nồi đầy đủ dao động từ 150.000-300.000 đồng. Ảnh: Dqueahh.fooddiary.</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-2.jpg\" alt=\"Bánh bèo Tuyết Mai: Nằm trên đường Phan Chu Trinh, quán Tuyết Mai là địa chỉ có tiếng lâu năm ở Vũng Tàu. Một đĩa bao gồm 6 phần bánh, rắc bên trên các loại nhân như bột tôm, mỡ hành... Bánh bèo bì tôm, chạo cua và chả giò được nhiều người gợi ý nên thưởng thức khi tới đây. Không gian quán thiết kế theo kiểu sân vườn, giá trung bình từ 30.000-50.000 đồng/món. Ảnh: Trangbinny.\"></figure><p>&nbsp;</p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-3.jpg\" alt=\"    Bánh bèo Tuyết Mai: Nằm trên đường Phan Chu Trinh, quán Tuyết Mai là địa chỉ có tiếng lâu năm ở Vũng Tàu. Một đĩa bao gồm 6 phần bánh, rắc bên trên các loại nhân như bột tôm, mỡ hành... Bánh bèo bì tôm, chạo cua và chả giò được nhiều người gợi ý nên thưởng thức khi tới đây. Không gian quán thiết kế theo kiểu sân vườn, giá trung bình từ 30.000-50.000 đồng/món. Ảnh: Trangbinny. \"></figure><p><i><strong>Bánh bèo Tuyết Mai:</strong> Nằm trên đường Phan Chu Trinh, quán Tuyết Mai là địa chỉ có tiếng lâu năm ở Vũng Tàu. Một đĩa bao gồm 6 phần bánh, rắc bên trên các loại nhân như bột tôm, mỡ hành… Bánh bèo bì tôm, chạo cua và chả giò được nhiều người gợi ý nên thưởng thức khi tới đây. Không gian quán thiết kế theo kiểu sân vườn, giá trung bình từ 30.000-50.000 đồng/món. Ảnh: Trangbinny.</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-4.jpg\" alt=\"Bánh khọt Gốc Vú Sữa: Một trong những quán bánh khọt nổi tiếng tại Vũng Tàu phải nhắc tới địa chỉ nằm trên số 14 Nguyễn Trường Tộ. Bánh hấp dẫn bởi lớp vỏ giòn rụm, được cuốn cùng đu đủ, rau sống và chấm với nước mắm ớt. Mỗi suất bánh ở đây có giá dao động từ 50.000-110.000 đồng. Tuy nhiên, nhiều người cho rằng phong cách phục vụ là điểm trừ tại quán. Ảnh: N.h.u.n.g.o.c.8.9.\"></figure><p><i><strong>Bánh khọt Gốc Vú Sữa:</strong> Một trong những quán bánh khọt nổi tiếng tại Vũng Tàu phải nhắc tới địa chỉ nằm trên số 14 Nguyễn Trường Tộ. Bánh hấp dẫn bởi lớp vỏ giòn rụm, được cuốn cùng đu đủ, rau sống và chấm với nước mắm ớt. Mỗi suất bánh ở đây có giá dao động từ 50.000-110.000 đồng. Tuy nhiên, nhiều người cho rằng phong cách phục vụ là điểm trừ tại quán. Ảnh: N.h.u.n.g.o.c.8.9.</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-6.jpg\" alt=\"top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-6\"></figure><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-7.jpg\" alt=\"Quán ốc Tự Nhiên: Bạn chắc chắn không thể bỏ qua quán ốc đông khách và nổi tiếng nhất bậc nhất này ở Vũng Tàu. Thực đơn tại đây khá đa dạng, bao gồm nhiều món ăn từ hải sản cho tới các loại ốc khác nhau. Mỗi nguyên liệu đều còn tươi sống và được chế biến nóng hổi. Quán bắt đầu mở lúc 11h trưa, bạn nên tránh tới vào buổi tối để không phải đợi lâu. Ngoài ra, một số địa chỉ nhiều người gợi ý khác như ốc Bình, ốc Bệt, ốc Thiên Nhiên... Ảnh: Tastemebae.\"></figure><p><i><strong>Quán ốc Tự Nhiên:</strong> Bạn chắc chắn không thể bỏ qua quán ốc đông khách và nổi tiếng nhất bậc nhất này ở Vũng Tàu. Thực đơn tại đây khá đa dạng, bao gồm nhiều món ăn từ hải sản cho tới các loại ốc khác nhau. Mỗi nguyên liệu đều còn tươi sống và được chế biến nóng hổi. Quán bắt đầu mở lúc 11h trưa, bạn nên tránh tới vào buổi tối để không phải đợi lâu. Ngoài ra, một số địa chỉ nhiều người gợi ý khác như ốc Bình, ốc Bệt, ốc Thiên Nhiên… Ảnh: Tastemebae.</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-8.jpg\" alt=\"Bánh tiêu đậu xanh: Quán bánh tiêu nằm ở số 43 Đồ Chiểu luôn &quot;cháy hàng&quot; rất nhanh ngay từ lúc mở bán. Bạn nên đặt trước một ngày hoặc hẹn giờ lấy sớm nếu muốn được thưởng thức. Bánh có 2 loại nhân là đậu xanh và hột gà thơm phức, giá rất rẻ chỉ từ 4.000 đồng/chiếc. Ảnh: Candykun107. \"></figure><p><i><strong>Bánh tiêu đậu xanh:</strong> Quán bánh tiêu nằm ở số 43 Đồ Chiểu luôn “cháy hàng” rất nhanh ngay từ lúc mở bán. Bạn nên đặt trước một ngày hoặc hẹn giờ lấy sớm nếu muốn được thưởng thức. Bánh có 2 loại nhân là đậu xanh và hột gà thơm phức, giá rất rẻ chỉ từ 4.000 đồng/chiếc. Ảnh: Candykun107.</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-9.jpg\" alt=\"top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-9\"></figure><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-10.jpg\" alt=\"Yaourt Cô Tiên: Ngoài sữa chua, trứng luộc lòng đào được coi là &quot;cực phẩm&quot; tại đây. Khi thưởng thức, bạn sẽ chấm cùng muối tiêu tắc hoặc nước mắm chua ngọt để làm tăng độ bùi béo cho món ăn. Quán nằm trên đường lên ngọn hải đăng, mức giá khá bình dân chỉ từ 7.000-30.000 đồng/món. Ảnh: Uyenuyenn92, Nhoc_quan.\"></figure><p><i><strong>Yaourt Cô Tiên:</strong> Ngoài sữa chua, trứng luộc lòng đào được coi là “cực phẩm” tại đây. Khi thưởng thức, bạn sẽ chấm cùng muối tiêu tắc hoặc nước mắm chua ngọt để làm tăng độ bùi béo cho món ăn. Quán nằm trên đường lên ngọn hải đăng, mức giá khá bình dân chỉ từ 7.000-30.000 đồng/món. Ảnh: Uyenuyenn92, Nhoc_quan.</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-11.jpg\" alt=\"Bông lan trứng muối Gốc Cột Điện: Với những bạn yêu thích ăn vặt thì chắc chắn không thể bỏ qua món bánh đặc sản này. Bánh bông lan trứng muối đúng chuẩn Vũng Tàu phải có vị bùi, mặn và thơm phức của phô mai. Địa chỉ trên đường Nguyễn Trường Tộ luôn thu hút đông đảo thực khách ghé tới thưởng thức và mua số lượng lớn về làm quà. Ảnh: Tristafoodie. \"></figure><p><i><strong>Bông lan trứng muối Gốc Cột Điện:</strong> Với những bạn yêu thích ăn vặt thì chắc chắn không thể bỏ qua món bánh đặc sản này. Bánh bông lan trứng muối đúng chuẩn Vũng Tàu phải có vị bùi, mặn và thơm phức của phô mai. Địa chỉ trên đường Nguyễn Trường Tộ luôn thu hút đông đảo thực khách ghé tới thưởng thức và mua số lượng lớn về làm quà. Ảnh: Tristafoodie.</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-12.jpg\" alt=\"top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-12\"></figure><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-13.jpg\" alt=\"Quán kem Mùa Đông: Quán kem ký tồn tại lâu đời này là tụ điểm ăn vặt yêu thích của nhiều thế hệ người dân Vũng Tàu. Một đĩa có giá từ 15.000-25.000 đồng, bao gồm các loại kem nhiều màu sắc lựa chọn theo sở thích. Bên trên được rắc kèm thêm mứt, chùm ruột... rất bắt mắt. Ảnh: Litisally.\"></figure><p><i><strong>Quán kem Mùa Đông:</strong> Quán kem ký tồn tại lâu đời này là tụ điểm ăn vặt yêu thích của nhiều thế hệ người dân Vũng Tàu. Một đĩa có giá từ 15.000-25.000 đồng, bao gồm các loại kem nhiều màu sắc lựa chọn theo sở thích. Bên trên được rắc kèm thêm mứt, chùm ruột… rất bắt mắt. Ảnh: Litisally.</i></p><figure class=\"image\"><img src=\"https://cdn3.ivivu.com/2020/05/top-10-quan-an-ngon-vung-tau-nhat-dinh-phai-thu-ivivu-14.jpg\" alt=\"Bánh canh ghẹ Anh Vy: Đến Vũng Tàu mà chưa thử bánh canh ghẹ là một thiếu sót lớn. Món ăn ghi điểm bởi sợi bánh canh dai, hòa quyện cùng phần nước lèo ngọt thanh, thơm ngon bởi thịt ghẹ tươi. Ngoài ra, bạn còn có thể gọi thêm chả ghẹ, giò heo... tùy theo sở thích. Quán mở cửa cả ngày, giá dao động từ 40.000-60.000 đồng/phần. Ảnh: Tristafoodie. \"></figure><p><i><strong>Bánh canh ghẹ Anh Vy:</strong> Đến Vũng Tàu mà chưa thử bánh canh ghẹ là một thiếu sót lớn. Món ăn ghi điểm bởi sợi bánh canh dai, hòa quyện cùng phần nước lèo ngọt thanh, thơm ngon bởi thịt ghẹ tươi. Ngoài ra, bạn còn có thể gọi thêm chả ghẹ, giò heo… tùy theo sở thích. Quán ăn ngon Vũng Tàu này mở cửa cả ngày, giá dao động từ 40.000-60.000 đồng/phần. Ảnh: Tristafoodie.</i></p>','undefined','undefined','undefined',0,0,7,'edited','2020-05-22 07:04:36',NULL,'2020-05-22 07:05:23');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`posts_BEFORE_UPDATE` BEFORE UPDATE ON `posts` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedules` (
  `idSchedule` int(11) NOT NULL AUTO_INCREMENT,
  `data` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `idTour` int(11) DEFAULT NULL,
  `policy` mediumtext,
  `detailPrice` mediumtext,
  `notes` mediumtext,
  `contacts` mediumtext,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `dateEdited` datetime DEFAULT NULL,
  PRIMARY KEY (`idSchedule`),
  UNIQUE KEY `idTour_UNIQUE` (`idTour`),
  CONSTRAINT `FK_Schedules_Tours` FOREIGN KEY (`idTour`) REFERENCES `tours` (`idTour`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
INSERT INTO `schedules` VALUES (1,'<figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=2Vv-BfVoq4g\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/2Vv-BfVoq4g\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><p><strong>TOUR “THIÊN ĐƯỜNG MIỀN TRUNG”</strong></p><p><strong>TRỌN GÓI VÉ MÁY BAY KHỨ HỒI TỪ HÀ NỘI</strong></p><p><strong>SƠN TRÀ – BÀ NÀ - NGŨ HÀNH SƠN – HỘI AN – CÙ LAO CHÀM</strong></p><p><i><strong>Thời gian</strong>: 4 ngày 3 đêm – Chương trình tour Series du lịch trọn gói hè 2019</i></p><p><i><strong>Khởi hành</strong>: Thứ năm hàng tuần từ Hà Nội từ tháng 4-8/2019</i></p><p>&nbsp;</p><p><strong>QUÀ TẶNG:</strong></p><ul><li><i>Tặng ngay 20 cân hành lý ký gởi khứ hồi trị giá gần 400.000 vnđ/hành khách</i></li><li><i>Tặng buffet Bà Nà <strong>225.000</strong> vnđ/người khi đăng ký tour du lịch hè 2019.</i></li><li><i>Tặng ngay Bộ ảnh chụp gia đình khi đăng ký tour du lịch theo nhóm gia đình từ 10 người trở lên. (Ảnh chụp các điểm du lịch toàn tour gồm 20 hình- Gởi ảnh gốc cho khách hàng)</i></li><li><i>Tặng ngay quà tặng khi tham gia trò chơi trên xe cùng với hướng dẫn viên du lịch</i></li></ul><p><strong>LỊCH KHỞI HÀNH:</strong></p><figure class=\"table\"><table><tbody><tr><td><i><strong>Tháng 5</strong></i></td><td><i><strong>Tháng 6</strong></i></td><td><i><strong>Tháng 7</strong></i></td><td><i><strong>Tháng 8</strong></i></td></tr><tr><td><p><i>09/05-12/05</i></p><p><i>16/05-19/05</i></p><p><i>23/05-26/05</i></p><p><i>30/05-02/06 – Pháo Hoa</i></p></td><td><p><i>06/06-09/06 – Pháo Hoa</i></p><p><i>13/06-16/06 – Pháo Hoa</i></p><p><i>20/06-23/06 – Pháo Hoa</i></p><p><i>27/06-30/06</i></p></td><td><p><i>04/07-07/07 – Pháo Hoa</i></p><p><i>11/07-14/07</i></p><p><i>18/07-21/07</i></p><p><i>25/07-28/07</i></p></td><td><p><i>01/08-04/08</i></p><p><i>08/08-11/08</i></p><p><i>15/08-18/08</i></p></td></tr></tbody></table></figure><p><i><strong>LỄ 30/4-1/5</strong>: Khởi hành: 28/04-01/05 <strong>(LIÊN HỆ ĐỂ LẤY BÁO GIÁ)</strong></i></p><p><i><strong>LỄ QUỐC KHÁNH</strong>: Khởi hành: 30/08-02/09&nbsp;<strong>(LIÊN HỆ ĐỂ LẤY BÁO GIÁ)</strong></i></p><p>&nbsp;</p><p><strong>GIÁ TOUR HÈ 2019</strong></p><figure class=\"table\"><table><tbody><tr><td><strong>THỜI GIAN</strong></td><td><strong>KHÁCH SẠN</strong></td><td><strong>NGƯỜI LỚN</strong></td><td><strong>TRẺ EM 5-10 TUỔI</strong></td><td><strong>2-5 TUỔI</strong></td></tr><tr><td><strong>4N3Đ Ngày Thường</strong></td><td>3 SAO</td><td>5.790.000</td><td>4.690.000</td><td>3.490.000</td></tr><tr><td><strong>4N3Đ Pháo Hoa</strong></td><td>3 SAO</td><td>6.390.000</td><td>4.690.000</td><td>3.490.000</td></tr></tbody></table></figure><p><i>Trẻ em dưới 2 tuổi, quý khách vui lòng tự đóng cho trẻ em tại sân bay theo giá công bố của hãng hàng không.</i></p><p><br><br><strong>LỊCH TRÌNH DỰ KIẾN</strong><br><br><br>&nbsp;</p><p><strong>NGÀY 1: HÀ NỘI - ĐÀ NẴNG – SƠN TRÀ – ASIAN PARK &nbsp;(ĂN TRƯA, CHIỀU)</strong></p><p><strong>Sáng: </strong>Đón quý khách tại Sân bay Nội Bài làm thủ tục đi Đà Nẵng (07.00 – 11.30). City Thành phố Đà Nẵng qua những cây cầu nổi tiếng. Nhận phòng khách sạn nghỉ ngơi.</p><p><strong>Trưa:</strong> Ăn trưa với <strong>đặc sản nổi tiếng Đà Nẵng</strong> “<i>Bánh tráng thịt heo 2 đầu da &amp; Mỳ Quảng”</i>.</p><p><strong>Chiều:</strong> Khởi hành đi <strong>Bán Đảo Sơn Trà </strong>để thưởng ngoạn toàn cảnh phố biển Đà Nẵng trên cao, viếng <i><strong>Chùa Linh Ứng</strong></i> - nơi có tượng Phật Bà 65m cao nhất Việt Nam. Tắm biển Mỹ Khê.</p><p><strong>Tối: </strong>Ăn tối tại nhà hàng. Tham quan và khám phá <strong>Công Viên Châu Á</strong> với <strong>vòng quay mặt trời</strong>, <strong>khu vui chơi trong nhà Helio </strong><i>(chi phí tự túc).</i></p><p>&nbsp;</p><p><strong>NGÀY 2: ĐÀ NẴNG – BÀ NÀ (ĂN SÁNG, TRƯA, CHIỀU)</strong></p><p><strong>Sáng:</strong> Điểm tâm. Khởi hành đi khu du lịch <i><strong>Bà Nà – Núi Chúa</strong></i>, nơi mà quý khách khám phá những khoảnh khắc giao mùa bất ngờ Xuân – Hạ - Thu – Đông trong 1 ngày. Ngồi cáp treo dài nhất thế giới.</p><p><strong>Trưa:</strong> Quý khách ăn trưa tại nhà hàng <strong>buffet Bà Nà. (225.000 vnđ/suất)</strong></p><p><strong>Chiều</strong>: Tham quan <strong>Đồi Vọng Nguyệt, chùa Linh Ứng, Thích Ca Phật Đài, Cầu Vàng với đôi Bàn Tay đá lớn</strong>,…. Tiếp tục tham gia các trò chơi phiêu lưu mới lạ, ngộ nghĩnh, hấp dẫn, hiện đại. Trở về lại Đà Nẵng. Mua sắm tại <strong>Đặc sản Miền Trung</strong>. <strong>Tự do tắm biển Mỹ Khê.</strong></p><p><strong>Tối: </strong>Ăn tối tại nhà hàng Đà Nẵng. Quý khách tự do tham quan thành phố về đêm với <strong>Cầu Rồng, &nbsp;Cầu Tình Yêu</strong> với biểu tượng <strong>Cá chép hóa rồng</strong>,…. Quý khách có thể tham gia chương trình Du thuyền Sông Hàn (Chi phí tự túc), để khám phá cuộc sống về đêm tại Đà Nẵng từ dòng sông.</p><p>&nbsp;</p><p><strong>NGÀY 3: ĐÀ NẴNG – CÙ LAO CHÀM/ NÚI THẦN TÀI– HỘI AN (ĂN SÁNG, CHIỀU)</strong></p><p><strong>Sáng:</strong> Điểm tâm. Quý khách lựa chọn 1 trong 2 chương trình sau: (Chi phí tự túc)</p><p>&nbsp;</p><figure class=\"table\"><table><tbody><tr><td><p><strong>Option 1:</strong> Khởi hành vào Hội An ngồi tàu Cao Tốc tại biển Cửa Đại đi tham quan <strong>Cù Lao Chàm</strong> <i>(Tự túc chi phí 600.000đ/khách đã bao gồm ăn trưa, xe đến Cảng Cửa Đại, Vé tham quan, Cano Siêu tốc)</i>, khu dự trữ sinh quyển Thế giới gồm cụm đảo ngoài khơi biển Đông cách Hội An 12 hải lý. Tham quan chùa Hải Tạng hơn 400 năm tuổi, Âu thuyền – khu vực tránh bão của ngư dân, Khu dân cư &amp; các lăng miếu cổ.</p><p><strong>Trưa:</strong> Ăn trưa nhà hàng tại Cù Lao Chàm.</p><p><strong>Chiều:</strong> Tiếp tục thăm khu bảo tồn biển tại bãi Bắc, hòn Dài và tham gia các hoạt động lặn biển (Snokelling).</p></td></tr><tr><td><p><strong>Option 2:</strong> Quý khách có thể Lựa chọn Lịch trình đi Núi Thần Tài nghĩ dưỡng <i>(Chi phí tự phí: 650.000 vnđ – Đã bao gồm ăn trưa, xe di chuyển, vé vào cổng)</i></p><p><strong>Sáng</strong>: Khởi hành đi Công viên Suối Khoáng Thần Tài, cách Trung tâm Thành phố Đà Nẵng 30km về phía Tây. Đến trạm tiếp đón, quý khách làm thủ tục hành lý, bắt đầu hành trình vui chơi và khám phá Công viên nước trên núi đầu tiên tại Việt Nam.</p><p>Quý khách sẽ di chuyển bằng xe điện khoảng 250m đến với khu vực hồ bơi tập trung. Tại đây, quý khách có thể đắm mình trong làn nước tươi mát và thư giản tại hồ Jacuzzi hay thả mình tại Dòng Sông Lười bên trong Động Long Tiên .</p><p>Trải nghiệm công viên nước thu nhỏ, ngồi tĩnh lặng dưới những cây nấm khổng lồ nhân tạo, hay tận hưởng massage tia nước.... trải nghiệm không gian giải trí và thư giản hiện đại và vô cùng hấp dẫn.</p><p><strong>Trưa:</strong> Quý khách nghỉ ngơi và dùng bữa trưa buffet tại Nhà hàng.</p><p><strong>Chiều:</strong> Quý khách sẽ tiếp tục được tận hưởng hồ Suối Khoáng Nóng, ngâm mình, nghỉ ngơi và thưởng thức Trứng Gà được luộc chín từ chính dòng nước khoáng thiên nhiên tại đây, được mệnh danh là Trứng gà Trường Thọ. Quý khách tự do trải nghiệm các dịch vụ Tắm Bùn, tắm Trà, Tắm Sữa, Tắm Rượu vang, Tắm Sả, Tắm Cafe và nhiều các hình thư giãn khác được thiết kế và phục vụ theo phong cách Nhật Bản đúng điệu. (chi phí tự túc)</p><p><strong>15h30</strong>: Quý khách sẽ được tận mắt chiêm ngưỡng và hòa mình vào Công viên nước Khổng Lồ giữa vùng núi non trùng điệp, với vô số các trò chơi nước hiện đại, nhiều màu sắc và không kém phần hấp dẫn với Đường Trượt mạo hiểm, Hố đen vũ trụ, hay trải nghiệm vùng biển thu nhỏ ngay trên núi cao với Hồ Sóng nhân tạo.</p><p><strong>16h30</strong>: Đoàn tập trung xuất phát về Đà Nẵng.</p><p><strong>Dịch vụ được sử dụng</strong></p><ul><li>Tắm khoáng tại Long Huyệt Hồ và các hồ tự nhiên</li><li>Xông hơi khô và xông hơi ướt</li><li>Trượt phao dòng sông Lười</li><li>Massage tại hồ sục Jacuzzi</li><li>Tham quan các mỏ khoáng phát lộ</li><li>Ngâm chân tại các hồ khoáng nóng.</li><li>Thỏa sức vui chơi tại Công Viên Nước</li><li>Thưởng thức buffet tại nhà hang Rồng Đỏ</li></ul></td></tr></tbody></table></figure><p>&nbsp;</p><p><strong>Chiều</strong>: Khởi hành vào Hội An tham quan Phố Cổ. Bách bộ tham quan và mua sắm <i><strong>Phố Cổ</strong></i> với: <strong>Chùa Cầu Nhật Bản</strong>, Bảo tàng văn hóa Sa Huỳnh, Nhà Cổ hàng trăm năm tuổi, Hội Quán Phước Kiến &amp; Xưởng thủ công mỹ nghệ</p><p><strong>Tối:</strong> Quý khách thưởng thức các món ăn yêu thích tại Nhà hàng Hội An với những món ẩm thực Xứ Quảng: Mỳ Quảng, Cao Lầu, Hoành Thánh, Bánh Vạc. Quý khách tự do vui chơi các trò chơi dân gian tại Phố Cổ: bài chòi, đập niêu, … Về Đà Nẵng nghỉ ngơi.</p><p>&nbsp;</p><p><strong>NGÀY 4: ĐÀ NẴNG – BẢO TÀNG TRANH 3D - NGŨ HÀNH SƠN- HÀ NỘI (ĂN SÁNG, TRƯA)</strong></p><p><strong>Sáng:</strong> Điểm tâm. Tự do tắm biển Mỹ Khê. Xe đưa quý khách đến Tham quan <strong>Bảo Tàng Tranh 3D</strong> - Bảo tàng tranh 3d Đà Nẵng hay Art In Paradise Danang là bảo tàng 3d lớn nhất Việt Nam được sáng lập và quản lý bởi tâp đoàn Art Paradise Thế Giới. Là <strong>phòng tranh 3d</strong> xoay quanh vật thể 3 chiều, sử dụng nghệ thuật ngụy trang hay còn gọi là nghệ thuật vẽ trên các vật thể khác nhau như tường, sàn, trần nhà,.. tạo ra cảm giác ảo ảnh cho người xem và có cảm giác như mọi vật đang sống động như thật. Trả phòng khách sạn.</p><p><strong>Trưa: </strong>Ăn trưa tại nhà hàng Đà Nẵng. &nbsp;</p><p><strong>Chiều:</strong> Khởi hành đi khu danh thắng <strong>Ngũ Hành Sơn</strong>. Cụm danh thắng Ngũ Hành Sơn với năm ngọn núi Kim, Mộc, Thủy, Hỏa, Thổ. Tại ngọn Thủy Sơn đoàn sẽ có dịp khám phá các hang động huyền bí, những kiệt tác của thiên nhiên kết hợp với nền văn hóa Phật giáo lâu đời. Đoàn viếng chùa Tam Thai, chùa Linh Ứng, tháp 7 tầng. Quý khách tận mắt chiêm ngưỡng các kiệt tác điêu khắc đá tinh xảo được tạo ra từ bàn tay tài hoa của các nghệ nhân làng đá Non Nước dưới chân núi. Tham quan và mua sắm tại <strong>Đặc sản Miền Trung</strong>.</p><p><strong>Tối:</strong> 16&nbsp;:30 Xe đưa quý khách đến nhà hàng Hải sản. <i><strong>Quý khách tự túc ăn tối tại đây</strong></i>. Thời gian tập trung ra sân bay 18h30 - Tiễn đoàn ra sân bay. Chào tạm biệt và kết thúc chương trình.</p><p>&nbsp;</p><p><strong>THỜI GIAN CHUYẾN BAY&nbsp;:</strong></p><figure class=\"table\"><table><tbody><tr><td><strong>STT</strong></td><td colspan=\"2\"><strong>QUY LUẬT</strong></td><td><strong>SL</strong></td><td><strong>NGÀY ĐI</strong></td><td><strong>SHCB</strong></td><td><strong>GIỜ BAY</strong></td><td><strong>NGÀY VỀ</strong></td><td><strong>SHCB</strong></td><td><strong>GIỜ BAY</strong></td></tr><tr><td><strong>&nbsp;</strong></td><td><strong>&nbsp;</strong></td><td><strong>&nbsp;</strong></td><td>&nbsp;</td><td colspan=\"6\"><strong>THÁNG 05</strong></td></tr><tr><td>1</td><td>Thứ 5</td><td>Chủ nhật</td><td><strong>50</strong></td><td><strong>16/05/2019</strong></td><td>VJ501</td><td>9:05</td><td><strong>19/05/2019</strong></td><td>VJ508</td><td>20:30</td></tr><tr><td>2</td><td>Thứ 5</td><td>Chủ nhật</td><td><strong>25</strong></td><td><strong>23/05/2019</strong></td><td>VJ501</td><td>9:05</td><td><strong>26/05/2019</strong></td><td>VJ508</td><td>20:30</td></tr><tr><td>3</td><td>Thứ 5</td><td>Chủ nhật</td><td><strong>50</strong></td><td><strong>30/05/2019</strong></td><td>VJ505</td><td>6:20</td><td><strong>02/06/2019</strong></td><td>VJ512</td><td>12:55</td></tr><tr><td>4</td><td>Thứ 5</td><td>Chủ nhật</td><td><strong>50</strong></td><td><strong>30/05/2019</strong></td><td>VJ501</td><td>9:05</td><td><strong>02/06/2019</strong></td><td>VJ508</td><td>20:30</td></tr><tr><td><strong>&nbsp;</strong></td><td><strong>&nbsp;</strong></td><td><strong>&nbsp;</strong></td><td>&nbsp;</td><td colspan=\"6\"><strong>THÁNG 06</strong></td></tr><tr><td>5</td><td>Thứ 5</td><td>Chủ nhật</td><td><strong>50</strong></td><td><strong>06/06/2019</strong></td><td>VJ501</td><td>9:05</td><td><strong>09/06/2019</strong></td><td>VJ508</td><td>20:30</td></tr><tr><td>6</td><td>Thứ 5</td><td>Chủ nhật</td><td><strong>50</strong></td><td><strong>13/06/2019</strong></td><td>VJ501</td><td>9:05</td><td><strong>16/06/2019</strong></td><td>VJ508</td><td>20:30</td></tr><tr><td>7</td><td>Thứ 5</td><td>Chủ nhật</td><td><strong>50</strong></td><td><strong>20/06/2019</strong></td><td>VJ501</td><td>9:05</td><td><strong>23/06/2019</strong></td><td>VJ508</td><td>20:30</td></tr><tr><td>8</td><td>Thứ 5</td><td>Chủ nhật</td><td><strong>50</strong></td><td><strong>27/06/2019</strong></td><td>VJ501</td><td>9:05</td><td><strong>30/06/2019</strong></td><td>VJ508</td><td>20:30</td></tr><tr><td><strong>&nbsp;</strong></td><td><strong>&nbsp;</strong></td><td><strong>&nbsp;</strong></td><td>&nbsp;</td><td colspan=\"6\"><strong>THÁNG 07</strong></td></tr><tr><td>9</td><td>Thứ 5</td><td>Chủ nhật</td><td><strong>50</strong></td><td><strong>04/07/2019</strong></td><td>VJ501</td><td>9:05</td><td><strong>07/07/2019</strong></td><td>VJ508</td><td>20:30</td></tr><tr><td>10</td><td>Thứ 5</td><td>Chủ nhật</td><td><strong>50</strong></td><td><strong>11/07/2019</strong></td><td>VJ501</td><td>9:05</td><td><strong>14/07/2019</strong></td><td>VJ508</td><td>20:30</td></tr><tr><td>11</td><td>Thứ 5</td><td>Chủ nhật</td><td><strong>50</strong></td><td><strong>18/07/2019</strong></td><td>VJ501</td><td>9:05</td><td><strong>21/07/2019</strong></td><td>VJ508</td><td>20:30</td></tr><tr><td>12</td><td>Thứ 5</td><td>Chủ nhật</td><td><strong>50</strong></td><td><strong>25/07/2019</strong></td><td>VJ501</td><td>9:05</td><td><strong>28/07/2019</strong></td><td>VJ508</td><td>20:30</td></tr></tbody></table></figure><p>&nbsp;</p><p><strong>KHÁCH SẠN THAM KHẢO (gần biển Mỹ Khê)</strong></p><ul><li>Yến Vy Hotel</li><li>Tolia Hotel</li><li>SH Eropa Hotel</li></ul>',1,'<p>&nbsp;<strong>ĐIỀU KIỆN HỦY DỊCH VỤ:</strong>&nbsp; &nbsp;</p><p>( Phí hoàn tiền khi hủy tour sẽ được trả lại sau 1 tháng kể từ ngày đăng ký hoặc hủy tour )</p><p>Sau khi xác nhận và thanh toán nếu:</p><p>- Sau khi đặt cọc đến 3 ngày trước ngày khởi hành: phí hủy 50% tiền tour</p><p>- Hủy vé 3-2 ngày trước ngày khởi hành: phí hủy 70% tiền tour</p><p>- Hủy vé 24 tiếng trước ngày khởi hành: phí hủy 100% tiền tour</p><p>Trường hợp quý khách đến trễ giờ khởi hành được tính là hủy ngay trong ngày.</p><p><i><strong>&nbsp;</strong></i></p><p><strong>GHI CHÚ </strong>:</p><p>- Công ty Du lịch được miễn trách nhiệm trong các trường hợp bất khả kháng nằm ngoài tầm kiểm soát (thời tiết. thiên tai, bão lũ,... Hàng không, tàu hỏa, tàu thủy hủy chuyến, đi và đến không đúng thời gian ban đầu do thời tiết, hoặc lỗi kỹ thuật)</p><p>- Khi đi nhớ mang theo CMND hoặc Passport, trẻ em mang theo giấy khai sinh bản gốc. Trẻ em dưới 14 tuổi khi đi tour phải mang theo giấy khai sinh hoặc hộ chiếu. Trẻ em từ 14 tuổi trở lên phải mang theo giấy CMND. (Giấy tờ tùy thân còn hạn 06 tháng tính từ ngày tour kết thúc)</p><p>- Quý khách nên mang hành lý gọn gàng, chịu trách nhiệm quản lý hành lý tư trang cá nhân trong suốt quá trình tham quan</p><p>- Quý khách có mặt tại điểm đón hoặc điểm tập trung theo hẹn trước 20 phút.</p><p>- Quý khách có nhu cầu cần xuất hóa đơn vui lòng cung cấp thông tin xuất hóa đơn cho nhân viên bán tour ngay lúc đăng ký tour.</p><p>&nbsp;</p><p>CHI TIẾT QUÝ KHÁCH VUI LÒNG LIÊN HỆ HOTLINE:<strong> 0983 982 933 </strong>hoặc email<strong> ithoangtan@gmail.com</strong></p>','<p><strong>GIÁ TOUR BAO GỒM</strong>:</p><p>- Xe đời mới có máy lạnh đưa đón theo chương trình trong tour.</p><p>- Vé máy bay khứ hồi về Đà Nẵng HAN DAD HAN 7 cân hành lý xách tay, 20 cân hành lý ký gởi.</p><p>- HDV đón và làm thủ tục tại Nội Bài.</p><p>- Ăn uống theo chương trình - được đổi món thường xuyên theo ẩm thực địa phương. Sáng&nbsp;: Buffet tại Nhà hàng khách sạn, Trưa chiều ăn theo Set menu Đoàn trong đó có 2 bữa ăn Đặc sản Đà Nẵng và đặc sản Hội An, 1 bữa ăn buffet trên đỉnh Núi Bà Nà.</p><p>- Khách sạn GẦN BIỂN ĐÀ NẴNG 2-3 khách/phòng, tivi, tủ lạnh, điện thoại, nước nóng vệ sinh riêng. Nhận phòng&nbsp;: 14h00. Trả phòng&nbsp;: 12h00</p><p>- HDV thuyết minh và phục vụ đoàn suốt tuyến.</p><p>- Vé vào cửa các thắng cảnh: Hội An 80.000 vnđ, Ngũ Hành Sơn 40.000 vnđ</p><p>- Khăn lạnh, nước uống trên đường (01 khăn, 01 chai/ ngày 350ml )</p><p>- Bảo hiểm du lịch trọn tour, theo tiêu chuẩn bảo hiểm Việt Nam <i><strong>20.000.000 vnđ/người.</strong></i></p><p><strong>GIÁ TOUR KHÔNG BAO GỒM:</strong></p><p><strong>- </strong>Chi phí ăn uống ngoài chương trình, vui chơi giải trí cá nhân, Cáp treo Bà Nà 750.000 vnđ, Dịch vụ Cù Lao Chàm hoặc Option 550.000 vnđ tour khác trong ngày thứ 3, Du thuyền sông hàn, Asina Park…</p><p><strong>- Thuế VAT 10%.</strong></p><p>- Tiền típ cho hướng dẫn viên và tài xế.</p><p>- Nếu quý khách chọn lựa đi Núi Thần Tài trong ngày thứ 3 phải tự túc di chuyển vào Hội An từ Đà Nẵng.</p>','<p><strong>Hà Nội:</strong> 024 7109 9999</p><p><strong>TPHCM:</strong> 028 7109 9998</p>','<p><strong>Hà Nội:</strong> 024 7109 9999</p><p><strong>TPHCM:</strong> 028 7109 9998</p>','edited','2020-05-18 07:30:05',NULL,'2020-05-27 07:10:39'),(2,'<h3>Hi, You can start editing your travel schedule</h3>',2,NULL,NULL,NULL,NULL,'new','2020-05-18 07:45:56',NULL,NULL),(3,'<h3>Hi, You can start editing your travel schedule</h3>',3,'<p><strong>BAO GỒM:</strong><br>•&nbsp; Tàu đi tham quan đảo.<br>•&nbsp; Ăn trưa trên tàu.<br>•&nbsp; Kính lặn, ống thở.<br>•&nbsp; Chương trình bar nổi trên nước.<br>•&nbsp; Chương trình ca nhạc trên tàu.<br>•&nbsp; Nước suối 01 chai 330 ml/ khách<br>•&nbsp; Khăn lạnh.<br><br><strong>KHÔNG BAO GỒM:</strong><br>•&nbsp; Vé vào tham quan các đảo : Hồ Cá Trí Nguyên: 170.000 vnd, Hòn Mun:&nbsp; 22.000 vnd, Bãi Tranh:&nbsp; 50.000 vnd<br>•&nbsp; Các trò chơi thể thao trên biển, tàu đáy kính.<br>•&nbsp; Bia rượu trong bữa ăn<br>•&nbsp; Chi phí cá nhân<br>•&nbsp; Thuế VAT<br>•&nbsp; Phụ thu ngày lễ tết.</p>',NULL,NULL,'<p><strong>Tên nhà cung cấp: </strong>CÔNG TY TNHH DU LỊCH SANG HIỀN NHA TRANG</p><p><strong>Địa chỉ: </strong>47 Hòn Lăng, Đắc Lộc, Vĩnh Phương , Nha Trang, Khánh Hòa.</p><p><strong>SĐT liên hệ:</strong></p><p>HÀ NỘI: 024 7109 9999<br>HỒ CHÍ MINH: 028 7109 9998</p>','edited','2020-05-19 09:18:04',NULL,'2020-05-19 09:27:51'),(4,'<h3>Hi, You can start editing your travel schedule</h3>',4,NULL,NULL,NULL,NULL,'new','2020-05-19 10:29:05',NULL,NULL),(5,'<h3>Hi, You can start editing your travel schedule</h3>',5,'<p><strong>Giá tour bao gồm:&nbsp;</strong><br>- Xe tham quan (16, 29, 35, 45 chỗ tùy theo số lượng khách) theo chương trình<br>- Khách sạn theo tiêu chuẩn 2 khách/phòng hoặc 3 khách/phòng&nbsp;<br>Ø Tương đương 3*: Châu Thành (Có hồ bơi, không có bãi biển riêng, cách biển 10 phút đi bộ)<br>- Vé tham quan theo chương trình&nbsp;&nbsp;<br>- Ăn chính theo chương trình từ 110.000-130.000VNĐ/bữa.&nbsp;<br>- Hướng dẫn viên tiếng Việt suốt tuyến<br>- Bảo hiểm du lịch với mức bồi thường cao nhất 120.000.000đ/vụ<br>- Nón Vietravel + Nước suối + Khăn lạnh&nbsp;<br>- Thuế VAT<br>&nbsp;<br><strong>Giá tour không bao gồm:&nbsp;</strong><br>- Chi phí cá nhân: ăn uống ngoài chương trình, giặt ủi, chi phí hủy đổi hành trình, phụ thu phòng đơn,..<br>&nbsp;<br><strong>Điều kiện thanh toán:</strong> Thanh toán 100% ngay khi đăng ký</p>',NULL,'<p>Lộ trình tham khảo, cự ly khoảng:<br>Ngày 01 (330 km): TP. HCM - Ninh Chữ (330 km)<br>Ngày 02&nbsp; (72 km): Ninh Chữ - Vịnh Vĩnh Hy (35 km) - Vườn Nho (10 km) - Ninh Chữ (27 km)<br>Ngày 03 (341 km): Ninh Chữ - Làng Gốm Bàu Trúc (18 km) - KDL Cổ Thạch (53 km) - TP. HCM (270 km)</p>',NULL,'edited','2020-05-21 10:32:58',NULL,'2020-05-21 10:45:43'),(6,'<p>Vịnh Cam Ranh là một vịnh nhỏ ở cực Nam của tỉnh Khánh Hòa. Cam Ranh từ lâu đã được mọi người biết đến như 1 nơi nổi tiếng về cảnh đẹp và kín gió. Núi và biển kết hợp với nhau tạo thành 1 bức tranh thiên nhiên tuyệt tác. Đến Cam Ranh điều đầu tiên nghĩ đến là các hòn đảo hoang sơ nhưng kì diệu, trong đó không thể không nhắc đến đảo Bình Ba, hòn đảo được mệnh danh là “ Đảo tôm hùm”.</p><p><strong>8h30 - 9h30: </strong>HDV đón đoàn tại điểm hẹn. Sau đó, đoàn làm thủ tục và di chuyển qua đảo Bình Ba bằng cano</p><p><strong>9h30 – 11h00: </strong>Đoàn cất hành lý tại Nhà Hàng Nổi. Sau đó, di chuyển tắm biển và lặn san<br>hô.</p><p><strong>11h30 – 13h00: </strong>Đoàn dùng cơm trưa tại Nhà Hàng Du Thuyền với đặc sản Bình Ba.(Khách có thể kêu thêm tôm hùm theo ý muốn, tôm sống bắt tại bè để chế biến, có thể cầm chụp hình)</p><ul><li>Bãi Chướng: là nơi đón bình mình đầu tiên trên đảo</li><li>Đồi Cỏ Hồng: ngắm toàn cảnh vịnh Cam Ranh, nơi check in tuyệt đẹp</li><li>Bãi Nồm: khách đi bộ tham quan chợ Bình và Bãi Nồm, tự do chụp ảnh kỉ niệm</li></ul><p><strong>15h00 – 16h00:</strong> Đoàn lên Cano về lại Đất Liền. Kết thúc chương trình tour và Hẹn Gặp Lại.</p>',6,'<p><strong>TOUR ĐI CANO : 650.000</strong></p><p><strong>GIÁ TOUR BAO GỒM:</strong><br>1. Tàu hoặc Cano cao tốc vận chuyển theo chương trình.<br>2. 1 Bữa trưa theo chương trình khách chọn<br>3. Các dịch vụ theo chương trình: xe Jeep/xe máy đưa đón tham quan đảo, áo phao,<br>&nbsp; &nbsp; kính lặn theo địa phương.<br>4. Hướng dẫn viên kinh nghiệm, nhiệt tình.<br>5. Tắm nước ngọt/lần/khách<br>6. Nước suối (01 chai 0,5L + 01 khăn/khách/ngày)<br>7. Bảo hiểm du lịch 20.000.000 đồng/trường hợp</p><p><strong>GIÁ TRẺ EM:</strong><br>- Trẻ em dưới 1m: miễn phí<br>- Trẻ em 1m– 1m3: tính 50% giá tour<br>- Từ&nbsp;1m3 trở lên: tính 100% giá tour</p><p><strong>LƯU Ý:&nbsp;</strong></p><p>- Thực đơn ăn trưa, tối có thể thay đổi tùy thuộc vào thời điểm đặt tour.</p><p>- Giá tour không áp dụng vào các thời điểm lễ/tết.<br>- Quý khách mang theo CMND để làm thủ tục qua đảo, kem chống nắng và mũ các<br>&nbsp; loại…<br>- Tour Bình Ba không cho khách nước ngoài tham quan</p>',NULL,'<p><strong>Dịch Vụ Không Bao Gồm:</strong><br>- Ăn uống ngoài chương trình, các chi phí cá nhân khác<br>- Vé tham quan ngoài chương trình.<br>- Thuế VAT 10%</p>',NULL,'edited','2020-05-21 13:53:27',NULL,'2020-05-21 14:04:03'),(7,'<p><strong>NGÀY 1: TP.HỒ CHÍ MINH – MỸ THO – BẾN TRE – TP.HỒ CHÍ MINH</strong></p><p>&nbsp;<strong>7h45:</strong> &nbsp;Quý khách vui lòng có mặt &nbsp;tại&nbsp;220 Đề Thám- Quận 1- TP HCM. Xe và hướng dẫn viên đón Quý khách &nbsp;khởi hành đi Tiền Giang.</p><p>&nbsp;Đến Thành phố Mỹ Tho (Tiền Giang), Quý khách thăm quan:</p><p>&nbsp;<strong>+ Chùa Vĩnh Tràng:</strong> Ngôi chùa thờ Phật lớn nhất tỉnh Tiền Giang, chùa mang dáng vẻ kiến trúc châu Á pha lẫn châu Âu.</p><p>&nbsp;Tiếp theo, Quý khách lên tàu du lịch theo dòng sông Tiền đến thăm quan:</p><p>&nbsp;<strong>+ Cồn Qui:</strong> Quý khách sẽ được hòa mình vào thiên nhiên mênh mông sóng nước sông Tiền. Dùng cơm trưa tại nhà hàng địa phương.</p><p><strong>+ Khu du lịch An Khánh:</strong> Quý khách xuống đò chèo, men theo các con rạch nhỏ để chiêm ngưỡng những hàng dừa nước, biết thêm các loài cây như: cây Bần, Ô rô, máy dầm… Tại đây Quý khách di chuyển dưới bóng mát của vườn cây ăn trái để đến với nhà vườn thưởng thức trái cây miền tây và giao lưu Đờn ca tài tử.</p><p>&nbsp;Tiếp tục hành trình, Quý khách thăm quan:</p><p><strong>&nbsp;+ Cơ sở sản xuất kẹo dừa:</strong> Kẹo dừa Bến Tre vừa là một đặc sản ẩm thực, vừa là một nghề thủ công truyền thống mang đậm văn hóa xứ sở. Quý khách sẽ được xem quy trình làm kẹo dừa để tạo ra những viên kẹo thơm ngon và thưởng thức chúng. Ngoài ra, Quý khách có dịp thưởng thức “trà mật ong -quất” - Thức uống có vị chua thơm, ngọt dìu dịu, không gắt.</p><p>&nbsp;Quý khách lên xe về TP.Hồ Chí Minh. Đến TP.Hồ Chí Minh, hướng dẫn viên chia tay và hẹn gặp lại Quý khách. Kết thúc chương trình Tour du lịch Mỹ Tho – Bến Tre 01 ngày.</p>',7,'<p>·&nbsp;&nbsp;Thời gian tập trung: 07h45, 22 Bùi Viện, Quận 1, HCM</p><p>·&nbsp;&nbsp;Thời gian kết thúc: 17h00 – 18h00</p><p>o&nbsp;Xe máy lạnh thăm quan suốt chương trình.</p><p>o&nbsp;Các bữa ăn trong chương trình:</p><p>+ Siêu tiết kiệm: 01 bữa trưa cơm dĩa.</p><p>+ Tiêu chuẩn cao: 01 bữa trưa cơm phần.</p><p>o&nbsp;Hướng dẫn viên tiếng Việt/Anh.</p><p>o&nbsp;Chi phí vé thăm quan, ăn trái cây, đò chèo.</p><p>o&nbsp;Chi phí tổ chức, dịch vụ</p><p>o&nbsp;Nước: 01 chai/người/ngày.</p><p>o&nbsp;Bảo hiểm du lịch.</p>',NULL,'<p><strong>THỰC ĐƠN TẠI NHÀ HÀNG CỒN QUI</strong></p><p>&nbsp;</p><p><strong>Mức siêu tiết kiệm</strong></p><p>Cơm dĩa: sườn và trứng, đồ xào</p><p><strong>Mức tiêu chuẩn cao: 5 món</strong></p><p>Cá tai tượng chiên xù&nbsp;</p><p>Tôm hấp nước dừa/ tôm nướng mọi</p><p>Chả giò&nbsp;</p><p>Cơm chiên</p><p>Bánh xèo Nam bộ</p><p>&nbsp;</p><p><strong>GIÁ TOUR DÀNH CHO KHÁCH LẺ GHÉP ĐOÀN</strong></p><figure class=\"table\"><table><tbody><tr><td><strong>TIÊU CHUẨN</strong></td><td><strong>GIÁ TOUR (VNĐ/KHÁCH)</strong></td></tr><tr><td><strong>SIÊU TIẾT KIỆM</strong></td><td>&nbsp;250.000 đ/ khách</td></tr><tr><td><strong>TIÊU CHUẨN CAO</strong></td><td>410.000 đ/ khách</td></tr><tr><td colspan=\"2\"><i>&nbsp;Áp dụng từ ngày 01.01.2020, áp dụng vào ngày thường - Không áp dụng vào các ngày lễ, tết</i></td></tr></tbody></table></figure><p>&nbsp;</p><p>&nbsp;</p><p><strong>KHÔNG BAO GỒM:</strong></p><p>&nbsp;</p><p>o&nbsp;Chi phí cá nhân, thăm quan, ăn uống ngoài chương trình.</p><p>o&nbsp;Chi phí mua sắm.</p><p>o&nbsp;Thuế VAT</p><p>&nbsp;</p><p><strong>GIÁ VÉ TRẺ EM:</strong></p><p>&nbsp;Trẻ em dưới 3 tuổi free (share ghế trên tàu &amp; xe với cha mẹ)</p><p>Trẻ em từ 3 – 10&nbsp; tính 50% giá tour. Từ 11 tuổi trở lên tính như người lớn.</p><p>Hai người lớn chỉ được kèm 1 trẻ em. Từ bé thứ 2 tính như người lớn.</p><p><strong>ĐIỀU KIỆN HỦY, HOÃN TOUR:</strong></p><p>&nbsp;</p><p>o&nbsp;Hủy/ hoãn tour trước ngày khởi hành tour: miễn phí.</p><p>o&nbsp;Trường hợp hủy/ hoãn trong ngày khởi hành và đặc biệt vào các ngày thứ 7, chủ nhật:&nbsp; tính 100% giá vé.</p>','<p><strong>Tên nhà cung cấp: </strong>Trung tâm lữ hành du lịch quốc tế Trippy – Chi nhánh Công ty TNHH du lịch Thiên Niên kỷ</p><p><strong>Địa chỉ: </strong>Địa chỉ: 22 Bùi Viện, phường Phạm Ngũ Lão, Quận 1, Tp.Hồ Chí Minh</p><p><strong>SĐT liên hệ:</strong></p><p>HÀ NỘI: 024 7109 9999<br>HỒ CHÍ MINH: 028 7109 9998</p>','edited','2020-05-21 14:14:10',NULL,'2020-05-21 14:34:13'),(8,'<p>- 17:00: Xe đón quý khách tại khách sạn.</p><p>- 17:30: Quý khách đến cảng, lên tàu. Bắt đầu chuyến hành trình biển đêm. Vào thời điểm này, quý khách sẽ được ngắm cảnh hoàng hôn thật đẹp và lãng mạn trên tàu.</p><p>- 18:30: Bắt đầu trổ tài câu mực. Quý khách sẽ được nhân viên trên tàu phát dụng cụ và hướng dẫn cách sử dụng để câu mực.</p><p>- 20:00: Thưởng thức chiến lợi phẩm sau một giờ vất vả. Quý khách sẽ được thưởng thức món cháo mực (một đặc sản của người dân vùng biển) và mực nướng cùng thêm những sản phẩm mà quý khách đã thu được</p><p>- 21:30: Tàu đưa quý khách vào bờ, xe đưa quý khách về khách sạn. Kết thúc chương trình.</p>',8,'<p>Tour bao gồm: xe đưa đón, tàu câu mực, cháo mực, mực nướng, mì xào hải sản, hướng dẫn viên.</p>',NULL,NULL,'<p><strong>Tên nhà cung cấp: </strong>John Tours</p><p><strong>Địa chỉ: </strong>143 Tran Hung Dao Street, Duong Dong Town, Phu Quoc, Viet Nam.</p><p><strong>SĐT liên hệ:</strong></p><p>HÀ NỘI: 024 7109 9999<br>HỒ CHÍ MINH: 028 7109 9998</p>','edited','2020-05-22 05:57:06',NULL,'2020-05-22 06:11:37'),(9,'<p><i>Cách bờ biển Cửa Đại (Hội An, Quảng Nam) 15km, <strong>Cù Lao Chàm</strong> là một cụm đảo bao gồm 8 đảo với khí hậu quanh năm mát mẻ, hệ động thực vật phong phú, đặc biệt là nguồn hải sản và nguồn tài nguyên yến sào. Các rạn san hô ở khu vực biển Cù Lao Chàm được các nhà khoa học đánh giá cao và đưa vào danh sách bảo vệ. Cù Lao Chàm được UNESCO công nhận là khu dự trữ sinh quyển thế giới.</i></p><p><i>Du khách đến với Cù Lao Chàm sẽ trải qua những giờ phút thi vị, bồng bềnh trên sông nước. Đặc biệt, ở Cù Lao Chàm có nhiều bãi tắm tự nhiên đẹp và hấp dẫn.</i></p><p><strong>07h30:</strong> Xe đón khách tại <strong>KHÁCH SẠN</strong> đưa đến bến Cửa Đại</p><p><strong>08h00:</strong> Ngồi tàu Cao tốc đi <strong>Cù Lao Chàm</strong></p><p><strong>08h30:</strong> Tham quan <strong>chùa Hải Tạng</strong>, <strong>Âu thuyền</strong> &amp; <strong>các lăng miếu cổ</strong>, mua sắm đặc sản khô trên đảo. Thăm <strong>khu bảo tồn biển tại Bãi Bắc</strong></p><p><strong>10h30:</strong> Tham gia hoạt động lặn biển (<strong>Snokelling</strong>) ngắm san hô</p><p><strong>12h00:</strong> Ăn trưa trên đảo</p><p><strong>14h00:</strong> Tạm biệt <strong>Cù Lao Chàm</strong></p><p><strong>15h00:</strong> Trả khách tại <strong>KHÁCH SẠN</strong></p>',9,'<p><strong>DỊCH VỤ BAO GỒM:</strong> Xe đón- tiễn tận khách sạn + tàu cao tốc chất lượng cao + dịch vụ snorkeling lặn ngắm san hô+ vé tham quan+ ăn trưa + hướng dẫn viên tiếng Việt + Bảo Hiểm.</p><p><strong>KHÔNG BAO GỒM:</strong> Nước uống riêng trong bữa ăn và các chi phí phát sinh khác.</p><p><strong>KHÁCH NƯỚC NGOÀI: 720.000/KHÁCH&nbsp;&nbsp;</strong></p>',NULL,'<p><strong>GHI CHÚ:</strong>&nbsp;Trẻ em dưới 5 tuổi: miễn phí: trẻ em 5-10 tuổi: 75% giá Tour</p><p><strong>ĐIỀU KIỆN HỦY TOUR:</strong>&nbsp;Không hoàn hủy</p>','<p><strong>Tên nhà cung cấp: </strong>CÔNG TY CỔ PHẦN VIỆT NAM TRAVELMART<br><strong>Địa chỉ: </strong>68 Nguyen Thi Minh Khai, Da Nang, Vietnam</p><p><strong>SĐT liên hệ:</strong></p><p>HÀ NỘI: 024 7109 9999<br>HỒ CHÍ MINH: 028 7109 9998</p>','edited','2020-05-22 06:15:06',NULL,'2020-05-22 06:22:35'),(10,'<p><strong>CHƯƠNG TRÌNH 1:&nbsp;</strong></p><p><strong>07:45 - 08:30&nbsp; </strong>Hướng dẫn viên và lái xe đón Quý khách tại&nbsp;<i>khách sạn Hà Nội</i>&nbsp;đi tham quan&nbsp;Chùa Trấn Quốc&nbsp;- ngôi chùa thiêng nằm bên bờ Hồ Tây.</p><p><strong>09:40&nbsp; </strong>Quý khách thăm khu di tích Hồ Chí Minh (lăng Chủ Tịch HCM, nhà sàn, ao cá, chùa Một Cột). <strong>Ngoại trừ thứ 2 và thứ 6 lăng không mở cửa, quý khách tham quan và chụp hình ngoài trời.&nbsp;</strong></p><p><strong>11:20</strong>&nbsp; Quý khách thăm tiếp tục đi thăm Văn Miếu Quốc Tử Giám- trường đại học đầu tiên của Việt Nam. Sau đó quý khách sẽ ăn trưa và nghỉ ngơi tại nhà hàng.</p><p><strong>13:00</strong>&nbsp;Quý khách nghỉ ngơi, ăn trưa tại nhà hàng trong phố cổ.</p><p><strong>14:00</strong>&nbsp;Quý khách tiếp tục khám phá cuộc sống hàng ngày của nghề gốm truyền thống tại làng Bát Tràng trên bờ sông Hồng. Bạn sẽ biết rõ hơn về lịch sử hơn 700 năm của làng, tham quan các phòng trưng bày các sản phẩm gốm.</p><p><strong>15:30</strong>&nbsp;Quý khách quay trở về trung tâm Hà Nội thăm đền Ngọc Sơn và Hồ Hoàn Kiếm,</p><p><strong>16:00</strong>&nbsp;Xe đưa Quý khách về khách sạn. Kết thúc chương trình.</p><p><strong>NOTE: THỨ 2,4,6 THĂM QUAN LÀNG GỐM BÁT TRÀNG.</strong></p><p><strong>THỨ 3,5,7,CHỦ NHẬT THĂM QUAN BẢO TÀNG DÂN TỘC HỌC&nbsp;</strong></p>',10,'<p><strong>GIÁ TOUR&nbsp;ÁP DỤNG:&nbsp;&nbsp;1/1/2019 - 30/6/2019</strong></p><p><strong>DỊCH VỤ BAO GỒM:</strong></p><p>-&nbsp;&nbsp; Ăn theo chương trình (ăn chính 120.000đ/ xuất).</p><p>-&nbsp;&nbsp; Vận chuyển xe máy lạnh đời mới theo chương trình.</p><p>-&nbsp;&nbsp; Hướng dẫn viên theo suốt chương trình.</p><p>-&nbsp;&nbsp; Nước uống trên xe.</p><p>-&nbsp;&nbsp; Vé vào cửa tại các điểm thăm quan.</p><p><strong>DỊCH VỤ KHÔNG BAO GỒM:</strong></p><p>-&nbsp;&nbsp; Chi phí cá nhân, phí đồ uống.</p><p>-&nbsp;&nbsp; Thuế VAT 10%.</p><p>-&nbsp; &nbsp;Tùy chọn: Xích lô vòng quanh khu phố cổ 100.000đ/khách.</p>',NULL,'<p><strong>ĐIỂM ĐÓN KHÁCH:&nbsp;</strong></p><p>Nhà hát lớn Hà Nội hoặc các khách sạn trong khu vực phố cổ</p><p><strong>QUY ĐỊNH TRẺ EM</strong></p><p>-&nbsp;&nbsp; Trẻ em từ 9 tuổi trở lên mua 1 vé như người lớn.</p><p>-&nbsp;&nbsp; Trẻ em từ 5 tuổi đến 9 tuổi : tính 75% giá tour.</p><p>-&nbsp;&nbsp; Trẻ em dưới 5 tuổi miễn phí&nbsp; tour cha, mẹ lo ăn nghỉ cho con.</p><p>-&nbsp;&nbsp; Hai người lớn chỉ được kèm một trẻ em. Từ trẻ thứ 2 ở độ tuổi từ 2 đến 5 tuổi cần mua giá theo quy định.</p><p>-&nbsp;&nbsp; Giá trên có thể thay đổi theo từng thời điểm và số lượng khách tham gia.</p>','<p><strong>Tên nhà cung cấp: </strong>CHI NHÁNH CÔNG TY TNHH DU LỊCH QUỐC TẾ CHÂU Á THÁI BÌNH DƯƠNG</p><p><strong>Địa chỉ: </strong>Số 57, Lê Thị Hồng Gấm, P.Nguyễn Thái Bình, Quận 1, Tp.Hồ Chí Minh</p><p><strong>SĐT liên hệ:</strong></p><p>HÀ NỘI: 024 7109 9999<br>HỒ CHÍ MINH: 028 7109 9998</p>','edited','2020-05-22 06:30:53',NULL,'2020-05-22 06:39:25'),(11,'<h3>Hi, You can start editing your travel schedule</h3>',11,NULL,NULL,NULL,NULL,'new','2020-05-27 07:05:33',NULL,NULL);
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`schedules_BEFORE_UPDATE` BEFORE UPDATE ON `schedules` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `services` (
  `idServices` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateEdited` datetime DEFAULT NULL,
  `dateDeleted` datetime DEFAULT NULL,
  PRIMARY KEY (`idServices`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Đưa đón tận nơi','new','2020-05-18 07:42:41',NULL,NULL),(2,'Cho thuê xe máy','new','2020-05-18 07:42:57',NULL,NULL),(3,'Free Wifi','new','2020-05-18 07:43:12',NULL,NULL),(4,'Hỗ trợ người khuyết tật','new','2020-05-18 07:43:37',NULL,NULL),(5,'Sẵn vé máy bay','new','2020-05-18 07:43:49',NULL,NULL),(6,'Xe giường nằm','new','2020-05-18 07:44:14',NULL,NULL),(7,'Bãi biển đẹp','new','2020-05-18 07:45:01',NULL,NULL),(8,'Phòng ngủ tập thể','new','2020-05-18 07:45:17',NULL,NULL),(9,'Passport','new','2020-05-18 07:45:30',NULL,NULL),(10,'Tiệc sinh nhật đúng ngày','new','2020-05-18 07:45:47',NULL,NULL),(11,'Hướng dẫn viên','new','2020-05-18 07:46:04',NULL,NULL),(12,'Bảo hiểm','new','2020-05-18 07:46:17',NULL,NULL),(13,'Cho thuê xe đạp','new','2020-05-18 07:49:15',NULL,NULL),(14,'Tự do trong 1 ngày','new','2020-05-18 07:52:09',NULL,NULL),(15,'Phòng tập gym','new','2020-05-18 07:52:21',NULL,NULL),(16,'Dịch vụ spa','new','2020-05-18 07:52:35',NULL,NULL),(17,'Có bể bơi','new','2020-05-18 07:54:49',NULL,NULL),(18,'Trượt tuyết','new','2020-05-18 07:55:05',NULL,NULL),(19,'Bao bữa sáng','new','2020-05-18 07:55:39',NULL,NULL),(20,'Hỗ trợ visa','new','2020-05-18 07:56:29',NULL,NULL),(21,'Vé tham quan','new','2020-05-18 07:56:42',NULL,NULL),(22,'Trang bị y tế','new','2020-05-18 07:58:44',NULL,NULL);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `idTag` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateEdited` datetime DEFAULT NULL,
  `dateDeleted` datetime DEFAULT NULL,
  PRIMARY KEY (`idTag`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'Ẩm thực','new','2020-05-18 07:39:48',NULL,NULL),(2,'Biển đảo','new','2020-05-18 07:40:11',NULL,NULL),(3,'Nghĩ dưỡng','new','2020-05-18 07:40:34',NULL,NULL),(4,'Mạo hiểm','new','2020-05-18 07:42:14',NULL,NULL);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timelines`
--

DROP TABLE IF EXISTS `timelines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `timelines` (
  `idTimelines` int(11) NOT NULL AUTO_INCREMENT,
  `idTour` int(11) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `statusAction` varchar(100) DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateEdited` datetime DEFAULT NULL,
  `dateDeleted` datetime DEFAULT NULL,
  PRIMARY KEY (`idTimelines`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timelines`
--

LOCK TABLES `timelines` WRITE;
/*!40000 ALTER TABLE `timelines` DISABLE KEYS */;
INSERT INTO `timelines` VALUES (1,1,'QUẢNG NGÃI – NGŨ HÀNH SƠN – SƠN TRÀ (Ăn trưa, tối) ','06h30: Xe và HDV Vietravel đón khách tại điểm hẹn,  khởi hành đi Đà Nẵng, trên đường đi quý khách nghe hướng dẫn về Tháp Chiêm Đàng – một công trình kiến trúc văn hóa của người Chăm Pa tại Quảng Nam. Trưa đoàn đến Đà Nẵng, dùng cơm trưa, nhận phòng khách sạn 03 sao, nghỉ ngơi.\n\n13h30: Xe đưa đoàn tham quan Núi Ngũ Hành Sơn với Chùa Tam Thai, Vọng Hải Đài, Động Huyền Không, Vọng Giang Đài và mua sắm đồ thủ công mỹ nghệ. Tiếp tục hành trình, đoàn đến Bán Đảo Sơn Trà, vãng cảnh và viếng Chùa Linh Ứ','2020-06-21 00:00:00','new','2020-05-18 07:48:39',NULL,NULL),(2,1,'ĐÀ NẴNG – BÀ NÀ – QUẢNG NGÃI (Ăn sáng, trưa)','06h30: Dùng buffet sáng tại khách sạn, làm thủ tục trả phòng. Xe đưa Quý khách đi tham quan KDL Bà Nà - Suối Mơ.\n\n08h15: Đến nơi quý khách làm thủ tục lên cáp treo dài nhất Đông Nam Á,  lên đến đỉnh Bà Nà quý khách tận hưởng không khí se lạnh của “Đà Lạt tại miền Trung”, tham quan Núi Chúa, Suối Nai, Biệt Thự Hoàng Lan, Đồi Vọng Nguyệt, khu vui chơi Fantasy Park: với các trò chơi phiêu lưu mới lạ, ngộ nghĩnh, hấp dẫn, hiện đại nhưng cũng rất \"cổ tích\" thân thiện và gần gũi với thiên nhiên, hoặc ','2020-05-22 00:00:00','new','2020-05-18 07:52:28',NULL,NULL),(3,3,'Cảng Cầu Đá','Đón khách tại khách sạn và đưa xuống Cảng Cầu Đá. Bắt đầu chuyến du ngoạn 4 đảo vịnh Nha Trang trong 1 ngày.','2020-07-30 00:00:00','new','2020-05-19 09:33:26',NULL,NULL),(4,3,'Tham quan Hòn Mun','Tàu sẽ đưa quý khách tham quan Hòn Mun – Khu bảo tồn sinh vật biển trong vịnh Nha Trang. Tại đây quý khách sẽ được chiêm ngưỡng các loại sinh vật biển cùng với các rạng san hô nhiều màu sắc phong phú bằng kính lặn, ống thở hay bằng tàu đáy kính (tự túc chi phí).','2020-07-30 00:00:00','new','2020-05-19 09:33:26',NULL,NULL),(5,3,'Bãi Tranh','Tàu đưa quý khách đến Bãi Tranh, quý khách nhận lều, tự do nghỉ ngơi, tắm biển hay tham gia các môn thể thao nước như: dù bay, môtô nước…(phí không bao gồm)','2020-07-30 00:00:00','new','2020-05-19 09:33:26',NULL,NULL),(6,3,'Về lại Cảng Cầu Đá','Quý khách về lại Cảng Cầu Đá. Xe đưa đoàn về lại khách sạn. Kết thúc chương trình du ngoạn 4 đảo vịnh Nha Trang trong 1 ngày.','2020-07-30 00:00:00','new','2020-05-19 09:33:26',NULL,NULL),(7,3,'Tàu đến Hòn Một','Tàu đến Hòn Một, quý khách dùng bữa trưa trên tàu với các món ăn đặc trưng của vùng biển, tham gia chương trình giao lưu văn nghệ trên tàu do các thủy thủ tổ chức. Sau bữa trưa, quý khách sẽ được trải nghiệm “Quầy bar nổi” với cảm giác hòa mình vào dòng nước trong xanh của vịnh Nha Trang và thưởng thức ly rượu vang ngay dưới nước.','2020-07-30 00:00:00','new','2020-05-19 09:33:26',NULL,NULL),(8,3,'Vịnh Nha Trang','Quý khách lên tàu và bắt đầu cuộc hành trình khám phá vịnh Nha Trang. Sau nửa giờ trên thuyền từ cảng Cầu Đá, du khách sẽ đến với Khu du lịch Hồ Cá Trí Nguyên. Đến đây, du khách có thể đi dạo quanh hồ hay ngồi đón gió ngay trên nhà thuỷ tạ vẫn có thể quan sát cảnh sinh hoạt của đủ loại sinh vật biển với những sắc màu rực rỡ dưới làn nước trong xanh như pha lê ngay dưới chân mình.','2020-07-30 00:00:00','new','2020-05-19 09:33:26',NULL,NULL),(9,3,'TP.HCM - NHA TRANG –GALINA LAKE VIEW (Ăn trưa, tối)','Quý khách tập trung tại ga đi Trong Nước Sân bay Tân Sơn Nhất, hướng dẫn viên hỗ trợ làm thủ tục cho đoàn đáp chuyến bay đi Nha Trang. Đến Sân bay Cam Ranh, xe và hướng dẫn viên Vietravel đón đoàn đi tham quan:  \n- Khu du lịch Galina Lake View: với một hành trình 2 điểm đến, đến đây vừa tham quan Khu Di tích Lịch sử: \"Căn cứ Cách Mạng Đồng Bò\" vừa tham quan khung cảnh thơ mộng với con đường đầy hoa, những giàn hoa giấy đỏ, những vườn cây thông hữu tình.\nĐoàn dùng bữa trưa tại khu du lịch, nhận p','2020-08-09 00:00:00','new','2020-05-19 10:34:12',NULL,NULL),(10,3,'NHA TRANG – VINPEARL LAND CẢ NGÀY (Ăn sáng, tự túc ăn trưa và tối)','Sau khi dùng bữa sáng tại khách sạn, Quý khách có thể tự do khám phá những công trình nổi tiếng của Nha Trang như Chùa Long Sơn, Nhà Thờ Đá, đi chợ hoặc mua vé tham quan:\n- Thế Giới Vui Chơi Giải Trí Vinpearl Land - Ngắm toàn cảnh Vịnh Nha Trang từ đỉnh vòng xoay mặt trời lớn nhất Việt Nam, tham quan bộ sưu tập “kỳ hoa, dị thảo” tại đồi Vạn Hoa, khu vườn thú mở - vườn Quý Vương, tham gia các trò chơi tương tác và liên hoàn tại Quảng trường Thần Thoại hay Vùng đất yêu thương, xem phim 4D tại lâu ','2020-08-10 00:00:00','new','2020-05-19 10:34:13',NULL,NULL),(11,3,'NHA TRANG – NHŨ TIÊN – BẢO TÀNG GIẠC MA - TP.HCM (Ăn sáng, trưa)','Sau khi dùng bữa sáng, đoàn khởi hành tham quan:\n- Khu du lịch biển Nhũ Tiên: Lưu dấu chân trên bờ cát dài trắng mịn cùng làn nước trong xanh, với đồi núi trùng điệp thu gọn trong tầm mắt luôn là trải nghiệm tuyệt vời.\n- Bảo tàng Gạc Ma: được biết đến như một “địa chỉ đỏ” giáo dục chủ quyền biển đảo cho thế hệ trẻ, nổi bật với tương đài chiến sĩ mang chủ đề “Những người nằm lại phía chân trời” cùng các công trình điêu khắc nghệ thuật sinh động, ấn tượng sẽ cho du khách những thông tin lịch sử qu','2020-08-11 00:00:00','new','2020-05-19 10:34:13',NULL,NULL),(12,4,'TP.HCM - NHA TRANG –GALINA LAKE VIEW (Ăn trưa, tối)','Quý khách tập trung tại ga đi Trong Nước Sân bay Tân Sơn Nhất, hướng dẫn viên hỗ trợ làm thủ tục cho đoàn đáp chuyến bay đi Nha Trang. Đến Sân bay Cam Ranh, xe và hướng dẫn viên Vietravel đón đoàn đi tham quan:  \n- Khu du lịch Galina Lake View: với một hành trình 2 điểm đến, đến đây vừa tham quan Khu Di tích Lịch sử: \"Căn cứ Cách Mạng Đồng Bò\" vừa tham quan khung cảnh thơ mộng với con đường đầy hoa, những giàn hoa giấy đỏ, những vườn cây thông hữu tình.\nĐoàn dùng bữa trưa tại khu du lịch, nhận p','2020-08-09 00:00:00','new','2020-05-19 10:52:08',NULL,NULL),(13,4,'NHA TRANG – NHŨ TIÊN – BẢO TÀNG GIẠC MA - TP.HCM (Ăn sáng, trưa)','Sau khi dùng bữa sáng, đoàn khởi hành tham quan:\n- Khu du lịch biển Nhũ Tiên: Lưu dấu chân trên bờ cát dài trắng mịn cùng làn nước trong xanh, với đồi núi trùng điệp thu gọn trong tầm mắt luôn là trải nghiệm tuyệt vời.\n- Bảo tàng Gạc Ma: được biết đến như một “địa chỉ đỏ” giáo dục chủ quyền biển đảo cho thế hệ trẻ, nổi bật với tương đài chiến sĩ mang chủ đề “Những người nằm lại phía chân trời” cùng các công trình điêu khắc nghệ thuật sinh động, ấn tượng sẽ cho du khách những thông tin lịch sử qu','2020-08-11 00:00:00','new','2020-05-19 10:52:08',NULL,NULL),(14,4,'NHA TRANG – VINPEARL LAND CẢ NGÀY (Ăn sáng, tự túc ăn trưa và tối)','Sau khi dùng bữa sáng tại khách sạn, Quý khách có thể tự do khám phá những công trình nổi tiếng của Nha Trang như Chùa Long Sơn, Nhà Thờ Đá, đi chợ hoặc mua vé tham quan:\n- Thế Giới Vui Chơi Giải Trí Vinpearl Land - Ngắm toàn cảnh Vịnh Nha Trang từ đỉnh vòng xoay mặt trời lớn nhất Việt Nam, tham quan bộ sưu tập “kỳ hoa, dị thảo” tại đồi Vạn Hoa, khu vườn thú mở - vườn Quý Vương, tham gia các trò chơi tương tác và liên hoàn tại Quảng trường Thần Thoại hay Vùng đất yêu thương, xem phim 4D tại lâu ','2020-08-10 00:00:00','new','2020-05-19 10:52:08',NULL,NULL),(15,5,'TP.HCM - NINH CHỮ','22:30 Tối Quý khách tập trung tại Công ty Vietravel (190 Pasteur, Q3, Tp.Hồ Chí Minh). Đoàn khởi hành đi Ninh Chữ. Quý khách nghỉ đêm trên xe.','2020-07-15 00:00:00','new','2020-05-21 10:38:23',NULL,NULL),(16,5,'NINH CHỮ - VỊNH VĨNH HY (Ăn sáng, trưa, chiều)','Sau khi ăn sáng, đoàn cùng nhau khám phá \n- Vịnh Vĩnh Hy: tại đây du khách xuống tàu đáy kính thưởng ngoạn toàn cảnh vịnh và những rặng san hô rực rỡ cùng với những sinh vật dưới đáy biển. \n- Trở về Bãi Cóc: Quý khách tự do tắm biển và thưởng thức hải sản biển tươi sống (chi phí tự túc). \n- Vườn nho Ninh Thuận: Là loại nho đặc sản vùng đất nắng gió Ninh Thuận để mua về làm quà cho gia đình người thân\n- Làng Gốm Bàu Trúc: với những vật dụng và hình tượng bằng gốm mang hình dáng và phong tục của n','2020-07-16 00:00:00','new','2020-05-21 10:38:24',NULL,NULL),(17,5,'NINH CHỮ - KDL CỔ THẠCH - TP.HCM (Ăn sáng, trưa)','Sau khi ăn sáng, Quý khách làm thủ tục trả phòng. Khởi hành về TP. Hồ Chí Minh. Trên đường về Quý khách tham quan:\n- KDL Cổ Thạch, Viếng Chùa Cổ Thạch hay còn gọi Chùa Hang: chiêm ngưỡng vẻ đẹp đặc sắc của Bãi Đá Bảy Màu. \nChiều về đến Tp.Hồ Chí Minh, xe đưa Quý khách về điểm đón ban đầu. Chia tay Quý khách và kết thúc chương trình du lịch.','2020-07-17 00:00:00','new','2020-05-21 10:38:24',NULL,NULL),(18,6,'Di chuyển đến đảo Bình Ba','HDV đón đoàn tại điểm hẹn. Sau đó, đoàn làm thủ tục và di chuyển qua đảo Bình Ba bằng cano','2020-08-20 00:00:00','new','2020-05-21 13:58:39',NULL,NULL),(19,6,'Về đất liền','Đoàn lên Cano về lại Đất Liền. Kết thúc chương trình tour và Hẹn Gặp Lại.','2020-08-20 00:00:00','new','2020-05-21 13:58:41',NULL,NULL),(20,6,'Nhà Hàng Nổi','Đoàn cất hành lý tại Nhà Hàng Nổi. Sau đó, di chuyển tắm biển và lặn san\nhô.','2020-08-20 00:00:00','new','2020-05-21 13:58:42',NULL,NULL),(21,6,'Nhà Hàng Du Thuyền','Đoàn dùng cơm trưa tại Nhà Hàng Du Thuyền với đặc sản Bình Ba.(Khách có thể kêu thêm tôm hùm theo ý muốn, tôm sống bắt tại bè để chế biến, có thể cầm chụp hình)','2020-08-20 00:00:00','new','2020-05-21 13:58:42',NULL,NULL),(22,7,'Đến Thành phố Mỹ Tho','Quý khách vui lòng có mặt  tại 220 Đề Thám- Quận 1- TP HCM. Xe và hướng dẫn viên đón Quý khách  khởi hành đi Tiền Giang. Đến Thành phố Mỹ Tho (Tiền Giang).','2020-09-05 00:00:00','new','2020-05-21 14:21:50',NULL,NULL),(23,7,'Chùa Vĩnh Tràng, Cồn Qui','Ngôi chùa thờ Phật lớn nhất tỉnh Tiền Giang, chùa mang dáng vẻ kiến trúc châu Á pha lẫn châu Âu.\n\n Tiếp theo, Quý khách lên tàu du lịch theo dòng sông Tiền đến thăm quan\nCồn Qui: Quý khách sẽ được hòa mình vào thiên nhiên mênh mông sóng nước sông Tiền. Dùng cơm trưa tại nhà hàng địa phương.','2020-09-05 00:00:00','new','2020-05-21 14:21:52',NULL,NULL),(24,7,'Khu du lịch An Khánh, Cơ sở sản xuất kẹo dừa','Khu du lịch An Khánh: Quý khách xuống đò chèo, men theo các con rạch nhỏ để chiêm ngưỡng những hàng dừa nước, biết thêm các loài cây như: cây Bần, Ô rô, máy dầm… Tại đây Quý khách di chuyển dưới bóng mát của vườn cây ăn trái để đến với nhà vườn thưởng thức trái cây miền tây và giao lưu Đờn ca tài tử.\n\n Tiếp tục hành trình, Quý khách thăm quan:\nCơ sở sản xuất kẹo dừa: Kẹo dừa Bến Tre vừa là một đặc sản ẩm thực, vừa là một nghề thủ công truyền thống mang đậm văn hóa xứ sở. Quý khách sẽ được xem qu','2020-09-05 00:00:00','new','2020-05-21 14:22:04',NULL,NULL),(25,8,'Đón khách','Xe đón quý khách tại khách sạn.','2020-08-15 00:00:00','new','2020-05-22 06:02:06',NULL,NULL),(26,8,'Lên tàu','Quý khách đến cảng, lên tàu. Bắt đầu chuyến hành trình biển đêm. Vào thời điểm này, quý khách sẽ được ngắm cảnh hoàng hôn thật đẹp và lãng mạn trên tàu.','2020-08-15 00:00:00','new','2020-05-22 06:02:09',NULL,NULL),(27,8,'Câu mực','Bắt đầu trổ tài câu mực. Quý khách sẽ được nhân viên trên tàu phát dụng cụ và hướng dẫn cách sử dụng để câu mực.','2020-08-15 00:00:00','new','2020-05-22 06:02:10',NULL,NULL),(28,8,'Thưởng thức chiến lợi phẩm','Thưởng thức chiến lợi phẩm sau một giờ vất vả. Quý khách sẽ được thưởng thức món cháo mực (một đặc sản của người dân vùng biển) và mực nướng cùng thêm những sản phẩm mà quý khách đã thu được.','2020-08-15 00:00:00','new','2020-05-22 06:02:10',NULL,NULL),(29,8,'Tàu đưa quý khách vào bờ','Tàu đưa quý khách vào bờ, xe đưa quý khách về khách sạn. Kết thúc chương trình.','2020-08-15 00:00:00','new','2020-05-22 06:02:11',NULL,NULL),(30,9,'Đón khách','Xe đón khách tại KHÁCH SẠN đưa đến bến Cửa Đại','2020-10-10 00:00:00','new','2020-05-22 06:17:25',NULL,NULL),(31,9,'Di chuyển','Ngồi tàu Cao tốc đi Cù Lao Chàm','2020-10-10 00:00:00','new','2020-05-22 06:17:27',NULL,NULL),(32,9,'Tham quan','Tham quan chùa Hải Tạng, Âu thuyền & các lăng miếu cổ, mua sắm đặc sản khô trên đảo. Thăm khu bảo tồn biển tại Bãi Bắc','2020-10-10 00:00:00','new','2020-05-22 06:18:16',NULL,NULL),(33,9,'Lặng biển','Tham gia hoạt động lặn biển (Snokelling) ngắm san hô','2020-10-10 00:00:00','new','2020-05-22 06:18:44',NULL,NULL),(34,9,'Ăn trưa','Ăn trưa trên đảo','2020-10-10 00:00:00','new','2020-05-22 06:19:31',NULL,NULL),(35,9,'Tạm biệt','Tạm biệt Cù Lao Chàm','2020-10-10 00:00:00','new','2020-05-22 06:20:16',NULL,NULL),(36,9,'Trả khách','Trả khách tại KHÁCH SẠN','2020-10-10 00:00:00','new','2020-05-22 06:20:53',NULL,NULL),(37,10,'Đón khách','Hướng dẫn viên và lái xe đón Quý khách tại khách sạn Hà Nội đi tham quan Chùa Trấn Quốc - ngôi chùa thiêng nằm bên bờ Hồ Tây.','2020-10-12 00:00:00','new','2020-05-22 06:34:04',NULL,NULL),(38,10,'Thăm khu di tích Hồ Chí Minh','Quý khách thăm khu di tích Hồ Chí Minh (lăng Chủ Tịch HCM, nhà sàn, ao cá, chùa Một Cột). Ngoại trừ thứ 2 và thứ 6 lăng không mở cửa, quý khách tham quan và chụp hình ngoài trời. ','2020-10-12 00:00:00','new','2020-05-22 06:34:44',NULL,NULL),(39,10,'Thăm Văn Miếu Quốc Tử Giám','Quý khách thăm tiếp tục đi thăm Văn Miếu Quốc Tử Giám- trường đại học đầu tiên của Việt Nam. Sau đó quý khách sẽ ăn trưa và nghỉ ngơi tại nhà hàng.','2020-10-12 00:00:00','new','2020-05-22 06:35:22',NULL,NULL),(40,10,'Nghỉ ngơi','Quý khách nghỉ ngơi, ăn trưa tại nhà hàng trong phố cổ.','2020-10-12 00:00:00','new','2020-05-22 06:35:49',NULL,NULL),(41,10,'Khám phá Hà Nội','Quý khách tiếp tục khám phá cuộc sống hàng ngày của nghề gốm truyền thống tại làng Bát Tràng trên bờ sông Hồng. Bạn sẽ biết rõ hơn về lịch sử hơn 700 năm của làng, tham quan các phòng trưng bày các sản phẩm gốm.','2020-10-12 00:00:00','new','2020-05-22 06:36:30',NULL,NULL),(42,10,'Về trung tâm Hà Nội','Quý khách quay trở về trung tâm Hà Nội thăm đền Ngọc Sơn và Hồ Hoàn Kiếm,','2020-10-12 00:00:00','new','2020-05-22 06:37:04',NULL,NULL),(43,10,'Kết thúc tham quan','Xe đưa Quý khách về khách sạn. Kết thúc chương trình.','2020-10-12 00:00:00','new','2020-05-22 06:37:45',NULL,NULL);
/*!40000 ALTER TABLE `timelines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tours`
--

DROP TABLE IF EXISTS `tours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tours` (
  `idTour` int(11) NOT NULL AUTO_INCREMENT,
  `titleTour` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` double DEFAULT NULL,
  `sale` double DEFAULT NULL,
  `departureDay` datetime DEFAULT NULL,
  `departureAddress` varchar(100) DEFAULT 'Hồ Chí Minh',
  `describe` varchar(2000) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `vocationTime` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(100) DEFAULT 'vietnam',
  `tags` varchar(200) DEFAULT NULL,
  `services` varchar(200) DEFAULT NULL,
  `views` int(11) DEFAULT '0',
  `votes` int(11) DEFAULT '0',
  `reuse` int(11) DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `statusAction` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'new',
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateEdited` datetime DEFAULT NULL,
  `dateDeleted` datetime DEFAULT NULL,
  PRIMARY KEY (`idTour`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tours`
--

LOCK TABLES `tours` WRITE;
/*!40000 ALTER TABLE `tours` DISABLE KEYS */;
INSERT INTO `tours` VALUES (1,'Nghỉ Dưỡng Du Thuyền Hạ Long – Tàu Golden Cruise 5*2N1Đ',3790000,0,'2020-09-21 00:00:00','Hồ Chí Minh','Từ trên cao hạ long như chuỗi ngọc xanh, với những hình thù kỳ lạ như Đỉnh hương, Gà chọi, Chó đá... Hệ thống hang động hấp dẫn nhất là Thiên Cung, hang Đầu Gỗ, động Sửng Sốt, hang Trinh Nữ, động Tam Cung...','Huyện đảo Vân Đồn, Tỉnh Quảng Ninh.','2N 1Đ','vietnam','[\"Ẩm thực\",\"Biển đảo\",\"Nghĩ dưỡng\"]','[\"Bãi biển đẹp\",\"Hướng dẫn viên\"]',NULL,4,0,7,'edited','2020-05-18 07:30:05','2020-05-20 04:31:18',NULL),(2,'Quảng Ngãi - Đà Nẵng - Hội An- Quảng Ngãi 2 Ngày',1790000,0,'2020-05-18 00:00:00','Hồ Chí Minh','- Dạo bộ tham quan Phố cổ với các công trình tiêu biểu\n- Viếng cảnh Chùa Hang - một trong những thắng cảnh đẹp nhất Đảo Lý Sơn \n- Tắm biển bãi Hang sau, lặn ngắm san hô (tự túc chi phí)\n- Vui chơi giải trí tại khu du lịch Bà Nà Hills','Quảng Ngãi, Đà Nẵng, Hội An','2 Ngày 1 Đêm','vietnam','[\"Biển đảo\"]','[]',0,0,0,7,'new','2020-05-18 07:45:56',NULL,NULL),(3,'Tour Du Ngoạn 4 Đảo Vịnh Nha Trang Trong 1 Ngày',280000,5,'2020-07-30 00:00:00','Hồ Chí Minh','Nha Trang với khí hậu ôn hòa, biển xanh trong quanh năm cùng những điểm vui chơi bậc nhất và không ngừng đổi mới hằng ngày luôn thu hút du khách gần xa. Đến với Nha Trang, du khách không chỉ tận hưởng những đợt gió biển trong nắng ấm mà còn có dịp thưởng thức hải sản tươi ngon cùng sự chào đón nồng hậu từ những người dân vùng biển nghĩa tình, cho Quý khách trải nghiệm khó quên tại vùng đất này.','Khánh Hòa - Việt Nam','1N 0Đ','vietnam',NULL,NULL,NULL,4,0,7,'edited','2020-05-19 09:18:04','2020-05-20 04:31:19',NULL),(4,'Nha Trang - Galina Lake View - Làng Yến Mai Sinh - Bảo tàng Gạc Ma - Vinpearl Land (Khách Sạn 5* Quinter Central) - Việt Nam Dưới Cánh Chim Bay',2990000,5,'2020-08-10 00:00:00','Hồ Chí Minh','Nha Trang với khí hậu ôn hòa, biển xanh trong quanh năm cùng những điểm vui chơi bậc nhất và không ngừng đổi mới hằng ngày luôn thu hút du khách gần xa. Đến với Nha Trang, du khách không chỉ tận hưởng những đợt gió biển trong nắng ấm mà còn có dịp thưởng thức hải sản tươi ngon cùng sự chào đón nồng hậu từ những người dân vùng biển nghĩa tình, cho Quý khách trải nghiệm khó quên tại vùng đất này.','Nha Trang - Khánh Hoà','3 days 2 nights','vietnam','[\"Biển đảo\",\"Nghĩ dưỡng\"]','[\"Đưa đón tận nơi\",\"Hỗ trợ người khuyết tật\",\"Bãi biển đẹp\",\"Bảo hiểm\",\"Cho thuê xe đạp\",\"Tự do trong 1 ngày\",\"Dịch vụ spa\",\"Bao bữa sáng\",\"Trang bị y tế\"]',0,0,0,7,'new','2020-05-19 10:29:05',NULL,NULL),(5,'Ninh Chữ - Vịnh Vĩnh Hy - Cổ Thạch Tự (Khởi Hành Tối) - Việt Nam Dưới Cánh Chim Bay',999000,0,'2020-07-15 00:00:00','Hồ Chí Minh','Được mệnh danh là một điểm nhấn du lịch Ninh Thuận, Ninh Chữ hiện nay đã có một con lộ thông thoáng để du khách đến khu du lịch biển này. Bãi biển Ninh Chữ là 1 trong 9 bãi tắm đẹp nhất của Việt Nam, có chiều dài 10 km, bờ biển bằng phẳng hình vòng cung, nước trong xanh, cát trắng mịn, không khí trong lành, quanh năm sóng vỗ rì rào. Đến Ninh Thuận còn có thể khám phá Vịnh Vĩnh Hy xinh đẹp, ngắm cảnh từ Núi Chúa và chiêm ngưỡng Hang Rái ngoạn mục… ghé thăm làng gốm Bàu Trúc hay tháp chàm Po Klong Garai đứng hiên ngang như hoài niệm về quá khứ… Hãy đồng hành cùng Vietravel khám phá hành trình thú vị này bạn nhé.','Ninh Thuận','3 days 2 nights','vietnam','[\"Biển đảo\"]','[\"Đưa đón tận nơi\",\"Bãi biển đẹp\",\"Hướng dẫn viên\",\"Bảo hiểm\",\"Tự do trong 1 ngày\",\"Trang bị y tế\"]',0,0,0,7,'new','2020-05-21 10:32:58',NULL,NULL),(6,'Tham Quan Bình Ba- Quốc Đảo Tôm Hùm 1 Ngày',570000,5,'2020-08-20 00:00:00','Hồ Chí Minh','Vịnh Cam Ranh là một vịnh nhỏ ở cực Nam của tỉnh Khánh Hòa. Cam Ranh từ lâu đã được mọi người biết đến như 1 nơi nổi tiếng về cảnh đẹp và kín gió. Núi và biển kết hợp với nhau tạo thành 1 bức tranh thiên nhiên tuyệt tác. Đến Cam Ranh điều đầu tiên nghĩ đến là các hòn đảo hoang sơ nhưng kì diệu, trong đó không thể không nhắc đến đảo Bình Ba, hòn đảo được mệnh danh là “ Đảo tôm hùm”.','Khánh Hòa - Việt Nam','1 days 0 nights','vietnam','[\"Biển đảo\",\"Nghĩ dưỡng\"]','[\"Đưa đón tận nơi\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Hướng dẫn viên\",\"Bảo hiểm\",\"Trang bị y tế\"]',0,0,0,7,'new','2020-05-21 13:53:27',NULL,NULL),(7,'Du Lịch Miền Tây Sông Nước Mỹ Tho - Bến Tre 1 Ngày',250000,0,'2020-09-05 00:00:00','Hồ Chí Minh','Nếu là người yêu thích khám phá và tìm hiểu miền Tây sông nước thì đi du lịch miền Tây không thể bỏ qua. Mỹ Tho -Bến Tre nổi tiếng có rất nhiều dừa và những con sông làm du khách thấy hấp dẫn.','Bến Tre - Việt Nam','1N 0Đ','vietnam',NULL,NULL,NULL,NULL,0,7,'edited','2020-05-21 14:14:10','2020-05-21 14:22:58',NULL),(8,'Tour Du Lich Phú Quốc Thẻ Mực Đêm 1 Ngày',315000,0,'2020-08-15 00:00:00','Hồ Chí Minh','Trực thuộc tỉnh Kiên Giang, Phú Quốc được mệnh danh là Đảo Ngọc. Với những bãi biển nước xanh trong vắt như Bãi Sao và Bãi Dài, Phú Quốc thực sự là thiên đường cho những người yêu biển.','Kiên Giang - Việt Nam','1 days 0 nights','vietnam','[\"Ẩm thực\",\"Biển đảo\"]','[\"Đưa đón tận nơi\",\"Bãi biển đẹp\",\"Hướng dẫn viên\",\"Bao bữa sáng\",\"Trang bị y tế\"]',0,0,0,7,'new','2020-05-22 05:57:06',NULL,NULL),(9,'Tour Du Lịch Cù Lao Chàm Trong 1 Ngày',680000,0,'2020-10-10 00:00:00','Hồ Chí Minh','Cách bờ biển Cửa Đại (Hội An, Quảng Nam) 15km, Cù Lao Chàm là một cụm đảo bao gồm 8 đảo với khí hậu quanh năm mát mẻ, hệ động thực vật phong phú, đặc biệt là nguồn hải sản và nguồn tài nguyên yến sào. Các rạn san hô ở khu vực biển Cù Lao Chàm được các nhà khoa học đánh giá cao và đưa vào danh sách bảo vệ. Cù Lao Chàm được UNESCO công nhận là khu dự trữ sinh quyển thế giới.','Quảng Nam - Việt Nam','1 days 0 nights','vietnam',NULL,NULL,NULL,NULL,0,7,'edited','2020-05-22 06:15:06','2020-05-22 06:21:41',NULL),(10,'Khám Phá Hà Nội Trong 1 Ngày',700000,10,'2020-10-12 00:00:00','Hồ Chí Minh','Du lịch Hà Nội đã từng gây thương nhớ cho nhiều du khách trong nước và quốc tế. Chẳng có gì lạ khi những người xa Hà Nội lại đáp những chuyến bay, bắt những vé tàu vội để khám phá Hà Nội. Đơn giản là họ chỉ muốn cảm nhận một Hà Nội rất riêng theo từng mùa.','Hà Nội - Việt Nam','1 days 0 nights','vietnam','[]','[\"Đưa đón tận nơi\",\"Free Wifi\",\"Hướng dẫn viên\",\"Bao bữa sáng\",\"Vé tham quan\",\"Trang bị y tế\"]',0,0,0,7,'new','2020-05-22 06:30:53',NULL,NULL),(11,'Nghỉ Dưỡng Du Thuyền Hạ Long – Tàu Golden Cruise 5*2N1Đ',3790000,0,'2020-09-21 00:00:00','Hồ Chí Minh','Từ trên cao hạ long như chuỗi ngọc xanh, với những hình thù kỳ lạ như Đỉnh hương, Gà chọi, Chó đá... Hệ thống hang động hấp dẫn nhất là Thiên Cung, hang Đầu Gỗ, động Sửng Sốt, hang Trinh Nữ, động Tam Cung...','Huyện đảo Vân Đồn, Tỉnh Quảng Ninh.','2N 1Đ','vietnam','undefined','undefined',0,0,0,7,'new','2020-05-27 07:05:33',NULL,NULL);
/*!40000 ALTER TABLE `tours` ENABLE KEYS */;
UNLOCK TABLES;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`tours_AFTER_INSERT` AFTER INSERT ON `tours` FOR EACH ROW
BEGIN
INSERT INTO schedules(`data`, `idTour`)
        VALUES('<h3>Hi, You can start editing your travel schedule</h3>', NEW.idTour);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`tours_BEFORE_UPDATE` BEFORE UPDATE ON `tours` FOR EACH ROW
BEGIN
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
ALTER DATABASE `azmszdk4w6h5j1o6` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci ;

--
-- Dumping events for database 'azmszdk4w6h5j1o6'
--

--
-- Dumping routines for database 'azmszdk4w6h5j1o6'
--
/*!50003 DROP PROCEDURE IF EXISTS `spGetEvaluateById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spGetEvaluateById`(p_id INT)
BEGIN
	select * from evaluates, accounts
	where evaluates.idAccount = accounts.idAccount
    and evaluates.idEvaluate = p_id
    and evaluates.statusAction <> 'deleted'
	ORDER BY evaluates.idEvaluate ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spGetEvaluateByIdTour` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spGetEvaluateByIdTour`(p_idTour INT)
BEGIN
	select * from evaluates, accounts
	where evaluates.idAccount = accounts.idAccount
    and evaluates.idTour = p_idTour
    and evaluates.statusAction <> 'deleted'
	ORDER BY evaluates.idEvaluate ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spGetNoticeToWithIdAccount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spGetNoticeToWithIdAccount`(_idAccount int)
BEGIN
	SELECT idNoticeTo, notifications.title, notifications.contentNotification, notifications.type, 
	noticeto.status, notifications.dateTime, noticeto.idAccount, 
	noticeto.statusAction, noticeto.dateAdded
	FROM azmszdk4w6h5j1o6.noticeto 
	LEFT JOIN azmszdk4w6h5j1o6.notifications 
	ON notifications.dateTime < current_date()
    AND noticeto.idNotification = notifications.idNotification
	WHERE noticeto.idAccount = _idAccount;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spGetReport` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spGetReport`()
BEGIN
	DECLARE v_day_end_month nvarchar(100) DEFAULT LAST_DAY(now());
	DECLARE v_month nvarchar(100) DEFAULT MONTH(now());
    DECLARE v_year nvarchar(100) DEFAULT YEAR(now());

    DECLARE v_dateConcactFirst nvarchar(100) DEFAULT concat(v_year,'-', '1' ,'-','1');
    
    DECLARE v_timeFirst DATETIME default str_to_date(v_dateConcactFirst, '%Y-%m-%d');
    
	SELECT count(*) as tourNumber FROM azmszdk4w6h5j1o6.tours 
	where departureDay > now();
    
    SELECT sum(totalPrice) as total FROM azmszdk4w6h5j1o6.orders 
    where orders.status = 'paid' 
    and orders.dateAdded >= v_timeFirst;
    
    SELECT count(*)as verifyAccount FROM azmszdk4w6h5j1o6.accounts 
    where accounts.verify =TRUE;
    
    SELECT count(*) as tourTotalNumber FROM azmszdk4w6h5j1o6.tours;
    
    SELECT count(*) as totalRequestNotification 
    FROM azmszdk4w6h5j1o6.notifications
    where notifications.status = 'unread';
    
    SELECT count(*) as totalRequestMail
    FROM azmszdk4w6h5j1o6.mails
    where mails.status = 'unread';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spGetReportDestinationByTime` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spGetReportDestinationByTime`(p_datetime nvarchar(100))
BEGIN
	DECLARE v_day_end_month nvarchar(100) DEFAULT LAST_DAY(p_datetime);
	DECLARE v_month nvarchar(100) DEFAULT MONTH(p_datetime);
    DECLARE v_year nvarchar(100) DEFAULT YEAR(p_datetime);

    DECLARE v_dateConcact1 nvarchar(100) DEFAULT concat(v_year,'-', v_month,'-','1');
    DECLARE v_dateConcact2 nvarchar(100) DEFAULT concat(v_year,'-', v_month,'-', v_day_end_month);
    
    DECLARE v_time1 DATETIME default str_to_date(v_dateConcact1, '%Y-%m-%d');
    DECLARE v_time2 DATETIME default str_to_date(v_dateConcact2, '%Y-%m-%d');
   
	select * from tours
    where tours.departureDay >= v_time1 
    and tours.departureDay <= v_time2;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spGetTimelineByIdTour` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spGetTimelineByIdTour`(p_idTour INT)
BEGIN
	select * from timelines
	where timelines.idTour = p_idTour
    and timelines.statusAction <> 'deleted'
	ORDER BY timelines.date ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spGetYearFirstNewOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spGetYearFirstNewOrder`()
BEGIN
	SELECT YEAR(dateAdded) as dateOldest FROM azmszdk4w6h5j1o6.orders
    order by dateAdded asc limit 1;
    
	SELECT YEAR(dateAdded) as dateLatest FROM azmszdk4w6h5j1o6.orders
    order by dateAdded desc limit 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spGetYearFirstNewTour` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spGetYearFirstNewTour`()
BEGIN
	SELECT YEAR(dateAdded) as dateOldest FROM azmszdk4w6h5j1o6.tours
    order by dateAdded asc limit 1;
    
	SELECT YEAR(dateAdded) as dateLatest FROM azmszdk4w6h5j1o6.tours
    order by dateAdded desc limit 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spPaginationNotification` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spPaginationNotification`(_limit int, _offset int)
BEGIN
	SELECT * FROM azmszdk4w6h5j1o6.notifications
	where statusAction <> 'deleted'
	order by notifications.dateTime desc
	limit _limit offset _offset;
    
    select count(*) as length from azmszdk4w6h5j1o6.notifications where statusAction <> 'deleted';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spReportNumberOfTourists` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spReportNumberOfTourists`()
BEGIN
	SELECT count(*) as personal FROM azmszdk4w6h5j1o6.orders
    WHERE orders.travelerType = 'personal'
    OR orders.travelerType = 'Cá nhân';
    
    	SELECT count(*) as couple FROM azmszdk4w6h5j1o6.orders
    WHERE orders.travelerType = 'couple'
    OR orders.travelerType = 'Cặp đôi';
    
    	SELECT count(*) as family FROM azmszdk4w6h5j1o6.orders
    WHERE orders.travelerType = 'family'
    OR orders.travelerType = 'Gia đình';
    
    	SELECT count(*) as friend FROM azmszdk4w6h5j1o6.orders
    WHERE orders.travelerType = 'friend'
    OR orders.travelerType = 'Bạn bè';
    
    	SELECT count(*) as business FROM azmszdk4w6h5j1o6.orders
    WHERE orders.travelerType = 'business'
    OR orders.travelerType = 'Doanh nghiệp';
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spReportNumberPeopleFollowDestination` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spReportNumberPeopleFollowDestination`(v_year nvarchar(100), v_destination nvarchar(100))
BEGIN
	DECLARE v_timeFirst1 nvarchar(100) DEFAULT concat(v_year,'-', '1' ,'-','1');
    DECLARE v_timeEnd1 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst1);
    
    DECLARE v_timeFirst2 nvarchar(100) DEFAULT concat(v_year,'-', '2' ,'-','1');
    DECLARE v_timeEnd2 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst2);
    
    DECLARE v_timeFirst3 nvarchar(100) DEFAULT concat(v_year,'-', '3' ,'-','1');
    DECLARE v_timeEnd3 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst3);
    
    DECLARE v_timeFirst4 nvarchar(100) DEFAULT concat(v_year,'-', '4' ,'-','1');
    DECLARE v_timeEnd4 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst4);
    
    DECLARE v_timeFirst5 nvarchar(100) DEFAULT concat(v_year,'-', '5' ,'-','1');
    DECLARE v_timeEnd5 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst5);
    
    DECLARE v_timeFirst6 nvarchar(100) DEFAULT concat(v_year,'-', '6' ,'-','1');
    DECLARE v_timeEnd6 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst6);
    
    DECLARE v_timeFirst7 nvarchar(100) DEFAULT concat(v_year,'-', '7' ,'-','1');
    DECLARE v_timeEnd7 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst7);
    
    DECLARE v_timeFirst8 nvarchar(100) DEFAULT concat(v_year,'-', '8' ,'-','1');
    DECLARE v_timeEnd8 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst8);
    
    DECLARE v_timeFirst9 nvarchar(100) DEFAULT concat(v_year,'-', '9' ,'-','1');
    DECLARE v_timeEnd9 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst9);
    
    DECLARE v_timeFirst10 nvarchar(100) DEFAULT concat(v_year,'-', '10' ,'-','1');
    DECLARE v_timeEnd10 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst10);
    
    DECLARE v_timeFirst11 nvarchar(100) DEFAULT concat(v_year,'-', '11' ,'-','1');
    DECLARE v_timeEnd11 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst11);
    
    DECLARE v_timeFirst12 nvarchar(100) DEFAULT concat(v_year,'-', '12' ,'-','1');
    DECLARE v_timeEnd12 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst12);

	SELECT sum(numberPeople) as numbersPeople, sum(numberYoung) as numbersYoung, 
    sum(numberChildren) as numbersChildren, sum(numberBaby) as numbersBaby FROM orders 
	WHERE v_destination = (SElECT type FROM tours WHERE orders.idTour = tours.idTour)
	AND orders.status = 'paid'
	AND orders.dateAdded >= v_timeFirst1
	AND orders.dateAdded <= v_timeEnd1
    UNION ALL
	SELECT sum(numberPeople) as numbersPeople, sum(numberYoung) as numbersYoung, 
    sum(numberChildren) as numbersChildren, sum(numberBaby) as numbersBaby FROM orders 
	WHERE v_destination = (SElECT type FROM tours WHERE orders.idTour = tours.idTour)
	AND orders.status = 'paid'
	AND orders.dateAdded >= v_timeFirst2
	AND orders.dateAdded <= v_timeEnd2
    UNION ALL
	SELECT sum(numberPeople) as numbersPeople, sum(numberYoung) as numbersYoung, 
    sum(numberChildren) as numbersChildren, sum(numberBaby) as numbersBaby FROM orders 
	WHERE v_destination = (SElECT type FROM tours WHERE orders.idTour = tours.idTour)
	AND orders.status = 'paid'
	AND orders.dateAdded >= v_timeFirst3
	AND orders.dateAdded <= v_timeEnd3
    UNION ALL
    SELECT sum(numberPeople) as numbersPeople, sum(numberYoung) as numbersYoung, 
    sum(numberChildren) as numbersChildren, sum(numberBaby) as numbersBaby FROM orders 
	WHERE v_destination = (SElECT type FROM tours WHERE orders.idTour = tours.idTour)
	AND orders.status = 'paid'
	AND orders.dateAdded >= v_timeFirst4
	AND orders.dateAdded <= v_timeEnd4
    UNION ALL
    SELECT sum(numberPeople) as numbersPeople, sum(numberYoung) as numbersYoung, 
    sum(numberChildren) as numbersChildren, sum(numberBaby) as numbersBaby FROM orders 
	WHERE v_destination = (SElECT type FROM tours WHERE orders.idTour = tours.idTour)
	AND orders.status = 'paid'
	AND orders.dateAdded >= v_timeFirst5
	AND orders.dateAdded <= v_timeEnd5
    UNION ALL
    SELECT sum(numberPeople) as numbersPeople, sum(numberYoung) as numbersYoung, 
    sum(numberChildren) as numbersChildren, sum(numberBaby) as numbersBaby FROM orders 
	WHERE v_destination = (SElECT type FROM tours WHERE orders.idTour = tours.idTour)
	AND orders.status = 'paid'
	AND orders.dateAdded >= v_timeFirst6
	AND orders.dateAdded <= v_timeEnd6
    UNION ALL
    SELECT sum(numberPeople) as numbersPeople, sum(numberYoung) as numbersYoung, 
    sum(numberChildren) as numbersChildren, sum(numberBaby) as numbersBaby FROM orders 
	WHERE v_destination = (SElECT type FROM tours WHERE orders.idTour = tours.idTour)
	AND orders.status = 'paid'
	AND orders.dateAdded >= v_timeFirst7
	AND orders.dateAdded <= v_timeEnd7
    UNION ALL
    SELECT sum(numberPeople) as numbersPeople, sum(numberYoung) as numbersYoung, 
    sum(numberChildren) as numbersChildren, sum(numberBaby) as numbersBaby FROM orders 
	WHERE v_destination = (SElECT type FROM tours WHERE orders.idTour = tours.idTour)
	AND orders.status = 'paid'
	AND orders.dateAdded >= v_timeFirst8
	AND orders.dateAdded <= v_timeEnd8
    UNION ALL
    SELECT sum(numberPeople) as numbersPeople, sum(numberYoung) as numbersYoung, 
    sum(numberChildren) as numbersChildren, sum(numberBaby) as numbersBaby FROM orders 
	WHERE v_destination = (SElECT type FROM tours WHERE orders.idTour = tours.idTour)
	AND orders.status = 'paid'
	AND orders.dateAdded >= v_timeFirst9
	AND orders.dateAdded <= v_timeEnd9
    UNION ALL
    SELECT sum(numberPeople) as numbersPeople, sum(numberYoung) as numbersYoung, 
    sum(numberChildren) as numbersChildren, sum(numberBaby) as numbersBaby FROM orders 
	WHERE v_destination = (SElECT type FROM tours WHERE orders.idTour = tours.idTour)
	AND orders.status = 'paid'
	AND orders.dateAdded >= v_timeFirst10
	AND orders.dateAdded <= v_timeEnd10
    UNION ALL
    SELECT sum(numberPeople) as numbersPeople, sum(numberYoung) as numbersYoung, 
    sum(numberChildren) as numbersChildren, sum(numberBaby) as numbersBaby FROM orders 
	WHERE v_destination = (SElECT type FROM tours WHERE orders.idTour = tours.idTour)
	AND orders.status = 'paid'
	AND orders.dateAdded >= v_timeFirst11
	AND orders.dateAdded <= v_timeEnd11
    UNION ALL
    SELECT sum(numberPeople) as numbersPeople, sum(numberYoung) as numbersYoung, 
    sum(numberChildren) as numbersChildren, sum(numberBaby) as numbersBaby FROM orders 
	WHERE v_destination = (SElECT type FROM tours WHERE orders.idTour = tours.idTour)
	AND orders.status = 'paid'
	AND orders.dateAdded >= v_timeFirst12
	AND orders.dateAdded <= v_timeEnd12;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spReportNumberPeopleFollowDestinationAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spReportNumberPeopleFollowDestinationAll`(v_year int, v_now int)
BEGIN
    loop_label:  LOOP
        IF  v_year > v_now THEN 
            LEAVE  loop_label;
        END  IF;
            
		call azmszdk4w6h5j1o6.spReportNumberPeopleFollowDestination(v_year, 'NorthernVietnam'); 
        call azmszdk4w6h5j1o6.spReportNumberPeopleFollowDestination(v_year, 'NorthCentral'); 
        call azmszdk4w6h5j1o6.spReportNumberPeopleFollowDestination(v_year, 'SouthCentralCoast'); 
        call azmszdk4w6h5j1o6.spReportNumberPeopleFollowDestination(v_year, 'CentralHighlands'); 
        call azmszdk4w6h5j1o6.spReportNumberPeopleFollowDestination(v_year, 'Southeast'); 
        call azmszdk4w6h5j1o6.spReportNumberPeopleFollowDestination(v_year, 'MekongRiverDelta'); 
        call azmszdk4w6h5j1o6.spReportNumberPeopleFollowDestination(v_year, 'Asian'); 
        call azmszdk4w6h5j1o6.spReportNumberPeopleFollowDestination(v_year, 'Europe'); 
        call azmszdk4w6h5j1o6.spReportNumberPeopleFollowDestination(v_year, 'America');
        
        SET  v_year = v_year + 1;
    END LOOP;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spReportRevenueFollowMonth` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spReportRevenueFollowMonth`(v_year nvarchar(100))
BEGIN
	DECLARE v_timeFirst1 nvarchar(100) DEFAULT concat(v_year,'-', '1' ,'-','1');
    DECLARE v_timeEnd1 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst1);
    
    DECLARE v_timeFirst2 nvarchar(100) DEFAULT concat(v_year,'-', '2' ,'-','1');
    DECLARE v_timeEnd2 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst2);
    
    DECLARE v_timeFirst3 nvarchar(100) DEFAULT concat(v_year,'-', '3' ,'-','1');
    DECLARE v_timeEnd3 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst3);
    
    DECLARE v_timeFirst4 nvarchar(100) DEFAULT concat(v_year,'-', '4' ,'-','1');
    DECLARE v_timeEnd4 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst4);
    
    DECLARE v_timeFirst5 nvarchar(100) DEFAULT concat(v_year,'-', '5' ,'-','1');
    DECLARE v_timeEnd5 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst5);
    
    DECLARE v_timeFirst6 nvarchar(100) DEFAULT concat(v_year,'-', '6' ,'-','1');
    DECLARE v_timeEnd6 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst6);
    
    DECLARE v_timeFirst7 nvarchar(100) DEFAULT concat(v_year,'-', '7' ,'-','1');
    DECLARE v_timeEnd7 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst7);
    
    DECLARE v_timeFirst8 nvarchar(100) DEFAULT concat(v_year,'-', '8' ,'-','1');
    DECLARE v_timeEnd8 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst8);
    
    DECLARE v_timeFirst9 nvarchar(100) DEFAULT concat(v_year,'-', '9' ,'-','1');
    DECLARE v_timeEnd9 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst9);
    
    DECLARE v_timeFirst10 nvarchar(100) DEFAULT concat(v_year,'-', '10' ,'-','1');
    DECLARE v_timeEnd10 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst10);
    
    DECLARE v_timeFirst11 nvarchar(100) DEFAULT concat(v_year,'-', '11' ,'-','1');
    DECLARE v_timeEnd11 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst11);
    
    DECLARE v_timeFirst12 nvarchar(100) DEFAULT concat(v_year,'-', '12' ,'-','1');
    DECLARE v_timeEnd12 nvarchar(100) DEFAULT LAST_DAY(v_timeFirst12);

	SELECT avg(orders.totalPrice) as totalMonth FROM azmszdk4w6h5j1o6.orders 
		where orders.status = 'paid' 
		and orders.dateAdded >= v_timeFirst1
		and orders.dateAdded <= v_timeEnd1 union all
	SELECT avg(orders.totalPrice) as totalMonth FROM azmszdk4w6h5j1o6.orders 
		where orders.status = 'paid' 
		and orders.dateAdded >= v_timeFirst2 
		and orders.dateAdded <= v_timeEnd2 union all
	SELECT avg(orders.totalPrice) as totalMonth FROM azmszdk4w6h5j1o6.orders 
		where orders.status = 'paid' 
		and orders.dateAdded >= v_timeFirst3 
		and orders.dateAdded <= v_timeEnd3 union all
	SELECT avg(orders.totalPrice) as totalMonth FROM azmszdk4w6h5j1o6.orders 
		where orders.status = 'paid' 
		and orders.dateAdded >= v_timeFirst4 
		and orders.dateAdded <= v_timeEnd4 union all
	SELECT avg(orders.totalPrice) as totalMonth FROM azmszdk4w6h5j1o6.orders 
		where orders.status = 'paid' 
		and orders.dateAdded >= v_timeFirst5 
		and orders.dateAdded <= v_timeEnd5 union all
	SELECT avg(orders.totalPrice) as totalMonth FROM azmszdk4w6h5j1o6.orders 
		where orders.status = 'paid' 
		and orders.dateAdded >= v_timeFirst6 
		and orders.dateAdded <= v_timeEnd6 union all
	SELECT avg(orders.totalPrice) as totalMonth FROM azmszdk4w6h5j1o6.orders 
		where orders.status = 'paid' 
		and orders.dateAdded >= v_timeFirst7 
		and orders.dateAdded <= v_timeEnd7 union all
	SELECT avg(orders.totalPrice) as totalMonth FROM azmszdk4w6h5j1o6.orders 
		where orders.status = 'paid' 
		and orders.dateAdded >= v_timeFirst8 
		and orders.dateAdded <= v_timeEnd8 union all
	SELECT avg(orders.totalPrice) as totalMonth FROM azmszdk4w6h5j1o6.orders 
		where orders.status = 'paid' 
		and orders.dateAdded >= v_timeFirst9 
		and orders.dateAdded <= v_timeEnd9 union all
	SELECT avg(orders.totalPrice) as totalMonth FROM azmszdk4w6h5j1o6.orders 
		where orders.status = 'paid' 
		and orders.dateAdded >= v_timeFirst10 
		and orders.dateAdded <= v_timeEnd10 union all
	SELECT avg(orders.totalPrice) as totalMonth FROM azmszdk4w6h5j1o6.orders 
		where orders.status = 'paid' 
		and orders.dateAdded >= v_timeFirst11 
		and orders.dateAdded <= v_timeEnd11 union all
	SELECT avg(orders.totalPrice) as totalMonth FROM azmszdk4w6h5j1o6.orders 
		where orders.status = 'paid' 
		and orders.dateAdded >= v_timeFirst12 
		and orders.dateAdded <= v_timeEnd12 ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spReportRevenueFollowMonthAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spReportRevenueFollowMonthAll`(v_year int, v_now int)
BEGIN
	loop_label:  LOOP
	IF  v_year > v_now THEN 
		LEAVE  loop_label;
	END  IF;
		
	call azmszdk4w6h5j1o6.spReportRevenueFollowMonth(v_year); 
	
	SET  v_year = v_year + 1;
    END LOOP;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSearchEngineNotification` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spSearchEngineNotification`(p_search VARCHAR(100),p_dayStart DATETIME)
BEGIN
	DECLARE v_likeSearch VARCHAR(100) DEFAULT Concat('%',p_search,'%');
	SELECT * FROM azmszdk4w6h5j1o6.notifications 
	WHERE (notifications.title LIKE v_likeSearch
		OR notifications.contentNotification LIKE v_likeSearch)
		AND notifications.dateTime >= p_dayStart
	ORDER BY notifications.dateTime ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSearchEngineNotificationByContent` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spSearchEngineNotificationByContent`(p_search VARCHAR(100))
BEGIN
	DECLARE v_likeSearch VARCHAR(100) DEFAULT Concat('%',p_search,'%');
	SELECT *
	FROM azmszdk4w6h5j1o6.notifications 
    WHERE notifications.contentNotification LIKE v_likeSearch
	ORDER BY notifications.contentNotification ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSearchEngineNotificationByTitle` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spSearchEngineNotificationByTitle`(p_search VARCHAR(100))
BEGIN
	DECLARE v_likeSearch VARCHAR(100) DEFAULT Concat('%',p_search,'%');
	SELECT *
	FROM azmszdk4w6h5j1o6.notifications 
    WHERE notifications.title LIKE v_likeSearch
	ORDER BY notifications.title ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSearchEnginePost` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spSearchEnginePost`(p_search VARCHAR(100), p_vote INT)
BEGIN
	DECLARE v_likeSearch VARCHAR(100) DEFAULT Concat('%',p_search,'%');
	SELECT *
	FROM azmszdk4w6h5j1o6.posts 
    WHERE posts.contentPost LIKE v_likeSearch
    AND posts.vote >= p_vote
	ORDER BY posts.contentPost ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSearchEnginePostByContent` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spSearchEnginePostByContent`(p_search VARCHAR(100))
BEGIN
	DECLARE v_likeSearch VARCHAR(100) DEFAULT Concat('%',p_search,'%');
	SELECT *
	FROM azmszdk4w6h5j1o6.posts 
    WHERE posts.contentPost LIKE v_likeSearch
	ORDER BY posts.contentPost ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSearchEngineService` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spSearchEngineService`(p_search VARCHAR(100))
BEGIN
	DECLARE v_likeSearch VARCHAR(100) DEFAULT Concat('%',p_search,'%');
	SELECT * FROM azmszdk4w6h5j1o6.services 
	WHERE (services.name LIKE v_likeSearch)
	ORDER BY services.name ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSearchEngineTag` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spSearchEngineTag`(p_search VARCHAR(100))
BEGIN
	DECLARE v_likeSearch VARCHAR(100) DEFAULT Concat('%',p_search,'%');
	SELECT * FROM azmszdk4w6h5j1o6.tags 
	WHERE (tags.name LIKE v_likeSearch)
	ORDER BY tags.name ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSearchEngineTimeline` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spSearchEngineTimeline`(p_search VARCHAR(100),p_date DATETIME)
BEGIN
	DECLARE v_likeSearch VARCHAR(100) DEFAULT Concat('%',p_search,'%');
	SELECT * FROM azmszdk4w6h5j1o6.timelines 
	WHERE (timelines.title LIKE v_likeSearch
		OR timelines.description LIKE v_likeSearch)
		AND timelines.date >= p_date
	ORDER BY timelines.date ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spSearchEngineTour` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spSearchEngineTour`(p_search VARCHAR(100),p_dayStart DATETIME,p_dayEnd DATETIME, p_price FLOAT)
BEGIN
	DECLARE v_likeSearch VARCHAR(100) DEFAULT Concat('%',p_search,'%');
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
/*!50003 DROP PROCEDURE IF EXISTS `spSearchEngineTourByAddress` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spSearchEngineTourByAddress`(p_search VARCHAR(100),p_dayStart DATETIME,p_dayEnd DATETIME, p_price FLOAT)
BEGIN
	DECLARE v_likeSearch VARCHAR(100) DEFAULT Concat('%',p_search,'%');
	SELECT *
	FROM tours 
    WHERE tours.address LIKE v_likeSearch
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
/*!50003 DROP PROCEDURE IF EXISTS `spSearchEngineTourByName` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spSearchEngineTourByName`(p_search VARCHAR(100),p_dayStart DATETIME,p_dayEnd DATETIME, p_price FLOAT)
BEGIN
	DECLARE v_likeSearch VARCHAR(100) DEFAULT Concat('%',p_search,'%');
	SELECT *
	FROM tours 
    WHERE tours.titleTour LIKE v_likeSearch
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
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-27 15:45:56
