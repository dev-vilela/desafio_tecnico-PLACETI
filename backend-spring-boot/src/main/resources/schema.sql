DROP TABLE IF EXISTS comercio;
DROP TABLE IF EXISTS cidade;

CREATE TABLE cidade (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    capital BOOLEAN NOT NULL
);

CREATE TABLE comercio (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome_comercio VARCHAR(255),
    nome_responsavel VARCHAR(255),
    tipo VARCHAR(50),
    cidade_id BIGINT,
    CONSTRAINT fk_cidade FOREIGN KEY (cidade_id) REFERENCES cidade(id)
);