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
  `role` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`idAccount`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `images` (
  `idImage` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idTour` int(11) DEFAULT NULL,
  PRIMARY KEY (`idImage`),
  KEY `FK_Images_Tours` (`idTour`),
  CONSTRAINT `FK_Images_Tours` FOREIGN KEY (`idTour`) REFERENCES `tours` (`idtour`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

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
  `idOrder` int(11) DEFAULT NULL,
  PRIMARY KEY (`idOrderDetail`),
  KEY `FK_OrderDetails_Orders` (`idOrder`),
  CONSTRAINT `FK_OrderDetails_Orders` FOREIGN KEY (`idOrder`) REFERENCES `orders` (`idorder`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orders` (
  `idOrder` int(11) NOT NULL,
  `PIN` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  `totalPrice` double DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  PRIMARY KEY (`idOrder`),
  KEY `FK_Orders_Accounts` (`idAccount`),
  CONSTRAINT `FK_Orders_Accounts` FOREIGN KEY (`idAccount`) REFERENCES `accounts` (`idaccount`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `schedules` (
  `idScheduleTour` int(11) NOT NULL AUTO_INCREMENT,
  `contentSchedule` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `idTour` int(11) DEFAULT NULL,
  PRIMARY KEY (`idScheduleTour`),
  KEY `FK_Schedules_Tours` (`idTour`),
  CONSTRAINT `FK_Schedules_Tours` FOREIGN KEY (`idTour`) REFERENCES `tours` (`idtour`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;

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
  PRIMARY KEY (`idTour`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tours`
--

LOCK TABLES `tours` WRITE;
/*!40000 ALTER TABLE `tours` DISABLE KEYS */;
/*!40000 ALTER TABLE `tours` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-21 10:44:25
