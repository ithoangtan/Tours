CREATE DATABASE  IF NOT EXISTS `azmszdk4w6h5j1o6` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `azmszdk4w6h5j1o6`;
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
INSERT INTO `accounts` VALUES (6,'name','email','0983982930','user','email3','$2a$10$Y49SHMgqXl6xTw7ovBUFOuQduXywptZ7QeyItgmP2Is1B0k.M9Qse','/img/avatarDefault.jpg',NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,'new','2019-11-29 08:43:33',NULL,NULL),(7,'ithoangtan','ithoangtan@gmail.com','0983982933','administrator','ithoangtan@gmail.com','$2a$10$Y49SHMgqXl6xTw7ovBUFOuQduXywptZ7QeyItgmP2Is1B0k.M9Qse','/img/avatarDefault.jpg',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'new','2019-11-29 10:47:51',NULL,NULL),(8,'8','8','8','8','8','8','8','8','8','8','8','8','1996-09-09 00:00:00',1,NULL,'edited','2019-09-09 00:00:00','2020-01-03 04:20:11','2019-12-17 23:02:37'),(28,'Hoàng Trọng Tấn','it10069001@gmail.com','84983982933','user','Hoàng Tấn','$2a$10$N36aPiTT7mjoNins/fXOt.LYHER4/qGde.b3zuS2CbYGrNh///lBa','/img/1578015917176_happy-new-year-2020-background_29865-882.jpg',NULL,NULL,'kinhdaonhtourdulich.comn','12345432151651','none','1996-09-05 10:00:00',1,'1MMubRUGqvGgrsG5snrL1ZXLyKECYiPb','edited','2019-12-24 18:26:59','2020-01-03 04:20:11',NULL);
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
-- Dumping data for table `evaulates`
--

LOCK TABLES `evaulates` WRITE;
/*!40000 ALTER TABLE `evaulates` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaulates` ENABLE KEYS */;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`vke6ut5wnkjh7y47`@`%`*/ /*!50003 TRIGGER `azmszdk4w6h5j1o6`.`evaulates_BEFORE_UPDATE` BEFORE UPDATE ON `evaulates` FOR EACH ROW
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
INSERT INTO `images` VALUES (164,'/img/1575110775686_italian-landscape-mountains-nature.jpg','done',' 1575110775686_italian-landscape-mountains-nature.jpg',67,'deleted','2019-11-30 17:46:15','2019-12-17 18:04:45',NULL),(165,'/img/1575110779391_phuong-phap-chup-anh-phong-canh.jpg','done',' 1575110779391_phuong-phap-chup-anh-phong-canh.jpg',67,'deleted','2019-11-30 17:46:19','2019-12-17 18:04:46',NULL),(167,'/img/1575113186326_pexels-photo-372166.jpeg','done',' 1575113186326_pexels-photo-372166.jpeg',67,'deleted','2019-11-30 18:26:26','2019-12-17 18:04:46',NULL),(168,'/img/1575113452049_chup-anh-phong-canh.jpg','done',' 1575113452049_chup-anh-phong-canh.jpg',67,'deleted','2019-11-30 18:30:52','2019-12-17 18:04:47',NULL),(174,'/img/1576396544196_italian-landscape-mountains-nature.jpg','done',' 1576396544196_italian-landscape-mountains-nature.jpg',67,'deleted','2019-12-15 14:55:44','2019-12-17 18:04:48',NULL),(175,'/img/1576396566503_italian-landscape-mountains-nature.jpg','done',' 1576396566503_italian-landscape-mountains-nature.jpg',67,'deleted','2019-12-15 14:56:06','2019-12-20 06:23:32',NULL),(176,'/img/1576400628844_chup-anh-phong-canh.jpg','done',' 1576400628844_chup-anh-phong-canh.jpg',66,'deleted','2019-12-15 16:03:48','2019-12-20 06:23:45',NULL),(177,'/img/1576408598613_italian-landscape-mountains-nature.jpg','done',' 1576408598613_italian-landscape-mountains-nature.jpg',NULL,'deleted','2019-12-15 18:16:38','2019-12-17 23:22:16',NULL),(178,'/img/1576605900266_italian-landscape-mountains-nature.jpg','done',' 1576605900266_italian-landscape-mountains-nature.jpg',67,'deleted','2019-12-17 18:05:01','2019-12-20 06:23:33',NULL),(179,'/img/1576605981121_pexels-photo-814499.jpeg','done',' 1576605981121_pexels-photo-814499.jpeg',70,'deleted','2019-12-17 18:06:22','2019-12-20 06:23:22',NULL),(180,'/img/1576607212291_italian-landscape-mountains-nature.jpg','done',' 1576607212291_italian-landscape-mountains-nature.jpg',66,'deleted','2019-12-17 18:26:53','2019-12-20 06:23:46',NULL),(181,'/img/1576822959812_destination-6.jpg','done',' 1576822959812_destination-6.jpg',71,'deleted','2019-12-20 06:22:46','2019-12-20 07:15:44',NULL),(182,'/img/1576822972595_destination-8.jpg','done',' 1576822972595_destination-8.jpg',68,'deleted','2019-12-20 06:22:54','2019-12-20 07:14:32',NULL),(183,'/img/1576823007972_destination-2.jpg','done',' 1576823007972_destination-2.jpg',70,'deleted','2019-12-20 06:23:29','2019-12-20 07:15:30',NULL),(184,'/img/1576823016387_destination-7.jpg','done',' 1576823016387_destination-7.jpg',67,'deleted','2019-12-20 06:23:37','2019-12-20 07:15:21',NULL),(185,'/img/1576823022254_destination-3.jpg','done',' 1576823022254_destination-3.jpg',67,'deleted','2019-12-20 06:23:44','2019-12-20 07:15:22',NULL),(186,'/img/1576823031540_destination-5.jpg','done',' 1576823031540_destination-5.jpg',66,'deleted','2019-12-20 06:23:53','2019-12-20 07:15:14',NULL),(187,'/img/1576823037151_destination-11.jpg','done',' 1576823037151_destination-11.jpg',66,'deleted','2019-12-20 06:23:58','2019-12-20 07:15:14',NULL),(188,'/img/1576824407775_bg_2.jpg','done',' 1576824407775_bg_2.jpg',68,'deleted','2019-12-20 06:46:56','2019-12-20 10:25:26',NULL),(189,'/img/1576826079891_blog-2.jpg','done',' 1576826079891_blog-2.jpg',68,'deleted','2019-12-20 07:14:44','2019-12-20 10:25:26',NULL),(190,'/img/1576826119849_cover-img-3.jpg','done',' 1576826119849_cover-img-3.jpg',66,'deleted','2019-12-20 07:15:26','2019-12-20 10:25:09',NULL),(191,'/img/1576826126841_blog-4.jpg','done',' 1576826126841_blog-4.jpg',67,'deleted','2019-12-20 07:15:28','2019-12-20 10:25:17',NULL),(192,'/img/1576826134161_cover-img-2.jpg','done',' 1576826134161_cover-img-2.jpg',70,'deleted','2019-12-20 07:15:34','2019-12-20 10:25:41',NULL),(193,'/img/1576826142933_img_bg_2.jpg','done',' 1576826142933_img_bg_2.jpg',70,'deleted','2019-12-20 07:15:43','2019-12-20 10:25:41',NULL),(194,'/img/1576826152644_tour-7.jpg','done',' 1576826152644_tour-7.jpg',71,'deleted','2019-12-20 07:15:52','2019-12-20 10:26:06',NULL),(195,'/img/1576826158127_tour-8.jpg','done',' 1576826158127_tour-8.jpg',71,'deleted','2019-12-20 07:15:58','2019-12-20 10:26:06',NULL),(196,'/img/1576837521044_cover-img-4.jpg','done',' 1576837521044_cover-img-4.jpg',67,'deleted','2019-12-20 10:25:22','2019-12-24 08:26:25',NULL),(197,'/img/1576837521044_cover-img-4.jpg','done',' 1576837521044_cover-img-4.jpg',66,'deleted','2019-12-20 10:25:23','2019-12-24 08:26:00',NULL),(198,'/img/1576837533462_img_bg_2.jpg','done',' 1576837533462_img_bg_2.jpg',68,'deleted','2019-12-20 10:25:35','2019-12-24 08:26:39',NULL),(199,'/img/1576837536015_blog-1.jpg','done',' 1576837536015_blog-1.jpg',68,'deleted','2019-12-20 10:25:37','2019-12-24 08:26:40',NULL),(200,'/img/1576837549396_room-4.jpg','done',' 1576837549396_room-4.jpg',70,'deleted','2019-12-20 10:25:49','2019-12-24 08:27:04',NULL),(201,'/img/1576837561721_hotel-6.jpg','done',' 1576837561721_hotel-6.jpg',70,'deleted','2019-12-20 10:26:02','2019-12-24 08:27:05',NULL),(202,'/img/1576837573296_tour-4.jpg','done',' 1576837573296_tour-4.jpg',71,'deleted','2019-12-20 10:26:13','2019-12-24 08:27:18',NULL),(203,'/img/1576837578783_tour-3.jpg','done',' 1576837578783_tour-3.jpg',71,'deleted','2019-12-20 10:26:18','2019-12-24 08:27:18',NULL),(204,'/img/1576837585755_tour-6.jpg','done',' 1576837585755_tour-6.jpg',71,'deleted','2019-12-20 10:26:25','2019-12-24 08:27:19',NULL),(205,'/img/1576837592454_tour-2.jpg','done',' 1576837592454_tour-2.jpg',66,'deleted','2019-12-20 10:26:32','2019-12-24 08:26:00',NULL),(206,'/img/1577175979863_tour-2.jpg','done',' 1577175979863_tour-2.jpg',66,'deleted','2019-12-24 08:26:21','2019-12-24 18:23:30',NULL),(207,'/img/1577175979863_tour-2.jpg','done',' 1577175979863_tour-2.jpg',66,'deleted','2019-12-24 08:26:22','2019-12-24 18:23:28',NULL),(208,'/img/1577175990831_tour-3.jpg','done',' 1577175990831_tour-3.jpg',67,'deleted','2019-12-24 08:26:33','2019-12-24 18:23:40',NULL),(209,'/img/1577176007497_tour-4.jpg','done',' 1577176007497_tour-4.jpg',68,'deleted','2019-12-24 08:26:50','2019-12-24 18:23:59',NULL),(210,'/img/1577176018490_img_bg_1.jpg','done',' 1577176018490_img_bg_1.jpg',68,'deleted','2019-12-24 08:27:01','2019-12-24 18:23:59',NULL),(211,'/img/1577176029714_tour-7.jpg','done',' 1577176029714_tour-7.jpg',70,'deleted','2019-12-24 08:27:11','2019-12-24 18:24:09',NULL),(212,'/img/1577176033958_tour-8.jpg','done',' 1577176033958_tour-8.jpg',70,'deleted','2019-12-24 08:27:15','2019-12-24 18:24:10',NULL),(213,'/img/1577176045684_tour-6.jpg','done',' 1577176045684_tour-6.jpg',71,'deleted','2019-12-24 08:27:28','2019-12-24 18:24:22',NULL),(214,'/img/1577176053123_tour-8.jpg','done',' 1577176053123_tour-8.jpg',71,'deleted','2019-12-24 08:27:35','2019-12-24 18:24:23',NULL),(215,'/img/1577176055936_blog-1.jpg','done',' 1577176055936_blog-1.jpg',71,'deleted','2019-12-24 08:27:37','2019-12-24 18:24:23',NULL),(216,'/img/1577176063157_blog-4.jpg','done',' 1577176063157_blog-4.jpg',71,'deleted','2019-12-24 08:27:45','2019-12-24 18:24:24',NULL),(217,'/img/1577176068859_blog-3.jpg','done',' 1577176068859_blog-3.jpg',66,'deleted','2019-12-24 08:27:52','2019-12-24 18:23:29',NULL),(218,'/img/1577176074618_hotel-9.jpg','done',' 1577176074618_hotel-9.jpg',66,'deleted','2019-12-24 08:27:56','2019-12-24 18:23:30',NULL),(219,'/img/1577211815400_img_bg_2.jpg','done',' 1577211815400_img_bg_2.jpg',66,'deleted','2019-12-24 18:23:45','2019-12-25 19:51:04',NULL),(220,'/img/1577211828429_tour-5.jpg','done',' 1577211828429_tour-5.jpg',67,'deleted','2019-12-24 18:23:49','2019-12-25 19:51:08',NULL),(221,'/img/1577211836724_tour-6.jpg','done',' 1577211836724_tour-6.jpg',66,'deleted','2019-12-24 18:23:57','2019-12-25 19:51:06',NULL),(222,'/img/1577211845973_tour-3.jpg','done',' 1577211845973_tour-3.jpg',68,'deleted','2019-12-24 18:24:07','2019-12-25 19:51:11',NULL),(223,'/img/1577211857000_img_bg_1.jpg','done',' 1577211857000_img_bg_1.jpg',70,'deleted','2019-12-24 18:24:18','2019-12-25 19:51:15',NULL),(224,'/img/1577211873557_tour-1.jpg','done',' 1577211873557_tour-1.jpg',71,'deleted','2019-12-24 18:24:33','2019-12-25 19:51:19',NULL),(225,'/img/1577304654956_img_bg_2.jpg','done',' 1577304654956_img_bg_2.jpg',66,'deleted','2019-12-25 20:11:10','2019-12-25 23:14:07',NULL),(226,'/img/1577304671633_tour-5.jpg','done',' 1577304671633_tour-5.jpg',71,'deleted','2019-12-25 20:11:11','2019-12-25 23:14:27',NULL),(227,'/img/1577304672056_tour-7.jpg','done',' 1577304672056_tour-7.jpg',66,'deleted','2019-12-25 20:11:12','2019-12-25 23:14:08',NULL),(228,'/img/1577304672056_tour-7.jpg','done',' 1577304672056_tour-7.jpg',68,'deleted','2019-12-25 20:11:13','2019-12-25 23:14:13',NULL),(229,'/img/1577304672056_tour-7.jpg','done',' 1577304672056_tour-7.jpg',67,'deleted','2019-12-25 20:11:13','2019-12-25 20:13:51',NULL),(230,'/img/1577304672056_tour-7.jpg','done',' 1577304672056_tour-7.jpg',67,'deleted','2019-12-25 20:11:14','2019-12-25 20:13:48',NULL),(231,'/img/1577304676190_tour-8.jpg','done',' 1577304676190_tour-8.jpg',70,'deleted','2019-12-25 20:11:17','2019-12-25 23:14:20',NULL),(232,'/img/1577304676190_tour-8.jpg','done',' 1577304676190_tour-8.jpg',66,'deleted','2019-12-25 20:11:18','2019-12-25 23:14:09',NULL),(233,'/img/1577304676190_tour-8.jpg','done',' 1577304676190_tour-8.jpg',66,'deleted','2019-12-25 20:11:25','2019-12-25 23:14:09',NULL),(234,'/img/1577304686105_hotel-1.jpg','done',' 1577304686105_hotel-1.jpg',71,'deleted','2019-12-25 20:11:26','2019-12-25 23:14:28',NULL),(235,'/img/1577304691485_hotel-6.jpg','done',' 1577304691485_hotel-6.jpg',70,'deleted','2019-12-25 20:11:31','2019-12-25 23:14:21',NULL),(236,'/img/1577304715421_hotel-3.jpg','done',' 1577304715421_hotel-3.jpg',70,'deleted','2019-12-25 20:11:55','2019-12-25 23:14:26',NULL),(237,'/img/1577304721417_hotel-2.jpg','done',' 1577304721417_hotel-2.jpg',68,'deleted','2019-12-25 20:12:01','2019-12-25 23:14:14',NULL),(238,'/img/1577304744309_cover-img-4.jpg','done',' 1577304744309_cover-img-4.jpg',67,'deleted','2019-12-25 20:12:25','2019-12-25 23:14:11',NULL),(239,'/img/1577304838231_tour-2.jpg','done',' 1577304838231_tour-2.jpg',67,'deleted','2019-12-25 20:13:58','2019-12-25 23:14:12',NULL),(240,'/img/1577315690744_tour-2.jpg','done',' 1577315690744_tour-2.jpg',70,'deleted','2019-12-25 23:14:51','2019-12-29 22:13:40',NULL),(241,'/img/1577315690744_tour-2.jpg','done',' 1577315690744_tour-2.jpg',71,'deleted','2019-12-25 23:14:53','2019-12-29 22:13:51',NULL),(242,'/img/1577315698227_tour-7.jpg','done',' 1577315698227_tour-7.jpg',68,'deleted','2019-12-25 23:14:59','2019-12-29 22:13:17',NULL),(243,'/img/1577315707867_tour-4.jpg','done',' 1577315707867_tour-4.jpg',67,'deleted','2019-12-25 23:15:09','2019-12-29 22:10:35',NULL),(244,'/img/1577315714810_tour-5.jpg','done',' 1577315714810_tour-5.jpg',66,'deleted','2019-12-25 23:15:16','2019-12-29 22:10:03',NULL),(245,'/img/1577315718966_tour-6.jpg','done',' 1577315718966_tour-6.jpg',66,'deleted','2019-12-25 23:15:20','2019-12-29 22:10:03',NULL),(246,'/img/1577315727275_tour-2.jpg','done',' 1577315727275_tour-2.jpg',66,'deleted','2019-12-25 23:15:28','2019-12-29 22:10:04',NULL),(247,'/img/1577657419549_tour-3.jpg','done',' 1577657419549_tour-3.jpg',66,'deleted','2019-12-29 22:10:20','2019-12-30 06:37:25',NULL),(248,'/img/1577657419549_tour-3.jpg','done',' 1577657419549_tour-3.jpg',66,'deleted','2019-12-29 22:10:20','2019-12-30 06:37:25',NULL),(249,'/img/1577657430114_blog-3.jpg','done',' 1577657430114_blog-3.jpg',66,'deleted','2019-12-29 22:10:30','2019-12-30 06:37:26',NULL),(250,'/img/1577657586456_italian-landscape-mountains-nature.jpg','done',' 1577657586456_italian-landscape-mountains-nature.jpg',67,'deleted','2019-12-29 22:13:07','2019-12-30 06:37:32',NULL),(251,'/img/1577657590094_tour-4.jpg','done',' 1577657590094_tour-4.jpg',67,'deleted','2019-12-29 22:13:10','2019-12-30 06:37:32',NULL),(252,'/img/1577657590094_tour-4.jpg','done',' 1577657590094_tour-4.jpg',67,'deleted','2019-12-29 22:13:13','2019-12-30 06:37:33',NULL),(253,'/img/1577657603105_tour-1.jpg','done',' 1577657603105_tour-1.jpg',68,'deleted','2019-12-29 22:13:24','2019-12-30 06:37:37',NULL),(254,'/img/1577657610118_fall-autumn-red-season.jpg','done',' 1577657610118_fall-autumn-red-season.jpg',68,'deleted','2019-12-29 22:13:30','2019-12-30 06:37:37',NULL),(255,'/img/1577657617027_pexels-photo-371589.jpeg','done',' 1577657617027_pexels-photo-371589.jpeg',68,'deleted','2019-12-29 22:13:37','2019-12-30 06:37:38',NULL),(256,'/img/1577657623725_tour-3.jpg','done',' 1577657623725_tour-3.jpg',70,'deleted','2019-12-29 22:13:46','2019-12-30 06:37:41',NULL),(257,'/img/1577657626498_amazing-animal-beautiful-beautifull.jpg','done',' 1577657626498_amazing-animal-beautiful-beautifull.jpg',70,'deleted','2019-12-29 22:13:46','2019-12-30 06:37:42',NULL),(258,'/img/1577657635020_tour-8.jpg','done',' 1577657635020_tour-8.jpg',71,'deleted','2019-12-29 22:13:55','2019-12-30 06:37:45',NULL),(259,'/img/1577657640495_phuong-phap-chup-anh-phong-canh.jpg','done',' 1577657640495_phuong-phap-chup-anh-phong-canh.jpg',71,'deleted','2019-12-29 22:14:00','2019-12-30 06:37:45',NULL),(260,'/img/1577657645121_tour-3.jpg','done',' 1577657645121_tour-3.jpg',71,'deleted','2019-12-29 22:14:05','2019-12-30 06:37:46',NULL),(261,'/img/1577687875011_pexels-photo-371589.jpeg','done',' 1577687875011_pexels-photo-371589.jpeg',66,'deleted','2019-12-30 06:37:55','2019-12-30 08:11:41',NULL),(262,'/img/1577687880082_tour-3.jpg','done',' 1577687880082_tour-3.jpg',67,'deleted','2019-12-30 06:38:00','2019-12-30 08:11:45',NULL),(263,'/img/1577687882427_fall-autumn-red-season.jpg','done',' 1577687882427_fall-autumn-red-season.jpg',67,'deleted','2019-12-30 06:38:02','2019-12-30 08:11:45',NULL),(264,'/img/1577687882427_fall-autumn-red-season.jpg','done',' 1577687882427_fall-autumn-red-season.jpg',66,'deleted','2019-12-30 06:38:03','2019-12-30 08:11:42',NULL),(265,'/img/1577687888507_tour-1.jpg','done',' 1577687888507_tour-1.jpg',67,'deleted','2019-12-30 06:38:10','2019-12-30 08:11:46',NULL),(266,'/img/1577687893531_fall-autumn-red-season.jpg','done',' 1577687893531_fall-autumn-red-season.jpg',68,'deleted','2019-12-30 06:38:13','2019-12-30 08:11:50',NULL),(267,'/img/1577687895653_italian-landscape-mountains-nature.jpg','done',' 1577687895653_italian-landscape-mountains-nature.jpg',68,'deleted','2019-12-30 06:38:17','2019-12-30 08:11:51',NULL),(268,'/img/1577687901569_tour-2.jpg','done',' 1577687901569_tour-2.jpg',70,'deleted','2019-12-30 06:38:24','2019-12-30 08:11:56',NULL),(269,'/img/1577687908542_pexels-photo-814499.jpeg','done',' 1577687908542_pexels-photo-814499.jpeg',70,'deleted','2019-12-30 06:38:31','2019-12-30 08:11:56',NULL),(270,'/img/1577687917511_tour-4.jpg','done',' 1577687917511_tour-4.jpg',71,'deleted','2019-12-30 06:38:37','2019-12-30 08:12:00',NULL),(271,'/img/1577687917511_tour-4.jpg','done',' 1577687917511_tour-4.jpg',71,'deleted','2019-12-30 06:38:38','2019-12-30 08:12:00',NULL),(272,'/img/1577687924435_amazing-animal-beautiful-beautifull.jpg','done',' 1577687924435_amazing-animal-beautiful-beautifull.jpg',71,'deleted','2019-12-30 06:38:44','2019-12-30 08:12:01',NULL),(273,'/img/1577693527229_italian-landscape-mountains-nature.jpg','done',' 1577693527229_italian-landscape-mountains-nature.jpg',70,'deleted','2019-12-30 08:12:08','2019-12-30 14:10:18',NULL),(274,'/img/1577693530568_pexels-photo-371589.jpeg','done',' 1577693530568_pexels-photo-371589.jpeg',68,'deleted','2019-12-30 08:12:10','2019-12-30 14:10:09',NULL),(275,'/img/1577693530568_pexels-photo-371589.jpeg','done',' 1577693530568_pexels-photo-371589.jpeg',71,'deleted','2019-12-30 08:12:13','2019-12-30 14:10:25',NULL),(276,'/img/1577693534213_tour-2.jpg','done',' 1577693534213_tour-2.jpg',67,'deleted','2019-12-30 08:12:16','2019-12-30 14:10:01',NULL),(277,'/img/1577693537820_tour-3.jpg','done',' 1577693537820_tour-3.jpg',66,'deleted','2019-12-30 08:12:20','2019-12-30 14:09:44',NULL),(278,'/img/1577693541589_fall-autumn-red-season.jpg','done',' 1577693541589_fall-autumn-red-season.jpg',66,'deleted','2019-12-30 08:12:21','2019-12-30 14:09:45',NULL),(279,'/img/1577693547669_tour-1.jpg','done',' 1577693547669_tour-1.jpg',66,'deleted','2019-12-30 08:12:28','2019-12-30 14:09:45',NULL),(280,'/img/1577693551209_phuong-phap-chup-anh-phong-canh.jpg','done',' 1577693551209_phuong-phap-chup-anh-phong-canh.jpg',66,'deleted','2019-12-30 08:12:31','2019-12-30 14:09:46',NULL),(281,'/img/1577714996779_italian-landscape-mountains-nature.jpg','done',' 1577714996779_italian-landscape-mountains-nature.jpg',66,'new','2019-12-30 14:09:58',NULL,NULL),(282,'/img/1577714996779_fall-autumn-red-season.jpg','done',' 1577714996779_fall-autumn-red-season.jpg',66,'new','2019-12-30 14:10:01',NULL,NULL),(283,'/img/1577715007049_tour-2.jpg','done',' 1577715007049_tour-2.jpg',67,'new','2019-12-30 14:10:12',NULL,NULL),(284,'/img/1577715014317_tour-1.jpg','done',' 1577715014317_tour-1.jpg',68,'new','2019-12-30 14:10:15',NULL,NULL),(285,'/img/1577715022345_tour-7.jpg','done',' 1577715022345_tour-7.jpg',70,'new','2019-12-30 14:10:23',NULL,NULL),(286,'/img/1577715029200_phuong-phap-chup-anh-phong-canh.jpg','done',' 1577715029200_phuong-phap-chup-anh-phong-canh.jpg',71,'new','2019-12-30 14:10:29',NULL,NULL);
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
INSERT INTO `orders` VALUES (2,'123456789','verify','2019-12-09 11:14:48',2599000,1,1,'[\"Hồ Chí Minh\", \"Thủ Đức\", \"Bình Thọ\"]','0983982933','itk160454@gmail.com','Haha',NULL,6,NULL,'new',NULL,NULL),(3,'123456789','verify','2019-12-09 11:14:49',2599000,1,1,'[\"Hồ Chí Minh\", \"Thủ Đức\", \"Bình Thọ\"]','0983982933','itk160454@gmail.com','Haha',NULL,6,NULL,'new',NULL,NULL),(22,'1575874336819','verify','2019-12-09 13:53:04',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(23,'1575874467465','verify','2019-12-09 13:54:38',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(24,'1575874882093','verify','2019-12-09 14:01:32',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(25,'1575874963867','verify','2019-12-09 14:02:51',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(26,'1575875215342','verify','2019-12-09 14:07:04',540,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(27,'1576611890910','verify','2019-12-17 19:45:28',999,2,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(28,'1576616816507','verify','2019-12-17 21:08:02',999,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(29,'1576617375514','verify','2019-12-17 21:16:33',999,2,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(30,'1576648409922','verify','2019-12-18 05:54:03',999,2,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(31,'1576773446644','verify','2019-12-19 16:40:11',800,1,1,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','itk160454@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(32,'1576779157943','verify','2019-12-19 18:14:26',800,1,1,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','itk160454@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(33,'1576826602633','verify','2019-12-20 07:24:03',10,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(34,'1576827189859','verify','2019-12-20 07:33:57',10,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(35,'1576828439651','verify','2019-12-20 07:59:10',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(36,'1576857112051','verify','2019-12-20 16:02:18',800,1,0,'[\"Lai Châu\",\"Mường Tè\",\"Ka Lăng\"]','0983982933','itk@gmail.com',' ',NULL,8,NULL,'new',NULL,NULL),(37,'1577289183133','verify','2019-12-25 15:53:10',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(38,'1577289253471','verify','2019-12-25 15:54:18',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(39,'1577289441261','verify','2019-12-25 15:57:29',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(40,'1577289667446','verify','2019-12-25 16:01:21',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(41,'1577289695107','verify','2019-12-25 16:02:10',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(42,'1577289744774','verify','2019-12-25 16:02:50',0,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(43,'1577289977488','verify','2019-12-25 16:06:25',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(44,'1577289998458','verify','2019-12-25 16:06:44',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(45,'1577291058559','verify','2019-12-25 16:24:28',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(46,'1577291058559','verify','2019-12-25 16:24:59',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(47,'1577291146086','verify','2019-12-25 16:25:51',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(48,'1577291359138','verify','2019-12-25 16:29:32',800,1,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(49,'1577291620635','verify','2019-12-25 16:33:48',1600,2,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(50,'1577291649615','verify','2019-12-25 16:34:32',1600,2,0,'[\"Điện Biên\",\"Mường Ảng\",\"Ngối Cáy\"]','123456789','ithoangtan@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(51,'1577291758775','verify','2019-12-25 16:36:16',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','123456789','it10069001@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(52,'1577291784183','verify','2019-12-25 16:36:32',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ',' ',8,NULL,'new',NULL,NULL),(53,'1577292123887','verify','2019-12-25 16:42:15',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(54,'1577293009930','verify','2019-12-25 16:56:55',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(55,'1577293009930','verify','2019-12-25 16:57:03',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(56,'1577293109544','verify','2019-12-25 16:58:35',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(57,'1577293413851','verify','2019-12-25 17:03:41',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(58,'1577293488065','verify','2019-12-25 17:04:55',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(59,'1577293589998','verify','2019-12-25 17:06:36',1600,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(60,'1577293831504','verify','2019-12-25 17:10:41',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(61,'1577294284546','verify','2019-12-25 17:18:25',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(62,'1577294418810','verify','2019-12-25 17:20:51',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(63,'1577295164240','verify','2019-12-25 17:32:54',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(64,'1577295184650','verify','2019-12-25 17:33:10',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(65,'1577295374773','verify','2019-12-25 17:36:23',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(66,'1577295645884','verify','2019-12-25 17:40:54',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(67,'1577295952882','verify','2019-12-25 17:46:07',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(68,'1577295975738','verify','2019-12-25 17:46:21',0,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(69,'1577296049549','verify','2019-12-25 17:47:35',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(70,'1577296128125','verify','2019-12-25 17:48:58',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(71,'1577297462742','verify','2019-12-25 18:11:15',100000,2,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(72,'1577297488548','verify','2019-12-25 18:12:10',100000,2,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(73,'1577297623455','verify','2019-12-25 18:16:27',160000,2,0,'[\"Điện Biên\",\"Điện Biên Đông\",\"Na Son\"]','123456789','ithoangtan@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(74,'1577297880033','verify','2019-12-25 18:18:49',448000,5,1,'[\"Hoà Bình\",\"Cao Phong\",\"Thu Phong\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(75,'1577298317374','paid','2019-12-25 18:25:50',448000,5,1,'[\"Hoà Bình\",\"Cao Phong\",\"Thu Phong\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(76,'1577299347896','verify','2019-12-25 18:43:02',52000,2,1,'[\"Bắc Giang\",\"Việt Yên\",\"Nghĩa Trung\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(77,'1577299459488','verify','2019-12-25 18:44:39',100000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(78,'1577299561862','verify','2019-12-25 18:48:51',100000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(79,'1577315734830','verify','2019-12-25 23:16:30',160000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(80,'1577352955964','verify','2019-12-26 09:36:14',32000,1,1,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','itk160454@gmail.com',' ','Hoàng Tấn',8,NULL,'new',NULL,NULL),(81,'1577360733283','verify','2019-12-26 12:00:43',40000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(82,'1577693557373','verify','2019-12-30 08:19:37',160000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(83,'1577969923425','verify','2020-01-02 13:01:26',100000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(84,'1577969923425','verify','2020-01-02 13:02:42',100000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(85,'1577969923425','verify','2020-01-02 13:02:57',100000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(86,'1577969923425','paid','2020-01-02 13:05:33',160000,2,0,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(87,'1577970542407','verify','2020-01-02 13:09:05',80000,1,1,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(88,'1577970552479','verify','2020-01-02 13:09:15',32000,1,1,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(89,'1577970553928','verify','2020-01-02 13:09:16',32000,1,1,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(90,'1577970558008','verify','2020-01-02 13:09:20',56000,1,3,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(91,'1577970940703','verify','2020-01-02 13:15:43',56000,1,3,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(92,'1577971057892','verify','2020-01-02 13:17:40',56000,1,3,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(93,'1577971066709','verify','2020-01-02 13:17:49',56000,1,3,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(94,'1577971066974','verify','2020-01-02 13:17:49',56000,1,3,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(95,'1577971784157','paid','2020-01-02 13:29:46',140000,1,3,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,NULL,'new',NULL,NULL),(96,'1577971996862','verify','2020-01-02 13:33:19',350000,1,10,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(97,'1577975155390','paid','2020-01-02 14:25:58',140000,1,10,'[\"Hưng Yên\",\"Yên Mỹ\",\"Đồng Than\"]','0983982933','it10069001@gmail.com',' ','Hoàng Trọng Tấn',8,68,'new',NULL,NULL),(98,'1577976198809','verify','2020-01-02 14:43:23',100000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(99,'1577976222085','verify','2020-01-02 14:43:47',100000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(100,'1577976527707','paid','2020-01-02 14:48:48',128000,1,1,'[\"Khánh Hòa\",\"Cam Lâm\",\"Cam Hải Đông\"]','0983982933','it10069001@gmail.com',' ','Hoàng Tấn',8,66,'new',NULL,NULL),(101,'1578023119660','verify','2020-01-03 03:45:20',100000,2,0,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(102,'1578023121653','verify','2020-01-03 03:45:21',160000,2,2,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL),(103,'1578023203390','paid','2020-01-03 03:46:43',190000,2,3,'[\"Hải Dương\",\"Tứ Kỳ\",\"Hưng Đạo\"]','0983982933','itk160454@gmail.com',' ','Hoàng Trọng Tấn',8,67,'new',NULL,NULL);
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
INSERT INTO `posts` VALUES (1,'Testting','verified',8,4,'new','2020-01-03 04:11:31',NULL,NULL),(2,'Testting2','verified',8,0,'new','2020-01-03 04:11:32',NULL,NULL),(3,'Testting3','verified',8,1,'new','2020-01-03 04:11:32',NULL,NULL);
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
INSERT INTO `schedules` VALUES (40,'<h3>Lịch trình tour sapa</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=xz2g-pv3cIo\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/xz2g-pv3cIo\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><p>&nbsp;</p><p>asdasdas</p><blockquote><p>dasdasd</p><p>asd</p><p>a</p></blockquote><ol><li>sd<strong>asdasd</strong></li></ol><figure class=\"table\"><table><tbody><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>&nbsp;</td><td>1</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;đâsasd asd asd á dd</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;asdas á dá d&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp; asd asd á dá d</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td><p>&nbsp; asd asd asd asd á d</p><p>á da</p><p>sd&nbsp;</p><p>á&nbsp;</p></td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>',66,'edited','2019-11-30 17:39:57',NULL,'2020-01-02 04:43:24',NULL,NULL),(41,'<h3>Hi, You can start editing your travel scheduleas</h3><figure class=\"media\"><div data-oembed-url=\"https://www.youtube.com/watch?v=-U-r-b2rPLA\"><div style=\"position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;\"><iframe src=\"https://www.youtube.com/embed/-U-r-b2rPLA\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0;\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"\"></iframe></div></div></figure><figure class=\"image image-style-side\"><img src=\"https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg\" srcset=\"https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_180 180w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_360 360w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_540 540w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_720 720w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_900 900w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1080 1080w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1260 1260w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1440 1440w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1620 1620w, https://43967.cdn.cke-cs.com/WZWRCw5yyYY1zZdNvmQK/images/85535a6af2b2a9711b6555441c9512ea31dcb3efab97cde3.jpeg/w_1733 1733w\" sizes=\"100vw\" width=\"1733\"><figcaption>OK all</figcaption></figure>',67,'new','2019-11-30 17:46:02',NULL,NULL,NULL,NULL),(42,'<h3>Hi, You can start editing your travel schedule</h3>',68,'new','2019-12-07 14:24:40',NULL,NULL,NULL,NULL),(44,'<h3>Hi, You can start editing your travel schedule</h3>',70,'new','2019-12-17 18:06:08',NULL,NULL,NULL,NULL),(45,'<h3>Hi, You can start editing your travel schedule</h3>',71,'new','2019-12-20 06:21:41',NULL,NULL,NULL,NULL);
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
INSERT INTO `tours` VALUES (66,'Tour đi sapa',80000,10,'2019-11-04 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Nhật Bản','4 days 3 nights','vietnam',7,'edited','2019-11-30 17:39:57','2020-01-02 04:42:12',NULL),(67,'test 00000000000000000001',50000,5,'2020-01-30 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Hà Nội, Phú Quốc, Phan Thiết','10 days 9 nights','vietnam',7,'new','2019-11-30 17:46:02',NULL,NULL),(68,'test 00000000000000000002',20000,10,'2020-02-04 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Nhật Bản, Trung Quốc, Anh','6 days 5 nights','vietnam',7,'edited','2019-12-07 14:24:40','2019-12-29 22:22:09',NULL),(70,'test 00000000000000000004',100000,0,'2020-04-04 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','Đà Lạt, Quy Nhơn','4 days 3 nights','vietnam',7,'edited','2019-12-17 18:06:08','2019-12-29 22:22:10',NULL),(71,'test 00000000000000000003',30000,0,'2020-01-04 00:00:00','Hồ Chí Minh','Nếu bạn muốn đi xa và nhanh hơn, hãy đi thật nhẹ nhàng. Bỏ hết tất cả ganh tị, ghen ghét, cố chấp, ích kỷ và sợ hãi','187 Dien Bien Phu, Da Kao Ward','7 days 6 nights','vietnam',7,'edited','2019-12-20 06:21:41','2019-12-29 22:22:10',NULL);
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
/*!50003 DROP PROCEDURE IF EXISTS `spsearchEngineTour` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spsearchEngineTour`(p_search VARCHAR(100),p_dayStart DATETIME,p_dayEnd DATETIME, p_price FLOAT)
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
/*!50003 DROP PROCEDURE IF EXISTS `spsearchEngineTourByAddress` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spsearchEngineTourByAddress`(p_search VARCHAR(100),p_dayStart DATETIME,p_dayEnd DATETIME, p_price FLOAT)
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
/*!50003 DROP PROCEDURE IF EXISTS `spsearchEngineTourByName` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`vke6ut5wnkjh7y47`@`%` PROCEDURE `spsearchEngineTourByName`(p_search VARCHAR(100),p_dayStart DATETIME,p_dayEnd DATETIME, p_price FLOAT)
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

-- Dump completed on 2020-01-03 11:43:42
