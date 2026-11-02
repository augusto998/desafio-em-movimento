# Desafio em Movimento

Jogo educativo estático com banco autoral organizado por matéria e dificuldade, até dez perguntas por partida, tempo configurável, combos e ranking local.

## Run & Operate

- `pnpm --filter @workspace/desafio-em-movimento run dev` — abrir a prévia do jogo
- `pnpm --filter @workspace/desafio-em-movimento run typecheck` — verificar o scaffold do artefato
- `PORT=23538 BASE_PATH=/ pnpm --filter @workspace/desafio-em-movimento run build` — gerar a versão estática
- Para jogar sem ferramentas, abra `artifacts/desafio-em-movimento/index.html`

## Stack

- Arquivos de jogo: HTML, CSS e JavaScript puro.
- Perfis com apelido, histórico de questões e ranking usam somente `localStorage`; não há senha, autenticação online, API ou sincronização entre dispositivos.
- O modo convidado não registra resultado no ranking.
- O banco de 54 perguntas está em `artifacts/desafio-em-movimento/question-bank.js`, seis por matéria; todas são autorais e não recebem ano de aplicação ENEM sem fonte confirmada.
- Vite existe apenas como ferramenta de prévia/build do workspace; o jogo não depende de backend, banco, APIs ou serviços externos.

## Where things live

- `artifacts/desafio-em-movimento/index.html` — telas e estrutura semântica.
- `artifacts/desafio-em-movimento/style.css` — identidade visual, responsividade e estados.
- `artifacts/desafio-em-movimento/script.js` — perguntas, fases, cronômetro, pontuação, combos e ranking.
- `artifacts/desafio-em-movimento/README.md` — documentação escolar, requisitos, fluxo e publicação.

## Architecture decisions

- A partida monta um conjunto de dez questões conforme a dificuldade e as matérias escolhidas; a pontuação-base varia conforme a dificuldade.
- O ranking é local, tem uma entrada por apelido e preserva o melhor resultado; não representa uma conta ou placar compartilhado.
- Os três desafios físicos são opcionais e não dependem de câmera, sensores, equipamentos ou permissões do navegador.

## Product

- Início com perfil local ou convidado, seleção de matérias/dificuldade/tempo (10–35 s), partidas de até dez perguntas, feedback, combos, movimentos opcionais, resultado e ranking local.

## User preferences

- Manter o projeto simples e publicável como arquivos estáticos no GitHub Pages.

## Gotchas

- Se o HTML continuar usando arquivos estáticos fora de `public/`, entradas CSS/JavaScript precisam ser referenciadas de forma que o build do Vite as inclua; atualmente o script usa `type="module"`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
