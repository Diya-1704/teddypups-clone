USE teddypups;

INSERT INTO puppies (slug, name, breed, gender, age, origin, status, description, health_notes) VALUES
('cavapoo-luna', 'Luna', 'Cavapoo', 'Girl', '2 months', 'imported', 'available', 'Luna is a sweet and gentle Cavapoo who loves to cuddle.', 'Vaccinated, dewormed.'),
('shihtzu-milo', 'Milo', 'Shih Tzu', 'Boy', '3 months', 'local', 'available', 'Milo is a playful little lion with a big heart.', 'Vaccinated, dewormed.');

INSERT INTO puppy_images (puppy_id, url, sort_order) VALUES
(4, 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80', 0),
(5, 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&q=80', 0);