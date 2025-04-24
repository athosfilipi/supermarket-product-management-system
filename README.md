# 🧪 Aplicação com Docker

Este projeto é composto por um **frontend**, um **backend**, **banco Mysql** e **_Adminer Service_**
ambos containerizados com Docker.

---

## ✅ Requisitos

- Docker
- Docker Compose
- espaço em disco

---
---
---


## 🚀 Como iniciar o projeto

### 🔧 Subir a aplicação

Execute o comando abaixo para **buildar** e **iniciar** os containers da aplicação:

```sh
docker-compose up --build
```

---

### 🛑 Derrubar os containers

Para parar e remover os containers, redes e volumes criados, utilize:

```sh
docker-compose down -v
```

---
---


## 🗄️ Banco de Dados MySQL

O container do MySQL será iniciado com os seguintes scripts de inicialização:

- `init_data_structure.sql`: Criação da estrutura do banco (tabelas, índices, constraints, etc.).
- `init_data.sql`: Inserção de dados iniciais (produtos, marcas, etc.).
- `init_users.sql`: Inserção dos usuários do sistema.

Esses arquivos são executados automaticamente na **primeira vez** que o container é iniciado, garantindo que o banco de dados esteja pronto para uso.

#### • Configuração de acesso (default):
```txt
    host: 'db' # No caso de usar docker-compose
    banco: 'new_db'
    usuário: 'user'
    senha: 'password'
    string de conexão: 'mysql://user:password@db:3306/new_db'
```

**[ Caso desejar usar seu próprio banco Mysql, os dados estatarão nesta pasta ]:**
*`./devops/mysql-8.0.33/`*:

---
---


## 🌐 Acessos

### 📦 Backend

#### *Endpoints disponíveis podem der importados em programas como **`Postman`** ou **`Insomnia`**:

**[Local do arquivo]:** `./devops/Insomnia.yaml`



- **Host**: `http://localhost:3100/`
- **Prefixo da API**: `/api/v1/`



##### ➕ Criar Marca

- `POST /api/v1/brands`

**Body**:

```json
{
  "name": "NeoSound"
}
```

**Resposta**:

```json
{
  "id": "33d49478-433e-4161-9d2d-e916ad613729",
  "name": "NeoSound"
}
```

---

##### ➕ Criar Produto

- `POST /api/v1/products`

**Body**:

```json
{
  "id": "4e29c4a5-e7c2-4b6e-bfd9-fb8f415f531b",
  "name": "VitaEssence Vitamin Supplement",
  "price": 29.99,
  "description": "Suplemento vitamínico VitaEssence com ingredientes naturais para aumento de energia.",
  "image": "https://example.com/image_vitaessence_vitamins.jpg",
  "brandId": "a143a941-eb1b-4040-8634-e2de8ec47fd0"
}
```

**Resposta**:

```json
{
  "id": "b261f72c-51f7-4f8d-976d-e11d89bb0c86",
  "name": "VitaEssence Vitamin Supplement",
  "price": 29.99,
  "description": "Suplemento vitamínico VitaEssence com ingredientes naturais para aumento de energia.",
  "image": "https://example.com/image_vitaessence_vitamins.jpg",
  "brandId": "a143a941-eb1b-4040-8634-e2de8ec47fd0",
  "brand": {
    "id": "a143a941-eb1b-4040-8634-e2de8ec47fd0",
    "name": "VitaEssence"
  }
}
```

---

### 🖥️ Frontend

Acesse o frontend da aplicação em:

[http://localhost:3000](http://localhost:3000)

---
