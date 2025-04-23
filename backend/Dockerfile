# Use a imagem oficial do Node.js versão 20
FROM node:23.9.0

# Defina o diretório de trabalho
WORKDIR /app

# Copie o arquivo package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm ci

# Copie o código-fonte da aplicação
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Exponha a porta da aplicação
EXPOSE 3080

# Comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev"]
