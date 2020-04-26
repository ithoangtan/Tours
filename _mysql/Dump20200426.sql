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
INSERT INTO `accounts` VALUES (6,'names','email','0983982930','user','email3s','$2a$10$Y49SHMgqXl6xTw7ovBUFOuQduXywptZ7QeyItgmP2Is1B0k.M9Qse','/img/avatarDefault.jpg',NULL,NULL,'abc.xyz',' asd','Male','0000-00-00 00:00:00',0,'account',NULL,'0.0.0.0','deleted','2019-11-28 11:43:33','2020-04-05 00:34:16','2020-04-06 08:30:00'),(7,'ithoangtan','ithoangtan@gmail.com','0983982933','administrator','ithoangtan@gmail.com','$2a$10$Y49SHMgqXl6xTw7ovBUFOuQduXywptZ7QeyItgmP2Is1B0k.M9Qse','/img/avatarDefault.jpg',NULL,NULL,'as','sa','Male','1996-09-06 00:00:00',1,'account',NULL,'0.0.0.0','edited','2019-11-29 03:47:51','2020-04-06 10:48:48',NULL),(8,'8','8','8','8','8','8','8','8','8','8','8','8','1996-09-09 00:00:00',1,'account',NULL,'0.0.0.0','edited','2019-09-09 00:00:00','2020-03-23 05:15:12','2019-12-17 23:02:37'),(28,'Hoàng Trọng Tấn Nguyeenx','it10069001@gmail.com','84983982933','user','Hoàng Tấn','$2a$10$wGU9oarS/jb1d/a8xvo/Le.Y5v9xB.wZV0UzqAmPq39GQ13se9Y7i','/img/1578112680898_anh-avatar-dep-5.jpg',NULL,NULL,'kinhdaonhtourdulich.comn','12345432151651','none','1996-09-05 10:00:00',1,'account','xWs7d7Jcw70fKM9r1SzrGGiwjwgU4cUM','0.0.0.0','edited','2019-12-24 18:26:59','2020-03-23 05:15:13',NULL),(29,'Hoàng Trọng Tấn','itk160454@gmail.com','8498392933','user','Hoàng Tấn','$2a$10$Eg8u594yDcqdYgZ6IjGoSe5Ddj6XQ/pQFI4aFs/Hy.gys4Q/s/rra','/img/1578038868984_cầu hiền lương.jpg',NULL,NULL,'abc.xyz',' ','none','0000-00-00 00:00:00',1,'guest','verified','0.0.0.0','edited','2020-01-03 08:06:36','2020-03-23 05:15:13',NULL),(30,'Hoàng Trọng Tấn','16110454@student.hcmute.edu.vn','84983982933','user','Hoàng Tấn','$2a$10$TgWdlOhcynINZnRz.jmmy.MKONy.gMMHTVjUEGzfKRWUlXAWG14Y.','/img/1578117283249_anh-avatar-dep-5.jpg',NULL,NULL,'abc.xyz','ACB','none','0000-00-00 00:00:00',1,'guest','danA7qMlbMkyfFo1LXQK6SkvLeTDt04h','0.0.0.0','edited','2020-01-04 05:52:50','2020-03-23 05:15:14',NULL),(31,'HOANG TRONG TAN','it10069001@gmail.com','0983982933','user','tkinchington0','undefined','/img/avatarDefault.jpg',NULL,NULL,NULL,NULL,'none',NULL,0,NULL,'undefined','0.0.0.0','new','2020-04-05 00:43:16',NULL,NULL),(32,'HOANG TRONG TAN','it10069001@gmail.com','0983982933','user','nttvnhd96','undefined','/img/avatarDefault.jpg',NULL,NULL,NULL,NULL,'none',NULL,0,NULL,'undefined','0.0.0.0','new','2020-04-05 00:49:08',NULL,NULL),(33,'HOANG TRONG TAN','it10069001@gmail.coms','0983982933','user','ithoangta','undefined','/img/avatarDefault.jpg',NULL,NULL,NULL,NULL,'none',NULL,0,NULL,'undefined','0.0.0.0','new','2020-04-05 00:54:03',NULL,NULL),(48,'Simple Good','ngochoang1237@gmail.com','undefined','user','ngochoang1237@gmail.com','undefined','https://lh3.googleusercontent.com/a-/AOh14GhO-WJA5VztOxO2LTDVlZK2qdwGkUs0sdMCm9iP','null','101232678297238579813',NULL,NULL,'none',NULL,0,NULL,'undefined','0.0.0.0','new','2020-04-17 09:47:40',NULL,NULL),(58,'Nguyen Ngoc Hoang Vy','16110530@student.hcmute.edu.vn','undefined','user','16110530@student.hcmute.edu.vn','undefined','https://lh6.googleusercontent.com/-tDYrwj6S_iQ/AAAAAAAAAAI/AAAAAAAAAJc/AAKWJJOuIjqGYxgHxUorgb6Y00_lc_RYYg/photo.jpg','undefined','101424687774185419511',NULL,NULL,'none',NULL,0,NULL,'undefined','0.0.0.0','new','2020-04-24 07:20:12',NULL,NULL);
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
-- Dumping data for table `configs`
--

LOCK TABLES `configs` WRITE;
/*!40000 ALTER TABLE `configs` DISABLE KEYS */;
INSERT INTO `configs` VALUES (1,'AuthoInfo123','[{\"abc123\":\"abc123\"}]',NULL,NULL,'deleted','2020-04-03 09:49:00',NULL,NULL),(2,'AuthoInfo','[{\"abc\":\"abc\"}]',NULL,NULL,'deleted','2020-04-03 09:54:10',NULL,NULL),(3,'AuthorInfo','{\"nameAuthor\":\"asdasdadasdasdasdasdas das1212 ádasd asdcxvxcv asdas đấ sd a\",\"describeAuthor\":\"asdasdasdasdasdasd2131 312\",\"isNameAuthorEdited\":true,\"isDescribeAuthorEdited\":false}','/img/1585967129812_tour-1.jpg',NULL,'edited','2020-04-03 09:54:32',NULL,NULL);
/*!40000 ALTER TABLE `configs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `evaluates`
--

LOCK TABLES `evaluates` WRITE;
/*!40000 ALTER TABLE `evaluates` DISABLE KEYS */;
INSERT INTO `evaluates` VALUES (1,5,4,4,4,3,'Review tour đi Sapa mùa hè','Tour giá phải chăng, đồ ăn ngon',66,6,0,NULL,NULL,'edited','2020-03-13 08:36:37',NULL,'2020-03-18 12:36:23'),(2,NULL,NULL,NULL,NULL,4,'Review tour đi Sapa','Tour giá phải chăng, đồ ăn ngon',66,30,0,NULL,NULL,'new','2020-03-13 08:43:24',NULL,NULL),(3,NULL,NULL,NULL,NULL,4,'Review tour đi Sapa','Tour giá phải chăng, đồ ăn ngon',66,6,0,NULL,NULL,'new','2020-03-14 06:47:21',NULL,NULL),(4,5,4,4,4,3,'Review tour đi Sapa','Tour giá phải chăng, đồ ăn ngon',68,30,0,'Rất tệ','business','new','2020-03-21 02:25:26',NULL,NULL),(5,5,4,4,4,3,'Review tour đi Bình ba','Tôm hùm quá rẻ, quá ngon!!!',68,28,4,'Rất ổn','friend','edited','2020-03-21 02:59:17',NULL,'2020-03-24 04:10:48'),(9,5,5,2,4,3,'Review tour đảo Bình Ba 111','Tôm hùm quá rẻ, quá ngon !!!',68,7,4,'Rất ổn','friend','new','2020-04-06 10:47:01',NULL,NULL),(10,4,5,4,3,3,'Review du lich','Test content',68,30,4,'Rất ổn','undefined','new','2020-04-06 10:53:56',NULL,NULL),(11,5,5,5,5,5,'a','abc',68,30,5,'Tuyệt vời','heart','new','2020-04-06 10:59:36',NULL,NULL);
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
INSERT INTO `images` VALUES (312,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578113084922_agn1403834244.jpg',72,NULL,NULL,'deleted','2020-01-04 04:44:46','2020-03-07 13:44:10',NULL),(313,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578113090766_cầu hiền lương.jpg',72,NULL,NULL,'deleted','2020-01-04 04:44:50','2020-03-07 13:44:10',NULL),(314,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578113837895_cầu hiền lương.jpg',66,NULL,NULL,'deleted','2020-01-04 04:57:19','2020-03-07 13:44:11',NULL),(315,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578113858338_cầu hiền lương.jpg',66,NULL,NULL,'deleted','2020-01-04 04:57:39','2020-03-07 13:44:11',NULL),(316,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116827303_cầu hiền lương.jpg',72,NULL,NULL,'new','2020-01-04 05:47:13',NULL,NULL),(317,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116839292_agn1403834244.jpg',72,NULL,NULL,'new','2020-01-04 05:47:28',NULL,NULL),(318,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116969103_jun1403925273.jfif',67,NULL,NULL,'deleted','2020-01-04 05:49:31','2020-04-17 07:18:01',NULL),(319,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116969103_jun1403925273.jfif',66,NULL,NULL,'deleted','2020-01-04 05:49:33','2020-03-07 13:44:14',NULL),(320,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116973554_thánh địa la vang.jpg',68,NULL,NULL,'new','2020-01-04 05:49:33',NULL,NULL),(321,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116978543_kon1403597456.jpg',70,NULL,NULL,'new','2020-01-04 05:49:38',NULL,NULL),(322,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116982629_cầu hiền lương.jpg',71,NULL,NULL,'new','2020-01-04 05:49:42',NULL,NULL),(323,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116984878_jun1403925273.jfif',71,NULL,NULL,'new','2020-01-04 05:49:45',NULL,NULL),(324,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116990815_cầu hiền lương.jpg',73,NULL,NULL,'new','2020-01-04 05:49:50',NULL,NULL),(325,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1578116992781_kon1403597456.jpg',NULL,1,NULL,'deleted','2020-01-04 05:49:52','2020-04-04 04:47:53',NULL),(326,'/img/1584616339767_PY - Copy.jpg','done',' 1584616339767_PY - Copy.jpg',66,NULL,NULL,'deleted','2020-03-19 11:12:21','2020-03-19 11:14:37',NULL),(331,'/img/1585972987294_italian-landscape-mountains-nature.jpg','done',' 1585972987294_italian-landscape-mountains-nature.jpg',NULL,2,NULL,'deleted','2020-04-04 04:03:08','2020-04-04 09:36:12',NULL),(332,'/img/1585973183621_fall-autumn-red-season.jpg','done',' 1585973183621_fall-autumn-red-season.jpg',NULL,5,NULL,'deleted','2020-04-04 04:06:25','2020-04-04 04:47:10',NULL),(333,'/img/1585973224675_amazing-animal-beautiful-beautifull.jpg','done',' 1585973224675_amazing-animal-beautiful-beautifull.jpg',NULL,17,NULL,'deleted','2020-04-04 04:07:06','2020-04-04 13:27:18',NULL),(334,'/img/1585992614368_tour-3.jpg','done',' 1585992614368_tour-3.jpg',NULL,1,NULL,'deleted','2020-04-04 09:30:16','2020-04-04 09:34:39',NULL),(335,'/img/1585993062571_amazing-animal-beautiful-beautifull.jpg','done',' 1585993062571_amazing-animal-beautiful-beautifull.jpg',NULL,5,NULL,'deleted','2020-04-04 09:37:43','2020-04-04 09:43:28',NULL),(336,'/img/1585993425266_amazing-animal-beautiful-beautifull.jpg','done',' 1585993425266_amazing-animal-beautiful-beautifull.jpg',NULL,1,NULL,'deleted','2020-04-04 09:43:46','2020-04-04 09:43:57',NULL),(337,'/img/1585993563054_italian-landscape-mountains-nature.jpg','done',' 1585993563054_italian-landscape-mountains-nature.jpg',NULL,1,NULL,'deleted','2020-04-04 09:46:04','2020-04-04 09:56:17',NULL),(338,'/img/1585994267126_italian-landscape-mountains-nature.jpg','done',' 1585994267126_italian-landscape-mountains-nature.jpg',NULL,1,NULL,'deleted','2020-04-04 09:57:49','2020-04-04 09:58:00',NULL),(339,'/img/1585994316056_italian-landscape-mountains-nature.jpg','done',' 1585994316056_italian-landscape-mountains-nature.jpg',66,NULL,NULL,'deleted','2020-04-04 09:58:37','2020-04-04 09:59:15',NULL),(340,'/img/1585996291937_italian-landscape-mountains-nature.jpg','done',' 1585996291937_italian-landscape-mountains-nature.jpg',NULL,1,NULL,'deleted','2020-04-04 10:31:33','2020-04-04 10:31:48',NULL),(341,'/img/1585996313388_amazing-animal-beautiful-beautifull.jpg','done',' 1585996313388_amazing-animal-beautiful-beautifull.jpg',NULL,1,NULL,'new','2020-04-04 10:31:54',NULL,NULL),(342,'/img/1585996984431_tour-1.jpg','done',' 1585996984431_tour-1.jpg',NULL,2,NULL,'new','2020-04-04 10:43:05',NULL,NULL),(343,'/img/1585998037132_italian-landscape-mountains-nature.jpg','done',' 1585998037132_italian-landscape-mountains-nature.jpg',NULL,5,NULL,'deleted','2020-04-04 11:00:38','2020-04-04 11:12:17',NULL),(344,'/img/1585998740622_tour-2.jpg','done',' 1585998740622_tour-2.jpg',NULL,5,NULL,'new','2020-04-04 11:12:22',NULL,NULL),(345,'/img/1586003784153_tour-8.jpg','done',' 1586003784153_tour-8.jpg',NULL,18,NULL,'new','2020-04-04 12:37:38',NULL,NULL),(346,'/img/1586044881237_amazing-animal-beautiful-beautifull.jpg','done',' 1586044881237_amazing-animal-beautiful-beautifull.jpg',66,NULL,NULL,'new','2020-04-05 00:01:21',NULL,NULL),(347,'/img/1586045048018_tour-3.jpg','done',' 1586045048018_tour-3.jpg',NULL,17,NULL,'new','2020-04-05 00:04:08',NULL,NULL),(348,'/img/1587047819184_tour-2.jpg','done',' 1587047819184_tour-2.jpg',67,NULL,NULL,'deleted','2020-04-16 14:36:59','2020-04-17 07:17:59',NULL),(349,'/img/1587047825532_tour-7.jpg','done',' 1587047825532_tour-7.jpg',67,NULL,NULL,'deleted','2020-04-16 14:37:05','2020-04-17 07:18:00',NULL),(350,'/img/1587107884266_fall-autumn-red-season.jpg','done',' 1587107884266_fall-autumn-red-season.jpg',67,NULL,NULL,'deleted','2020-04-17 07:18:04','2020-04-18 00:38:53',NULL),(351,'/img/1587107886862_amazing-animal-beautiful-beautifull.jpg','done',' 1587107886862_amazing-animal-beautiful-beautifull.jpg',67,NULL,NULL,'deleted','2020-04-17 07:18:06','2020-04-18 00:38:54',NULL),(352,'/img/1587107889801_italian-landscape-mountains-nature.jpg','done',' 1587107889801_italian-landscape-mountains-nature.jpg',67,NULL,NULL,'deleted','2020-04-17 07:18:10','2020-04-18 00:38:54',NULL),(353,'/img/1587170341544_fall-autumn-red-season.jpg','done',' 1587170341544_fall-autumn-red-season.jpg',67,NULL,NULL,'new','2020-04-18 00:39:01',NULL,NULL),(354,'/img/1587170344512_tour-3.jpg','done',' 1587170344512_tour-3.jpg',67,NULL,NULL,'new','2020-04-18 00:39:04',NULL,NULL),(355,'/img/1587170354578_tour-2.jpg','done',' 1587170354578_tour-2.jpg',68,NULL,NULL,'new','2020-04-18 00:39:14',NULL,NULL),(356,'/img/1587170363261_meadow-grass-palm-tree-forest-plenty-of-natural-light-47334.jpeg','done',' 1587170363261_meadow-grass-palm-tree-forest-plenty-of-natural-light-47334.jpeg',75,NULL,NULL,'new','2020-04-18 00:39:23',NULL,NULL),(357,'/img/1587170366432_phuong-phap-chup-anh-phong-canh.jpg','done',' 1587170366432_phuong-phap-chup-anh-phong-canh.jpg',75,NULL,NULL,'new','2020-04-18 00:39:26',NULL,NULL),(358,'/img/1587170369543_tour-7.jpg','done',' 1587170369543_tour-7.jpg',75,NULL,NULL,'new','2020-04-18 00:39:29',NULL,NULL),(359,'/img/1587170377678_tour-1.jpg','done',' 1587170377678_tour-1.jpg',76,NULL,NULL,'new','2020-04-18 00:39:37',NULL,NULL),(360,'/img/1587170380745_phuong-phap-chup-anh-phong-canh.jpg','done',' 1587170380745_phuong-phap-chup-anh-phong-canh.jpg',76,NULL,NULL,'new','2020-04-18 00:39:40',NULL,NULL),(361,'/img/1587170390289_tour-4.jpg','done',' 1587170390289_tour-4.jpg',74,NULL,NULL,'new','2020-04-18 00:39:50',NULL,NULL),(362,'/img/1587170395441_tour-3.jpg','done',' 1587170395441_tour-3.jpg',74,NULL,NULL,'new','2020-04-18 00:39:55',NULL,NULL),(363,'/img/1587170416492_tour-8.jpg','done',' 1587170416492_tour-8.jpg',66,NULL,NULL,'new','2020-04-18 00:40:16',NULL,NULL);
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
INSERT INTO `noticeto` VALUES (4,NULL,2,29,'edited','2020-03-02 07:27:41',NULL,'2020-03-02 07:29:40'),(5,'unread',51,7,'new','2020-04-15 08:15:13',NULL,NULL),(6,'unread',51,8,'new','2020-04-15 08:15:13',NULL,NULL),(7,'unread',51,28,'new','2020-04-15 08:15:13',NULL,NULL),(8,'unread',51,29,'new','2020-04-15 08:15:13',NULL,NULL),(9,'unread',51,30,'new','2020-04-15 08:15:14',NULL,NULL),(10,'unread',51,31,'new','2020-04-15 08:15:14',NULL,NULL),(11,'unread',51,32,'new','2020-04-15 08:15:14',NULL,NULL),(12,'unread',51,33,'new','2020-04-15 08:15:14',NULL,NULL);
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
INSERT INTO `notifications` VALUES (1,'info','sending','Test notification 2','Hello! Welcome to Travel Hello!','2020-04-06 09:22:57.433000',7,'deleted','2020-02-28 18:04:42','2020-04-06 09:22:58','2020-04-06 10:34:35'),(2,'info','sending','Test notification 3','Hello! Welcome to Travel','2020-04-06 09:22:26.541000',7,'deleted','2020-03-01 23:15:24','2020-04-06 09:22:28','2020-04-06 10:28:23'),(3,'info','sending','Test notification 333','Hello! Welcome to Travel as asdasd','2020-04-06 09:26:25.936000',7,'deleted','2020-03-04 21:09:27','2020-04-06 09:26:25','2020-04-06 10:28:27'),(4,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'deleted','2020-03-05 11:09:27','2020-03-05 11:10:10','2020-04-06 10:28:28'),(5,'info','unread','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'deleted','2020-03-05 11:09:27','2020-03-29 01:27:23','2020-04-06 10:28:29'),(6,'info','unread','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'deleted','2020-03-05 11:09:27','2020-03-29 01:27:23','2020-04-06 10:28:30'),(7,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'deleted','2020-03-05 11:09:27','2020-03-05 11:10:10','2020-04-06 10:28:31'),(8,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'deleted','2020-03-05 11:09:27','2020-03-05 11:10:10','2020-04-06 10:28:32'),(9,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'deleted','2020-03-05 11:09:27','2020-03-05 11:10:10','2020-04-06 10:28:34'),(10,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'deleted','2020-03-05 11:09:27','2020-03-05 11:10:10','2020-04-06 10:28:36'),(11,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'deleted','2020-03-05 11:09:27','2020-03-05 11:10:10','2020-04-06 10:28:37'),(12,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'deleted','2020-03-05 11:09:27','2020-03-05 11:10:10','2020-04-06 10:26:04'),(13,'info','sending','Test notification 333','Hello! Welcome to Travel','2020-02-10 00:00:00.000000',7,'deleted','2020-03-05 11:09:27','2020-03-05 11:10:10','2020-04-06 10:26:03'),(14,'info','sending','Test notification 3','Hello! Welcome to Travel 123','2020-02-28 00:00:00.000000',7,'deleted','2020-03-29 00:26:00',NULL,'2020-04-06 10:26:02'),(15,'10','','undefined','undefined','0000-00-00 00:00:00.000000',7,'deleted','2020-04-06 09:40:21',NULL,'2020-04-06 10:26:01'),(16,'','','undefined','undefined','0000-00-00 00:00:00.000000',7,'deleted','2020-04-06 10:12:45',NULL,'2020-04-06 10:25:58'),(17,'Info','Created','undefined','undefined','0000-00-00 00:00:00.000000',7,'deleted','2020-04-06 10:12:58',NULL,'2020-04-06 10:25:56'),(18,'Info','Created','undefined','asd','0000-00-00 00:00:00.000000',7,'deleted','2020-04-06 10:13:49',NULL,'2020-04-06 10:25:54'),(19,'Info','Created','undefined','Content Notification','0000-00-00 00:00:00.000000',7,'deleted','2020-04-06 10:14:40',NULL,'2020-04-06 10:25:53'),(20,'Info','Created','undefined','asd','0000-00-00 00:00:00.000000',7,'deleted','2020-04-06 10:16:06',NULL,'2020-04-06 10:25:51'),(21,'Info','Created','undefined','ad','0000-00-00 00:00:00.000000',7,'deleted','2020-04-06 10:16:51',NULL,'2020-04-06 10:25:47'),(22,'Warning','Created','Front-end Fresher','asdssssssssssssss','2020-04-07 14:39:22.523000',7,'edited','2020-04-05 06:25:36','2020-04-06 14:39:29',NULL),(23,'Sucess','Sending','dasdádasd','asdsádasdasd','2020-04-05 14:39:34.854000',7,'edited','2020-04-05 06:36:40','2020-04-06 14:39:41',NULL),(24,'Info','Created','ád','ád','2020-04-15 03:38:04.185000',7,'edited','2020-04-06 04:27:02','2020-04-07 03:38:08',NULL),(25,'Info','Created','Front-end Fresher','ád','2020-04-15 14:39:44.746000',7,'edited','2020-04-06 04:27:51','2020-04-06 14:39:52',NULL),(26,'Info','read','ád','áddsdasasd','2020-05-06 14:39:59.159000',7,'deleted','2020-04-05 17:00:00','2020-04-07 08:50:13','2020-04-15 08:33:00'),(27,'Info','Created','ád','ád','2020-04-28 14:40:15.919000',7,'edited','2020-04-06 04:29:22','2020-04-06 14:40:22',NULL),(28,'Info','Created','ád','ád','2020-04-06 14:41:49.000000',7,'edited','2020-04-06 04:31:00','2020-04-06 14:40:47',NULL),(29,'Info','Created','qưe','qưe','2020-04-23 03:38:12.073000',7,'edited','2020-04-06 04:32:05','2020-04-07 03:38:16',NULL),(30,'Warning','Created','Front-end Fresher','asdssssssssssssss','2020-04-07 14:39:22.523000',7,'edited','2020-04-05 06:25:36','2020-04-07 08:26:00',NULL),(31,'Sucess','Sending','dasdádasd','asdsádasdasd','2020-04-05 14:39:34.854000',7,'edited','2020-04-05 06:36:40','2020-04-07 08:26:01',NULL),(32,'Info','Created','ád','ád','2020-04-15 03:38:04.185000',7,'edited','2020-04-06 04:27:02','2020-04-07 08:26:01',NULL),(33,'Info','Created','Front-end Fresher','ád','2020-04-15 14:39:44.746000',7,'edited','2020-04-06 04:27:51','2020-04-07 08:26:02',NULL),(34,'Info','Created','ád','áddsdasasd','2020-05-06 14:39:59.159000',7,'edited','2020-04-05 17:00:00','2020-04-07 08:26:02',NULL),(35,'Info','Created','ád','ád','2020-04-28 14:40:15.919000',7,'edited','2020-04-06 04:29:22','2020-04-07 08:26:03',NULL),(36,'Info','Created','ád','ád','2020-04-06 14:41:49.000000',7,'edited','2020-04-06 04:31:00','2020-04-07 08:26:04',NULL),(37,'Info','Created','qưe','qưe','2020-04-23 03:38:12.073000',7,'edited','2020-04-06 04:32:05','2020-04-07 08:26:04',NULL),(38,'Warning','Created','Front-end Fresher','asdssssssssssssss','2020-04-07 14:39:22.523000',7,'edited','2020-04-05 06:25:36','2020-04-06 14:39:29',NULL),(39,'Sucess','Sending','dasdádasd','asdsádasdasd','2020-04-05 14:39:34.854000',7,'edited','2020-04-05 06:36:40','2020-04-06 14:39:41',NULL),(40,'Info','Created','ád','ád','2020-04-15 03:38:04.185000',7,'edited','2020-04-06 04:27:02','2020-04-07 03:38:08',NULL),(41,'Info','Created','Front-end Fresher','ád','2020-04-15 14:39:44.746000',7,'edited','2020-04-06 04:27:51','2020-04-06 14:39:52',NULL),(42,'Info','Created','ád','áddsdasasd','2020-05-06 14:39:59.159000',7,'edited','2020-04-05 17:00:00','2020-04-06 14:40:12',NULL),(43,'Info','Created','ád','ád','2020-04-28 14:40:15.919000',7,'edited','2020-04-06 04:29:22','2020-04-06 14:40:22',NULL),(44,'Info','Created','ád','ád','2020-04-06 14:41:49.000000',7,'edited','2020-04-06 04:31:00','2020-04-06 14:40:47',NULL),(45,'Info','Created','qưe','qưe','2020-04-23 03:38:12.073000',7,'edited','2020-04-06 04:32:05','2020-04-07 03:38:16',NULL),(46,'Success','Created','adasdadas','dasdas','0000-00-00 00:00:00.000000',7,'new','2020-04-15 08:10:38',NULL,NULL),(47,'Success','Created','asdasdasd','asdad','0000-00-00 00:00:00.000000',7,'new','2020-04-15 08:11:21',NULL,NULL),(48,'Success','Created','dasd','asdasd','0000-00-00 00:00:00.000000',7,'new','2020-04-15 08:11:55',NULL,NULL),(49,'Success','Created','asd','asd','2020-05-04 00:00:00.000000',7,'new','2020-04-15 08:13:16',NULL,NULL),(50,'Info','Created','asd','asd','0000-00-00 00:00:00.000000',7,'new','2020-04-15 08:13:40',NULL,NULL),(51,'Success','Created','Front-end Fresher','asd','0000-00-00 00:00:00.000000',7,'new','2020-04-15 08:15:12',NULL,NULL);
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
INSERT INTO `orders` VALUES (2,'123456789','verify',2599000,1,1,0,0,'[\"Hồ Chí Minh\", \"Thủ Đức\", \"Bình Thọ\"]','0983982933','itk160454@gmail.com','Haha',NULL,'Cá nhân',6,NULL,'new','2019-12-09 11:14:48',NULL,NULL),(3,'123456789','verify',2599000,1,1,0,0,'[\"Hồ Chí Minh\", \"Thủ Đức\", \"Bình Thọ\"]','0983982933','itk160454@gmail.com','Haha',NULL,'Cặp đôi',6,NULL,'new','2019-12-09 11:14:49',NULL,NULL),(22,'1575874336819','verify',540,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Gia đình',8,NULL,'new','2019-12-09 13:53:04',NULL,NULL),(23,'1575874467465','verify',540,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Bạn bè',8,NULL,'new','2019-12-09 13:54:38',NULL,NULL),(24,'1575874882093','verify',540,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Doanh nghiệp',8,NULL,'new','2019-12-09 14:01:32',NULL,NULL),(25,'1575874963867','verify',540,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Cá nhân',8,NULL,'new','2019-12-09 14:02:51',NULL,NULL),(26,'1575875215342','verify',540,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Cặp đôi',8,NULL,'new','2019-12-09 14:07:04',NULL,NULL),(27,'1576611890910','verify',999,2,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Gia đình',8,NULL,'new','2019-12-17 19:45:28',NULL,NULL),(28,'1576616816507','verify',999,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Bạn bè',8,NULL,'new','2019-12-17 21:08:02',NULL,NULL),(29,'1576617375514','verify',999,2,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Doanh nghiệp',8,NULL,'new','2019-12-17 21:16:33',NULL,NULL),(30,'1576648409922','verify',999,2,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ',NULL,'Cá nhân',8,NULL,'new','2019-12-18 05:54:03',NULL,NULL),(31,'1576773446644','verify',800,1,1,0,0,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','itk160454@gmail.com',' ',NULL,'Cặp đôi',8,NULL,'new','2019-12-19 16:40:11',NULL,NULL),(32,'1576779157943','verify',800,1,1,0,0,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','itk160454@gmail.com',' ',NULL,NULL,8,NULL,'new','2019-12-19 18:14:26',NULL,NULL),(33,'1576826602633','paid',10,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,NULL,8,NULL,'new','2019-04-20 07:24:03',NULL,NULL),(34,'1576827189859','verify',10,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,NULL,8,NULL,'new','2019-12-20 07:33:57',NULL,NULL),(35,'1576828439651','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,NULL,8,NULL,'new','2019-12-20 07:59:10',NULL,NULL),(36,'1576857112051','verify',800,1,0,0,0,'[\"Lai Châu\",\"Mường Tè\",\"Ka Lăng\"]','0983982933','itk@gmail.com',' ',NULL,NULL,8,NULL,'new','2019-12-20 16:02:18',NULL,NULL),(37,'1577289183133','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 15:53:10',NULL,NULL),(38,'1577289253471','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 15:54:18',NULL,NULL),(39,'1577289441261','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 15:57:29',NULL,NULL),(40,'1577289667446','paid',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-03-25 16:01:21',NULL,NULL),(41,'1577289695107','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:02:10',NULL,NULL),(42,'1577289744774','verify',0,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:02:50',NULL,NULL),(43,'1577289977488','paid',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-01-25 16:06:25',NULL,NULL),(44,'1577289998458','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:06:44',NULL,NULL),(45,'1577291058559','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:24:28',NULL,NULL),(46,'1577291058559','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:24:59',NULL,NULL),(47,'1577291146086','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:25:51',NULL,NULL),(48,'1577291359138','verify',800,1,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:29:32',NULL,NULL),(49,'1577291620635','verify',1600,2,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:33:48',NULL,NULL),(50,'1577291649615','verify',1600,2,0,0,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:34:32',NULL,NULL),(51,'1577291758775','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','123456789','it10069001@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:36:16',NULL,NULL),(52,'1577291784183','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ',' ',NULL,8,NULL,'new','2019-12-25 16:36:32',NULL,NULL),(53,'1577292123887','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 16:42:15',NULL,NULL),(54,'1577293009930','paid',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-11-25 16:56:55',NULL,NULL),(55,'1577293009930','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 16:57:03',NULL,NULL),(56,'1577293109544','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 16:58:35',NULL,NULL),(57,'1577293413851','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:03:41',NULL,NULL),(58,'1577293488065','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:04:55',NULL,NULL),(59,'1577293589998','verify',1600,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:06:36',NULL,NULL),(60,'1577293831504','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:10:41',NULL,NULL),(61,'1577294284546','paid',160099,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:18:25',NULL,NULL),(62,'1577294418810','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:20:51',NULL,NULL),(63,'1577295164240','paid',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-05-25 17:32:54',NULL,NULL),(64,'1577295184650','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:33:10',NULL,NULL),(65,'1577295374773','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:36:23',NULL,NULL),(66,'1577295645884','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:40:54',NULL,NULL),(67,'1577295952882','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:46:07',NULL,NULL),(68,'1577295975738','verify',0,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:46:21',NULL,NULL),(69,'1577296049549','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:47:35',NULL,NULL),(70,'1577296128125','verify',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 17:48:58',NULL,NULL),(71,'1577297462742','verify',100000,2,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 18:11:15',NULL,NULL),(72,'1577297488548','verify',100000,2,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 18:12:10',NULL,NULL),(73,'1577297623455','verify',160000,2,0,0,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 18:16:27',NULL,NULL),(74,'1577297880033','paid',448000,5,1,0,0,'[\"Hoà Bình\",\"Cao Phong\",\"Thu Phong\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-06-25 18:18:49',NULL,NULL),(75,'1577298317374','paid',448000,5,1,0,0,'[\"Hoà Bình\",\"Cao Phong\",\"Thu Phong\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 18:25:50',NULL,NULL),(76,'1577299347896','paid',52000,2,1,0,0,'[\"Bắc Giang\",\"Việt Yên\",\"Nghĩa Trung\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-07-25 18:43:02',NULL,NULL),(77,'1577299459488','verify',100000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 18:44:39',NULL,NULL),(78,'1577299561862','verify',100000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 18:48:51',NULL,NULL),(79,'1577315734830','verify',160000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-25 23:16:30',NULL,NULL),(80,'1577352955964','paid',32000,1,1,0,0,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','itk160454@gmail.com',' ','Hoàng Tấn',NULL,8,NULL,'new','2019-08-26 09:36:14',NULL,NULL),(81,'1577360733283','verify',40000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-26 12:00:43',NULL,NULL),(82,'1577693557373','verify',160000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2019-12-30 08:19:37',NULL,NULL),(83,'1577969923425','verify',100000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:01:26',NULL,NULL),(84,'1577969923425','verify',100000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:02:42',NULL,NULL),(85,'1577969923425','verify',100000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-09-02 13:02:57',NULL,NULL),(86,'1577969923425','paid',160000,2,0,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:05:33',NULL,NULL),(87,'1577970542407','verify',80000,1,1,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:09:05',NULL,NULL),(88,'1577970552479','verify',32000,1,1,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:09:15',NULL,NULL),(89,'1577970553928','verify',32000,1,1,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:09:16',NULL,NULL),(90,'1577970558008','verify',56000,1,3,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:09:20',NULL,NULL),(91,'1577970940703','verify',56000,1,3,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-10-02 13:15:43',NULL,NULL),(92,'1577971057892','verify',56000,1,3,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:17:40',NULL,NULL),(93,'1577971066709','verify',56000,1,3,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:17:49',NULL,NULL),(94,'1577971066974','verify',56000,1,3,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:17:49',NULL,NULL),(95,'1577971784157','paid',140000,1,3,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,NULL,'new','2020-01-02 13:29:46',NULL,NULL),(96,'1577971996862','verify',350000,1,10,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-02 13:33:19',NULL,NULL),(97,'1577975155390','paid',140000,1,10,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,68,'new','2020-01-02 14:25:58',NULL,NULL),(98,'1577976198809','verify',100000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-02 14:43:23',NULL,NULL),(99,'1577976222085','verify',100000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-02 14:43:47',NULL,NULL),(100,'1577976527707','paid',128000,1,1,0,0,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','it10069001@gmail.com',' ','Hoàng Tấn',NULL,8,66,'new','2020-01-02 14:48:48',NULL,NULL),(101,'1578023119660','verify',100000,2,0,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-03 03:45:20',NULL,NULL),(102,'1578023121653','verify',160000,2,2,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-03 03:45:21',NULL,NULL),(103,'1578023203390','paid',190000,2,3,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-03 03:46:43',NULL,NULL),(104,'1578031231762','verify',350000,1,10,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-03 06:00:32',NULL,NULL),(105,'1578031327663','verify',560000,1,10,0,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,66,'new','2020-01-03 06:02:08',NULL,NULL),(106,'1578031345659','paid',190000,2,3,0,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'edited','2020-11-03 06:02:27',NULL,'2020-03-29 03:23:14'),(107,'1578038926968','paid',160000000,2,2,0,0,'[\"Hưng Yên\",\"Kim Động\",\"Vĩnh Xá\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,72,'edited','2020-01-03 08:08:47',NULL,'2020-01-03 08:10:05'),(108,'1578039064651','verify',44000,1,2,0,0,'[\"Hưng Yên\",\"Kim Động\",\"Vĩnh Xá\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,68,'new','2020-01-03 08:11:05',NULL,NULL),(109,'1578112776186','paid',16000000,2,0,0,0,'[\"Bình Phước\",\"Lộc Ninh\",\"Lộc Ninh\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,66,'edited','2020-01-04 04:39:37',NULL,'2020-01-04 04:40:49'),(110,'1578117445166','paid',100000000,2,0,0,0,'[\"Bình Phước\",\"Lộc Ninh\",\"Lộc Ninh\"]','0983982933','16110454@student.hcmute.edu.vn',' ','Hoàng Trọng Tấn',NULL,8,72,'edited','2020-01-04 05:57:25',NULL,'2020-01-04 05:58:42'),(111,'1578117664033','paid',100000,2,0,0,0,'[\"Bình Phước\",\"Lộc Ninh\",\"Lộc Ninh\"]','0983982933','16110454@student.hcmute.edu.vn',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-01-04 06:01:07',NULL,NULL),(112,'1583917804956','paid',100000000,2,0,0,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,72,'new','2020-03-11 09:10:08',NULL,NULL),(113,'1583996524731','paid',100000000,2,0,0,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,72,'new','2020-03-12 07:02:06',NULL,NULL),(114,'1584002523590','paid',100000000,2,0,0,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,72,'new','2020-03-12 08:42:06',NULL,NULL),(115,'1584003684824','paid',100000,2,0,0,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,67,'new','2020-03-12 09:01:26',NULL,NULL),(116,'1584003689542','paid',100000,2,0,0,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,66,'new','2020-03-12 09:01:30',NULL,NULL),(117,'1584004431543','paid',100000,2,0,0,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,70,'new','2020-03-12 09:13:53',NULL,NULL),(118,'1584004936952','paid',100000,2,0,1,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,71,'new','2020-03-12 09:22:18',NULL,NULL),(119,'1584005251224','paid',16000000,2,1,1,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,73,'new','2020-09-12 09:27:32',NULL,NULL),(120,'1584006315948','paid',16000000,2,0,0,1,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,74,'new','2020-10-12 09:45:17',NULL,NULL),(121,'1584007328680','paid',40000,2,1,0,1,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,75,'new','2020-03-12 10:02:10',NULL,NULL),(122,'1584165769347','paid',100000000,2,0,1,0,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,76,'new','2020-05-14 06:02:51',NULL,NULL),(123,'1584165773404','paid',100000000,2,1,0,1,'[\"Sơn La\",\"Mường La\",\"Hua Trai\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',NULL,8,77,'new','2020-04-14 06:02:54',NULL,NULL),(124,'1584436002791','paid',20000,1,0,0,0,'[\"Hà Nội\",\"Mê Linh\",\"Đại Thịnh\"]','0123456789','abc@gmail.com',' ','Nguyen Van A',NULL,8,78,'new','2020-03-17 09:08:07',NULL,NULL),(125,'1585732613935','verify',720000,1,0,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,68,'new','2020-04-01 09:18:54',NULL,NULL),(126,'1587008963384','verify',720000,1,0,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,68,'new','2020-04-16 03:49:25',NULL,NULL),(127,'1587008978840','verify',720000,1,0,0,0,'[\"Hồ Chí Minh\",\"Thủ Đức\",\"Trường Thọ\"]','0123456789','a@gmail.com',' ','Ngoc Hoang',NULL,8,68,'new','2020-04-16 03:49:41',NULL,NULL);
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
INSERT INTO `posts` VALUES (1,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity 12 45</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified',NULL,NULL,2,4,8,'edited','2020-01-02 21:11:31',NULL,'2020-04-04 10:42:08'),(2,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified',NULL,'[]',0,0,8,'new','2020-01-03 04:11:32',NULL,NULL),(3,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified',NULL,'[]',0,1,8,'deleted','2020-01-03 04:11:32','2020-04-03 07:43:40',NULL),(5,'Appreciation of diversity','describe','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified','','[\"Mạo hiểm\"]',1,2,8,'edited','2020-03-02 06:45:09',NULL,'2020-04-06 10:26:51'),(6,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified',NULL,'[]',6,4,8,'deleted','2020-01-03 04:11:31','2020-04-03 07:43:41',NULL),(7,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified',NULL,'[]',0,0,8,'deleted','2020-01-03 04:11:32','2020-04-03 07:43:41',NULL),(8,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','verified',NULL,'[]',0,1,8,'deleted','2020-01-03 04:11:32','2020-04-03 07:43:42',NULL),(9,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','<h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>','not-verified',NULL,'[]',0,0,8,'deleted','2020-03-02 06:45:09','2020-04-03 07:43:43','2020-03-22 12:52:47'),(10,'Post title','paosdas','undefined','undefined','undefined','[]',0,0,7,'deleted','2020-04-03 04:24:28','2020-04-03 07:43:43',NULL),(11,'asd','adasdas','undefined','undefined','undefined','[]',0,0,7,'deleted','2020-04-03 04:26:22','2020-04-03 07:43:44',NULL),(12,'asd','asd','undefined','undefined','undefined','[]',0,0,7,'deleted','2020-04-03 04:26:54','2020-04-03 07:43:45',NULL),(13,'asd','asd','undefined','undefined','undefined','[]',0,0,7,'deleted','2020-04-03 04:28:04','2020-04-03 07:43:45',NULL),(14,'Post title','asdas','undefined','undefined','undefined','[]',0,0,7,'deleted','2020-04-03 04:30:28','2020-04-03 07:43:46',NULL),(15,'asd','adasd','undefined','undefined','undefined','[]',0,0,7,'deleted','2020-04-03 04:32:13','2020-04-03 07:43:47',NULL),(16,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','undefined','undefined','undefined','[]',0,0,7,'deleted','2020-04-03 04:32:36','2020-04-03 08:02:50',NULL),(17,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở Rộ Khắp Phố Phường Rồi Đây Này','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”','undefined','undefined','undefined','[]',0,0,7,'new','2020-04-03 06:54:52',NULL,NULL),(18,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này	','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”	','undefined','undefined','undefined','[]',0,0,7,'new','2020-04-03 08:02:59',NULL,NULL),(19,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này	','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”	','undefined','undefined','undefined','[]',0,0,7,'new','2020-04-03 08:04:50',NULL,NULL),(20,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này	','Với khí hậu mát mẻ dễ chịu quanh năm, Đà Lạt từ lâu đã trở thành một trong những điểm đến lý tưởng cho những kỳ nghỉ dài của dân ưa “xê dịch”	','undefined','undefined','undefined','[]',0,0,7,'new','2020-04-03 08:05:01',NULL,NULL),(21,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này	','Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này	','undefined','undefined','undefined','[]',0,0,7,'new','2020-04-03 08:08:26',NULL,NULL),(22,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này	','Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này	','undefined','undefined','undefined','[]',0,0,7,'new','2020-04-03 08:08:32',NULL,NULL),(23,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này','Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này','undefined','undefined','undefined','[]',0,0,7,'new','2020-04-03 08:09:53',NULL,NULL),(24,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này	','Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này	','undefined','undefined','undefined','[]',0,0,7,'new','2020-04-03 08:19:22',NULL,NULL),(25,'Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này	','Đến Đây Mà Xem, Đà Lạt Tháng 3 - Hoa Nở sRộ Khắp Phố Phường Rồi Đây Này	','undefined','undefined','undefined','[]',0,0,7,'new','2020-04-03 08:19:32',NULL,NULL);
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
INSERT INTO `schedules` VALUES (40,NULL,66,NULL,NULL,NULL,NULL,'edited','2019-11-30 17:39:57',NULL,'2020-04-02 12:38:46'),(41,'<h3>Hi, You can start editing your travel scheduleasdasd</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=-U-r-b2rPLA\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/-U-r-b2rPLA\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><p>asdasdhasda</p><p>sd</p><p>as</p><p>da</p><p>sdasdasd</p><figure class=\"table\"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>',67,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','edited','2019-11-30 17:46:02',NULL,'2020-03-21 08:03:21'),(42,NULL,68,NULL,NULL,'<p>aTRỤ SỞ CHÍNH Địa chỉ: 190 Pasteur, Phường 6, Quận 3, Tp. Hồ Chí Minh Điện thoại: (84-28) 3822 8898 Fax: (84-28) 3829 9142 Email: info@vietravel.com as dasda s</p>',NULL,'edited','2019-12-07 14:24:40',NULL,'2020-04-02 13:00:20'),(44,'<h3>Hi, You can start editing your travel schedule asd q</h3>',70,NULL,NULL,NULL,NULL,'edited','2019-12-17 18:06:08',NULL,'2020-04-02 12:57:57'),(45,'<h3>Hi, You can start editing your travel schedule</h3>',71,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','new','2019-12-20 06:21:41',NULL,NULL),(46,'<h3>Hi, You can start editing your travel schedule 12 121212</h3>',72,'<p>Bao gồm Phí visa Úc (Lưu ý: visa Úc sẽ không dán vào hộ chiếu) Vé máy bay khứ hồi, vé chặng nội địa Úc (Hàng không Jetstar hành lý 30 kg/01 kiện, có phục vụ ăn trên máy bay chặng quốc tế, lưu ý quý khách nhớ đem theo áo ấm trên máy bay vì hàng không không phuc vụ phát mền). Thuế phi trường hai nước, phụ phí xăng dầu và bảo hiểm hàng không. Khách sạn tiêu chuẩn quốc tế 3 sao, phòng đôi Nhà hàng, chi phí tham quan trong chương trình. Xe máy lạnh đưa đón đoàn theo chương trình. Hướng dẫn viên Vietravel suốt tuyến. Đặc biệt, Vietravel tặng thêm cho tất cả du khách (đến 80 tuổi) phí Bảo hiểm du lịch toàn cầu với mức bồi thường tối đa là 1.400.000.000 VND. Không bao gồm: Phí phòng đơn (dành cho khách yêu cầu ở phòng đơn): Nước uống. 1212</p>','<h3>1500000asdasdasdasdasd 1234321 1212</h3>','<h3>TRỤ SỞ CHÍNH Địa chỉ: 190 Pasteur, Phường 6, Quận 3, Tp. Hồ Chí Minh Điện thoại: (84-28) 3822 8898 Fax: (84-28) 3829 9142 Email: info@vietravel.comegerger 121 1212</h3>','<h3>adasdasdasdas0123456789 122 1313 121212</h3>','edited','2020-01-03 07:56:14',NULL,'2020-04-02 15:23:09'),(47,'<h3>Hi, You can start editing your travel schedule</h3><figure class=\"table\"><table><tbody><tr><td>ádasd</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>ádas</td><td>d</td><td>ádasdasd</td></tr><tr><td>ád</td><td>ádasd</td><td>&nbsp;</td></tr></tbody></table></figure><ol><li>ádasd</li></ol><ul><li>ádádasd</li><li>ád</li><li>&nbsp;</li></ul><figure class=\"image\"><img src=\"https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif\" srcset=\"https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_260 260w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_520 520w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_780 780w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_1040 1040w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_1300 1300w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_1560 1560w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_1820 1820w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_2080 2080w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_2340 2340w, https://43967.cdn.cke-cs.com/ghkOgLVoBmLinvA4zOzF/images/7a0f17d95f88acbca29c63d049ee58bcb1b259d74a96f0bf.jfif/w_2592 2592w\" sizes=\"100vw\" width=\"2592\"></figure>',73,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','edited','2020-01-03 07:57:31',NULL,'2020-03-21 08:03:23'),(48,'<h3>Hi, You can start editing your travel scheduleasdasd</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=-U-r-b2rPLA\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/-U-r-b2rPLA\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><p>asdasdhasda</p><p>sd</p><p>as</p><p>da</p><p>sdasdasd</p><figure class=\"table\"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>',74,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','edited','2020-01-03 07:57:41',NULL,'2020-03-21 08:03:20'),(49,'<h3>Hi, You can start editing your travel schedule</h3>',75,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','new','2020-01-03 07:57:54',NULL,NULL),(50,'<h3>Hi, You can start editing your travel scheduleasdasd</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=-U-r-b2rPLA\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/-U-r-b2rPLA\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><p>asdasdhasda</p><p>sd</p><p>as</p><p>da</p><p>sdasdasd</p><figure class=\"table\"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>',76,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','edited','2020-01-03 07:58:07',NULL,'2020-03-21 08:03:20'),(51,'<h3>Hi, You can start editing your travel schedule</h3>',77,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','new','2020-01-04 04:14:16',NULL,NULL),(52,'<h3>Hi, You can start editing your travel schedule</h3>',78,'<h6>Hahahahaha đây la cái gì</h6>','<h6>Hahahahaha đây la cái gì Price</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','<h6>Hahahahaha đây la cái gì Notes</h6>','new','2020-01-04 05:47:56',NULL,NULL),(53,'<h3>Hi, You can start editing your travel schedule</h3>',79,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:48',NULL,NULL),(54,'<h3>Hi, You can start editing your travel schedule</h3>',80,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(55,'<h3>Hi, You can start editing your travel schedule</h3>',81,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(56,'<h3>Hi, You can start editing your travel schedule</h3>',82,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(57,'<h3>Hi, You can start editing your travel schedule</h3>',83,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(58,'<h3>Hi, You can start editing your travel schedule</h3>',84,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(59,'<h3>Hi, You can start editing your travel schedule</h3>',85,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(60,'<h3>Hi, You can start editing your travel schedule</h3>',86,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(61,'<h3>Hi, You can start editing your travel schedule</h3>',87,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(62,'<h3>Hi, You can start editing your travel schedule</h3>',88,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(63,'<h3>Hi, You can start editing your travel schedule</h3>',89,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(64,'<h3>Hi, You can start editing your travel schedule</h3>',90,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(65,'<h3>Hi, You can start editing your travel schedule</h3>',91,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(66,'<h3>Hi, You can start editing your travel schedule</h3>',92,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(67,'<h3>Hi, You can start editing your travel schedule</h3>',93,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(68,'<h3>Hi, You can start editing your travel schedule</h3>',94,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:49',NULL,NULL),(69,'<h3>Hi, You can start editing your travel schedule</h3>',95,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:50',NULL,NULL),(70,'<h3>Hi, You can start editing your travel schedule</h3>',96,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:50',NULL,NULL),(71,'<h3>Hi, You can start editing your travel schedule</h3>',97,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:50',NULL,NULL),(72,'<h3>Hi, You can start editing your travel schedule</h3>',98,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:50',NULL,NULL),(73,'<h3>Hi, You can start editing your travel schedule</h3>',99,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:50',NULL,NULL),(74,'<h3>Hi, You can start editing your travel schedule</h3>',100,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:50',NULL,NULL),(75,'<h3>Hi, You can start editing your travel schedule</h3>',101,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:50',NULL,NULL),(76,'<h3>Hi, You can start editing your travel schedule</h3>',102,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:50',NULL,NULL),(77,'<h3>Hi, You can start editing your travel schedule</h3>',103,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:50',NULL,NULL),(78,'<h3>Hi, You can start editing your travel schedule</h3>',104,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:50',NULL,NULL),(79,'<h3>Hi, You can start editing your travel schedule</h3>',105,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:50',NULL,NULL),(80,'<h3>Hi, You can start editing your travel schedule</h3>',106,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:50',NULL,NULL),(81,'<h3>Hi, You can start editing your travel schedule</h3>',107,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:51',NULL,NULL),(82,'<h3>Hi, You can start editing your travel schedule</h3>',108,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:51',NULL,NULL),(83,'<h3>Hi, You can start editing your travel schedule</h3>',109,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:51',NULL,NULL),(84,'<h3>Hi, You can start editing your travel schedule</h3>',110,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:51',NULL,NULL),(85,'<h3>Hi, You can start editing your travel schedule</h3>',111,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:51',NULL,NULL),(86,'<h3>Hi, You can start editing your travel schedule</h3>',112,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:51',NULL,NULL),(87,'<h3>Hi, You can start editing your travel schedule</h3>',113,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:51',NULL,NULL),(88,'<h3>Hi, You can start editing your travel schedule</h3>',114,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:51',NULL,NULL),(89,'<h3>Hi, You can start editing your travel schedule</h3>',115,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:51',NULL,NULL),(90,'<h3>Hi, You can start editing your travel schedule</h3>',116,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:51',NULL,NULL),(91,'<h3>Hi, You can start editing your travel schedule</h3>',117,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:51',NULL,NULL),(92,'<h3>Hi, You can start editing your travel schedule</h3>',118,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:52',NULL,NULL),(93,'<h3>Hi, You can start editing your travel schedule</h3>',119,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:52',NULL,NULL),(94,'<h3>Hi, You can start editing your travel schedule</h3>',120,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:52',NULL,NULL),(95,'<h3>Hi, You can start editing your travel schedule</h3>',121,NULL,NULL,NULL,NULL,'new','2020-03-31 07:13:52',NULL,NULL),(96,'<h3>Hi, You can start editing your travel schedule</h3>',122,NULL,NULL,NULL,NULL,'new','2020-03-31 07:14:04',NULL,NULL),(97,'<h3>Hi, You can start editing your travel schedule</h3>',123,NULL,NULL,NULL,NULL,'new','2020-03-31 07:14:13',NULL,NULL),(98,'<h3>Hi, You can start editing your travel schedule</h3>',124,NULL,NULL,NULL,NULL,'new','2020-03-31 09:23:52',NULL,NULL),(99,'<h3>Hi, You can start editing your travel schedule</h3>',125,NULL,NULL,NULL,NULL,'new','2020-03-31 09:24:50',NULL,NULL);
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
INSERT INTO `services` VALUES (1,'Đưa đón tận nơi','edited','2020-03-18 13:09:39',NULL,NULL),(2,'Cho thuê xe máy','edited','2020-03-18 13:10:39',NULL,NULL),(3,'Free Wifi','edited','2020-03-20 13:40:50',NULL,NULL),(4,'Hỗ trợ người khuyết tật','new','2020-03-21 09:09:28',NULL,NULL),(5,'Sẵn vé máy bay','new','2020-03-21 09:09:38',NULL,NULL),(6,'Xe giường nằm','new','2020-03-21 09:09:50',NULL,NULL),(7,'Bãi biển đẹp','new','2020-03-21 09:10:01',NULL,NULL),(8,'Phòng ngủ tập thể','new','2020-03-21 09:10:22',NULL,NULL),(9,'Passport','new','2020-03-21 09:10:35',NULL,NULL),(10,'Tiệc sinh nhật đúng ngày','new','2020-03-21 09:10:47',NULL,NULL),(11,'Hướng dẫn viên','new','2020-03-21 09:10:57',NULL,NULL),(12,'Bảo hiểm','new','2020-03-21 09:11:05',NULL,NULL),(13,'Cho thuê xe đạp','new','2020-03-21 09:11:15',NULL,NULL),(14,'Tự do trong 1 ngày','new','2020-03-21 09:11:28',NULL,NULL),(15,'Phòng tập gym','new','2020-03-21 09:11:39',NULL,NULL),(16,'Dịch vụ spa','new','2020-03-21 09:11:51',NULL,NULL),(17,'Có bể bơi','new','2020-03-21 09:12:01',NULL,NULL),(18,'Trượt tuyết','new','2020-03-21 09:12:13',NULL,NULL),(19,'Bao bữa sáng','new','2020-03-21 09:12:25',NULL,NULL),(20,'Hỗ trợ visa','new','2020-03-21 09:12:36',NULL,NULL),(21,'Vé tham quan','deleted','2020-03-21 09:12:47',NULL,NULL),(22,'undefined','deleted','2020-03-22 09:05:50',NULL,NULL),(23,'undefined','deleted','2020-04-02 17:26:20',NULL,NULL),(24,'asdasd','deleted','2020-04-02 17:29:05',NULL,NULL),(25,'asd','deleted','2020-04-02 17:29:56',NULL,NULL),(26,'a','deleted','2020-04-02 17:30:11',NULL,NULL),(27,'asdasd','deleted','2020-04-02 17:31:50',NULL,NULL),(28,'Vé tham quan','new','2020-04-02 17:33:32',NULL,NULL);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'Ẩm thực','edited','2020-03-18 12:49:20',NULL,NULL),(2,'biển đảo','deleted','2020-03-18 12:50:31',NULL,NULL),(3,'Nghĩ dưỡng','edited','2020-03-18 12:50:57',NULL,NULL),(4,'Mạo hiểm','edited','2020-03-18 12:51:47',NULL,NULL),(5,'Đảo đẹp','edited','2020-03-22 08:33:21',NULL,NULL),(6,'cảnh đẹp','deleted','2020-03-25 12:19:21',NULL,NULL),(9,'sảnh đẹp','deleted','2020-04-02 17:00:16',NULL,NULL),(10,'sảnh đẹp','deleted','2020-04-02 17:01:33',NULL,NULL),(11,'a','deleted','2020-04-02 17:02:17',NULL,NULL),(12,'asdasd','deleted','2020-04-02 17:03:47',NULL,NULL);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `timelines`
--

LOCK TABLES `timelines` WRITE;
/*!40000 ALTER TABLE `timelines` DISABLE KEYS */;
INSERT INTO `timelines` VALUES (1,68,'Nhà Hàng ','Đoàn cất hành lý tại Nhà Hàng Nổi. Sau đó, di chuyển tắm biển và lặn san hô.','2020-03-12 00:00:00','edited','2020-03-18 13:02:22',NULL,NULL),(2,68,'Nhà Hàng ABCED','Đoàn cất hành lý tại Nhà Hàng Nổi. Sau đó, di chuyển tắm biển và lặn san hô.','2020-03-21 00:00:00','deleted','2020-03-20 13:47:19',NULL,NULL),(3,68,'Nhà Hàng Du Thuyền','Đoàn dùng cơm trưa tại Nhà Hàng Du Thuyền với đặc sản Bình Ba.(Khách có thể kêu thêm tôm hùm theo ý muốn, tôm sống bắt tại bè để chế biến, có thể cầm chụp hình)','2020-03-14 00:00:00','edited','2020-03-20 13:49:00',NULL,NULL),(4,66,'Tiêu đề gì nhởs123','Mô tả gì đây','2020-03-25 00:00:00','deleted','2020-04-02 09:12:16',NULL,NULL),(5,66,'Tiêu đề gì nhởaa','Mô tả gì đây','2020-03-13 00:00:00','deleted','2020-04-02 09:12:16',NULL,NULL),(6,67,'Tiêu đề','Mô tả','2020-04-02 00:00:00','new','2020-04-02 09:14:31',NULL,NULL),(7,68,'a','a','2020-04-02 00:00:00','deleted','2020-04-02 09:19:19',NULL,NULL),(8,68,'a','a','2020-04-02 00:00:00','deleted','2020-04-02 09:30:16',NULL,NULL),(9,66,'Tiêu đề gì nhở 1','Mô tả gì đây','2020-04-03 00:00:00','deleted','2020-04-02 09:39:16',NULL,NULL),(10,66,'asd123','asdasdasd','2020-03-31 00:00:00','deleted','2020-04-02 09:42:56',NULL,NULL),(11,66,'asdasd123','asdasdasd','2020-04-01 00:00:00','deleted','2020-04-02 09:42:56',NULL,NULL),(12,66,'asd123','asdasd','2020-03-31 00:00:00','deleted','2020-04-02 09:45:11',NULL,NULL),(13,66,'asd','adasd','2020-04-02 00:00:00','deleted','2020-04-02 09:45:12',NULL,NULL),(14,66,'asd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 09:45:59',NULL,NULL),(15,66,'123','123123123123','2020-04-01 00:00:00','deleted','2020-04-02 09:46:53',NULL,NULL),(16,66,'asd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 09:49:23',NULL,NULL),(17,68,'Đảo AC','Đảo AC','2020-04-02 00:00:00','deleted','2020-04-02 09:50:29',NULL,NULL),(18,66,'Tieu de','Mo ta','2020-04-02 00:00:00','deleted','2020-04-02 09:56:15',NULL,NULL),(19,66,'adasd','asdasdasd','2020-04-02 00:00:00','deleted','2020-04-02 09:59:49',NULL,NULL),(20,66,'asd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:03:54',NULL,NULL),(21,66,'a','a','2020-04-02 00:00:00','deleted','2020-04-02 10:05:48',NULL,NULL),(22,66,'asd','asd','2020-04-02 00:00:00','deleted','2020-04-02 10:07:04',NULL,NULL),(23,66,'adasd','asdasdasdasd','2020-04-01 00:00:00','deleted','2020-04-02 10:10:07',NULL,NULL),(24,66,'adasd','asdasdasdasd','2020-03-29 00:00:00','deleted','2020-04-02 10:10:24',NULL,NULL),(25,66,'asdasdas','dasdasdasd','2020-03-31 00:00:00','deleted','2020-04-02 10:10:25',NULL,NULL),(26,66,'asdasdas','dasdasdasd','2020-03-30 00:00:00','deleted','2020-04-02 10:11:04',NULL,NULL),(27,66,'asd','asdasdadasd','2020-04-02 00:00:00','deleted','2020-04-02 10:11:05',NULL,NULL),(28,66,'asd','asdasdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:11:45',NULL,NULL),(29,66,'sadasdasdasd','asdasda','2020-04-02 00:00:00','deleted','2020-04-02 10:12:27',NULL,NULL),(30,66,'asdasd','asda','2020-04-01 00:00:00','deleted','2020-04-02 10:12:47',NULL,NULL),(31,66,'asd','sdasdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:12:48',NULL,NULL),(32,66,'asdasd','asdadasdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:12:48',NULL,NULL),(33,68,'AC','AC','2020-03-29 00:00:00','deleted','2020-04-02 10:13:38',NULL,NULL),(34,68,'DD','DD','2020-04-02 00:00:00','deleted','2020-04-02 10:13:38',NULL,NULL),(35,66,'asd','asd','2020-04-02 00:00:00','deleted','2020-04-02 10:13:56',NULL,NULL),(36,66,'asd','asdasdasd','2020-03-31 00:00:00','deleted','2020-04-02 10:14:27',NULL,NULL),(37,66,'asd','asdasdasd','2020-04-01 00:00:00','deleted','2020-04-02 10:14:33',NULL,NULL),(38,66,'asda','sdasdasdasdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:14:33',NULL,NULL),(39,66,'asd','asdasdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:14:40',NULL,NULL),(40,66,'asda','sdasdasdasdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:14:40',NULL,NULL),(41,66,'asdasd','asdasdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:14:40',NULL,NULL),(42,68,'AC','AC','2020-04-02 00:00:00','deleted','2020-04-02 10:33:31',NULL,NULL),(43,68,'asd','adasd','2020-04-02 00:00:00','new','2020-04-02 10:35:22',NULL,NULL),(44,66,'asdasd','asdasdasd','2020-04-01 00:00:00','deleted','2020-04-02 10:36:31',NULL,NULL),(45,66,'asdasd','asdasdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:36:35',NULL,NULL),(46,66,'asdasd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:36:35',NULL,NULL),(47,66,'asd','dasd','2020-04-02 00:00:00','deleted','2020-04-02 10:37:12',NULL,NULL),(48,66,'asd','dasd','2020-04-02 00:00:00','deleted','2020-04-02 10:37:25',NULL,NULL),(49,66,'asdasd','asdasd','2020-04-01 00:00:00','deleted','2020-04-02 10:37:25',NULL,NULL),(50,66,'asdasd','ad','2020-04-01 00:00:00','deleted','2020-04-02 10:37:25',NULL,NULL),(51,66,'asd','asd','2020-04-01 00:00:00','deleted','2020-04-02 10:37:26',NULL,NULL),(52,66,'asd','asdasdaad','2020-04-02 00:00:00','deleted','2020-04-02 10:38:11',NULL,NULL),(53,66,'asd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:38:21',NULL,NULL),(54,66,'asdasd','asdasdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:38:32',NULL,NULL),(55,66,'asdasd','asdasdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:38:32',NULL,NULL),(56,66,'asdasd','asdasdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:38:38',NULL,NULL),(57,66,'asdasd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:38:39',NULL,NULL),(58,66,'asdasd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:38:59',NULL,NULL),(59,66,'asd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:39:00',NULL,NULL),(60,66,'asd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:39:00',NULL,NULL),(61,66,'asdasd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:39:12',NULL,NULL),(62,66,'asd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:39:13',NULL,NULL),(63,66,'asd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:39:13',NULL,NULL),(64,66,'asdasd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:39:44',NULL,NULL),(65,66,'asd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:39:45',NULL,NULL),(66,66,'asd','asd','2020-04-02 00:00:00','deleted','2020-04-02 10:39:45',NULL,NULL),(67,66,'a','sdasdasd','2020-04-01 00:00:00','deleted','2020-04-02 10:39:45',NULL,NULL),(68,66,'a','sdasdasd','2020-04-01 00:00:00','deleted','2020-04-02 10:41:00',NULL,NULL),(69,66,'asd','asd','2020-04-02 00:00:00','deleted','2020-04-02 10:41:00',NULL,NULL),(70,66,'a','sdasdasd','2020-04-01 00:00:00','deleted','2020-04-02 10:41:10',NULL,NULL),(71,66,'asd','asd','2020-04-02 00:00:00','deleted','2020-04-02 10:41:10',NULL,NULL),(72,66,'asd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:41:11',NULL,NULL),(73,66,'a','sdasdasd','2020-04-01 00:00:00','deleted','2020-04-02 10:41:16',NULL,NULL),(74,66,'asd','asd','2020-04-02 00:00:00','deleted','2020-04-02 10:41:16',NULL,NULL),(75,66,'asd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:41:16',NULL,NULL),(76,66,'asd','asdasd','2020-04-02 00:00:00','deleted','2020-04-02 10:41:17',NULL,NULL),(77,66,'a','sdasdasd','2020-04-01 00:00:00','deleted','2020-04-02 10:41:43',NULL,NULL),(78,66,'11','111','2020-04-02 00:00:00','deleted','2020-04-02 10:41:43',NULL,NULL),(79,66,'aw1','sdasdasd','2020-04-01 00:00:00','deleted','2020-04-02 10:41:57',NULL,NULL),(80,66,'1','1','2020-03-17 00:00:00','edited','2020-04-02 10:41:57',NULL,NULL),(81,66,'3333','3333','2020-04-02 00:00:00','deleted','2020-04-02 10:42:47',NULL,NULL),(82,66,'333','3','2020-04-02 00:00:00','deleted','2020-04-02 10:43:58',NULL,NULL),(83,66,'333','3','2020-04-02 00:00:00','deleted','2020-04-02 10:44:10',NULL,NULL),(84,66,'4','4','2020-04-01 00:00:00','deleted','2020-04-02 10:44:10',NULL,NULL),(85,66,'4','4','2020-04-01 00:00:00','deleted','2020-04-02 10:45:59',NULL,NULL),(86,66,'5','5','2020-04-02 00:00:00','deleted','2020-04-02 10:46:00',NULL,NULL),(87,66,'3','3','2020-04-01 00:00:00','deleted','2020-04-02 10:46:21',NULL,NULL),(88,66,'4','4','2020-04-02 00:00:00','deleted','2020-04-02 10:47:25',NULL,NULL),(89,66,'4','4','2020-04-02 00:00:00','deleted','2020-04-02 10:47:35',NULL,NULL),(90,66,'5','5','2020-04-02 00:00:00','deleted','2020-04-02 10:47:36',NULL,NULL),(91,66,'2','2','2020-04-02 00:00:00','deleted','2020-04-02 10:49:17',NULL,NULL),(92,66,'2','2','2020-04-02 00:00:00','deleted','2020-04-02 10:49:22',NULL,NULL),(93,66,'3','3','2020-04-02 00:00:00','deleted','2020-04-02 10:49:22',NULL,NULL),(94,66,'2','2','2020-04-02 00:00:00','deleted','2020-04-02 10:50:00',NULL,NULL),(95,66,'3','3','2020-04-02 00:00:00','deleted','2020-04-02 10:50:04',NULL,NULL),(96,66,'2','2','2020-04-02 00:00:00','deleted','2020-04-02 10:50:04',NULL,NULL),(97,66,'2','2','2020-04-02 00:00:00','deleted','2020-04-02 10:50:24',NULL,NULL),(98,66,'2','2','2020-04-02 00:00:00','deleted','2020-04-02 10:53:10',NULL,NULL),(99,66,'2','2','2020-04-02 00:00:00','deleted','2020-04-02 10:53:14',NULL,NULL),(100,66,'3','3','2020-04-02 00:00:00','deleted','2020-04-02 10:53:14',NULL,NULL),(101,66,'2','2','2020-04-02 00:00:00','deleted','2020-04-02 10:53:49',NULL,NULL),(102,66,'2','2','2020-04-02 00:00:00','deleted','2020-04-02 10:55:47',NULL,NULL),(103,66,'3','3','2020-04-02 00:00:00','deleted','2020-04-02 10:55:50',NULL,NULL),(104,66,'2','2','2020-04-02 00:00:00','deleted','2020-04-02 10:55:56',NULL,NULL),(105,66,'2','2','2020-04-02 00:00:00','deleted','2020-04-02 10:56:17',NULL,NULL),(106,66,'3','3','2020-04-02 00:00:00','deleted','2020-04-02 10:56:18',NULL,NULL),(107,66,'4','4','2020-04-02 00:00:00','deleted','2020-04-02 10:56:21',NULL,NULL),(108,66,'2','2','2020-04-01 00:00:00','edited','2020-04-02 10:56:44',NULL,NULL),(109,66,'3','3','2020-04-01 00:00:00','edited','2020-04-02 10:56:50',NULL,NULL),(110,66,'4','4','2020-04-02 00:00:00','deleted','2020-04-02 10:56:50',NULL,NULL);
/*!40000 ALTER TABLE `timelines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tours`
--

LOCK TABLES `tours` WRITE;
/*!40000 ALTER TABLE `tours` DISABLE KEYS */;
INSERT INTO `tours` VALUES (66,'Tour đi sapa',8000000,11,'2020-04-29 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Sapa Việt Nam','3N 2Đ','Europe','[\"Ẩm thực\",\"Nghĩ dưỡng\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',NULL,NULL,0,7,'edited','2019-11-30 17:39:57','2020-04-16 07:42:05',NULL),(67,'test 00000000000000000001',60000,5,'2020-04-11 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Hà Nội, Phú Quốc, Phan Thiết','2N 1Đ','America',NULL,NULL,NULL,NULL,2,7,'edited','2019-11-30 17:46:02','2020-04-16 08:06:05',NULL),(68,'Tham Quan Bình Ba- Quốc Đảo Tôm Hùm 1 Ngày',720000,10,'2020-03-23 00:00:00','Khánh Hoà','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Nha Trang, Khánh Hoà','2N 1Đ','Asia',NULL,NULL,NULL,NULL,7,7,'edited','2019-12-07 14:24:40','2020-04-01 06:42:33',NULL),(70,'test 00000000000000000004',100000,0,'2020-03-23 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Đà Lạt, Quy Nhơn','2N 1Đ','Asia',NULL,NULL,NULL,NULL,0,7,'edited','2019-12-17 18:06:08','2020-04-01 06:43:19',NULL),(71,'test 00000000000000000003',30000,0,'2020-03-23 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','187 Dien Bien Phu, Da Kao Ward','9N 8Đ','Europe',NULL,NULL,NULL,NULL,0,7,'edited','2019-12-20 06:21:41','2020-04-01 06:43:30',NULL),(72,'Mùa hè với Hoa Anh Đào nhé',50000000,10,'2020-09-09 00:00:00','Hồ Chí Minh','Đi nhật bản chơi','Nhật Bản - nhat-ban','2N 1Đ','NorthernVietnam',NULL,NULL,NULL,NULL,NULL,7,'edited','2020-01-03 07:56:14','2020-03-31 05:55:37',NULL),(73,'test111111',10,0,'2020-09-08 00:00:00','Hồ Chí Minh','ádas','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','6N 5Đ','NorthCentral',NULL,NULL,NULL,NULL,0,7,'edited','2020-01-03 07:57:31','2020-04-01 06:44:07',NULL),(74,'test111111qwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','1N 0Đ','SouthCentralCoast',NULL,NULL,NULL,NULL,NULL,7,'edited','2020-01-03 07:57:41','2020-03-31 05:55:38',NULL),(75,'test 00000000000000000001',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','ádasd','2N 1Đ','CentralHighlands',NULL,NULL,NULL,NULL,NULL,7,'edited','2020-01-03 07:57:54','2020-03-31 05:55:39',NULL),(76,'testqwqwqwqwqwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ád','Thủ Đức','2N 1Đ','Southeast',NULL,NULL,NULL,NULL,NULL,7,'edited','2020-01-03 07:58:07','2020-03-31 05:55:35',NULL),(77,'testqwqwqwqwqwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','k','Thủ Đức','2N 1Đ','MekongRiverDelta',NULL,NULL,NULL,NULL,NULL,7,'edited','2020-01-04 04:14:16','2020-03-31 05:55:39',NULL),(78,'test 00000000000000000111',5000000,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','Thủ Đức','3N 2Đ','MekongRiverDelta',NULL,NULL,NULL,NULL,NULL,0,'edited','2020-01-04 05:47:56','2020-03-31 05:55:40',NULL),(79,'test 00000000000000000001',50000,5,'2020-04-11 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Hà Nội, Phú Quốc, Phan Thiết','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:48',NULL,NULL),(80,'test 00000000000000000003',30000,0,'0000-00-00 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','187 Dien Bien Phu, Da Kao Ward','9N 8Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(81,'test 00000000000000000004',100000,0,'0000-00-00 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Đà Lạt, Quy Nhơn','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(82,'test 00000000000000000003',30000,0,'0000-00-00 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','187 Dien Bien Phu, Da Kao Ward','9N 8Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(83,'Mùa hè với Hoa Anh Đào nhé',50000000,10,'2020-09-09 00:00:00','Hồ Chí Minh','Đi nhật bản chơi','Nhật Bản - nhat-ban','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(84,'test111111',10,0,'0000-00-00 00:00:00','Hồ Chí Minh','ádas','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','6N 5Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(85,'test111111qwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','1N 0Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(86,'test 00000000000000000001',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','ádasd','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(87,'Tham Quan Bình Ba- Quốc Đảo Tôm Hùm 1 Ngày',570000,10,'2020-03-24 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Nha Trang, Khánh Hoà','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(88,'testqwqwqwqwqwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ád','Thủ Đức','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(89,'Tour đi sapa',8000000,11,'2020-11-04 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Sapa Việt Nam','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(90,'Tour đi sapa',8000000,11,'2020-11-04 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Sapa Việt Nam','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(91,'test 00000000000000000001',50000,5,'2020-04-11 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Hà Nội, Phú Quốc, Phan Thiết','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(92,'Tham Quan Bình Ba- Quốc Đảo Tôm Hùm 1 Ngày',570000,10,'2020-03-24 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Nha Trang, Khánh Hoà','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(93,'test 00000000000000000004',100000,0,'0000-00-00 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Đà Lạt, Quy Nhơn','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(94,'test 00000000000000000003',30000,0,'0000-00-00 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','187 Dien Bien Phu, Da Kao Ward','9N 8Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:49',NULL,NULL),(95,'Mùa hè với Hoa Anh Đào nhé',50000000,10,'2020-09-09 00:00:00','Hồ Chí Minh','Đi nhật bản chơi','Nhật Bản - nhat-ban','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:50',NULL,NULL),(96,'test111111',10,0,'0000-00-00 00:00:00','Hồ Chí Minh','ádas','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','6N 5Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:50',NULL,NULL),(97,'test111111qwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','1N 0Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:50',NULL,NULL),(98,'test 00000000000000000001',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','ádasd','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:50',NULL,NULL),(99,'testqwqwqwqwqwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ád','Thủ Đức','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:50',NULL,NULL),(100,'Tour đi sapa',8000000,11,'2020-11-04 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Sapa Việt Nam','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:50',NULL,NULL),(101,'test 00000000000000000001',50000,5,'2020-04-11 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Hà Nội, Phú Quốc, Phan Thiết','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:50',NULL,NULL),(102,'Tham Quan Bình Ba- Quốc Đảo Tôm Hùm 1 Ngày',570000,10,'2020-03-24 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Nha Trang, Khánh Hoà','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:50',NULL,NULL),(103,'test 00000000000000000004',100000,0,'0000-00-00 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Đà Lạt, Quy Nhơn','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:50',NULL,NULL),(104,'test 00000000000000000004',100000,0,'0000-00-00 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Đà Lạt, Quy Nhơn','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:50',NULL,NULL),(105,'test 00000000000000000003',30000,0,'0000-00-00 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','187 Dien Bien Phu, Da Kao Ward','9N 8Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:50',NULL,NULL),(106,'Mùa hè với Hoa Anh Đào nhé',50000000,10,'2020-09-09 00:00:00','Hồ Chí Minh','Đi nhật bản chơi','Nhật Bản - nhat-ban','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:50',NULL,NULL),(107,'test111111',10,0,'0000-00-00 00:00:00','Hồ Chí Minh','ádas','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','6N 5Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:51',NULL,NULL),(108,'test111111qwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','1N 0Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:51',NULL,NULL),(109,'test 00000000000000000001',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','ádasd','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:51',NULL,NULL),(110,'testqwqwqwqwqwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ád','Thủ Đức','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:51',NULL,NULL),(111,'testqwqwqwqwqwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ád','Thủ Đức','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:51',NULL,NULL),(112,'Tour đi sapa',8000000,11,'2020-11-04 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Sapa Việt Nam','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:51',NULL,NULL),(113,'test 00000000000000000001',50000,5,'2020-04-11 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Hà Nội, Phú Quốc, Phan Thiết','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:51',NULL,NULL),(114,'Tham Quan Bình Ba- Quốc Đảo Tôm Hùm 1 Ngày',570000,10,'2020-03-24 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Nha Trang, Khánh Hoà','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:51',NULL,NULL),(115,'test 00000000000000000004',100000,0,'0000-00-00 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Đà Lạt, Quy Nhơn','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:51',NULL,NULL),(116,'Mùa hè với Hoa Anh Đào nhé',50000000,10,'2020-09-09 00:00:00','Hồ Chí Minh','Đi nhật bản chơi','Nhật Bản - nhat-ban','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:51',NULL,NULL),(117,'test 00000000000000000003',30000,0,'0000-00-00 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','187 Dien Bien Phu, Da Kao Ward','9N 8Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:51',NULL,NULL),(118,'test111111qwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','1N 0Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:52',NULL,NULL),(119,'test 00000000000000000001',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ádasd','ádasd','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:52',NULL,NULL),(120,'testqwqwqwqwqwqw',10,0,'2020-09-09 00:00:00','Hồ Chí Minh','ád','Thủ Đức','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:52',NULL,NULL),(121,'test 00000000000000000001',50000,5,'2020-04-11 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Hà Nội, Phú Quốc, Phan Thiết','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:13:52',NULL,NULL),(122,'Tour đi sapa',8000000,11,'2020-11-04 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Sapa Việt Nam','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:14:04',NULL,NULL),(123,'test 00000000000000000001',50000,5,'2020-04-11 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Hà Nội, Phú Quốc, Phan Thiết','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 07:14:13',NULL,NULL),(124,'Mùa hè với Hoa Anh Đào nhé',10,0,'2020-04-10 00:00:00','Hồ Chí Minh','asdasd','Thu-Duc District, Loc-Ninh district, Binh-Phuoc province','0 ngày','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 09:23:52',NULL,NULL),(125,'Tour đi sapa',8000000,11,'2020-11-04 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Sapa Việt Nam','2N 1Đ','vietnam','[\"ẩm thực\",\"undefined\"]','[\"Đưa đón tận nơi\",\"Cho thuê xe máy\",\"Free Wifi\",\"Sẵn vé máy bay\",\"Bãi biển đẹp\",\"Phòng ngủ tập thể\",\"Hướng dẫn viên\",\"Tự do trong 1 ngày\",\"Có bể bơi\",\"Trượt tuyết\",\"Hỗ trợ visa\"]',0,0,0,7,'new','2020-03-31 09:24:50',NULL,NULL);
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

-- Dump completed on 2020-04-26  8:12:57
