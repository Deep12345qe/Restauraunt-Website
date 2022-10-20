-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema FoodOrder
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema FoodOrder
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `FoodOrder` DEFAULT CHARACTER SET utf8 ;
USE `FoodOrder` ;

-- -----------------------------------------------------
-- Table `FoodOrder`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FoodOrder`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UserID` INT(9) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`UserID`),
  UNIQUE INDEX `UserID_UNIQUE` (`UserID` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `FoodOrder`.`Employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FoodOrder`.`Employee` (
  `EmployeeID` INT NOT NULL AUTO_INCREMENT,
  `Payrate` FLOAT(6) NULL,
  `SSN` INT(8) NULL,
  `UserID` INT(9) NOT NULL,
  UNIQUE INDEX `EmployeeID_UNIQUE` (`EmployeeID` ASC) VISIBLE,
  UNIQUE INDEX `SSN_UNIQUE` (`SSN` ASC) VISIBLE,
  INDEX `UserID_idx` (`UserID` ASC) VISIBLE,
  UNIQUE INDEX `UserID_UNIQUE` (`UserID` ASC) VISIBLE,
  PRIMARY KEY (`UserID`),
  CONSTRAINT `UserID`
    FOREIGN KEY (`UserID`)
    REFERENCES `FoodOrder`.`user` (`UserID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
