# Database

## Banco escolhido

O banco inicial será PostgreSQL.

## Objetivo do modelo inicial

O primeiro modelo deve suportar:

- Jogador
- Reino
- Raça
- Era
- Recursos
- Aldeões
- Construções
- Produção por hora
- Craft
- Progressão econômica

Guerras, tropas e alianças devem vir depois.

---

# Tabelas iniciais sugeridas

```txt
users
players
kingdoms
kingdom_resources
kingdom_villagers
building_definitions
kingdom_buildings
craft_definitions
kingdom_crafts
seasons
```

---

# users

Representa a conta autenticada.

Campos sugeridos:

```
id
email
name
created_at
updated_at
```

---

# players

Representa o jogador dentro do jogo.

Campos sugeridos:

```
id
user_id
display_name
created_at
updated_at
```

---

# kingdoms

Representa o reino do jogador.

Campos sugeridos:

```
id
player_id
season_id
name
race
era
welfare
tax_rate
population
max_population
last_resource_update_at
created_at
updated_at
```

---

# kingdom_resources

Representa os recursos atuais do reino.

Campos sugeridos:

```
id
kingdom_id
resource_type
amount
storage_limit
created_at
updated_at
```

Tipos de recurso iniciais:

```
wood
stone
food
gold
iron
coal
gunpowder
```

---

# kingdom_villagers

Representa a distribuição dos aldeões.

Campos sugeridos:

```
id
kingdom_id
job_type
assigned_count
created_at
updated_at
```

Tipos de trabalho iniciais:

```
idle
woodcutter
stonecutter
farmer
builder
iron_miner
gold_miner
charcoal_worker
researcher
soldier
```

---

# building_definitions

Representa o catálogo de construções disponíveis no jogo.

Campos sugeridos:

```
id
building_type
name
era
description
base_wood_cost
base_stone_cost
base_food_cost
base_gold_cost
base_iron_cost
base_coal_cost
base_build_time_seconds
max_level
created_at
updated_at
```

---

# kingdom_buildings

Representa as construções de um reino.

Campos sugeridos:

```
id
kingdom_id
building_type
level
status
started_at
finishes_at
created_at
updated_at
```

Status possíveis:

```
idle
building
upgrading
completed
```

---

# craft_definitions

Representa o catálogo de crafts disponíveis.

Campos sugeridos:

```
id
craft_type
name
era
description
wood_cost
stone_cost
food_cost
gold_cost
iron_cost
coal_cost
gunpowder_cost
craft_time_seconds
effect_type
effect_value
created_at
updated_at
```

---

# kingdom_crafts

Representa crafts feitos ou em andamento por um reino.

Campos sugeridos:

```
id
kingdom_id
craft_type
status
started_at
finishes_at
created_at
updated_at
```

Status possíveis:

```
crafting
completed
```

---

# seasons

Representa uma temporada do jogo.

Campos sugeridos:

```
id
name
starts_at
ends_at
status
created_at
updated_at
```

Status possíveis:

```
scheduled
active
finished
```

---

# Tabelas futuras

```
research_definitions
kingdom_researches
troop_definitions
kingdom_troops
battle_reports
battle_events
alliances
alliance_members
rankings
```

---

# Observação importante

No começo, não criar tabelas de guerra.

Primeiro precisamos validar:

- Jogador
- Reino
- Economia
- Aldeões
- Recursos
- Construções
- Craft

Depois disso, o modelo militar entra melhor.