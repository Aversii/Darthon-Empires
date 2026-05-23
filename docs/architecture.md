# Architecture

## Visão geral

O projeto será dividido em frontend, backend e documentação.

A arquitetura inicial deve priorizar simplicidade, separação clara de responsabilidades e facilidade de evolução.

## Estrutura do repositório

```
Darthon-Empires/
  docs/

  frontend/
    src/

  backend/
    src/

  README.md
```

## frontend

Aplicação frontend.

Responsável por:

- Interface do jogador
- Dashboard do reino
- Exibição de recursos
- Gerenciamento de aldeões e recursos
- Construções
- Craft
- Pesquisas
- Ranking
- Futuramente batalhas

## backend

Aplicação backend.

Responsável por:

- Autenticação
- Regras de negócio
- Persistência
- Cálculos de economia
- Gerenciamento do jogo
- APIs para o frontend

---

# Arquitetura do backend

Sugestão de organização por módulos:

```
backend/src/modules/
  auth/
  players/
  kingdoms/
  resources/
  villagers/
  buildings/
  crafts/
  researches/
  seasons/
  rankings/
  battles/
  alliances/
```

Cada módulo pode seguir a estrutura:

```
schema.ts
model.ts
service.ts
routes.ts
```

---

# Responsabilidade das camadas

## schema.ts

Responsável por:

- Schemas Zod
- Tipos inferidos
- Request schemas
- Response schemas
- Params schemas
- Querystring schemas

## model.ts

Responsável por:

- Acesso ao banco
- Queries com Kysely
- Inserts
- Updates
- Deletes
- Selects

## service.ts

Responsável por:

- Regras de negócio
- Orquestração
- Transações
- Validações de domínio
- Cálculo de produção
- Evolução de era
- Aplicação de bônus

## routes.ts

Responsável por:

- Registrar endpoints
- Validar entrada
- Chamar services
- Retornar resposta

---

# Regras importantes

Routes não devem conter regra de negócio.

Models não devem conter regra de negócio.

Services devem concentrar as regras do jogo.

---

# Cálculo de produção

A produção de recursos deve ser baseada em timestamp, não em cron rodando a cada segundo.

A ideia é salvar a última vez em que os recursos foram atualizados e calcular a diferença de tempo quando o jogador acessa ou executa uma ação.

Exemplo:

```
produção acumulada = produção por hora x horas desde a última atualização
```

## Por que não usar cron para produção?

Porque cron para cada jogador pode ficar caro, complexo e desnecessário.

Com cálculo por timestamp:

- O jogo escala melhor
- O jogador continua produzindo offline
- O backend calcula somente quando necessário
- Evita jobs constantes para cada reino

## Fluxo de atualização econômica

```
1. Jogador faz uma ação
2. Backend busca o reino
3. Backend calcula tempo desde last_resource_update_at
4. Backend calcula produção acumulada
5. Backend aplica limite de armazenamento
6. Backend salva recursos atualizados
7. Backend executa a ação solicitada
8. Backend retorna estado atualizado
```

---

# Primeiros módulos a implementar

```
1. auth
2. players
3. kingdoms
4. resources
5. villagers
6. buildings
7. crafts
```

# Módulos futuros

```
1. researches
2. rankings
3. seasons
4. troops
5. battles
6. alliances
```