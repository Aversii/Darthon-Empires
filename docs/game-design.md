# Game Design: Darthon: Forja dos Reinos

## Visão geral

Jogo de navegador inspirado em Imperia Online, onde o jogador assume o papel de governador de um reino.

O jogo começa com uma pequena vila na Era Antiga. O jogador precisa administrar população, recursos, construções, produção, bem-estar social, evolução tecnológica e, futuramente, guerras contra outros jogadores.

A proposta principal é criar um jogo de progressão lenta e estratégica, baseado em ciclos de temporada.

## Temporada

O jogo terá um sistema de temporada com reset a cada 2 meses.

Ao final de cada temporada, o progresso principal do mundo será resetado, mas o jogador poderá manter conquistas, histórico, títulos ou cosméticos.

### Reseta ao final da temporada

- Recursos
- Construções
- Tropas
- Pesquisas
- Ranking da temporada
- Mapa ou territórios, caso exista

### Mantém após a temporada

- Conta do jogador
- Histórico de temporadas
- Conquistas
- Títulos
- Cosméticos
- Medalhas de participação ou ranking

## Jogador

O jogador representa o governador de um reino.

Cada jogador deve possuir:

- Conta
- Reino
- Raça escolhida
- População
- Recursos
- Construções
- Produção por hora
- Bem-estar social
- Era atual
- Ranking
- Histórico de temporada

## Fluxo inicial do jogador

1. Jogador cria conta
2. Escolhe uma raça
3. Recebe um reino inicial
4. Começa na Era Antiga
5. Recebe recursos iniciais
6. Recebe aldeões iniciais
7. Começa a construir e produzir recursos

## Dados iniciais sugeridos

```txt
Era inicial: Era Antiga

Recursos iniciais:
- Madeira: 500
- Pedra: 300
- Alimento: 500
- Ouro: 100

População inicial:
- Aldeões: 20

Construções iniciais:
- Centro da Vila nível 1
- Casas nível 1
- Fazenda nível 1
```

## Raças

### Humanos

Raça equilibrada, boa para jogadores iniciantes.

Buffs:

- +5% produção de alimento
- +5% arrecadação de imposto
- -5% tempo de construção
- Exército balanceado futuramente

Estilo de jogo:

- Crescimento estável
- Boa economia
- Boa adaptação

### Elfos

Raça focada em velocidade, madeira, alimento e bem-estar.

Buffs:

- +10% produção de madeira
- +10% produção de alimento
- +10% velocidade de tropas leves futuramente
- +5% bem-estar social
- Arqueiros mais fortes futuramente

Desvantagens:

- -5% defesa de muralhas futuramente
- Unidades mais caras em ouro futuramente

Estilo de jogo:

- Expansão rápida
- Economia leve
- Foco em velocidade

### Anões

Raça focada em mineração, defesa e construções resistentes.

Buffs:

- +15% produção de pedra
- +10% produção de ferro
- +10% defesa de muralhas futuramente
- -10% custo de construções defensivas futuramente
- Tropas pesadas mais resistentes futuramente

Desvantagens:

- -5% produção de alimento
- Tropas mais lentas futuramente

Estilo de jogo:

- Defesa forte
- Economia mineral
- Progressão sólida

## Eras

### Era Antiga

Fase inicial do jogo. O reino começa simples, com construções rústicas, coleta básica e baixa complexidade.

Recursos principais:

- Madeira
- Pedra
- Alimento
- Ouro por imposto

Objetivo:

- Construir a base econômica do reino
- Desbloquear mineração
- Preparar evolução para Era do Bronze

Construções principais:

- Centro da Vila
- Casas
- Fazenda
- Cabana dos Lenhadores
- Pedreira
- Armazém
- Celeiro
- Templo
- Oficina de Mineração

Requisitos sugeridos para avançar:

```txt
- Centro da Vila nível 3
- Cabana dos Lenhadores nível 3
- Pedreira nível 3
- Fazenda nível 3
- Armazém nível 2
- Oficina de Mineração construída
- 5.000 madeira
- 5.000 pedra
- 2.000 alimento
```

### Era do Bronze

Fase de metalurgia, mineração, forjas e fortalecimento do reino.

Mesmo usando o nome Era do Bronze, a era pode representar o começo do uso de metais como bronze, ferro e ferramentas melhores.

Recursos principais:

- Madeira
- Pedra
- Ferro
- Ouro
- Carvão
- Alimento

Objetivo:

- Melhorar produção
- Desbloquear mineração avançada
- Criar ferramentas
- Preparar tecnologias com pólvora
- Melhorar o exército futuramente

Construções principais:

- Mina de Ferro
- Mina de Ouro
- Carvoaria
- Forja
- Mercado
- Prefeitura
- Academia
- Laboratório de Alquimia

Requisitos sugeridos para avançar:

```txt
- Centro da Vila nível 6
- Mina de Ferro nível 5
- Mina de Ouro nível 3
- Carvoaria nível 4
- Forja nível 5
- Mercado nível 3
- Laboratório de Alquimia construído
- 60% das construções da Era do Bronze concluídas
- 20.000 madeira
- 20.000 pedra
- 10.000 ferro
- 5.000 ouro
- 5.000 carvão
```

### Era Moderna

Fase avançada do jogo, baseada em pólvora, engenharia, economia forte, alianças e guerras mais destrutivas.

Recursos principais:

- Madeira
- Pedra
- Ferro
- Ouro
- Carvão
- Pólvora
- Alimento

Objetivo:

- Disputar ranking
- Fortalecer economia
- Preparar guerras
- Criar alianças
- Competir pelo domínio da temporada

Construções principais:

- Oficina de Pólvora
- Fundição Avançada
- Arsenal
- Universidade
- Banco
- Estrada Real
- Embaixada
- Forte