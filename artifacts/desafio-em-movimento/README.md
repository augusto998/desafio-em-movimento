# Desafio em Movimento

**Pense. Mexa. Supere.** Um jogo educativo com três fases progressivas de questões autorais, áreas de conhecimento, pontuação e desafios opcionais de movimento.

- **Jogo publicado:** [augusto998.github.io/desafio-em-movimento](https://augusto998.github.io/desafio-em-movimento/)
- **Repositório:** [github.com/augusto998/desafio-em-movimento](https://github.com/augusto998/desafio-em-movimento)
- **Instituição:** Instituto Federal de Mato Grosso (IFMT) — Campus Barra do Garças

## Sobre

O Desafio em Movimento é um quiz para estudantes do Ensino Médio Integrado. Cada partida reúne 20 questões fáceis, 15 médias e 10 difíceis das matérias selecionadas. A proposta é apoiar a revisão de conteúdos de um jeito dinâmico, incentivando o raciocínio, a participação e hábitos de movimento seguros.

### Objetivos

- Revisar operações, porcentagem, médias, distância, tempo, velocidade e unidades de medida.
- Reforçar conhecimentos de esportes, saúde, alongamento, aquecimento e capacidades físicas.
- Estimular a participação e a aprendizagem com feedback imediato.
- Aplicar gamificação e conceitos de desenvolvimento web em um projeto interdisciplinar.

## Como jogar

1. Entre/crie uma conta (quando a API estiver publicada) ou selecione o modo convidado.
2. Escolha uma ou mais matérias e o tempo (de 10 a 35 segundos por pergunta).
3. Responda 20 questões fáceis, 15 médias e 10 difíceis, sorteadas sem repetição dentro da partida.
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
- Ranking global com até dez melhores contas, quando a API e o banco estiverem implantados; convidados não são registrados.
- Interface em português e espanhol, alternável a qualquer momento sem perder o andamento da partida.
- Interface adaptável a celulares, tablets e computadores; atalho de navegação por teclado, foco visível e suporte à preferência por movimento reduzido.
- Efeitos sonoros opcionais e desafios de movimento adaptáveis, que podem ser ignorados com segurança.
- Três fases fixas (20 fáceis, 15 médias e 10 difíceis), seleção de matérias e tempo de 10 a 35 segundos por pergunta.
- Biblioteca com cadernos e gabaritos oficiais do ENEM de 2023, 2024 e 2025, filtrável por ano e matéria/área geral.
- A biblioteca aponta para os PDFs do INEP; não atribui número, gabarito ou dificuldade a cada questão sem conferência do caderno correspondente.
- Banco autoral separado por matéria e dificuldade, com gabarito e explicação; nenhuma dessas questões é rotulada como aplicada no ENEM.
- Acesso por conta de servidor (melhor resultado sincronizado entre dispositivos, quando implantada) ou convidado sem gravação.

## História de usuário

> **Como estudante do Ensino Médio Integrado, quero responder a perguntas que conectam Matemática e Educação Física em rodadas curtas e com feedback, para revisar os conteúdos de forma participativa e acompanhar meu desempenho.**

### Critérios de aceitação

- A partida começa após autenticação de conta ou seleção de convidado.
- Cada partida apresenta 20 questões fáceis, 15 médias e 10 difíceis, distribuídas entre as matérias selecionadas, com quatro opções e tempo limitado.
- A aplicação informa se a resposta está correta e apresenta uma explicação, inclusive quando o tempo acaba.
- A pontuação, os acertos, os erros e os combos são atualizados conforme as respostas.
- Desafios físicos aparecem apenas em perguntas elegíveis e podem ser ignorados.
- A tela final apresenta estatísticas e a soma dos pontos; o ranking global exige API e banco implantados.
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

O frontend usa **HTML, CSS e JavaScript**. As questões estão em `question-bank.js`; autenticação e ranking global usam a API Express e o PostgreSQL, que precisam ser implantados separadamente. Consulte [a documentação da API](../api-server/README.md).

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

Com a API em produção, e-mail e senha permitem entrar em diferentes dispositivos, e o melhor resultado por conta fica no ranking global. A senha é derivada com `scrypt`; sessões usam cookies HttpOnly. A API ainda exige implantação, PostgreSQL, HTTPS e configuração de origens; verificação de e-mail e recuperação de senha não estão implementadas. Convidados não salvam pontuação.

## Publicação

O jogo publicado está no link no início deste documento. O GitHub Pages não hospeda a API nem o PostgreSQL; sem esses serviços publicados, o login e o ranking compartilhado não ficam disponíveis.

## Ideias para melhorias futuras

Estas são sugestões, não funcionalidades implementadas:

- Expandir o banco de perguntas e permitir revisão de conteúdo por docentes.
- Adicionar mais opções de acessibilidade e níveis de dificuldade.
- Avaliar testes automatizados e documentação para contribuições.
- Estudar ranking entre dispositivos somente com uma solução de backend apropriada e proteção de dados.
