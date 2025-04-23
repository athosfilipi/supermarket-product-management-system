INSERT INTO Brand (id, name)
VALUES 
('b1e4e1d4-6a22-4d50-9c4e-f0e0c6760193', 'Brand A'),
('b2e4e1d4-6a22-4d50-9c4e-f0e0c6760194', 'Brand B');
INSERT INTO Brand (id,name) VALUES
	 ('33d49478-433e-4161-9d2d-e916ad613729','NeoSound'),
	 ('479edb4e-56b8-4f60-af01-f6c0e02d44e9','UrbanFit'),
	 ('63e147fc-ba2e-4a14-8de3-215f58e0dd99','SmartWear'),
	 ('70e72f3c-3046-431d-a23f-12cefd799b75','MaxPower'),
	 ('a143a941-eb1b-4040-8634-e2de8ec47fd0','VitaEssence'),
	 ('a389ac2d-ba75-4f7c-ba31-a8923c7491bf','Vigiai'),
	 ('ac8cf4c0-7f78-4ae1-902a-8e6ca973ed27','EcoStyle'),
	 ('f294f8c5-cf0e-460c-b48a-8b301d7c06b5','TechNova');


INSERT INTO Product (id,name,price,description,image,brandId) VALUES
	 ('6e1dbe8b-d0fe-4b83-8bbf-383d71715c3f','Camisa Polo Masculina',79.90,'Camisa polo de algodão com detalhes bordados.','https://example.com/test.png','479edb4e-56b8-4f60-af01-f6c0e02d44e9'),
	 ('7a347fba-72d6-473d-a70c-c3bb743e38af','Tênis Esportivo Feminino',129.99,'Tênis leve e confortável para corridas.','https://example.com/test.png','63e147fc-ba2e-4a14-8de3-215f58e0dd99'),
	 ('7d5f3812-dd18-49dc-af18-da2e9423d2c5','UrbanFit Running Shoes',59.99,'Tênis de corrida UrbanFit com conforto e amortecimento de impacto.','https://example.com/image_urbanfit_shoes.jpg','479edb4e-56b8-4f60-af01-f6c0e02d44e9'),
	 ('8af61c10-29f2-48db-a8a8-43121361a31e','NeoSound Bluetooth Speaker',49.99,'Caixa de som Bluetooth NeoSound com som de alta qualidade.','https://example.com/image_neosound_speaker.jpg','33d49478-433e-4161-9d2d-e916ad613729'),
	 ('921f5112-8d51-4135-a647-b4204863e661','TechNova Laptop',799.99,'Laptop TechNova com processador rápido e tela Full HD.','https://example.com/image_technova_laptop.jpg','f294f8c5-cf0e-460c-b48a-8b301d7c06b5'),
	 ('9467512e-5696-48a1-a997-864ff3c4786e','SmartWear Smartwatch',149.99,'Relógio inteligente SmartWear com rastreamento de atividades e notificações.','https://example.com/image_smartwear_smartwatch.jpg','63e147fc-ba2e-4a14-8de3-215f58e0dd99'),
	 ('a4ad31ac-824c-4990-95d1-4f5c47de2fcf','Vigiai Smart Camera',199.99,'Câmera de segurança inteligente Vigiai com detecção de movimento e áudio bidirecional.','https://example.com/image_vigiai_camera.jpg','a389ac2d-ba75-4f7c-ba31-a8923c7491bf'),
	 ('b261f72c-51f7-4f8d-976d-e11d89bb0c86','VitaEssence Vitamin Supplement',29.99,'Suplemento vitamínico VitaEssence com ingredientes naturais para aumento de energia.','https://example.com/image_vitaessence_vitamins.jpg','a143a941-eb1b-4040-8634-e2de8ec47fd0'),
	 ('e91b6feb-b66a-4916-9d11-861dc17521a9','EcoStyle T-Shirt',29.99,'Camiseta sustentável da EcoStyle com tecido orgânico.','https://example.com/imagesecomstyle_tshirt.jpg','ac8cf4c0-7f78-4ae1-902a-8e6ca973ed27'),
	 ('f75f7dca-9266-4868-bf5d-50af03b7e489','MaxPower Wireless Headphones',99.99,'Fones de ouvido sem fio MaxPower com cancelamento de ruído.','https://example.com/image_maxpower_headphones.jpg','70e72f3c-3046-431d-a23f-12cefd799b75');
