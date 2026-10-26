# Desafio em Movimento

**Pense. Mexa. Supere.** Um jogo educativo que conecta Matemática e Educação Física por meio de perguntas, tempo, pontuação e desafios opcionais de movimento.

- **Jogo publicado:** [augusto998.github.io/desafio-em-movimento](https://augusto998.github.io/desafio-em-movimento/)
- **Repositório:** [github.com/augusto998/desafio-em-movimento](https://github.com/augusto998/desafio-em-movimento)
- **Instituição:** Instituto Federal de Mato Grosso (IFMT) — Campus Barra do Garças

## Sobre

O Desafio em Movimento é um quiz para estudantes do Ensino Médio Integrado. Cada partida reúne dez perguntas de Matemática, Educação Física e conteúdos interdisciplinares. A proposta é apoiar a revisão de conteúdos de um jeito dinâmico, incentivando o raciocínio, a participação e hábitos de movimento seguros.

### Objetivos

- Revisar operações, porcentagem, médias, distância, tempo, velocidade e unidades de medida.
- Reforçar conhecimentos de esportes, saúde, alongamento, aquecimento e capacidades físicas.
- Estimular a participação e a aprendizagem com feedback imediato.
- Aplicar gamificação e conceitos de desenvolvimento web em um projeto interdisciplinar.

## Como jogar

1. Informe seu nome ou apelido e selecione **Começar**.
2. Escolha uma ou mais matérias, a dificuldade e o tempo (de 10 a 25 segundos por pergunta).
3. Responda dez perguntas sorteadas do banco de centenas de questões; o histórico local reduz repetições em partidas futuras.
4. Veja o feedback e a explicação após cada resposta. Se o tempo acabar, a resposta conta como incorreta.
5. Três acertos seguidos dão +50 pontos; cinco acertos seguidos dão +100 pontos. A dificuldade da questão define a pontuação-base.
6. Em algumas perguntas, é possível realizar um desafio físico opcional e marcar como concluído para receber +25 pontos.
7. No final, confira pontuação, acertos, erros, aproveitamento, maior combo e posição no ranking. Perfis têm uma única entrada, com o melhor resultado; convidados não são registrados.

> Os desafios físicos são opcionais. Respeite seus limites e siga as orientações do professor ou professora. Interrompa se sentir desconforto.

## Funcionalidades

- Telas de início, instruções, partida, resultado e ranking.
- Perguntas aleatórias com quatro alternativas, cronômetro e explicação.
- Pontos por dificuldade, bônus de combo e desafio físico opcional.
- Resultado com estatísticas e posição no ranking.
- Ranking local com até dez resultados e ação para limpar os dados após confirmação.
- Interface em português e espanhol, alternável a qualquer momento sem perder o andamento da partida.
- Interface adaptável a celulares, tablets e computadores; atalho de navegação por teclado, foco visível e suporte à preferência por movimento reduzido.
- Efeitos sonoros opcionais e desafios de movimento adaptáveis, que podem ser ignorados com segurança.
- Configuração da dificuldade, seleção de uma ou mais matérias e tempo de 10 a 25 segundos por pergunta.
- Mais de 300 questões originais em português e espanhol, com alternativas embaralhadas e histórico local para reduzir repetições.
- Acesso por perfil local (apelido único e melhor resultado por perfil) ou convidado (sem gravação no ranking).

## História de usuário

> **Como estudante do Ensino Médio Integrado, quero responder a perguntas que conectam Matemática e Educação Física em rodadas curtas e com feedback, para revisar os conteúdos de forma participativa e acompanhar meu desempenho.**

### Critérios de aceitação

- A partida só começa após informar um nome ou apelido.
- Cada partida apresenta dez perguntas, organizadas nas três fases, com quatro opções e tempo limitado.
- A aplicação informa se a resposta está correta e apresenta uma explicação, inclusive quando o tempo acaba.
- A pontuação, os acertos, os erros e os combos são atualizados conforme as respostas.
- Desafios físicos aparecem apenas em perguntas elegíveis e podem ser ignorados.
- A tela final apresenta estatísticas e o ranking do navegador pode ser consultado.
- O conteúdo permanece utilizável em telas pequenas.

Histórias complementares estão em [../../docs/HISTORIAS-DE-USUARIO.md](../../docs/HISTORIAS-DE-USUARIO.md).

## Equipe

Estudantes do **Instituto Federal de Mato Grosso (IFMT) — Campus Barra do Garças**:

1. Márcio Vitor
2. Augusto Malaquias Carvalho
3. Matheus José
4. Eduardo Gomes
5. Emanuele Oliveira Andrade
6. Maria Eduarda Sastre
7. João Pedro Pereira
8. Ana Eduarda Sousa
9. Maicon Goulart
10. Heitor Pernet
11. Byank Chrystinny
12. Leonardo Ribeiro

## Tecnologias e implementação

O jogo é uma aplicação estática feita com **HTML, CSS e JavaScript**, sem serviço de login, API ou banco de dados. O perfil é somente local: não usa senha nem sincroniza entre dispositivos. A lógica e as perguntas ficam em `script.js`; a estrutura das telas está em `index.html`; e o visual responsivo está em `style.css`.

Este repositório também contém um workspace pnpm com um scaffold independente de React, TypeScript, Vite e Express. Esse scaffold não é necessário para o quiz estático e sua existência não indica que servidor ou banco de dados estejam publicados ou conectados ao jogo.

## Executar localmente

**Para jogar sem instalar dependências:** abra `index.html` desta pasta em um navegador moderno.

**Para executar pelo Vite no workspace**, instale Node.js e pnpm e, a partir da raiz do repositório, rode:

```sh
pnpm install
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/desafio-em-movimento dev
```

A configuração do Vite exige as variáveis `PORT` e `BASE_PATH`. O servidor informará o endereço local no terminal.

## Privacidade e armazenamento

O jogo solicita somente um nome ou apelido. A pontuação e os resultados são guardados no `localStorage` do navegador utilizado. Portanto, o ranking é local: não é sincronizado com outras pessoas, navegadores ou dispositivos. É possível apagá-lo pela opção **Limpar ranking** ou removendo os dados locais do navegador. Não use informações pessoais como nome de exibição.

## Publicação

O jogo publicado está no link no início deste documento. A publicação do frontend no GitHub Pages não hospeda automaticamente o scaffold de servidor Express ou um banco de dados; o quiz atual usa o navegador e armazenamento local.

## Ideias para melhorias futuras

Estas são sugestões, não funcionalidades implementadas:

- Expandir o banco de perguntas e permitir revisão de conteúdo por docentes.
- Adicionar mais opções de acessibilidade e níveis de dificuldade.
- Avaliar testes automatizados e documentação para contribuições.
- Estudar ranking entre dispositivos somente com uma solução de backend apropriada e proteção de dados.
