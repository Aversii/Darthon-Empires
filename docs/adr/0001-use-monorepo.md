# ADR 0001: Usar monorepo

## Status

Em discussão

## Contexto

O projeto Darthon Empires terá frontend e backend no mesmo repositório.

O frontend precisará consumir dados do backend e conhecer conceitos do jogo, como raças, eras, recursos, construções e status.

O backend será responsável pelas regras do jogo, persistência, autenticação, economia e futuramente batalhas.

## Decisão

Vamos usar monorepo com pnpm workspaces.

A raiz do monorepo será:

```
Darthon-Empires/
```

Estrutura inicial:

```
Darthon-Empires/
  docs/
  frontend/
  backend/
  README.md
```

## Motivos

- Facilita manter frontend e backend no mesmo repositório
- Facilita versionar mudanças de API junto com UI
- Facilita organizar documentação do produto
- Facilita setup local
- Evita criar vários repositórios cedo demais
- Permite adicionar packages compartilhados futuramente

## Consequências positivas

- Menos overhead no começo
- Melhor organização
- Mais fácil para duas pessoas trabalharem
- Melhor controle de mudanças

## Consequências negativas

- Exige um pouco mais de organização no setup
- Pode crescer demais se não houver padrão
- Precisa cuidar para não misturar responsabilidades entre frontend e backend

## Observação

Para o tamanho inicial do projeto, monorepo é a melhor escolha.