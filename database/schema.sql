CREATE DATABASE IF NOT EXISTS teddypups CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE teddypups;

CREATE TABLE puppies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(120) UNIQUE NOT NULL,
  name VARCHAR(80) NOT NULL,
  breed VARCHAR(80) NOT NULL,
  gender ENUM('Boy','Girl') NOT NULL,
  age VARCHAR(40) NOT NULL,
  origin ENUM('local','imported') DEFAULT 'local',
  status ENUM('available','gone-home') DEFAULT 'available',
  description TEXT,
  health_notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE puppy_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  puppy_id INT NOT NULL,
  url VARCHAR(255) NOT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (puppy_id) REFERENCES puppies(id) ON DELETE CASCADE
);

CREATE TABLE faqs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  answer TEXT NOT NULL,
  sort_order INT DEFAULT 0
);

CREATE TABLE testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  family_name VARCHAR(80) NOT NULL,
  text TEXT NOT NULL,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  email VARCHAR(120) NOT NULL,
  message TEXT NOT NULL,
  puppy_slug VARCHAR(120),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);