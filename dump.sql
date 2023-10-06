---------------------------------------- Sprint 1 ----------------------------------------

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

--Cadastrar Categorias ( Tabela/Categorias )
INSERT INTO categorias (descricao) VALUES
  ('Informática'), ('Celulares'), ('Beleza e Perfumaria'), ('Mercado'),
  ('Livros e Papelaria'), ('Brinquedos'), ('Moda'), ('Bebê'), ('Games');
--Consultar Categorias ( Tabela/Categorias )
SELECT * FROM categorias;

---------------------------------------- Sprint 2 ----------------------------------------

--Excluir tabela ( Produtos )
DROP TABLE produtos;
-- Criação da tabela ( Produtos)
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    quantidade_estoque INTEGER,
    valor INTEGER,
    categoria_id INTEGER
);

--Excluir tabela ( Clientes )
DROP TABLE produtos;
-- Criação da tabela ( Clientes )
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    cep VARCHAR(8),
    rua VARCHAR(255),
    numero INTEGER,
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    estado VARCHAR(255)
);

-- Inserção de produtos
INSERT INTO produtos (descricao, quantidade_estoque, valor, categoria_id) VALUES
    ('Smartphone', 10, 120000, 2),
    ('Camiseta', 50, 2500, 7),
    ('Livro de Ficção', 30, 2000, 5),
    ('Notebook', 5, 250000, 1),
    ('Sapato', 20, 5000, 7);

-- Inserção de clientes
INSERT INTO clientes (nome, email, cpf, cep, rua, numero, bairro, cidade, estado) VALUES
    ('Alexandro', 'alexandro@email.com', '12345678901', '12345678', 'Rua A', 12, 'Bairro X', 'Cidade Y', 'SP'),
    ('Ravel Levi', 'ravel.levi@email.com', '98765432101', '87654321', 'Rua B', 456, 'Bairro Z', 'Cidade W', 'RJ'),
    ('Ygor Guilherme', 'guilherme@email.com', '45678901201', '56789012', 'Rua C', 78, 'Bairro W', 'Cidade X', 'MG'),
    ('Tiago Neves', 'tiagoneves@email.com', '78901234501', '67890123', 'Rua D', 1011, 'Bairro Y', 'Cidade Z', 'RS'),
    ('Denis Jesus', 'denis.jesus@email.com', '23456789001', '34567890', 'Rua E', 1213, 'Bairro Z', 'Cidade W', 'RJ');
