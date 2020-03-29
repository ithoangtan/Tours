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
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (6,'name','email','0983982930','user','email3','$2a$10$Y49SHMgqXl6xTw7ovBUFOuQduXywptZ7QeyItgmP2Is1B0k.M9Qse','/img/avatarDefault.jpg',NULL,NULL,'abc.xyz',' ',NULL,'0000-00-00 00:00:00',0,'account',NULL,'edited','2019-11-29 08:43:33','2020-03-23 12:46:52',NULL),(7,'ithoangtan','ithoangtan@gmail.com','0983982933','administrator','ithoangtan@gmail.com','$2a$10$Y49SHMgqXl6xTw7ovBUFOuQduXywptZ7QeyItgmP2Is1B0k.M9Qse','/img/avatarDefault.jpg',NULL,NULL,NULL,NULL,NULL,NULL,1,'account',NULL,'new','2019-11-29 10:47:51',NULL,NULL),(8,'8','8','8','8','8','8','8','8','8','8','8','8','1996-09-09 00:00:00',1,'account',NULL,'edited','2019-09-09 00:00:00','2020-03-23 05:15:12','2019-12-17 23:02:37'),(28,'Hoàng Trọng Tấn Nguyeenx','it10069001@gmail.com','84983982933','user','Hoàng Tấn','$2a$10$wGU9oarS/jb1d/a8xvo/Le.Y5v9xB.wZV0UzqAmPq39GQ13se9Y7i','/img/1578112680898_anh-avatar-dep-5.jpg',NULL,NULL,'kinhdaonhtourdulich.comn','12345432151651','none','1996-09-05 10:00:00',1,'account','xWs7d7Jcw70fKM9r1SzrGGiwjwgU4cUM','edited','2019-12-24 18:26:59','2020-03-23 05:15:13',NULL),(29,'Hoàng Trọng Tấn','itk160454@gmail.com','8498392933','user','Hoàng Tấn','$2a$10$Eg8u594yDcqdYgZ6IjGoSe5Ddj6XQ/pQFI4aFs/Hy.gys4Q/s/rra','/img/1578038868984_cầu hiền lương.jpg',NULL,NULL,'abc.xyz',' ','none','0000-00-00 00:00:00',1,'guest','verified','edited','2020-01-03 08:06:36','2020-03-23 05:15:13',NULL),(30,'Hoàng Trọng Tấn','16110454@student.hcmute.edu.vn','84983982933','user','Hoàng Tấn','$2a$10$TgWdlOhcynINZnRz.jmmy.MKONy.gMMHTVjUEGzfKRWUlXAWG14Y.','/img/1578117283249_anh-avatar-dep-5.jpg',NULL,NULL,'abc.xyz','ACB','none','0000-00-00 00:00:00',1,'guest','danA7qMlbMkyfFo1LXQK6SkvLeTDt04h','edited','2020-01-04 05:52:50','2020-03-23 05:15:14',NULL);
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
-- Dumping data for table `evaluates`
--

LOCK TABLES `evaluates` WRITE;
/*!40000 ALTER TABLE `evaluates` DISABLE KEYS */;
INSERT INTO `evaluates` VALUES (1,5,4,4,4,3,'Review tour đi Sapa mùa hè','Tour giá phải chăng, đồ ăn ngon',66,6,0,NULL,NULL,'edited','2020-03-13 08:36:37',NULL,'2020-03-18 12:36:23'),(2,NULL,NULL,NULL,NULL,4,'Review tour đi Sapa','Tour giá phải chăng, đồ ăn ngon',66,30,0,NULL,NULL,'new','2020-03-13 08:43:24',NULL,NULL),(3,NULL,NULL,NULL,NULL,4,'Review tour đi Sapa','Tour giá phải chăng, đồ ăn ngon',66,6,0,NULL,NULL,'new','2020-03-14 06:47:21',NULL,NULL),(4,5,4,4,4,3,'Review tour đi Sapa','Tour giá phải chăng, đồ ăn ngon',68,30,0,'Rất tệ','business','new','2020-03-21 02:25:26',NULL,NULL),(5,5,4,4,4,3,'Review tour đi Bình ba','Tôm hùm quá rẻ, quá ngon!!!',68,28,4,'Rất ổn','friend','edited','2020-03-21 02:59:17',NULL,'2020-03-24 04:10:48');
/*!40000 ALTER TABLE `evaluates` ENABLE KEYS */;
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

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
INSERT INTO `favorites` VALUES (1,28,66,'new','2020-01-02 09:27:41',NULL,NULL);
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
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (312,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578113084922_agn1403834244.jpg',72,NULL,'deleted','2020-01-04 04:44:46','2020-03-07 13:44:10',NULL),(313,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578113090766_cầu hiền lương.jpg',72,NULL,'deleted','2020-01-04 04:44:50','2020-03-07 13:44:10',NULL),(314,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578113837895_cầu hiền lương.jpg',66,NULL,'deleted','2020-01-04 04:57:19','2020-03-07 13:44:11',NULL),(315,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578113858338_cầu hiền lương.jpg',66,NULL,'deleted','2020-01-04 04:57:39','2020-03-07 13:44:11',NULL),(316,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116827303_cầu hiền lương.jpg',72,NULL,'new','2020-01-04 05:47:13',NULL,NULL),(317,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116839292_agn1403834244.jpg',72,NULL,'new','2020-01-04 05:47:28',NULL,NULL),(318,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116969103_jun1403925273.jfif',67,NULL,'new','2020-01-04 05:49:31',NULL,NULL),(319,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116969103_jun1403925273.jfif',66,NULL,'deleted','2020-01-04 05:49:33','2020-03-07 13:44:14',NULL),(320,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116973554_thánh địa la vang.jpg',68,NULL,'new','2020-01-04 05:49:33',NULL,NULL),(321,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116978543_kon1403597456.jpg',70,NULL,'new','2020-01-04 05:49:38',NULL,NULL),(322,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116982629_cầu hiền lương.jpg',71,NULL,'new','2020-01-04 05:49:42',NULL,NULL),(323,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116984878_jun1403925273.jfif',71,NULL,'new','2020-01-04 05:49:45',NULL,NULL),(324,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116990815_cầu hiền lương.jpg',73,NULL,'new','2020-01-04 05:49:50',NULL,NULL),(325,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116992781_kon1403597456.jpg',73,NULL,'new','2020-01-04 05:49:52',NULL,NULL),(326,'/img/1584616339767_PY - Copy.jpg','done',' 1584616339767_PY - Copy.jpg',66,NULL,'deleted','2020-03-19 11:12:21','2020-03-19 11:14:37',NULL);
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
-- Dumping data for table `mails`
--

LOCK TABLES `mails` WRITE;
/*!40000 ALTER TABLE `mails` DISABLE KEYS */;
INSERT INTO `mails` VALUES (1,'itk160454@gmail.com','itk160454@gmail.com','Main','Content','unread','new','2020-03-29 01:28:04',NULL,NULL);
/*!40000 ALTER TABLE `mails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `noticeto`
--

LOCK TABLES `noticeto` WRITE;
/*!40000 ALTER TABLE `noticeto` DISABLE KEYS */;
INSERT INTO `noticeto` VALUES (4,NULL,2,29,'edited','2020-03-02 07:27:41',NULL,'2020-03-02 07:29:40');
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
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,'info','sending','Test notification 2','Hello! Welcome to Travel Hello! Welcome to TravelHello! Welcome to TravelHello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-02-29 08:04:42','2020-03-27 12:13:59',NULL),(2,'info','sending','Test notification 3','Hello! Welcome to Travel 123','2020-02-28 00:00:00.000000',7,'new','2020-03-02 06:15:24',NULL,NULL),(3,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-03-05 11:09:27','2020-03-05 11:10:10',NULL),(4,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-03-05 11:09:27','2020-03-05 11:10:10',NULL),(5,'info','unread','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-03-05 11:09:27','2020-03-29 01:27:23',NULL),(6,'info','unread','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-03-05 11:09:27','2020-03-29 01:27:23',NULL),(7,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-03-05 11:09:27','2020-03-05 11:10:10',NULL),(8,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-03-05 11:09:27','2020-03-05 11:10:10',NULL),(9,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-03-05 11:09:27','2020-03-05 11:10:10',NULL),(10,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-03-05 11:09:27','2020-03-05 11:10:10',NULL),(11,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-03-05 11:09:27','2020-03-05 11:10:10',NULL),(12,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-03-05 11:09:27','2020-03-05 11:10:10',NULL),(13,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-03-05 11:09:27','2020-03-05 11:10:10',NULL),(14,'info','sending','Test notification 3','Hello! Welcome to Travel 123','2020-02-28 00:00:00.000000',7,'new','2020-03-29 00:26:00',NULL,NULL);
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
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (2,'123456789','verify',2599000,1,1,0,0,'[\"Hồ Chí Minh\", \"Thủ Đức\", \"Bình Thọ\"]','0983982933','itk160454@gmail.com','Haha',NULL,'Cá nhân',6,NULL,'new','2019-12-09 11:14:48',NULL,NULL),(3,'123456789','verify',2599000,1,1,0,0,'[\"Hồ Chí Minh\", \"Thủ Đức\", \"Bình Thọ\"]','0983982933','itk160454@gmail.com','Haha',NULL,'Cặp đôi',6,NULL,'new','2019-12-09 11:14:49',NULL,NULL),(22,'1575874336819','verify',540,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Gia đình',8,NULL,'new','2019-12-09 13:53:04',NULL,NULL),(23,'1575874467465','verify',540,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Bạn bè',8,NULL,'new','2019-12-09 13:54:38',NULL,NULL),(24,'1575874882093','verify',540,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Doanh nghiệp',8,NULL,'new','2019-12-09 14:01:32',NULL,NULL),(25,'1575874963867','verify',540,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Cá nhân',8,NULL,'new','2019-12-09 14:02:51',NULL,NULL),(26,'1575875215342','verify',540,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Cặp đôi',8,NULL,'new','2019-12-09 14:07:04',NULL,NULL),(27,'1576611890910','verify',999,2,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Gia đình',8,NULL,'new','2019-12-17 19:45:28',NULL,NULL),(28,'1576616816507','verify',999,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Bạn bè',8,NULL,'new','2019-12-17 21:08:02',NULL,NULL),(29,'1576617375514','verify',999,2,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Doanh nghiệp',8,NULL,'new','2019-12-17 21:16:33',NULL,NULL),(30,'1576648409922','verify',999,2,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Cá nhân',8,NULL,'new','2019-12-18 05:54:03',NULL,NULL),(31,'1576773446644','verify',800,1,1,0,0,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','itk160454@gmail.com',' ',NULL,'Cặp đôi',8,NULL,'new','2019-12-19 16:40:11',NULL,NULL),(32,'1576779157943','verify',800,1,1,0,0,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','itk160454@gmail.com',' ',NULL,NULL,8,NULL,'new','2019-12-19 18:14:26',NULL,NULL),(33,'1576826602633','paid',10,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,NULL,8,NULL,'new','2019-04-20 07:24:03',NULL,NULL),(34,'1576827189859','verify',10,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,NULL,8,NULL,'new','2019-12-20 07:33:57',NULL,NULL),(35,'1576828439651','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,NULL,8,NULL,'new','2019-12-20 07:59:10',NULL,NULL),(36,'1576857112051','verify',800,1,0,0,0,'[\"Lai Châu\",\"Mường Tè\",\"Ka Lăng\"]','0983982933','itk@gmail.com',' ',NULL,NULL,8,NULL,'new','2019-12-20 16:02:18',NULL,NULL),(37,'1577289183133','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 15:53:10',NULL,NULL),(38,'1577289253471','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 15:54:18',NULL,NULL),(39,'1577289441261','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 15:57:29',NULL,NULL),(40,'1577289667446','paid',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-03-25 16:01:21',NULL,NULL),(41,'1577289695107','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:02:10',NULL,NULL),(42,'1577289744774','verify',0,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:02:50',NULL,NULL),(43,'1577289977488','paid',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-01-25 16:06:25',NULL,NULL),(44,'1577289998458','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:06:44',NULL,NULL),(45,'1577291058559','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:24:28',NULL,NULL),(46,'1577291058559','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:24:59',NULL,NULL),(47,'1577291146086','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:25:51',NULL,NULL),(48,'1577291359138','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:29:32',NULL,NULL),(49,'1577291620635','verify',1600,2,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:33:48',NULL,NULL),(50,'1577291649615','verify',1600,2,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:34:32',NULL,NULL),(51,'1577291758775','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','123456789','it10069001@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:36:16',NULL,NULL),(52,'1577291784183','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:36:32',NULL,NULL),(53,'1577292123887','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 16:42:15',NULL,NULL),(54,'1577293009930','paid',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-11-25 16:56:55',NULL,NULL),(55,'1577293009930','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 16:57:03',NULL,NULL),(56,'1577293109544','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 16:58:35',NULL,NULL),(57,'1577293413851','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:03:41',NULL,NULL),(58,'1577293488065','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:04:55',NULL,NULL),(59,'1577293589998','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:06:36',NULL,NULL),(60,'1577293831504','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:10:41',NULL,NULL),(61,'1577294284546','paid',160099,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:18:25',NULL,NULL),(62,'1577294418810','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:20:51',NULL,NULL),(63,'1577295164240','paid',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-05-25 17:32:54',NULL,NULL),(64,'1577295184650','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:33:10',NULL,NULL),(65,'1577295374773','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:36:23',NULL,NULL),(66,'1577295645884','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:40:54',NULL,NULL),(67,'1577295952882','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:46:07',NULL,NULL),(68,'1577295975738','verify',0,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:46:21',NULL,NULL),(69,'1577296049549','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:47:35',NULL,NULL),(70,'1577296128125','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:48:58',NULL,NULL),(71,'1577297462742','verify',100000,2,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 18:11:15',NULL,NULL),(72,'1577297488548','verify',100000,2,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 18:12:10',NULL,NULL),(73,'1577297623455','verify',160000,2,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 18:16:27',NULL,NULL),(74,'1577297880033','paid',448000,5,1,0,0,'[\"Hoà Bình\",\"Cao Phong\",\"Thu Phong\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-06-25 18:18:49',NULL,NULL),(75,'1577298317374','paid',448000,5,1,0,0,'[\"Hoà Bình\",\"Cao Phong\",\"Thu Phong\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 18:25:50',NULL,NULL),(76,'1577299347896','paid',52000,2,1,0,0,'[\"Bắc Giang\",\"Việt Yên\",\"Nghĩa Trung\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-07-25 18:43:02',NULL,NULL),(77,'1577299459488','verify',100000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 18:44:39',NULL,NULL),(78,'1577299561862','verify',100000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 18:48:51',NULL,NULL),(79,'1577315734830','verify',160000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 23:16:30',NULL,NULL),(80,'1577352955964','paid',32000,1,1,0,0,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','itk160454@gmail.com',' ','Hoàng Tấn',NULL,8,NULL,'new','2019-08-26 09:36:14',NULL,NULL),(81,'1577360733283','verify',40000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-26 12:00:43',NULL,NULL),(82,'1577693557373','verify',160000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-30 08:19:37',NULL,NULL),(83,'1577969923425','verify',100000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:01:26',NULL,NULL),(84,'1577969923425','verify',100000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:02:42',NULL,NULL),(85,'1577969923425','verify',100000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-09-02 13:02:57',NULL,NULL),(86,'1577969923425','paid',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:05:33',NULL,NULL),(87,'1577970542407','verify',80000,1,1,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:09:05',NULL,NULL),(88,'1577970552479','verify',32000,1,1,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:09:15',NULL,NULL),(89,'1577970553928','verify',32000,1,1,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:09:16',NULL,NULL),(90,'1577970558008','verify',56000,1,3,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:09:20',NULL,NULL),(91,'1577970940703','verify',56000,1,3,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-10-02 13:15:43',NULL,NULL),(92,'1577971057892','verify',56000,1,3,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:17:40',NULL,NULL),(93,'1577971066709','verify',56000,1,3,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:17:49',NULL,NULL),(94,'1577971066974','verify',56000,1,3,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:17:49',NULL,NULL),(95,'1577971784157','paid',140000,1,3,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:29:46',NULL,NULL),(96,'1577971996862','verify',350000,1,10,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-02 13:33:19',NULL,NULL),(97,'1577975155390','paid',140000,1,10,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,68,'new','2020-01-02 14:25:58',NULL,NULL),(98,'1577976198809','verify',100000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-02 14:43:23',NULL,NULL),(99,'1577976222085','verify',100000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-02 14:43:47',NULL,NULL),(100,'1577976527707','paid',128000,1,1,0,0,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','it10069001@gmail.com',' ','Hoàng Tấn',NULL,8,66,'new','2020-01-02 14:48:48',NULL,NULL),(101,'1578023119660','verify',100000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-03 03:45:20',NULL,NULL),(102,'1578023121653','verify',160000,2,2,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-03 03:45:21',NULL,NULL),(103,'1578023203390','paid',190000,2,3,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-03 03:46:43',NULL,NULL),(104,'1578031231762','verify',350000,1,10,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-03 06:00:32',NULL,NULL),(105,'1578031327663','verify',560000,1,10,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,66,'new','2020-01-03 06:02:08',NULL,NULL),(106,'1578031345659','paid',190000,2,3,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'edited','2020-11-03 06:02:27',NULL,'2020-03-29 03:23:14'),(107,'1578038926968','paid',160000000,2,2,0,0,'[\"Hưng Yên\",\"Kim Động\",\"Vĩnh Xá\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,72,'edited','2020-01-03 08:08:47',NULL,'2020-01-03 08:10:05'),(108,'1578039064651','verify',44000,1,2,0,0,'[\"Hưng Yên\",\"Kim Động\",\"Vĩnh Xá\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,68,'new','2020-01-03 08:11:05',NULL,NULL),(109,'1578112776186','paid',16000000,2,0,0,0,'[\"Bình Phước\",\"Lộc Ninh\",\"Lộc Ninh\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,66,'edited','2020-01-04 04:39:37',NULL,'2020-01-04 04:40:49'),(110,'1578117445166','paid',100000000,2,0,0,0,'[\"Bình Phước\",\"Lộc Ninh\",\"Lộc Ninh\"]','0983982933','16110454@student.hcmute.edu.vn',' ','Hoàng Trọng Tấn',NULL,8,72,'edited','2020-01-04 05:57:25',NULL,'2020-01-04 05:58:42'),(111,'1578117664033','paid',100000,2,0,0,0,'[\"Bình Phước\",\"Lộc Ninh\",\"Lộc Ninh\"]','0983982933','16110454@student.hcmute.edu.vn',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-04 06:01:07',NULL,NULL),(112,'1583917804956','paid',100000000,2,0,0,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,72,'new','2020-03-11 09:10:08',NULL,NULL),(113,'1583996524731','paid',100000000,2,0,0,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,72,'new','2020-03-12 07:02:06',NULL,NULL),(114,'1584002523590','paid',100000000,2,0,0,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,72,'new','2020-03-12 08:42:06',NULL,NULL),(115,'1584003684824','paid',100000,2,0,0,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-03-12 09:01:26',NULL,NULL),(116,'1584003689542','paid',100000,2,0,0,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,66,'new','2020-03-12 09:01:30',NULL,NULL),(117,'1584004431543','paid',100000,2,0,0,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,70,'new','2020-03-12 09:13:53',NULL,NULL),(118,'1584004936952','paid',100000,2,0,1,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,71,'new','2020-03-12 09:22:18',NULL,NULL),(119,'1584005251224','paid',16000000,2,1,1,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,73,'new','2020-09-12 09:27:32',NULL,NULL),(120,'1584006315948','paid',16000000,2,0,0,1,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,74,'new','2020-10-12 09:45:17',NULL,NULL),(121,'1584007328680','paid',40000,2,1,0,1,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,75,'new','2020-03-12 10:02:10',NULL,NULL),(122,'1584165769347','paid',100000000,2,0,1,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,76,'new','2020-05-14 06:02:51',NULL,NULL),(123,'1584165773404','paid',100000000,2,1,0,1,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,77,'new','2020-04-14 06:02:54',NULL,NULL),(124,'1584436002791','paid',20000,1,0,0,0,'[\"Hà Nội\",\"Mê Linh\",\"Đại Thịnh\"]','0123456789','abc@gmail.com',' ','Nguyen Van A',NULL,8,78,'new','2020-03-17 09:08:07',NULL,NULL);
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
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified',NULL,NULL,0,4,8,'new','2020-01-03 04:11:31',NULL,NULL),(2,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified',NULL,NULL,0,0,8,'new','2020-01-03 04:11:32',NULL,NULL),(3,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified',NULL,NULL,0,1,8,'new','2020-01-03 04:11:32',NULL,NULL),(5,'Appreciation of diversity','describe','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified','','',1,0,8,'edited','2020-03-02 06:45:09',NULL,'2020-03-23 04:23:02'),(6,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified',NULL,'cảnh đẹp,nghĩ dưỡng',6,4,8,'new','2020-01-03 04:11:31',NULL,NULL),(7,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified',NULL,NULL,0,0,8,'new','2020-01-03 04:11:32',NULL,NULL),(8,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified',NULL,NULL,0,1,8,'new','2020-01-03 04:11:32',NULL,NULL),(9,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','not-verified',NULL,NULL,0,0,8,'edited','2020-03-02 06:45:09',NULL,'2020-03-22 12:52:47');
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
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
INSERT INTO `schedules` VALUES (40,'<h3>Hi, You can start editing your travel scheduleasdasd</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=-U-r-b2rPLA\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/-U-r-b2rPLA\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><p>asdasdhasda</p><p>sd</p><p>as</p><p>da</p><p>sdasdasd</p><figure class=\"table\"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>',66,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','edited','2019-11-30 17:39:57',NULL,'2020-03-21 08:03:19'),(41,'<h3>Hi, You can start editing your travel scheduleasdasd</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=-U-r-b2rPLA\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/-U-r-b2rPLA\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><p>asdasdhasda</p><p>sd</p><p>as</p><p>da</p><p>sdasdasd</p><figure class=\"table\"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>',67,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','edited','2019-11-30 17:46:02',NULL,'2020-03-21 08:03:21'),(42,'<h3>Hi, You can start editing your travel schedule</h3>',68,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','edited','2019-12-07 14:24:40',NULL,'2020-03-21 08:03:21'),(44,'<h3>Hi, You can start editing your travel schedule</h3>',70,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','new','2019-12-17 18:06:08',NULL,NULL),(45,'<h3>Hi, You can start editing your travel schedule</h3>',71,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','new','2019-12-20 06:21:41',NULL,NULL),(46,'<h3>Hi, You can start editing your travel schedule</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=QnzbBzOGHPA\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/QnzbBzOGHPA\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><figure class=\"image image-style-side\"><img src=\"https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg\" srcset=\"https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_100 100w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_200 200w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_300 300w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_400 400w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_500 500w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_600 600w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_700 700w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_800 800w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_900 900w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_1000 1000w\" sizes=\"100vw\" width=\"1000\"><figcaption>tieu de</figcaption></figure><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=hlWiI4xVXKY&amp;t=6299s\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/hlWiI4xVXKY\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure>',72,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','edited','2020-01-03 07:56:14',NULL,'2020-03-21 08:03:23'),(47,'<h3>Hi, You can start editing your travel schedule</h3><figure class=\"table\"><table><tbody><tr><td>ádasd</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>ádas</td><td>d</td><td>ádasdasd</td></tr><tr><td>ád</td><td>ádasd</td><td>&nbsp;</td></tr></tbody></table></figure><ol><li>ádasd</li></ol><ul><li>ádádasd</li><li>ád</li><li>&nbsp;</li></ul><figure class=\"image\"><img src=\"https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif\" srcset=\"https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_260 260w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_520 520w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_780 780w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_1040 1040w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_1300 1300w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_1560 1560w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_1820 1820w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_2080 2080w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_2340 2340w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_2592 2592w\" sizes=\"100vw\" width=\"2592\"></figure>',73,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','edited','2020-01-03 07:57:31',NULL,'2020-03-21 08:03:23'),(48,'<h3>Hi, You can start editing your travel scheduleasdasd</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=-U-r-b2rPLA\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/-U-r-b2rPLA\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><p>asdasdhasda</p><p>sd</p><p>as</p><p>da</p><p>sdasdasd</p><figure class=\"table\"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>',74,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','edited','2020-01-03 07:57:41',NULL,'2020-03-21 08:03:20'),(49,'<h3>Hi, You can start editing your travel schedule</h3>',75,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','new','2020-01-03 07:57:54',NULL,NULL),(50,'<h3>Hi, You can start editing your travel scheduleasdasd</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=-U-r-b2rPLA\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/-U-r-b2rPLA\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><p>asdasdhasda</p><p>sd</p><p>as</p><p>da</p><p>sdasdasd</p><figure class=\"table\"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>',76,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','edited','2020-01-03 07:58:07',NULL,'2020-03-21 08:03:20'),(51,'<h3>Hi, You can start editing your travel schedule</h3>',77,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','new','2020-01-04 04:14:16',NULL,NULL),(52,'<h3>Hi, You can start editing your travel schedule</h3>',78,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','new','2020-01-04 05:47:56',NULL,NULL);
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
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Đưa đón tận nơi','edited','2020-03-18 13:09:39',NULL,NULL),(2,'Cho thuê xe máy','edited','2020-03-18 13:10:39',NULL,NULL),(3,'Free Wifi','edited','2020-03-20 13:40:50',NULL,NULL),(4,'Hỗ trợ người khuyết tật','new','2020-03-21 09:09:28',NULL,NULL),(5,'Sẵn vé máy bay','new','2020-03-21 09:09:38',NULL,NULL),(6,'Xe giường nằm','new','2020-03-21 09:09:50',NULL,NULL),(7,'Bãi biển đẹp','new','2020-03-21 09:10:01',NULL,NULL),(8,'Phòng ngủ tập thể','new','2020-03-21 09:10:22',NULL,NULL),(9,'Passport','new','2020-03-21 09:10:35',NULL,NULL),(10,'Tiệc sinh nhật đúng ngày','new','2020-03-21 09:10:47',NULL,NULL),(11,'Hướng dẫn viên','new','2020-03-21 09:10:57',NULL,NULL),(12,'Bảo hiểm','new','2020-03-21 09:11:05',NULL,NULL),(13,'Cho thuê xe đạp','new','2020-03-21 09:11:15',NULL,NULL),(14,'Tự do trong 1 ngày','new','2020-03-21 09:11:28',NULL,NULL),(15,'Phòng tập gym','new','2020-03-21 09:11:39',NULL,NULL),(16,'Dịch vụ spa','new','2020-03-21 09:11:51',NULL,NULL),(17,'Có bể bơi','new','2020-03-21 09:12:01',NULL,NULL),(18,'Trượt tuyết','new','2020-03-21 09:12:13',NULL,NULL),(19,'Bao bữa sáng','new','2020-03-21 09:12:25',NULL,NULL),(20,'Hỗ trợ visa','new','2020-03-21 09:12:36',NULL,NULL),(21,'Vé tham quan','new','2020-03-21 09:12:47',NULL,NULL),(22,'undefined','new','2020-03-22 09:05:50',NULL,NULL);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'ẩm thực','new','2020-03-18 12:49:20',NULL,NULL),(2,'biển đảo','deleted','2020-03-18 12:50:31',NULL,NULL),(3,'nghĩ dưỡng','new','2020-03-18 12:50:57',NULL,NULL),(4,'mao hiem','edited','2020-03-18 12:51:47',NULL,NULL),(5,'undefined','new','2020-03-22 08:33:21',NULL,NULL),(6,'cảnh đẹp','new','2020-03-25 12:19:21',NULL,NULL);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `timelines`
--

LOCK TABLES `timelines` WRITE;
/*!40000 ALTER TABLE `timelines` DISABLE KEYS */;
INSERT INTO `timelines` VALUES (1,68,'Di chuyển','HDV đón đoàn tại điểm hẹn. Sau đó, đoàn làm thủ tục và di chuyển qua đảo Bình Ba bằng cano','2020-03-23 08:30:00','edited','2020-03-18 13:02:22',NULL,NULL),(2,68,'Nhà Hàng Nổi','Đoàn cất hành lý tại Nhà Hàng Nổi. Sau đó, di chuyển tắm biển và lặn san hô.','2020-03-23 09:30:00','edited','2020-03-20 13:47:19',NULL,NULL),(3,68,'Nhà Hàng Du Thuyền','Đoàn dùng cơm trưa tại Nhà Hàng Du Thuyền với đặc sản Bình Ba.(Khách có thể kêu thêm tôm hùm theo ý muốn, tôm sống bắt tại bè để chế biến, có thể cầm chụp hình)','2020-03-24 11:00:00','new','2020-03-20 13:49:00',NULL,NULL);
/*!40000 ALTER TABLE `timelines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tours`
--

LOCK TABLES `tours` WRITE;
/*!40000 ALTER TABLE `tours` DISABLE KEYS */;
INSERT INTO `tours` VALUES (66,'Tour đi sapa',8000000,11,'2020-11-04 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Sapa Việt Nam','2 days 1 nights','Europe',NULL,NULL,NULL,NULL,NULL,7,'edited','2019-11-30 17:39:57','2020-03-29 06:05:29',NULL),(67,'test 00000000000000000001',50000,5,'2020-04-11 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Hà Nội, Phú Quốc, Phan Thiết','10 days 9 nights','America',NULL,NULL,NULL,NULL,NULL,7,'edited','2019-11-30 17:46:02','2020-03-29 06:05:30',NULL),(68,'Tham Quan Bình Ba- Quốc Đảo Tôm Hùm 1 Ngày',570000,10,'2020-03-24 00:00:00','Khánh Hoà','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Nha Trang, Khánh Hoà','1 days 0 nights','Asia','ẩm thực,nghĩ dưỡng','Đưa đón tận nơi,Free Wifi',4,3,7,7,'edited','2019-12-07 14:24:40','2020-03-29 06:05:30',NULL),(70,'test 00000000000000000004',100000,0,'0000-00-00 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Đà Lạt, Quy Nhơn','4 days 3 nights','Asia',NULL,NULL,NULL,NULL,NULL,7,'edited','2019-12-17 18:06:08','2020-03-29 06:05:31',NULL),(71,'test 00000000000000000003',30000,0,'0000-00-00 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','187 Dien Bien Phu, Da Kao Ward','7 days 6 nights','Europe',NULL,NULL,NULL,NULL,NULL,7,'edited','2019-12-20 06:21:41','2020-03-29 06:05:31',NULL),(72,'Mùa hè với Hoa Anh Đào nhé',50000000,10,'2020-09-09 00:00:00','Hồ Chí Minh','Đi nhật bản chơi','Nhật Bản - nhat-ban','5 days 4 nights','NorthernVietnam',NULL,NULL,NULL,NULL,NULL,7,'edited','2020-01-03 07:56:14','2020-03-29 06:05:32',NULL),(73,'test111111',10,0,'0000-00-00 00:00:00','Hồ Chí Minh','ádas','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','5 days 4 nights','NorthCentral',NULL,NULL,NULL,NULL,NULL,7,'edited','2020-01-03 07:57:31','2020-03-29 06:05:32',NULL),(74,'test111111qwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','4 days 3 nights','SouthCentralCoast',NULL,NULL,NULL,NULL,NULL,7,'edited','2020-01-03 07:57:41','2020-03-29 06:05:33',NULL),(75,'test 00000000000000000001',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','ádasd','4 days 3 nights','CentralHighlands',NULL,NULL,NULL,NULL,NULL,7,'edited','2020-01-03 07:57:54','2020-03-29 06:05:34',NULL),(76,'testqwqwqwqwqwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ád','Thủ Đức','2 Ngày 1 Đêm','Southeast',NULL,NULL,NULL,NULL,NULL,7,'edited','2020-01-03 07:58:07','2020-03-29 06:05:34',NULL),(77,'testqwqwqwqwqwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','k','Thủ Đức','2 days 1 nights','MekongRiverDelta',NULL,NULL,NULL,NULL,NULL,7,'edited','2020-01-04 04:14:16','2020-03-29 06:05:35',NULL),(78,'test 00000000000000000111',5000000,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','Thủ Đức','5 days 4 nights','MekongRiverDelta',NULL,NULL,NULL,NULL,NULL,0,'edited','2020-01-04 05:47:56','2020-03-29 06:05:35',NULL);
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

-- Dump completed on 2020-03-30  1:34:02
