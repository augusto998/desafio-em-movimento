# Desafio em Movimento

Jogo educativo estático que combina Matemática e Educação Física em 10 perguntas com fases, tempo, pontuação, combos e ranking local.

## Run & Operate

- `pnpm --filter @workspace/desafio-em-movimento run dev` — abrir a prévia do jogo
- `pnpm --filter @workspace/desafio-em-movimento run typecheck` — verificar o scaffold do artefato
- `PORT=23538 BASE_PATH=/ pnpm --filter @workspace/desafio-em-movimento run build` — gerar a versão estática
- Para jogar sem ferramentas, abra `artifacts/desafio-em-movimento/index.html`

## Stack

- Arquivos de jogo: HTML, CSS e JavaScript puro.
- O ranking e a melhor pontuação usam somente `localStorage`.
- Vite existe apenas como ferramenta de prévia/build do workspace; o jogo não depende de backend, banco, APIs ou serviços externos.

## Where things live

- `artifacts/desafio-em-movimento/index.html` — telas e estrutura semântica.
- `artifacts/desafio-em-movimento/style.css` — identidade visual, responsividade e estados.
- `artifacts/desafio-em-movimento/script.js` — perguntas, fases, cronômetro, pontuação, combos e ranking.
- `artifacts/desafio-em-movimento/README.md` — documentação escolar, requisitos, fluxo e publicação.

## Architecture decisions

- A partida monta um baralho de 10 perguntas sorteando 3 fáceis, 4 médias e 3 difíceis para manter o equilíbrio das fases.
- O ranking é local ao navegador e não representa uma conta ou placar compartilhado.
- Os três desafios físicos são opcionais e não dependem de câmera, sensores, equipamentos ou permissões do navegador.

## Product

- Início com nome, instruções, jogo de 10 perguntas, cronômetro por fase, feedback imediato, combos, desafios físicos, tela de resultado e ranking local.

## User preferences

- Manter o projeto simples e publicável como arquivos estáticos no GitHub Pages.

## Gotchas

- Se o HTML continuar usando arquivos estáticos fora de `public/`, entradas CSS/JavaScript precisam ser referenciadas de forma que o build do Vite as inclua; atualmente o script usa `type="module"`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
