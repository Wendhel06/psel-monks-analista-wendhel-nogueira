# Teste Técnico - Front-end e Back-end (React.js + WordPress API)

Este projeto consiste em um front-end desenvolvido com **React.js** e **Vite**, que consome uma API criada no **WordPress**. O back-end foi implementado diretamente no arquivo `functions.php` do WordPress, utilizando o aplicativo **Local** para rodar o servidor.

---

## 🛠 Tecnologias Utilizadas

### **Front-end**
- **React.js** com **Vite** para desenvolvimento rápido e eficiente.
- **Fetch API** para consumo de dados da API do WordPress.
- Validação de formulários para garantir a integridade dos dados enviados.

### **Back-end**
- **WordPress** com API REST personalizada.
- **PHP** para criação de endpoints e lógica no arquivo `functions.php`.
- **Advanced Custom Fields (ACF)** para gerenciamento de campos personalizados.
- **Safe SVG** para permitir o upload de arquivos SVG.
- Criação de um **Custom Post Type "products"** para organizar e manipular produtos de forma separada dos posts comuns.

---

## 📂 Instalação e Execução

### **Front-end**

1. Clone o repositório:
    git clone
   https://github.com/Wendhel06/psel-monks-analista-wendhel-nogueira
   
   cd psel-monks-analista-wendhel-nogueira

3. Instale as dependências:
   npm install

4. Execute o projeto:
   npm run dev

### **Back-end**

## 📂 Configuração da api no front

Adicione a URL do seu site WordPress no arquivo .env na raíz do projeto frontend.
VITE_API_URL=http://URL_DO_WORDPRESS_QUE_ESTEJA_USANDO/

O back-end foi desenvolvido no WordPress utilizando o aplicativo Local. Para acessar a API, utilize os seguintes endpoints:

Obter Custom Fields da Página Home:
GET https://muddy-macaroni.localsite.io/json/wp/v2/pages?slug=home

Obter Lista de Produtos (Custom Post Type "products"):
GET https://muddy-macaroni.localsite.io/json/wp/v2/products

- **Repositório do backend**:
- https://github.com/Wendhel06/psel-monks-analista-api-wendhel-nogueira

🛠 Plugins Utilizados

Advanced Custom Fields (ACF): Para gerenciar os campos personalizados na página home.

Safe SVG: Para permitir o upload de arquivos SVG de forma segura.
