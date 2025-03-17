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

### 1️⃣ Clonar o repositório

```sh
git clone https://github.com/Wendhel06/psel-monks-analista-wendhel-nogueira
cd psel-monks-analista-wendhel-nogueira

### **Instalar as dependências do front-end**
npm install

### **Executar o projeto**
npm run dev


### **Backend**
🌍 URL do Servidor Local
http://monkswendhelnogueiraapi.local/

📌 Endpoints da API

1️⃣ Obter Custom Fields da Página Home
GET http://monkswendhelnogueiraapi.local/json/wp/v2/pages?slug=home

2️⃣ Obter Lista de Produtos (Custom Post Type "products")
GET http://monkswendhelnogueiraapi.local/json/wp/v2/products


🛠️ Configuração do Ambiente Local

1️⃣ Instalar o Local Sites
Se ainda não tiver o Local instalado, baixe em:

🔗 https://localwp.com/

2️⃣ Importar o Projeto no Local Sites
Abra o Local e clique em Create a New Site.
Escolha Custom e configure PHP, servidor e banco de dados.
Defina o nome do site como monkswendhelnogueiraapi.local.
Finalize a criação e acesse o WordPress.

3️⃣ Instalar os Plugins Necessários
Certifique-se de que os seguintes plugins estão ativados:

Advanced Custom Fields (ACF) - Para gerenciar os custom fields.
Safe SVG - Para permitir upload de arquivos SVG.

4️⃣ Configurar o Custom Post Type "products"
Caso o CPT "products" não esteja aparecendo, verifique se ele foi registrado no functions.php corretamente.


```
