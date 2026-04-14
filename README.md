# 🚀 Desafio Técnico – Place TI

## 📌 Sobre o Desafio

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de **Estagiário na Place TI**.

O objetivo foi construir uma aplicação Fullstack para gerenciamento de **Cidades e Comércios**, seguindo boas práticas de arquitetura, organização de código e integração entre frontend e backend.

---

## 🎯 Objetivo

Desenvolver uma aplicação que permita:

* Gerenciar cidades (CRUD completo)
* Relacionar comércios a cidades
* Consumir API REST no frontend
* Aplicar boas práticas de desenvolvimento
* Implementar testes unitários na camada de serviço

---

## 🏗️ Arquitetura do Projeto

### 🔙 Backend (Spring Boot)

Estrutura baseada em camadas:

```
Controller → Service → Repository → Banco de Dados
```

* **Controller**: responsável pelos endpoints REST
* **Service**: contém regras de negócio
* **Repository**: acesso aos dados via JPA
* **DTOs**: utilizados para evitar exposição direta das entidades

---

### 🎨 Frontend (Angular)

```
Component → Service → API REST
```

* Componentes standalone
* Comunicação com backend via HttpClient
* Interface construída com PrimeNG

---

## 🛠️ Tecnologias Utilizadas

### Backend

* Java 21
* Spring Boot
* Spring Data JPA
* H2 Database
* Lombok
* JUnit 5
* Mockito

### Frontend

* Angular
* TypeScript
* PrimeNG
* PrimeFlex

---

## 📊 Modelagem de Dados

### Cidade

* id
* nome
* uf
* capital

### Comércio

* id
* nomeComercio
* nomeResponsavel
* tipo (ENUM)

    * FARMÁCIA
    * PADARIA
    * POSTO_GASOLINA
    * LANCHONETE
* cidade (ManyToOne)

📌 Regra:

> Uma cidade pode possuir vários comércios, porém cada comércio pertence a apenas uma cidade.

---

## 🔌 Endpoints

### Cidades

* `GET /placeti/cidades`
* `GET /placeti/cidades/{id}`
* `POST /placeti/cidades`
* `PUT /placeti/cidades`
* `DELETE /placeti/cidades/{id}`

### Comércios

* `GET /placeti/comercios`
* `POST /placeti/comercios`

---

## ▶️ Como Executar o Projeto

### Backend

```bash
cd backend-spring-boot
mvn spring-boot:run
```

A API estará disponível em:

```
http://localhost:8080/placeti
```

---

### Frontend

```bash
cd frontend-angular
npm install
npm start
```

A aplicação estará disponível em:

```
http://localhost:4200
```

---

## ⚙️ Configurações

### CORS (Backend)

Necessário permitir acesso do frontend:

```java
@CrossOrigin(origins = "http://localhost:4200")
```

---

### Environment (Angular)

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/placeti'
};
```

---

## 🧪 Testes Unitários

Foram implementados testes na camada de **Service** utilizando:

* JUnit 5
* Mockito

### Cobertura:

* Busca por ID
* Listagem
* Inclusão
* Alteração
* Exclusão

---

## 📷 Funcionalidades Implementadas

* ✅ Listagem de cidades
* ✅ Cadastro de cidades
* ✅ Edição de cidades
* ✅ Exclusão de cidades
* ✅ Integração com backend
* ✅ Navegação para comércios por cidade
* ✅ Testes unitários no backend

---

## 🚧 Pontos de Evolução

* Cadastro de comércios via frontend
* Filtros e busca
* Paginação no backend
* Melhorias na UX/UI
* Deploy da aplicação

---

## 👨‍💻 Candidato

**Paulo Vilela** </br>
Estudante de Engenharia de Software


---

## 📌 Considerações Finais

O projeto foi desenvolvido com foco em:

* Organização e clareza do código
* Separação de responsabilidades
* Integração entre camadas
* Facilidade de manutenção e evolução

---

💡 Este projeto representa minha abordagem para desenvolvimento Fullstack, buscando sempre aplicar boas práticas e entregar soluções funcionais e organizadas.





-------------------------------------------------------------------------------
Após subir o backend o banco H2 pode ser acessado no seguinte endereço:
-------------------------------------------------------------------------------

http://localhost:8080/placeti/h2-console

-------------------------------------------------------------------------------
Use os seguintes dados para conexão no H2:
-------------------------------------------------------------------------------

url: jdbc:h2:mem:database
usuario: admin
senha: admin

-------------------------------------------------------------------------------
Para configurar o front end:
-------------------------------------------------------------------------------

npm install

npm start

-------------------------------------------------------------------------------
Para acessar o front end:
-------------------------------------------------------------------------------

http://localhost:4200/#/
