# Kidsney UI assets (Style A)

Все элементы — глянцевый мультяшный 3D-стиль (см. `docs/art-bible.md`), токены:
bg `#0e1220`, surface `#1a2138`, primary `#4f7cff`, accent `#ffb020`,
success `#34d17b`, danger `#ff5c6c`.

## Кнопки (`button_primary_*`, `button_amber_*`)

- Состояния: `normal` / `pressed` / `disabled`.
- 9-slice: центральная зона кнопки **свободна от градиента краёв** — режьте по
  вертикали на 32 px слева и справа (от исходной ширины 1239 px), по горизонтали
  капсула не масштабируется по высоте — фиксируйте высоту ~64–96 px под нужный
  размер, масштабируйте только ширину центральной полосы.
- Текст кладётся поверх, цвет `--kn-text` (#f4f6ff), шрифт Nunito ExtraBold.

## Шкалы (`bar_hp_green`, `bar_hp_red`, `bar_super` + `*_fill`)

- `*_fill` — заливка поверх рамки; масштабируйте по ширине с 9-slice
  (закругления ~48 px по краям).
- `energy_pip` / `energy_pip_empty` — сегменты энергии ⚡, выкладываются в ряд.

## Карточка (`card_panel`)

- 9-slice: скругление углов радиус 48 px — закрепляйте углы 96×96 px,
  центр тяните. Подложка `--kn-surface` с тонким ободом `--kn-text-dim`.

## Узлы карты (`node_*`)

- 4 состояния: `available` (синее свечение), `current` (+ белое кольцо),
  `completed` (золотое кольцо + зелёная галочка), `locked` (обесцвечен + замок).
- Размещать центром на точке пути; диаметр на карте ~120–160 px.

## Иконки

- `exercise_*` — 8 упражнений по канону `EXERCISE_STAT_MAP`
  (`src/game/progression/index.ts`): squats, push_ups, jumping_jacks, high_knees,
  jump, plank, punches, kicks.
- `stat_*` — strength (бицепс), speed (крылатая молния), stamina (пламенеющее
  сердце), health (зелёное сердце с плюсом).
- `star_level` — звезда уровня, `coin` — токен, `lock` — замок.
