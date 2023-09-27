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
    senha varchar(500) not null
);

--Excluir tabela ( Categorias )
DROP TABLE categorias;
--Criar tabela ( Categorias )
CREATE TABLE categorias (
	id serial primary key,
    descricao varchar(500) not null
);








