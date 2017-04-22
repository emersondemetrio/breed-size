/*
Navicat MySQL Data Transfer

Source Server         : Windows10-xampp
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : animal_foster

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-04-22 20:12:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for treino
-- ----------------------------
DROP TABLE IF EXISTS `treino`;
CREATE TABLE `treino` (
  `AnimalID` varchar(255) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `DateTime` datetime DEFAULT NULL,
  `OutcomeType` varchar(255) DEFAULT NULL,
  `OutcomeSubtype` varchar(255) DEFAULT NULL,
  `AnimalType` varchar(255) DEFAULT NULL,
  `SexuponOutcome` varchar(255) DEFAULT NULL,
  `AgeuponOutcome` varchar(255) DEFAULT NULL,
  `Breed` varchar(255) DEFAULT NULL,
  `Color` varchar(255) DEFAULT NULL,
  `ChildFriendly` varchar(255) DEFAULT NULL,
  `BreedSize` int(11) DEFAULT NULL,
  PRIMARY KEY (`AnimalID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
