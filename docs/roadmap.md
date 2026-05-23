# Roadmap

## Estratégia

O projeto deve começar pela economia.

A guerra depende de economia funcionando bem.

Antes de batalha, o jogo precisa ter:

- Jogador
- Reino
- Recursos
- Produção
- População
- Construções
- Craft
- Progressão

Depois disso, a guerra entra como consequência natural da economia.

---

# Fase 1: Setup do projeto

Objetivo: preparar a base técnica do monorepo.

- [ ] Criar estrutura do projeto
- [ ] Configurar pnpm workspaces
- [ ] Criar frontend
- [ ] Criar backend
- [ ] Configurar TypeScript
- [ ] Configurar lint/format
- [ ] Configurar Docker Compose com PostgreSQL
- [ ] Criar README inicial
- [ ] Criar docs iniciais

Resultado esperado:

```
O projeto roda localmente com frontend, backend e banco.
```

---

# Fase 2: Base do jogador

Objetivo: criar a fundação do jogo.

- [ ] Criar autenticação
- [ ] Criar entidade de jogador
- [ ] Criar entidade de reino
- [ ] Permitir escolha de raça
- [ ] Criar reino inicial automaticamente
- [ ] Definir era inicial como Era Antiga
- [ ] Criar recursos iniciais
- [ ] Criar população inicial
- [ ] Criar construções iniciais
- [ ] Criar tela inicial do reino

Resultado esperado:

```
O jogador consegue criar conta, escolher raça e entrar em um reino inicial funcional.
```

---

# Fase 3: Recursos e economia básica

Objetivo: fazer o reino gerar recursos.

- [ ] Criar sistema de recursos
- [ ] Criar madeira
- [ ] Criar pedra
- [ ] Criar alimento
- [ ] Criar ouro
- [ ] Criar produção base por hora
- [ ] Criar cálculo de produção offline
- [ ] Atualizar recursos com base no tempo passado
- [ ] Exibir produção por hora na interface
- [ ] Exibir quantidade atual de cada recurso
- [ ] Criar limite de armazenamento

Resultado esperado:

```
O reino produz recursos ao longo do tempo, mesmo se o jogador sair e voltar depois.
```

---

# Fase 4: Aldeões e alocação de trabalho

Objetivo: permitir que o jogador controle a economia.

- [ ] Criar população total
- [ ] Criar população disponível
- [ ] Criar aldeões trabalhando
- [ ] Criar aldeões ociosos
- [ ] Permitir alocar aldeões em madeira
- [ ] Permitir alocar aldeões em pedra
- [ ] Permitir alocar aldeões em alimento
- [ ] Recalcular produção conforme alocação
- [ ] Impedir alocar mais aldeões do que o disponível
- [ ] Criar painel de gerenciamento de aldeões

Resultado esperado:

```
O jogador consegue decidir quantos aldeões trabalham em cada recurso.
```

---

# Fase 5: Construções básicas

Objetivo: permitir construir e evoluir estruturas.

- [ ] Criar sistema de construções
- [ ] Criar Centro da Vila
- [ ] Criar Casas
- [ ] Criar Fazenda
- [ ] Criar Cabana dos Lenhadores
- [ ] Criar Pedreira
- [ ] Criar Armazém
- [ ] Criar Celeiro
- [ ] Criar custo de construção
- [ ] Criar tempo de construção
- [ ] Criar fila de construção
- [ ] Permitir subir nível das construções
- [ ] Aplicar bônus das construções na produção
- [ ] Bloquear construção sem recurso suficiente
- [ ] Bloquear construção sem requisito

Resultado esperado:

```
O jogador consegue gastar recursos para criar e melhorar construções.
```

---

# Fase 6: População, bem-estar e impostos

Objetivo: adicionar consequência para decisões econômicas.

- [ ] Criar limite máximo de população
- [ ] Fazer Casas aumentarem limite populacional
- [ ] Criar crescimento populacional por hora
- [ ] Fazer alimento influenciar crescimento populacional
- [ ] Criar bem-estar de 0 a 100
- [ ] Fazer alimento impactar bem-estar
- [ ] Fazer imposto impactar bem-estar
- [ ] Fazer moradia impactar bem-estar
- [ ] Criar taxa de imposto
- [ ] Calcular ouro por hora com base na população
- [ ] Exibir impacto previsto antes de alterar imposto

Resultado esperado:

```
O jogador precisa equilibrar crescimento, alimento, moradia, imposto e produção.
```

---

# Fase 7: Craft econômico

Objetivo: criar melhorias de produção usando recursos.

- [ ] Criar sistema de craft
- [ ] Criar craft de Machado simples
- [ ] Criar craft de Picareta simples
- [ ] Criar craft de Arado simples
- [ ] Criar custo de craft
- [ ] Criar tempo de craft
- [ ] Criar fila de craft
- [ ] Aplicar bônus de craft na produção
- [ ] Impedir craft duplicado se for melhoria única
- [ ] Exibir crafts disponíveis

Resultado esperado:

```
O jogador consegue transformar recursos em melhorias econômicas.
```

---

# Fase 8: Progressão para Era do Bronze

Objetivo: criar a primeira grande meta do jogo.

- [ ] Criar requisitos de evolução de era
- [ ] Criar Oficina de Mineração
- [ ] Exigir construções mínimas
- [ ] Exigir recursos mínimos
- [ ] Criar botão de evolução de era
- [ ] Consumir recursos ao evoluir
- [ ] Alterar era atual do reino
- [ ] Desbloquear novos recursos
- [ ] Desbloquear novas construções

Resultado esperado:

```
O jogador consegue sair da Era Antiga e entrar na Era do Bronze.
```

---

# Fase 9: Economia da Era do Bronze

Objetivo: expandir a economia com novos recursos.

- [ ] Criar ferro
- [ ] Criar carvão
- [ ] Criar Mina de Ferro
- [ ] Criar Carvoaria
- [ ] Criar Mina de Ouro
- [ ] Criar Forja
- [ ] Criar Mercado
- [ ] Criar produção de ferro
- [ ] Criar produção de carvão
- [ ] Criar produção de ouro por mina
- [ ] Permitir alocar aldeões nos novos recursos
- [ ] Criar crafts da Era do Bronze

Resultado esperado:

```
A Era do Bronze adiciona novos recursos, novos crafts e uma economia mais profunda.
```

---

# Fase 10: Ranking inicial

Objetivo: criar competição sem precisar de guerra ainda.

- [ ] Criar pontuação de poder total
- [ ] Calcular pontos por construção
- [ ] Calcular pontos por população
- [ ] Calcular pontos por era
- [ ] Criar ranking geral
- [ ] Criar ranking de economia
- [ ] Criar ranking de população
- [ ] Atualizar ranking periodicamente

Resultado esperado:

```
Os jogadores já conseguem competir mesmo antes do sistema de batalha existir.
```

---

# Fase 11: Preparação para guerra

Objetivo: preparar a base militar sem criar batalha complexa ainda.

- [ ] Criar Quartel
- [ ] Criar unidade militar
- [ ] Criar treinamento de tropas
- [ ] Fazer tropas consumirem alimento
- [ ] Fazer aldeão virar soldado
- [ ] Remover soldado da economia
- [ ] Criar poder militar
- [ ] Exibir exército do jogador

Resultado esperado:

```
O jogador consegue treinar tropas, mas ainda sem atacar outros jogadores.
```

---

# Fase 12: Batalhas simples

Objetivo: criar o primeiro sistema de combate.

- [ ] Permitir escolher jogador alvo
- [ ] Permitir enviar tropas
- [ ] Criar tempo de viagem
- [ ] Criar cálculo automático de batalha
- [ ] Criar ataque total
- [ ] Criar defesa total
- [ ] Criar perdas de tropas
- [ ] Criar saque de recursos
- [ ] Criar relatório de batalha
- [ ] Criar proteção inicial para novos jogadores

Resultado esperado:

```
Jogadores conseguem atacar outros jogadores de forma simples e automática.
```