# Darthon Empires

<table>
  <tr>
    <td width="35%">
      <img src="https://github.com/user-attachments/assets/706391b5-767d-4f5c-a2b4-7200b92e09b0" alt="Darthon Empires preview" width="100%" />
    </td>
    <td width="65%">
      <p>
        <strong>Darthon Empires</strong> é um jogo de navegador inspirado em Imperia Online, onde o jogador assume o papel de governador de um reino.
      </p>
      <p>
        O jogador começa com uma pequena vila na Era Antiga e precisa administrar população, recursos, construções, produção, bem-estar social, evolução tecnológica e, futuramente, guerras contra outros jogadores.
      </p>
    </td>
  </tr>
</table>

## Objetivo do projeto

Criar um jogo de estratégia e progressão lenta, baseado em economia, construção, evolução de eras e competição entre jogadores.

O foco inicial do projeto é construir uma base sólida de:

1. Jogador
2. Reino
3. Economia
4. Recursos
5. Aldeões
6. Construções
7. Craft e produção
8. Progressão de eras

Somente depois que essa base estiver funcional, o projeto deve avançar para:

1. Tropas
2. Guerras
3. Batalhas
4. Saques
5. Alianças
6. Ranking competitivo

## Stack inicial

- Monorepo com pnpm workspaces
- Backend com Node.js, express e TypeScript
- Banco de dados PostgreSQL


## Estrutura do projeto

```txt
monorepo/
  docs/
  frontend/
  backend/
  packages/
    shared/
  package.json
  pnpm-workspace.yaml
```

## Documentação

- [Game Design](./docs/game-design.md)
- [Tech Stack](./docs/tech-stack.md)
- [Architecture](./docs/architecture.md)
- [Database](./docs/database.md)
- [Roadmap](./docs/roadmap.md)
- [ADR 0001: Usar monorepo](./docs/adr/0001-use-monorepo.md)
- [ADR 0002: Usar cálculo de produção por timestamp](./docs/adr/0002-use-timestamp-based-resource-generation.md)

## Ordem recomendada de desenvolvimento

```
1. Jogador
2. Reino
3. Raça
4. Recursos
5. Produção por hora
6. Aldeões
7. Construções
8. População
9. Bem-estar
10. Impostos
11. Craft econômico
12. Evolução de era
13. Ranking
14. Tropas
15. Batalhas
16. Alianças
```

## MVP inicial

O primeiro MVP não deve ter guerra.

O primeiro MVP deve provar que a economia funciona.

### MVP 1: Reino econômico funcional

- [ ] Jogador cria conta
- [ ] Jogador escolhe raça
- [ ] Reino é criado
- [ ] Recursos são gerados por hora
- [ ] Aldeões podem ser alocados
- [ ] Construções podem ser melhoradas
- [ ] População cresce
- [ ] Alimento importa
- [ ] Bem-estar importa
- [ ] Imposto gera ouro
- [ ] Craft melhora produção

Resultado esperado:

```
O jogador consegue jogar durante alguns dias apenas evoluindo economia, população e construções.
```

<img width="1079" height="605" alt="image" src="https://github.com/user-attachments/assets/9e0195e1-3273-459b-b184-fa8926035031" />
