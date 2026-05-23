# ADR 0002: Usar cálculo de produção baseado em timestamp

## Status

Em discussão

## Contexto

O jogo precisa produzir recursos ao longo do tempo, mesmo quando o jogador está offline.

Uma opção seria usar cron ou jobs periódicos para atualizar recursos de todos os jogadores.

Outra opção é calcular a produção acumulada apenas quando necessário.

## Decisão

Vamos calcular produção usando timestamp.

Cada reino terá um campo como:

```
last_resource_update_at
```

Quando o jogador acessar o reino ou executar uma ação, o backend calcula quanto tempo passou desde a última atualização e aplica a produção acumulada.

## Exemplo

```
tempo passado = agora - last_resource_update_at

produção acumulada = produção por hora x tempo passado em horas
```

## Motivos

- Mais simples
- Mais barato
- Mais fácil de escalar
- Evita cron para cada jogador
- Funciona bem com produção offline
- Reduz processamento desnecessário

## Consequências positivas

- O jogo não precisa atualizar todos os reinos o tempo inteiro
- A produção offline funciona naturalmente
- O backend só calcula quando o jogador interage

## Consequências negativas

- Toda ação importante precisa atualizar recursos antes
- O service precisa garantir consistência
- Pode exigir transação em ações que gastam recursos

## Regra importante

Antes de qualquer ação que dependa de recursos, o backend deve atualizar a economia do reino.

Exemplos:

- Construir
- Fazer craft
- Evoluir construção
- Evoluir era
- Alterar aldeões
- Treinar tropas futuramente