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
INSERT INTO `accounts` VALUES (6,'name','email','0983982930','user','email3','$2a$10$Y49SHMgqXl6xTw7ovBUFOuQduXywptZ7QeyItgmP2Is1B0k.M9Qse','/img/avatarDefault.jpg',NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,'new','2019-11-29 08:43:33',NULL,NULL),(7,'ithoangtan','ithoangtan@gmail.com','0983982933','administrator','ithoangtan@gmail.com','$2a$10$Y49SHMgqXl6xTw7ovBUFOuQduXywptZ7QeyItgmP2Is1B0k.M9Qse','/img/avatarDefault.jpg',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'new','2019-11-29 10:47:51',NULL,NULL),(8,'8','8','8','8','8','8','8','8','8','8','8','8','1996-09-09 00:00:00',1,NULL,'edited','2019-09-09 00:00:00','2020-01-03 04:20:11','2019-12-17 23:02:37'),(28,'Hoàng Trọng Tấn Nguyeenx','it10069001@gmail.com','84983982933','user','Hoàng Tấn','$2a$10$wGU9oarS/jb1d/a8xvo/Le.Y5v9xB.wZV0UzqAmPq39GQ13se9Y7i','/img/1578112680898_anh-avatar-dep-5.jpg',NULL,NULL,'kinhdaonhtourdulich.comn','12345432151651','none','1996-09-05 10:00:00',1,'xWs7d7Jcw70fKM9r1SzrGGiwjwgU4cUM','edited','2019-12-24 18:26:59','2020-01-04 04:42:00',NULL),(29,'Hoàng Trọng Tấn','itk160454@gmail.com','8498392933','user','Hoàng Tấn','$2a$10$Eg8u594yDcqdYgZ6IjGoSe5Ddj6XQ/pQFI4aFs/Hy.gys4Q/s/rra','/img/1578038868984_cầu hiền lương.jpg',NULL,NULL,'abc.xyz',' ','none','0000-00-00 00:00:00',1,'verified','edited','2020-01-03 08:06:36','2020-01-03 08:07:56',NULL),(30,'Hoàng Trọng Tấn','16110454@student.hcmute.edu.vn','84983982933','user','Hoàng Tấn','$2a$10$TgWdlOhcynINZnRz.jmmy.MKONy.gMMHTVjUEGzfKRWUlXAWG14Y.','/img/1578117283249_anh-avatar-dep-5.jpg',NULL,NULL,'abc.xyz','ACB','none','0000-00-00 00:00:00',1,'danA7qMlbMkyfFo1LXQK6SkvLeTDt04h','edited','2020-01-04 05:52:50','2020-01-04 06:06:37',NULL);
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
INSERT INTO `evaluates` VALUES (1,4,'Review tour đi Sapa mùa hè','Tour giá phải chăng, đồ ăn ngon',66,6,'edited','2020-03-13 08:36:37',NULL,'2020-03-13 08:41:40'),(2,4,'Review tour đi Sapa','Tour giá phải chăng, đồ ăn ngon',66,30,'new','2020-03-13 08:43:24',NULL,NULL),(3,4,'Review tour đi Sapa','Tour giá phải chăng, đồ ăn ngon',66,6,'new','2020-03-14 06:47:21',NULL,NULL);
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
INSERT INTO `images` VALUES (312,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578113084922_agn1403834244.jpg',72,'deleted','2020-01-04 04:44:46','2020-03-07 13:44:10',NULL),(313,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578113090766_cầu hiền lương.jpg',72,'deleted','2020-01-04 04:44:50','2020-03-07 13:44:10',NULL),(314,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578113837895_cầu hiền lương.jpg',66,'deleted','2020-01-04 04:57:19','2020-03-07 13:44:11',NULL),(315,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578113858338_cầu hiền lương.jpg',66,'deleted','2020-01-04 04:57:39','2020-03-07 13:44:11',NULL),(316,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116827303_cầu hiền lương.jpg',72,'new','2020-01-04 05:47:13',NULL,NULL),(317,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116839292_agn1403834244.jpg',72,'new','2020-01-04 05:47:28',NULL,NULL),(318,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116969103_jun1403925273.jfif',67,'new','2020-01-04 05:49:31',NULL,NULL),(319,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116969103_jun1403925273.jfif',66,'deleted','2020-01-04 05:49:33','2020-03-07 13:44:14',NULL),(320,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116973554_thánh địa la vang.jpg',68,'new','2020-01-04 05:49:33',NULL,NULL),(321,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116978543_kon1403597456.jpg',70,'new','2020-01-04 05:49:38',NULL,NULL),(322,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116982629_cầu hiền lương.jpg',71,'new','2020-01-04 05:49:42',NULL,NULL),(323,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116984878_jun1403925273.jfif',71,'new','2020-01-04 05:49:45',NULL,NULL),(324,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116990815_cầu hiền lương.jpg',73,'new','2020-01-04 05:49:50',NULL,NULL),(325,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116992781_kon1403597456.jpg',73,'new','2020-01-04 05:49:52',NULL,NULL);
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
-- Dumping data for table `noticeto`
--

LOCK TABLES `noticeto` WRITE;
/*!40000 ALTER TABLE `noticeto` DISABLE KEYS */;
INSERT INTO `noticeto` VALUES (4,2,29,'edited','2020-03-02 07:27:41',NULL,'2020-03-02 07:29:40');
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
INSERT INTO `notifications` VALUES (1,'info','sending','Test notification 2','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-02-29 08:04:42','2020-02-29 08:27:53',NULL),(2,'info','sending','Test notification 3','Hello! Welcome to Travel 123','2020-02-28 00:00:00.000000',7,'new','2020-03-02 06:15:24',NULL,NULL),(3,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'edited','2020-03-05 11:09:27','2020-03-05 11:10:10',NULL);
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
INSERT INTO `orders` VALUES (2,'123456789','verify','2019-12-09 11:14:48',2599000,1,1,'[\"Hồ Chí Minh\", \"Thủ Đức\", \"Bình Thọ\"]','0983982933','itk160454@gmail.com','Haha',NULL,6,NULL,'new',NULL,NULL),(3,'123456789','verify','2019-12-09 11:14:49',2599000,1,1,'[\"Hồ Chí Minh\", \"Thủ Đức\", \"Bình Thọ\"]','0983982933','itk160454@gmail.com','Haha',NULL,6,NULL,'new',NULL,NULL),(22,'1575874336819','verify','2019-12-09 13:53:04',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(23,'1575874467465','verify','2019-12-09 13:54:38',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(24,'1575874882093','verify','2019-12-09 14:01:32',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(25,'1575874963867','verify','2019-12-09 14:02:51',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(26,'1575875215342','verify','2019-12-09 14:07:04',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(27,'1576611890910','verify','2019-12-17 19:45:28',999,2,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(28,'1576616816507','verify','2019-12-17 21:08:02',999,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(29,'1576617375514','verify','2019-12-17 21:16:33',999,2,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(30,'1576648409922','verify','2019-12-18 05:54:03',999,2,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(31,'1576773446644','verify','2019-12-19 16:40:11',800,1,1,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','itk160454@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(32,'1576779157943','verify','2019-12-19 18:14:26',800,1,1,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','itk160454@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(33,'1576826602633','verify','2019-12-20 07:24:03',10,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(34,'1576827189859','verify','2019-12-20 07:33:57',10,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(35,'1576828439651','verify','2019-12-20 07:59:10',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(36,'1576857112051','verify','2019-12-20 16:02:18',800,1,0,'[\"Lai Châu\",\"Mường Tè\",\"Ka Lăng\"]','0983982933','itk@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(37,'1577289183133','verify','2019-12-25 15:53:10',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(38,'1577289253471','verify','2019-12-25 15:54:18',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(39,'1577289441261','verify','2019-12-25 15:57:29',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(40,'1577289667446','verify','2019-12-25 16:01:21',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(41,'1577289695107','verify','2019-12-25 16:02:10',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(42,'1577289744774','verify','2019-12-25 16:02:50',0,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(43,'1577289977488','verify','2019-12-25 16:06:25',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(44,'1577289998458','verify','2019-12-25 16:06:44',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(45,'1577291058559','verify','2019-12-25 16:24:28',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(46,'1577291058559','verify','2019-12-25 16:24:59',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(47,'1577291146086','verify','2019-12-25 16:25:51',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(48,'1577291359138','verify','2019-12-25 16:29:32',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(49,'1577291620635','verify','2019-12-25 16:33:48',1600,2,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(50,'1577291649615','verify','2019-12-25 16:34:32',1600,2,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(51,'1577291758775','verify','2019-12-25 16:36:16',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','123456789','it10069001@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(52,'1577291784183','verify','2019-12-25 16:36:32',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(53,'1577292123887','verify','2019-12-25 16:42:15',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(54,'1577293009930','verify','2019-12-25 16:56:55',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(55,'1577293009930','verify','2019-12-25 16:57:03',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(56,'1577293109544','verify','2019-12-25 16:58:35',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(57,'1577293413851','verify','2019-12-25 17:03:41',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(58,'1577293488065','verify','2019-12-25 17:04:55',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(59,'1577293589998','verify','2019-12-25 17:06:36',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(60,'1577293831504','verify','2019-12-25 17:10:41',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(61,'1577294284546','verify','2019-12-25 17:18:25',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(62,'1577294418810','verify','2019-12-25 17:20:51',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(63,'1577295164240','verify','2019-12-25 17:32:54',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(64,'1577295184650','verify','2019-12-25 17:33:10',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(65,'1577295374773','verify','2019-12-25 17:36:23',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(66,'1577295645884','verify','2019-12-25 17:40:54',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(67,'1577295952882','verify','2019-12-25 17:46:07',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(68,'1577295975738','verify','2019-12-25 17:46:21',0,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(69,'1577296049549','verify','2019-12-25 17:47:35',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(70,'1577296128125','verify','2019-12-25 17:48:58',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(71,'1577297462742','verify','2019-12-25 18:11:15',100000,2,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(72,'1577297488548','verify','2019-12-25 18:12:10',100000,2,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(73,'1577297623455','verify','2019-12-25 18:16:27',160000,2,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(74,'1577297880033','verify','2019-12-25 18:18:49',448000,5,1,'[\"Hoà Bình\",\"Cao Phong\",\"Thu Phong\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(75,'1577298317374','paid','2019-12-25 18:25:50',448000,5,1,'[\"Hoà Bình\",\"Cao Phong\",\"Thu Phong\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(76,'1577299347896','verify','2019-12-25 18:43:02',52000,2,1,'[\"Bắc Giang\",\"Việt Yên\",\"Nghĩa Trung\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(77,'1577299459488','verify','2019-12-25 18:44:39',100000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(78,'1577299561862','verify','2019-12-25 18:48:51',100000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(79,'1577315734830','verify','2019-12-25 23:16:30',160000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(80,'1577352955964','verify','2019-12-26 09:36:14',32000,1,1,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','itk160454@gmail.com',' ','Hoàng Tấn',8,NULL,'new',NULL,NULL),(81,'1577360733283','verify','2019-12-26 12:00:43',40000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(82,'1577693557373','verify','2019-12-30 08:19:37',160000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(83,'1577969923425','verify','2020-01-02 13:01:26',100000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(84,'1577969923425','verify','2020-01-02 13:02:42',100000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(85,'1577969923425','verify','2020-01-02 13:02:57',100000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(86,'1577969923425','paid','2020-01-02 13:05:33',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(87,'1577970542407','verify','2020-01-02 13:09:05',80000,1,1,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(88,'1577970552479','verify','2020-01-02 13:09:15',32000,1,1,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(89,'1577970553928','verify','2020-01-02 13:09:16',32000,1,1,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(90,'1577970558008','verify','2020-01-02 13:09:20',56000,1,3,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(91,'1577970940703','verify','2020-01-02 13:15:43',56000,1,3,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(92,'1577971057892','verify','2020-01-02 13:17:40',56000,1,3,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(93,'1577971066709','verify','2020-01-02 13:17:49',56000,1,3,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(94,'1577971066974','verify','2020-01-02 13:17:49',56000,1,3,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(95,'1577971784157','paid','2020-01-02 13:29:46',140000,1,3,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(96,'1577971996862','verify','2020-01-02 13:33:19',350000,1,10,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(97,'1577975155390','paid','2020-01-02 14:25:58',140000,1,10,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,68,'new',NULL,NULL),(98,'1577976198809','verify','2020-01-02 14:43:23',100000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(99,'1577976222085','verify','2020-01-02 14:43:47',100000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(100,'1577976527707','paid','2020-01-02 14:48:48',128000,1,1,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','it10069001@gmail.com',' ','Hoàng Tấn',8,66,'new',NULL,NULL),(101,'1578023119660','verify','2020-01-03 03:45:20',100000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(102,'1578023121653','verify','2020-01-03 03:45:21',160000,2,2,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(103,'1578023203390','paid','2020-01-03 03:46:43',190000,2,3,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(104,'1578031231762','verify','2020-01-03 06:00:32',350000,1,10,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(105,'1578031327663','verify','2020-01-03 06:02:08',560000,1,10,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,66,'new',NULL,NULL),(106,'1578031345659','paid','2020-01-03 06:02:27',190000,2,3,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,67,'edited',NULL,'2020-01-03 06:14:27'),(107,'1578038926968','paid','2020-01-03 08:08:47',160000000,2,2,'[\"Hưng Yên\",\"Kim Động\",\"Vĩnh Xá\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,72,'edited',NULL,'2020-01-03 08:10:05'),(108,'1578039064651','verify','2020-01-03 08:11:05',44000,1,2,'[\"Hưng Yên\",\"Kim Động\",\"Vĩnh Xá\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,68,'new',NULL,NULL),(109,'1578112776186','paid','2020-01-04 04:39:37',16000000,2,0,'[\"Bình Phước\",\"Lộc Ninh\",\"Lộc Ninh\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,66,'edited',NULL,'2020-01-04 04:40:49'),(110,'1578117445166','paid','2020-01-04 05:57:25',100000000,2,0,'[\"Bình Phước\",\"Lộc Ninh\",\"Lộc Ninh\"]','0983982933','16110454@student.hcmute.edu.vn',' ','Hoàng Trọng Tấn',8,72,'edited',NULL,'2020-01-04 05:58:42'),(111,'1578117664033','verify','2020-01-04 06:01:07',100000,2,0,'[\"Bình Phước\",\"Lộc Ninh\",\"Lộc Ninh\"]','0983982933','16110454@student.hcmute.edu.vn',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(112,'1583917804956','verify','2020-03-11 09:10:08',100000000,2,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,72,'new',NULL,NULL),(113,'1583996524731','verify','2020-03-12 07:02:06',100000000,2,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,72,'new',NULL,NULL),(114,'1584002523590','verify','2020-03-12 08:42:06',100000000,2,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,72,'new',NULL,NULL),(115,'1584003684824','verify','2020-03-12 09:01:26',100000,2,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(116,'1584003689542','verify','2020-03-12 09:01:30',100000,2,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(117,'1584004431543','verify','2020-03-12 09:13:53',100000,2,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(118,'1584004936952','verify','2020-03-12 09:22:18',100000,2,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(119,'1584005251224','verify','2020-03-12 09:27:32',16000000,2,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,66,'new',NULL,NULL),(120,'1584006315948','verify','2020-03-12 09:45:17',16000000,2,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,66,'new',NULL,NULL),(121,'1584007328680','verify','2020-03-12 10:02:10',40000,2,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,68,'new',NULL,NULL),(122,'1584165769347','verify','2020-03-14 06:02:51',100000000,2,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,72,'new',NULL,NULL),(123,'1584165773404','verify','2020-03-14 06:02:54',100000000,2,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,72,'new',NULL,NULL);
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
INSERT INTO `posts` VALUES (1,'Testting','verified',8,4,'new','2020-01-03 04:11:31',NULL,NULL),(2,'Testting2','verified',8,0,'new','2020-01-03 04:11:32',NULL,NULL),(3,'Testting3','verified',8,1,'new','2020-01-03 04:11:32',NULL,NULL),(5,'<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','not-verified',8,0,'edited','2020-03-02 06:45:09',NULL,'2020-03-02 08:27:40');
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
INSERT INTO `schedules` VALUES (40,NULL,66,'edited','2019-11-30 17:39:57',NULL,'2020-02-28 09:05:39',NULL,NULL),(41,'<h3>Hi, You can start editing your travel scheduleas</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=-U-r-b2rPLA\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/-U-r-b2rPLA\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><figure class=\"image image-style-side\"><img src=\"https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg\" srcset=\"https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_180 180w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_360 360w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_540 540w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_720 720w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_900 900w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1080 1080w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1260 1260w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1440 1440w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1620 1620w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1733 1733w\" sizes=\"100vw\" width=\"1733\"><figcaption>OK all</figcaption></figure>',67,'new','2019-11-30 17:46:02',NULL,NULL,NULL,NULL),(42,'<h3>Hi, You can start editing your travel schedule</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=1NAO4YakshI\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/1NAO4YakshI\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure>',68,'edited','2019-12-07 14:24:40',NULL,'2020-01-03 08:04:24',NULL,NULL),(44,'<h3>Hi, You can start editing your travel schedule</h3>',70,'new','2019-12-17 18:06:08',NULL,NULL,NULL,NULL),(45,'<h3>Hi, You can start editing your travel schedule</h3>',71,'new','2019-12-20 06:21:41',NULL,NULL,NULL,NULL),(46,'<h3>Hi, You can start editing your travel schedule</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=QnzbBzOGHPA\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/QnzbBzOGHPA\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><figure class=\"image image-style-side\"><img src=\"https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg\" srcset=\"https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_100 100w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_200 200w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_300 300w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_400 400w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_500 500w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_600 600w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_700 700w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_800 800w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_900 900w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/0a9506053394d2b91f1528ef87a4d22cb3f1ba214fdf0f0b.jpg/w_1000 1000w\" sizes=\"100vw\" width=\"1000\"><figcaption>tieu de</figcaption></figure><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=hlWiI4xVXKY&amp;t=6299s\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/hlWiI4xVXKY\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure>',72,'edited','2020-01-03 07:56:14',NULL,'2020-01-04 05:48:53',NULL,NULL),(47,'<h3>Hi, You can start editing your travel schedule</h3><figure class=\"table\"><table><tbody><tr><td>ádasd</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>ádas</td><td>d</td><td>ádasdasd</td></tr><tr><td>ád</td><td>ádasd</td><td>&nbsp;</td></tr></tbody></table></figure><ol><li>ádasd</li></ol><ul><li>ádádasd</li><li>ád</li><li>&nbsp;</li></ul><figure class=\"image\"><img src=\"https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif\" srcset=\"https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_260 260w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_520 520w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_780 780w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_1040 1040w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_1300 1300w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_1560 1560w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_1820 1820w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_2080 2080w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_2340 2340w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_2592 2592w\" sizes=\"100vw\" width=\"2592\"></figure>',73,'edited','2020-01-03 07:57:31',NULL,'2020-01-04 05:50:26',NULL,NULL),(48,NULL,74,'edited','2020-01-03 07:57:41',NULL,'2020-02-28 09:12:37',NULL,NULL),(49,'<h3>Hi, You can start editing your travel schedule</h3>',75,'new','2020-01-03 07:57:54',NULL,NULL,NULL,NULL),(50,NULL,76,'edited','2020-01-03 07:58:07',NULL,'2020-02-28 09:17:27',NULL,NULL),(51,'<h3>Hi, You can start editing your travel schedule</h3>',77,'new','2020-01-04 04:14:16',NULL,NULL,NULL,NULL),(52,'<h3>Hi, You can start editing your travel schedule</h3>',78,'new','2020-01-04 05:47:56',NULL,NULL,NULL,NULL);
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
-- Dumping data for table `tours`
--

LOCK TABLES `tours` WRITE;
/*!40000 ALTER TABLE `tours` DISABLE KEYS */;
INSERT INTO `tours` VALUES (66,'Tour đi sapa',8000000,10,'2020-11-04 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Sapa Việt Nam','2 days 1 nights','vietnam',7,'edited','2019-11-30 17:39:57','2020-01-04 05:46:35',NULL),(67,'test 00000000000000000001',50000,5,'2020-01-30 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Hà Nội, Phú Quốc, Phan Thiết','10 days 9 nights','vietnam',7,'new','2019-11-30 17:46:02',NULL,NULL),(68,'test 00000000000000000002',20000,10,'2020-02-15 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Nhật Bản, Trung Quốc, Anh','6 days 5 nights','vietnam',7,'edited','2019-12-07 14:24:40','2020-03-14 07:40:58',NULL),(70,'test 00000000000000000004',100000,0,'2020-04-15 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Đà Lạt, Quy Nhơn','4 days 3 nights','vietnam',7,'edited','2019-12-17 18:06:08','2020-03-14 07:40:58',NULL),(71,'test 00000000000000000003',30000,0,'2020-04-15 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','187 Dien Bien Phu, Da Kao Ward','7 days 6 nights','vietnam',7,'edited','2019-12-20 06:21:41','2020-03-14 07:41:16',NULL),(72,'Mùa hè với Hoa Anh Đào nhé',50000000,10,'2020-09-09 00:00:00','Hồ Chí Minh','Đi nhật bản chơi','Nhật Bản - nhat-ban','5 days 4 nights','vietnam',7,'edited','2020-01-03 07:56:14','2020-03-06 15:50:11',NULL),(73,'test111111',10,0,'2020-01-17 00:00:00','Hồ Chí Minh','ádas','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','2 Ngày 1 Đêm','vietnam',7,'new','2020-01-03 07:57:31',NULL,NULL),(74,'test111111qwqw',10,0,'2020-01-14 00:00:00','Hồ Chí Minh','ádasd','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','4 days 3 nights','vietnam',7,'new','2020-01-03 07:57:41',NULL,NULL),(75,'test 00000000000000000001',10,0,'2020-01-23 00:00:00','Hồ Chí Minh','ádasd','ádasd','4 days 3 nights','vietnam',7,'new','2020-01-03 07:57:54',NULL,NULL),(76,'testqwqwqwqwqwqw',10,0,'2020-01-14 00:00:00','Hồ Chí Minh','ád','Thủ Đức','2 Ngày 1 Đêm','vietnam',7,'new','2020-01-03 07:58:07',NULL,NULL),(77,'testqwqwqwqwqwqw',10,0,'2020-01-17 00:00:00','Hồ Chí Minh','k','Thủ Đức','2 Ngày 1 Đêm','vietnam',7,'new','2020-01-04 04:14:16',NULL,NULL),(78,'test 00000000000000000111',5000000,0,'2020-01-23 00:00:00','Hồ Chí Minh','ádasd','Thủ Đức','5 days 4 nights','vietnam',0,'new','2020-01-04 05:47:56',NULL,NULL);
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
	SELECT count(*) as tourNumber FROM azmszdk4w6h5j1o6.tours where departureDay > now();
    SELECT sum(totalPrice) as total FROM azmszdk4w6h5j1o6.orders where orders.status = 'paid';
    SELECT count(*)as verifyAccount FROM azmszdk4w6h5j1o6.accounts where accounts.verify =TRUE;
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

-- Dump completed on 2020-03-14 15:06:45
