# Teste Técnico - Front-end e Back-end (React.js + WordPress API)

Este projeto consiste em um front-end desenvolvido com **React.js** e **Vite**, que consome uma API criada no **WordPress**. O back-end foi implementado diretamente no arquivo `functions.php` do WordPress e utiliza o aplicativo **Local** para rodar o servidor.

---

## 🚀 Tecnologias Utilizadas

### **Front-end**

- React.js (Vite)
- Fetch
- Validação de formulário

### **Back-end**

- WordPress (API REST)
- PHP (functions.php)

---

## 📂 Instalação e Execução

### Clonar o repositório

```sh
git clone https://github.com/Wendhel06/psel-monks-analista-wendhel-nogueira

### **Acessa a pasta do projeto**
cd psel-monks-analista-wendhel-nogueira

### **Instalar as dependências do front-end**
npm install

### **Executar o projeto**
npm run dev

## 📂 Configuração da api no front

Adicione a URL do seu site WordPress no arquivo .env
VITE_API_URL=http://URL_DO_WORDPRESS_QUE_ESTEJA_USANDO/


### **Backend**
🌍 URL do Servidor Local
http://monkswendhelnogueiraapi.local/

📌 Endpoints da API

1️⃣ Obter Custom Fields da Página Home
GET http://monkswendhelnogueiraapi.local/json/wp/v2/60

2️⃣ Obter Lista de Produtos (Custom Post Type "products")
GET http://monkswendhelnogueiraapi.local/json/wp/v2/products


```
