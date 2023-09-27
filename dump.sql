--Excluir banco de dados
DROP DATABASE pdv;
--Criar banco de dados
CREATE DATABASE pdv;

--Excluir tabela ( Usuarios )
DROP TABLE usuarios;
--Criar tabela ( Usuarios )
CREATE TABLE usuarios (
    id serial primary key,
    nome varchar(50) not null,
    email varchar(50) not null unique,
    senha varchar(255) not null
);

--Excluir tabela ( Categorias )
DROP TABLE categorias;
--Criar tabela ( Categorias )
CREATE TABLE categorias (
	id serial primary key,
    descricao varchar(255) not null
);

--Cadastrar Usuario ( Tabela/Usuario )
INSERT INTO usuarios (nome, email, senha)
VALUES ('adm', 'adm@email.com', '123456');
--Consultar Usuario ( Tabela/Usuario )
SELECT ID, nome, email AS email FROM usuarios WHERE ID = 1;

