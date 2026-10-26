# Desafio em Movimento

**Pense. Mexa. Supere.** Um jogo educativo que aproxima Matemática e Educação Física em uma experiência rápida, acessível e divertida.

| Acesso | Link |
| --- | --- |
| Jogo publicado (português e espanhol) | [augusto998.github.io/desafio-em-movimento](https://augusto998.github.io/desafio-em-movimento/) |
| Repositório | [github.com/augusto998/desafio-em-movimento](https://github.com/augusto998/desafio-em-movimento) |

## Sobre o projeto

O **Desafio em Movimento** é um quiz interdisciplinar desenvolvido para estudantes do Ensino Médio Integrado. A cada partida, a pessoa jogadora responde a dez questões de Matemática, Educação Física e temas que relacionam as duas áreas. Tempo, pontuação, combos e desafios opcionais de movimento ajudam a transformar a revisão dos conteúdos em uma atividade participativa.

O projeto foi desenvolvido por estudantes do **Instituto Federal de Mato Grosso (IFMT) — Campus Barra do Garças**.

## Objetivos educacionais

- Revisar porcentagem, média, operações, distância, tempo, velocidade e conversão de unidades.
- Retomar conceitos de esportes, saúde, aquecimento, alongamento e capacidades físicas.
- Estimular raciocínio, participação e aprendizagem por meio de feedback imediato.
- Explorar gamificação e desenvolvimento de aplicações web em um projeto interdisciplinar.

## Como funciona

1. Informe um nome ou apelido e inicie uma partida.
2. Responda a dez perguntas de múltipla escolha, escolhidas aleatoriamente sem repetição na partida.
3. Antes da partida, escolha uma ou mais matérias, a dificuldade e o tempo por pergunta (de 10 a 25 segundos).
4. Responda dez questões sorteadas de um banco com centenas de perguntas; o histórico do navegador reduz repetições entre partidas. Ao terminar o tempo, a questão é marcada como incorreta.
5. Faça três acertos consecutivos para receber +50 pontos ou cinco consecutivos para receber +100 pontos. Uma resposta incorreta reinicia a sequência.
6. Em algumas questões, abra o desafio físico opcional. Ao marcá-lo como concluído, são adicionados 25 pontos.
7. Confira acertos, erros, aproveitamento, maior sequência e posição no ranking.

> Os movimentos são opcionais. Respeite os limites do corpo e siga as orientações do professor ou professora. Interrompa a atividade se sentir desconforto.

## Funcionalidades

- Navegação entre início, instruções, jogo, resultado e ranking.
- Perguntas aleatórias com alternativas, cronômetro e explicação da resposta.
- Pontuação por fase, bônus por combos e bônus de movimento.
- Resumo de desempenho ao fim da partida.
- Ranking local com até dez resultados e opção de limpeza mediante confirmação.
- Interface em português e espanhol, com alternância durante a partida.
- Layout responsivo, opção de áudio, atalho para pular ao conteúdo, feedback acessível e suporte à preferência por movimento reduzido.
- Desafios físicos opcionais, com orientação para adaptar o movimento ou descansar sem pressão.
- Configuração da dificuldade, seleção de uma ou mais matérias e tempo entre 10 e 25 segundos por pergunta.
- Mais de 300 questões originais em português e espanhol, com alternativas embaralhadas e histórico local para reduzir repetições.
- Acesso por perfil local (apelido único e melhor resultado por perfil) ou como convidado, sem registrar convidados no ranking.

## Perfis, ranking e privacidade

O modo **Entrar / criar perfil** usa um apelido único neste navegador e mantém apenas o melhor resultado desse apelido no ranking local. O modo **Convidado** serve para demonstrações e não salva pontuação. Esses perfis não são contas online: não há senha, servidor ou sincronização entre dispositivos. Não use dados pessoais.

Cada partida pode filtrar perguntas por dificuldade e por uma ou mais matérias. O banco contém mais de 300 perguntas originais com versões em português e espanhol; as questões são sorteadas e o navegador guarda o histórico local para evitar repetições até o banco selecionado ser percorrido.

## História de usuário

> **Como estudante do Ensino Médio Integrado, quero responder a perguntas que conectam Matemática e Educação Física em rodadas curtas e com feedback, para revisar conteúdos de forma participativa e acompanhar meu desempenho.**

### Critérios de aceitação

- A pessoa pode entrar/criar perfil local com apelido único ou jogar como convidada; o modo convidado não registra resultado.
- A pessoa pode escolher a dificuldade, uma ou mais matérias e de 10 a 25 segundos por pergunta; cada partida tem dez questões com quatro alternativas.
- Após responder ou deixar o tempo acabar, a aplicação informa se a resposta foi correta e apresenta a explicação.
- O sistema atualiza pontos, acertos, erros e combos de acordo com as respostas; questões elegíveis permitem um bônus físico opcional.
- O banco oferece centenas de perguntas em português e espanhol, com histórico local para reduzir repetições.
- Ao final, são exibidos os indicadores da partida; o ranking mantém apenas o melhor resultado de cada perfil local.
- O jogo pode ser usado em telas de computador e celular.

Mais detalhes e histórias complementares estão em [docs/HISTORIAS-DE-USUARIO.md](docs/HISTORIAS-DE-USUARIO.md).

## Tecnologias e organização

A versão interativa publicada é uma aplicação web estática: **HTML, CSS e JavaScript**, sem necessidade de conta, API ou banco de dados para jogar. O projeto também está organizado como um workspace **pnpm** e contém um scaffold separado com **React, TypeScript, Vite e Express**. Esse servidor e as bibliotecas compartilhadas não são necessários para o fluxo atual do quiz; a presença deles no repositório não significa que estejam publicados ou conectados ao jogo.

```text
.
├── artifacts/
│   ├── desafio-em-movimento/  # Site, quiz e arquivos do workspace Vite
│   └── api-server/            # Scaffold de servidor Express
├── lib/                       # Pacotes compartilhados do workspace
├── docs/                      # Documentação e histórias de usuário
├── screenshots/               # Diretório destinado a capturas de tela
├── package.json
└── pnpm-workspace.yaml
```

Arquivos principais do site: `artifacts/desafio-em-movimento/index.html` (estrutura e telas), `style.css` (estilos e responsividade) e `script.js` (perguntas e lógica do jogo).

## Executar localmente

### Abrir o jogo diretamente

Para jogar a versão estática, abra `artifacts/desafio-em-movimento/index.html` em um navegador moderno. Não é necessário instalar dependências.

### Executar pelo Vite

Para trabalhar no workspace, instale [Node.js](https://nodejs.org/) e [pnpm](https://pnpm.io/), depois execute na raiz do repositório:

```sh
pnpm install
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/desafio-em-movimento dev
```

O servidor local informa o endereço no terminal. `PORT` e `BASE_PATH` são exigidos pela configuração do Vite. Para uma compilação local, use `PORT=5173 BASE_PATH=/ pnpm --filter @workspace/desafio-em-movimento build`.

## Dados e privacidade

O jogo pede somente um nome ou apelido. Os resultados do ranking e a melhor pontuação são armazenados no `localStorage` do navegador em uso; não são enviados para um servidor pelo fluxo atual. O ranking não é compartilhado entre dispositivos ou navegadores e pode ser removido pela opção **Limpar ranking** ou pela limpeza dos dados locais do navegador. Evite usar informações pessoais como nome de exibição.

## Equipe

- Márcio Vitor
- Augusto Malaquias Carvalho
- Matheus José
- Eduardo Gomes
- Emanuele Oliveira Andrade
- Maria Eduarda Sastre
- João Pedro Pereira
- Ana Eduarda Sousa
- Maicon Goulart
- Heitor Pernet
- Byank Chrystinny
- Leonardo Ribeiro

**Instituto Federal de Mato Grosso (IFMT) — Campus Barra do Garças**

## Sugestões para evoluções futuras

As ideias abaixo são possibilidades, não funcionalidades disponíveis atualmente:

- Criar novas perguntas e permitir revisão ou curadoria do conteúdo por docentes.
- Implementar recursos de acessibilidade adicionais e opções de dificuldade.
- Estudar um ranking compartilhado entre dispositivos, com atenção à privacidade e à segurança dos dados.
- Adicionar documentação de contribuição e testes automatizados para a lógica do jogo.

## Publicação

O link do GitHub Pages está indicado no início deste documento. O fato de o frontend estar publicado no GitHub Pages **não significa que o servidor Express ou qualquer banco de dados do workspace esteja hospedado publicamente**. O quiz disponível funciona localmente no navegador e usa armazenamento local.
