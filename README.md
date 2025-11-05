<img src="public/coffe-svgrepo-com.svg" alt="Logo do Projeto" width="120" />

# Aurora Café — E-commerce

Uma aplicação web moderna para explorar e comprar cafés especiais. Home com seções (Hero, Sobre, Produtos, Depoimentos, Assinaturas, Localização), listagem de produtos com carrinho, autenticação (Firebase Auth), toasts, animações e tema consistente com styled-components.

## Sobre o Projeto

Este projeto foi uma oportunidade para aplicar e aprofundar conhecimentos em:

- Consumo de serviços e integração: autenticação com Firebase Auth e simulação de fluxo de compra/carrinho.
- React + TypeScript: componentes funcionais tipados, contexts (Auth, Cart) e organização por features.
- Estilização e UX: theming com styled-components, animações de entrada (IntersectionObserver), ícones, toasts e layout responsivo.
- Roteamento SPA: React Router com âncoras (seções da Home) e fallback SPA para deploy em Netlify.

## Etiquetas

[![Licença](https://img.shields.io/badge/licença-MIT-blue)](./LICENSE)
![Status](https://img.shields.io/badge/status-em%20andamento-brightgreen)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Styled%20Components](https://img.shields.io/badge/styled--components-DB7093?logo=styledcomponents&logoColor=white)
![React%20Router](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?logo=firebase&logoColor=black)
![Zod](https://img.shields.io/badge/Zod-Validation-2563EB)
![React%20Hook%20Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990)
<br/>
[![Deploy na Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](#)
<br/>
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thiagorib21/)
[![E-mail](https://img.shields.io/badge/-Email-000000?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:thiago.ribeiro2003@hotmail.com)

## ✨ Ir para o site

[🔗 Acesse o site aqui!](#) <!-- Atualize com a URL do Netlify após o deploy -->

## Screenshots

<!-- Adicione suas capturas em images/screenshots-readme e atualize os paths abaixo -->
<img src="images/screenshots-readme/screenshot-hero.png" alt="Hero" />
<img src="images/screenshots-readme/screenshot-products.png" alt="Produtos" />
<img src="images/screenshots-readme/screenshot-cart.png" alt="Carrinho" />
<img src="images/screenshots-readme/screenshot-auth.png" alt="Autenticação" />
<img src="images/screenshots-readme/screenshot-subscription.png" alt="Assinaturas" />

## Funcionalidades

1. Catálogo e Carrinho

- 🛒 Grid de produtos com cartão compacto e botão de adicionar ao carrinho.
- 🧮 Contexto de carrinho (itens, totais), com drawer e toasts de feedback.
- 🔐 Requer login para ações sensíveis quando aplicável.

2. Experiência do Usuário e Seções

- 🖼️ Hero com imagem de fundo e CTA para produtos; âncoras para seções da Home.
- ⭐ Depoimentos estáticos; Seção “Sobre Nós”; Localização com Google Maps embutido.
- 💳 Seção de Assinaturas (mock) com toasts e validação de login.
- ✨ Animações de entrada (Reveal) e layout responsivo/mobile-first.

3. Autenticação e Formulários

- Firebase Auth (register/login/logout) com observação de sessão.
- Validação com zod + react-hook-form; mensagens de erro de formulário.

## Stack utilizada

**Front-end:** React 19, TypeScript, Vite

**Estilos e UX:** styled-components, react-icons, react-hot-toast, react-intersection-observer

**Forms/Validação:** react-hook-form, zod

**Roteamento:** React Router (+ hash links)

**Autenticação:** Firebase Auth

## ⚙️ Instalação e Execução Local

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente (na raiz):

```bash
cp .env.example .env.local
# Preencha as chaves do Firebase no .env.local
```

4. Rode o projeto em desenvolvimento:

```bash
npm run dev
```

5. Build e preview:

```bash
npm run build
npm run preview
```

## Deploy no Netlify (SPA)

1. Conecte o repo do GitHub no Netlify
2. Build command: `npm run build` | Publish directory: `dist`
3. Variáveis de ambiente (Site settings > Build & deploy > Environment):
   - `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`,
     `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID`
4. SPA routing: `netlify.toml` já possui redirect `/* -> /index.html` (200)
5. No Firebase Console, adicione o domínio do Netlify em Authentication > Settings > Authorized domains

## Scripts

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — checa tipos (tsc -b) e gera build de produção (Vite)
- `npm run preview` — serve o build localmente
- `npm run lint` — roda o ESLint

## 👨‍💻 Autor

Feito por **Thiago Ribeiro**

- **LinkedIn:** https://www.linkedin.com/in/thiagorib21
- **Email:** thiago.ribeiro2003@hotmail.com
- **GitHub:** https://github.com/thiagoribeiro21

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
