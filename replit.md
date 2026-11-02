# Desafio em Movimento

Jogo educativo com banco autoral organizado por matéria em três fases: 20 questões fáceis, 15 médias e 10 difíceis; tempo configurável, combos e ranking.

## Run & Operate

- `pnpm --filter @workspace/desafio-em-movimento run dev` — abrir a prévia do jogo
- `pnpm --filter @workspace/desafio-em-movimento run typecheck` — verificar o scaffold do artefato
- `PORT=23538 BASE_PATH=/ pnpm --filter @workspace/desafio-em-movimento run build` — gerar a versão estática
- Para jogar sem ferramentas, abra `artifacts/desafio-em-movimento/index.html`

## Stack

- Arquivos de jogo: HTML, CSS e JavaScript puro.
- Cadastro/login e ranking entre dispositivos usam API Express e PostgreSQL, quando implantados e configurados. Sem URL da API e banco ativos, acesso remoto fica indisponível.
- O modo convidado não registra resultado no ranking.
- O banco de perguntas está em `artifacts/desafio-em-movimento/question-bank.js`; todas são autorais e não recebem ano de aplicação ENEM sem fonte confirmada.
- GitHub Pages serve apenas o frontend; a API requer implantação independente com secrets e HTTPS.

## Where things live

- `artifacts/desafio-em-movimento/index.html` — telas e estrutura semântica.
- `artifacts/desafio-em-movimento/style.css` — identidade visual, responsividade e estados.
- `artifacts/desafio-em-movimento/script.js` — perguntas, fases, cronômetro, pontuação, combos e ranking.
- `artifacts/desafio-em-movimento/README.md` — documentação escolar, requisitos, fluxo e publicação.

## Architecture decisions

- A partida monta três fases fixas: 20 fáceis, 15 médias e 10 difíceis; matérias selecionadas precisam ter volume suficiente para cada fase.
- O ranking global preserva apenas o melhor resultado por conta; convidados não são registrados.
- Os três desafios físicos são opcionais e não dependem de câmera, sensores, equipamentos ou permissões do navegador.

## Product

- Início com login remoto ou convidado, seleção de matérias/tempo (10–35 s), fases de 20/15/10 perguntas, feedback, combos, movimentos opcionais, resultado e ranking compartilhado.

## User preferences

- Manter o projeto simples e publicável como arquivos estáticos no GitHub Pages.

## Gotchas

- Se o HTML continuar usando arquivos estáticos fora de `public/`, entradas CSS/JavaScript precisam ser referenciadas de forma que o build do Vite as inclua; atualmente o script usa `type="module"`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
