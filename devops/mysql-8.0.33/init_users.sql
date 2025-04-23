-- Altera o método de autenticação do usuário
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'password';

-- Concede todas as permissões globais para o usuário
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;

-- Concede permissões para o banco de dados específico (new_db)
GRANT ALL PRIVILEGES ON new_db.* TO 'user'@'%' WITH GRANT OPTION;

-- Concede permissões para as tabelas do sistema (necessário para acessar a tabela mysql.user)
GRANT SELECT ON mysql.* TO 'user'@'%';

-- Aplica as permissões
FLUSH PRIVILEGES;
