-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2022 at 09:04 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food`
--

-- --------------------------------------------------------

--
-- Table structure for table `food_items`
--

CREATE TABLE `food_items` (
  `food_id` int(3) NOT NULL,
  `food_name` varchar(30) NOT NULL,
  `food_category` varchar(30) NOT NULL,
  `food_price` decimal(4,2) NOT NULL,
  `food_calories` int(4) NOT NULL,
  `food_description` varchar(150) NOT NULL,
  `food_image` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `food_items`
--

INSERT INTO `food_items` (`food_id`, `food_name`, `food_category`, `food_price`, `food_calories`, `food_description`, `food_image`) VALUES
(1, 'Enchilidas', 'Entree', '5.50', 323, 'fried tortilla, ground beef, sour cream, pico de gallo, onion, tomato', './img/enchilada.jpg'),
(2, 'Chile Verde', 'Entree', '15.99', 180, 'simmered pork with green sauce, tomatillos, garlic, jalapenos', './img/chile verde.jpg');
(3, 'Super Burrito', 'Entree', '7.99', 447, 'burrito with your choice of meat, sour cream, avocado, pico de gallo, salsa, beans, rice', './img/burrito.jpg');
(4, 'Tacos', 'Entree', '1.99', 100, 'tortilla filled with choice of meat, cilantro, sour cream, avocado, salsa, beans', './img/taco.jpg');
(5, 'Chicken Fajitas', 'Entree', '21.99', 351, 'grilled chicken on top of sauteed bell peppers, sour crea, tortillas', './img/fajitas.jpg');
(6, 'Nachos', 'Appetizer', '7.99', 340, 'fried tortilla chips with your choice of meat, sour cream, avocado, salsa, beans', './img/nacho.jpg');
(7, 'Guacomole Dip', 'Appetizer', '5.99', 100, 'fresh avocado squeezed with lime juice, pico de gallo', './img/Guacamole.jpg');
(8, 'Taquitos', 'Appetizer', '3.00', 220, 'rolled fried tortilla with shredden chicken, salsa', './img/Taquitos.jpg');
(9, 'Tostada de Ceviche', 'Appetizer', '4.99', 170, 'shrimp or fish on top of tostada, with pico de gallo, lime juice, cilantro', './img/ceviche.jpg');
(10, 'Fried Mozarella', 'Appetizer', '3.00', 290, 'Mozarella sticks fried, served with ranch', './img/Mozarella.jpg');
(11, 'Churros', 'Dessert', '2.50', 450, 'Fried beer batter sticks coated with sugar', './img/churros.jpg');
(12, 'Cheesecake', 'Dessert', '5.99', 400, 'homeade cheesecake, with strawberry puree', './img/cheesecake.jpg');
(13, 'Flan', 'Dessert', '5.00', 300, 'homeade mexican style flan', './img/flan.jpg');
(14, 'Shakes', 'Dessert', '4.99', 500, 'choice of strawberry, chocolate, vanilla ', ',/img/shakes.jpg');
(15, 'Molten Chocolate', 'Dessert', '4.99', 620, 'dark chocolate cake with hot fudge in the middle', './img/Molten Chocolate.jpg');
(16, 'Jarritos', 'Drinks', '2.50', 150, 'carbonated soda: comes in different flavors fresa, tamarindo, pina', './img/Jarritos.jpg');
(17, 'Soda', 'Drinks', '2.00', 200, 'carbonated soda: comes in different flavors coke, sprite, fanta, etc', './img/cola.jpg');
(18, 'Agua Fresca', 'Drinks', '2.50', 120, 'freshly squeezed drinks everyday, cucumber lime, strawberry mix, strawberries and cream', './img/Aqua Fresca.jpg');
(19, 'Lemonade', 'Drinks', '2.50', 150, 'strawberry lemonade or regular', './img/lemonade.jpg');
(20, 'Horchata', 'Drinks', '2.50', 150, 'strawberry or regular horchata', './img/horchata.jpg');
(21, 'Beer', 'Drinks', '6.00', 300, 'modelo, corona, mango cart, michelob, coors light, tecate, blue moon', './img/beer.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `food_items`
--
ALTER TABLE `food_items`
  ADD PRIMARY KEY (`food_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `food_items`
--
ALTER TABLE `food_items`
  MODIFY `food_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
