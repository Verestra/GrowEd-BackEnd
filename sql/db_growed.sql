-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2021 at 12:47 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_growed`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id_courses` int(11) NOT NULL,
  `id_fasilitator` int(11) DEFAULT NULL,
  `class_name` varchar(256) NOT NULL,
  `category_id` int(11) NOT NULL,
  `description` varchar(256) NOT NULL,
  `level_id` int(11) NOT NULL,
  `class_price` int(11) NOT NULL,
  `schedule` date NOT NULL,
  `start_time` time NOT NULL,
  `finish_time` time NOT NULL,
  `image` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id_courses`, `id_fasilitator`, `class_name`, `category_id`, `description`, `level_id`, `class_price`, `schedule`, `start_time`, `finish_time`, `image`) VALUES
(1, NULL, 'Know More Javascript', 1, 'Javascript from the basic for beginner. JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with anima', 1, 0, '2020-11-06', '08:00:00', '09:40:00', NULL),
(2, NULL, 'HTML and CSS to Code', 1, 'Start combining HTML and CSS to...', 2, 10, '2020-11-06', '08:00:00', '09:40:00', NULL),
(3, NULL, 'Indonesian war history', 2, 'From the first colonialization until..', 3, 50, '2020-11-06', '08:00:00', '09:40:00', NULL),
(4, NULL, 'Buddhism and Modern Psychology', 3, 'Buddhism and science are deeply..', 1, 0, '2020-11-06', '08:00:00', '09:40:00', NULL),
(5, NULL, 'Financial markets', 4, 'An overview of the ideas, methods...', 2, 10, '2020-11-06', '08:00:00', '09:40:00', NULL),
(6, NULL, 'Corporate finance', 4, 'Introduction to the fundamentals..', 3, 50, '2020-11-06', '08:00:00', '09:40:00', NULL),
(7, NULL, 'Algorithm specialization', 5, 'Learn to think like a computer...', 3, 50, '2020-11-06', '08:00:00', '09:40:00', NULL),
(8, NULL, 'Front-end fundamentals', 1, 'Learn the fundamentals of front end...', 1, 0, '2020-11-06', '08:00:00', '09:40:00', NULL),
(9, NULL, 'Lunar Eclipse', 6, 'This class is talking about how the lunar eclipse can happen to earth', 2, 10, '2020-11-06', '08:00:00', '09:40:00', NULL),
(10, NULL, 'Swift Introduction', 1, 'In this class you will be learning all the basic things about swift', 1, 0, '2020-11-06', '08:00:00', '09:40:00', NULL),
(59, NULL, 'asd', 1, 'asd', 3, 50, '2020-11-06', '08:00:00', '09:40:00', NULL),
(60, NULL, 'Learn Advance Laravel', 1, 'Get the best Laravel Course', 3, 50, '2020-11-06', '08:00:00', '09:40:00', NULL),
(61, NULL, 'Learn Advance CodeIgniter', 1, 'Get the best CodeIgniter Course', 3, 50, '2020-11-06', '08:00:00', '09:40:00', NULL),
(62, NULL, 'Learn Game Development', 1, 'Learn the best game development', 2, 10, '2020-11-06', '08:00:00', '09:40:00', NULL),
(63, NULL, 'Animal Psychology', 1, 'Does Animal have their own Psychology?', 1, 0, '2020-11-06', '08:00:00', '09:40:00', NULL),
(64, NULL, 'Learn C++', 1, 'Learn C++', 2, 10, '2020-11-06', '08:00:00', '09:40:00', NULL),
(65, NULL, 'Introduction to Finance, Accounting, Modeling and Valuation', 4, 'This course will help you understand accounting, finance, financial modeling and valuation from scratch (no prior accounting, finance, modeling or valuation experience is required).', 2, 10, '2020-11-06', '08:00:00', '09:40:00', NULL),
(67, NULL, 'Learn Intermediate Java', 1, 'Get the best Java Course', 2, 10, '2020-11-06', '08:00:00', '09:40:00', 'asdadsad'),
(68, NULL, 'Learn Javacript Advance', 1, 'Javascript Advance', 3, 50, '2020-11-06', '08:00:00', '09:40:00', '1618275813676-image.png'),
(69, NULL, 'Learn C++', 1, 'C++ Intermediate', 2, 10, '2020-11-06', '08:00:00', '09:40:00', '1618286237158-image.png'),
(70, 36, 'Learn C#', 1, 'C# Intermediate', 2, 10, '2020-11-06', '08:00:00', '09:40:00', '1618636727730-image.png'),
(71, 36, 'Learn C', 1, 'C Intermediate', 2, 10, '2020-11-06', '08:00:00', '09:40:00', '1618636883788-image.png'),
(72, 36, 'Learn PHP', 1, 'PHP Intermediate', 2, 10, '2020-11-06', '08:00:00', '09:40:00', '1618637024690-image.png'),
(73, 36, 'Learn PHP Basic', 1, 'PHP Basic', 1, 0, '2020-11-06', '08:00:00', '09:40:00', '1618637122288-image.png');

-- --------------------------------------------------------

--
-- Table structure for table `courses_category`
--

CREATE TABLE `courses_category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses_category`
--

INSERT INTO `courses_category` (`category_id`, `category_name`) VALUES
(1, 'Software'),
(2, 'History'),
(3, 'Psychology'),
(4, 'Finance'),
(5, 'Math'),
(6, 'Science');

-- --------------------------------------------------------

--
-- Table structure for table `courses_level`
--

CREATE TABLE `courses_level` (
  `level_id` int(11) NOT NULL,
  `level_name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses_level`
--

INSERT INTO `courses_level` (`level_id`, `level_name`) VALUES
(1, 'Beginner'),
(2, 'Intermediate'),
(3, 'Advance');

-- --------------------------------------------------------

--
-- Table structure for table `courses_student`
--

CREATE TABLE `courses_student` (
  `student` int(11) NOT NULL,
  `course` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses_student`
--

INSERT INTO `courses_student` (`student`, `course`) VALUES
(1, 1),
(1, 8),
(38, 9),
(38, 64),
(1, 65),
(1, 6),
(1, 70),
(40, 61),
(40, 9),
(40, 65),
(40, 6),
(43, 60),
(43, 61),
(43, 1),
(43, 8);

-- --------------------------------------------------------

--
-- Table structure for table `courses_sub`
--

CREATE TABLE `courses_sub` (
  `id` int(11) NOT NULL,
  `courses_id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses_sub`
--

INSERT INTO `courses_sub` (`id`, `courses_id`, `name`) VALUES
(1, 8, 'HTML Essential Training'),
(2, 8, 'CSS Essential Training'),
(3, 8, 'Javascript Essential Training'),
(4, 8, 'Responsive Layout'),
(5, 8, 'Mid-term Exam'),
(6, 8, 'Bootstrap4 Essential Training'),
(7, 8, 'Sass Essential Training'),
(8, 8, 'Learning React.js'),
(9, 8, 'UX for Web Design'),
(10, 8, 'Final-term Exam'),
(11, 3, 'Indonesia from 18 century');

-- --------------------------------------------------------

--
-- Table structure for table `student_progress`
--

CREATE TABLE `student_progress` (
  `student_id` int(11) NOT NULL,
  `courses_sub_id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_progress`
--

INSERT INTO `student_progress` (`student_id`, `courses_sub_id`, `score`) VALUES
(1, 1, NULL),
(1, 2, 100),
(1, 3, 70),
(1, 4, 80),
(1, 5, 80),
(38, 8, 70),
(1, 6, 84),
(1, 7, 89),
(43, 1, 80),
(43, 2, 70);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `username`, `email`, `password`, `role_id`) VALUES
(1, 'Emir Kharisma', 'emirkharisma@gmail.com', '$2b$10$mRtSIh4UIRdWAo9aq2fHYO6DI4q0m5nTJu36AvC7M2lSgi/qb.DrW', 1),
(2, 'Dimas Kurniawan', 'dimas@gmail.com', '$2b$10$mRtSIh4UIRdWAo9aq2fHYO6DI4q0m5nTJu36AvC7M2lSgi/qb.DrW', 2),
(36, 'admin', 'admin@gmail.com', '$2b$10$mRtSIh4UIRdWAo9aq2fHYO6DI4q0m5nTJu36AvC7M2lSgi/qb.DrW', 2),
(37, 'diwan', 'diwan@gmail.com', '$2b$10$2BjF4sIPw8XR24D0BAArmOGOQy4gglpCN7EXIvg01GPDv3rLqkP.u', 1),
(38, 'user', 'user@gmail.com', '$2b$10$mRtSIh4UIRdWAo9aq2fHYO6DI4q0m5nTJu36AvC7M2lSgi/qb.DrW', 1),
(39, 'user12', 'user12@gmail.com', '$2b$10$YV/sgfBPqvRx1n3kTIuOWux.Y4MQfQO0RNY2PFxKTONkqvdP7zpM.', 1),
(40, 'taufik', 'taufik@gmail.com', '$2b$10$mwRfIcr4ujlE3v7.P0VJge6B2yVZuDIQnElu7vg24ZcqJ0YpAX/Fu', 1),
(41, 'hidayat', 'hidayat@gmail.com', '$2b$10$dV2lBDcFW4D4PgUFP.ns6OzHKMTCSSHnGc2BAlOeMDyHZ2JTcAlKu', 1),
(42, 'ilham', 'ilham@gmail.com', '$2b$10$jg0M7rkvZu37i7oUNm76WOSE8Swy9sv35j8Hi/nURmAYnI3OhpJ.S', 1),
(43, 'kurniawan', 'kurniawan@gmail.com', '$2b$10$1vt.y5Wg6XeG7MVxkm1PVeMLE8i6pzz7Kn8hljfXGWQKi4OXm82FC', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users_role`
--

CREATE TABLE `users_role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_role`
--

INSERT INTO `users_role` (`role_id`, `role_name`) VALUES
(1, 'Student'),
(2, 'Fasilitator');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id_courses`),
  ADD KEY `level_id` (`level_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `courses_owner` (`id_fasilitator`);

--
-- Indexes for table `courses_category`
--
ALTER TABLE `courses_category`
  ADD UNIQUE KEY `category_id` (`category_id`);

--
-- Indexes for table `courses_level`
--
ALTER TABLE `courses_level`
  ADD UNIQUE KEY `level_id` (`level_id`);

--
-- Indexes for table `courses_student`
--
ALTER TABLE `courses_student`
  ADD KEY `student` (`student`),
  ADD KEY `course` (`course`);

--
-- Indexes for table `courses_sub`
--
ALTER TABLE `courses_sub`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courses_id` (`courses_id`);

--
-- Indexes for table `student_progress`
--
ALTER TABLE `student_progress`
  ADD KEY `student_id` (`student_id`),
  ADD KEY `courses_sub_id` (`courses_sub_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `users_role`
--
ALTER TABLE `users_role`
  ADD UNIQUE KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id_courses` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `courses_sub`
--
ALTER TABLE `courses_sub`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`level_id`) REFERENCES `courses_level` (`level_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `courses_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `courses_category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `courses_owner` FOREIGN KEY (`id_fasilitator`) REFERENCES `users` (`id_user`);

--
-- Constraints for table `courses_student`
--
ALTER TABLE `courses_student`
  ADD CONSTRAINT `course` FOREIGN KEY (`course`) REFERENCES `courses` (`id_courses`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student` FOREIGN KEY (`student`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `courses_sub`
--
ALTER TABLE `courses_sub`
  ADD CONSTRAINT `courses_id` FOREIGN KEY (`courses_id`) REFERENCES `courses` (`id_courses`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_progress`
--
ALTER TABLE `student_progress`
  ADD CONSTRAINT `courses_sub_id` FOREIGN KEY (`courses_sub_id`) REFERENCES `courses_sub` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_id` FOREIGN KEY (`student_id`) REFERENCES `courses_student` (`student`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `users_role` (`role_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
