# Tech Stack

## Decisão inicial

O projeto será construído como um monorepo.

A raiz do repositório será:

```
Darthon-Empires/
```

A estrutura inicial será:

```
Darthon-Empires/
  docs/
  frontend/
  backend/
  README.md
```

Essa escolha faz sentido porque o jogo terá pelo menos duas aplicações principais:

- Frontend
- Backend

Além disso, o projeto pode ter pacotes compartilhados futuramente, como schemas, tipos, constantes, enums e regras auxiliares.

---

# Monorepo

Ferramenta sugerida:

- pnpm workspaces

## Motivos

- Simples de configurar
- Bom suporte para múltiplos projetos
- Permite compartilhar packages internos futuramente
- Instala dependências de forma eficiente
- Funciona bem com projetos TypeScript

---

# Frontend

Stack sugerida:

- Next.js
- TypeScript

## Responsabilidades do frontend

- Tela de login/cadastro
- Escolha de raça
- Dashboard do reino
- Painel de recursos
- Painel de aldeões
- Painel de construções
- Painel de craft
- Painel de pesquisas
- Ranking
- Futuramente tela de tropas e batalhas

---

# Backend

Stack sugerida:

- Node.js
- Express
- TypeScript
- Zod
- Kysely

## Responsabilidades do backend

- Autenticação
- Criação de jogador
- Criação de reino
- Cálculo de produção
- Gerenciamento de recursos
- Gerenciamento de aldeões
- Construções
- Craft
- Pesquisas
- Progressão de era
- Ranking
- Futuramente batalhas e alianças

---

# Banco de dados

Banco sugerido:

- PostgreSQL

## Motivos

- Relacional
- Bom para consistência
- Bom para transações
- Bom para queries de ranking
- Bom para histórico de temporada
- Funciona bem com Kysely

---

# Query Builder

Ferramenta sugerida:

- Kysely

## Motivos

- Tipagem forte
- Boa integração com TypeScript
- Mais controle que ORM tradicional
- Boa escolha para backend modular

---

# Validação

Ferramenta sugerida:

- Zod

## Uso esperado

- Validar input de rotas
- Criar schemas de request
- Criar schemas de response
- Criar tipos inferidos
- Compartilhar tipos entre backend e frontend quando fizer sentido

---

# Autenticação

Opções possíveis:

- Better Auth
- Auth.js
- Manual

Sugestão inicial:

- Manual

## Motivos

- Maior controle sobre o fluxo de autenticação
- Maior controle sobre criação e gerenciamento de usuários
- Melhor entendimento da base de autenticação do projeto
- Boa opção para um produto próprio em fase inicial
- Evita dependência cedo demais de uma biblioteca externa de auth
- Facilita adaptar o auth às regras futuras do jogo

---

# DevOps inicial

Ferramentas sugeridas:

- Docker
- Docker Compose
- GitHub Actions futuramente

Ambiente local mínimo:

```txt
- Frontend
- Backend
- PostgreSQL
```

---

# Deploy futuro

Opções simples para começar:

- Render
- Railway
- Fly.io
- VPS com Docker

Opções mais avançadas futuramente:

- AWS
- ECS
- RDS
- CloudFront