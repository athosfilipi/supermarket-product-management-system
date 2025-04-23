-- Criação da tabela Brand
CREATE TABLE IF NOT EXISTS Brand (
  id CHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Criação da tabela Product
CREATE TABLE IF NOT EXISTS Product (
  id CHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  image LONGTEXT, -- para armazenar base64, se necessário
  brandId CHAR(36) NOT NULL,
  CONSTRAINT fk_brand FOREIGN KEY (brandId) REFERENCES Brand(id),
  CONSTRAINT uq_product_name_brand UNIQUE (name, brandId)
);
