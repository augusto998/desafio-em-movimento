# Desafio em Movimento

**Pense. Mexa. Supere.** Um jogo educativo que aproxima Matemática e Educação Física em uma experiência rápida, acessível e divertida.

| Acesso | Link |
| --- | --- |
| Jogo publicado (português e espanhol) | [augusto998.github.io/desafio-em-movimento](https://augusto998.github.io/desafio-em-movimento/) |
| Repositório | [github.com/augusto998/desafio-em-movimento](https://github.com/augusto998/desafio-em-movimento) |

## Sobre o projeto

O **Desafio em Movimento** é um quiz interdisciplinar desenvolvido para estudantes do Ensino Médio Integrado. Cada partida tem três fases: 20 questões fáceis, 15 médias e 10 difíceis, nas matérias selecionadas. Tempo, pontuação, combos e desafios opcionais de movimento apoiam a revisão dos conteúdos.

O projeto foi desenvolvido por estudantes do **Instituto Federal de Mato Grosso (IFMT) — Campus Barra do Garças**.

## Objetivos educacionais

- Revisar porcentagem, média, operações, distância, tempo, velocidade e conversão de unidades.
- Retomar conceitos de esportes, saúde, aquecimento, alongamento e capacidades físicas.
- Estimular raciocínio, participação e aprendizagem por meio de feedback imediato.
- Explorar gamificação e desenvolvimento de aplicações web em um projeto interdisciplinar.

## Como funciona

1. Entre/crie uma conta (quando a API remota estiver implantada) ou escolha o modo convidado.
2. Selecione uma ou mais matérias e o tempo por pergunta (de 10 a 35 segundos).
3. Responda 20 questões fáceis, 15 médias e 10 difíceis, sorteadas sem repetição dentro da partida.
4. Ao terminar o tempo, a questão é marcada como incorreta; o resultado soma os pontos conquistados nas 45 respostas e bônus opcionais.
5. Faça três acertos consecutivos para receber +50 pontos ou cinco consecutivos para receber +100 pontos. Uma resposta incorreta reinicia a sequência.
6. Em algumas questões, abra o desafio físico opcional. Ao marcá-lo como concluído, são adicionados 25 pontos.
7. Confira acertos, erros, aproveitamento, maior sequência e posição no ranking.

> Os movimentos são opcionais. Respeite os limites do corpo e siga as orientações do professor ou professora. Interrompa a atividade se sentir desconforto.

## Funcionalidades

- Navegação entre início, instruções, jogo, resultado e ranking.
- Perguntas aleatórias com alternativas, cronômetro e explicação da resposta.
- Pontuação por fase, bônus por combos e bônus de movimento.
- Resumo de desempenho ao fim da partida.
- Ranking global com até dez melhores contas, quando a API e o banco estiverem publicados; convidado não salva resultado.
- Interface em português e espanhol, com alternância durante a partida.
- Layout responsivo, opção de áudio, atalho para pular ao conteúdo, feedback acessível e suporte à preferência por movimento reduzido.
- Desafios físicos opcionais, com orientação para adaptar o movimento ou descansar sem pressão.
- Três fases fixas (20 fáceis, 15 médias e 10 difíceis), seleção de matérias e tempo de 10 a 35 segundos por pergunta.
- Links para cadernos e gabaritos oficiais do ENEM de 2023, 2024 e 2025, filtráveis por ano e matéria/área geral.
- Banco autoral com 56 questões distribuídas por matéria e dificuldade, com gabarito e explicação; os itens não são identificados como questões aplicadas no ENEM.
- Acesso por conta de servidor (melhor resultado sincronizado entre dispositivos, quando implantada) ou convidado sem registro.

## Contas, ranking e privacidade

O modo de conta usa e-mail e senha pela API e guarda senhas derivadas com `scrypt`; o ranking global persiste no PostgreSQL e mantém o melhor resultado da conta. O modo **Convidado** não salva pontuação. A API precisa ser implantada separadamente com HTTPS, PostgreSQL, origem do frontend e variáveis de ambiente configuradas; o GitHub Pages não hospeda o servidor. Verificação de e-mail e recuperação de senha ainda não estão implementadas. Consulte [a documentação da API](artifacts/api-server/README.md) antes de publicar.

## História de usuário

> **Como estudante do Ensino Médio Integrado, quero responder a perguntas que conectam Matemática e Educação Física em rodadas curtas e com feedback, para revisar conteúdos de forma participativa e acompanhar meu desempenho.**

### Critérios de aceitação

- A pessoa pode entrar/criar conta pelo servidor (quando implantado) ou jogar como convidada; convidadas não registram resultado.
- Cada partida contém 20 questões fáceis, 15 médias e 10 difíceis, distribuídas entre as matérias selecionadas, com quatro alternativas e tempo de 10 a 35 segundos.
- Após responder ou deixar o tempo acabar, a aplicação informa se a resposta foi correta e apresenta a explicação.
- O sistema atualiza pontos, acertos, erros e combos de acordo com as respostas; questões elegíveis permitem um bônus físico opcional.
- O banco autoral é organizado por matéria e dificuldade; ano e número do ENEM só devem ser preenchidos após comprovação documental.
- Ao final, são exibidos os indicadores e a soma de pontos; o ranking global mantém o melhor resultado por conta quando API e banco estão publicados.
- O jogo pode ser usado em telas de computador e celular.

Mais detalhes e histórias complementares estão em [docs/HISTORIAS-DE-USUARIO.md](docs/HISTORIAS-DE-USUARIO.md).

## Tecnologias e organização

A interface publicada é estática (**HTML, CSS e JavaScript**). Contas e ranking entre dispositivos dependem de implantar o servidor Express e PostgreSQL incluídos no workspace. Até a implantação e configuração do endpoint, o login remoto fica indisponível; visitantes ainda podem testar como convidados.

```text
.
├── artifacts/
│   ├── desafio-em-movimento/  # Site, quiz e arquivos do workspace Vite
│   └── api-server/            # API Express de autenticação e ranking
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

O login remoto usa cookie de sessão `HttpOnly` e PostgreSQL quando o serviço está configurado. A pontuação enviada pelo navegador ainda não é prova resistente a adulteração. O cadastro não verifica o e-mail e ainda não possui recuperação de senha; antes de uso público, implante os serviços documentados, configure HTTPS e planeje verificação e recuperação seguras. Evite dados pessoais no nome público.

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
