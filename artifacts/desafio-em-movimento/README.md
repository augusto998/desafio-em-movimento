# 🏃 Desafio em Movimento

Jogo educativo de perguntas e respostas que combina Matemática e Educação
Física em uma partida rápida de 10 perguntas. O projeto foi pensado para uma
apresentação do 2º ano do Ensino Médio Integrado e funciona diretamente no
navegador.

## Estrutura do projeto

```text
desafio-em-movimento/
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

O jogo não usa banco de dados, backend, login, API externa ou informações
sensíveis. O ranking fica salvo apenas no `localStorage` do navegador.

## Problema

Conteúdos de Matemática e Educação Física podem parecer separados e abstratos
quando são apresentados apenas em exercícios tradicionais. Também pode ser
difícil manter a participação de toda a turma durante uma revisão.

## Objetivo geral

Desenvolver um jogo educativo que utilize conhecimentos de Matemática e
Educação Física de forma interativa, simples e divertida.

## Objetivos específicos

1. Revisar operações, porcentagens, médias, velocidade, distância, tempo e
   unidades de medida.
2. Reforçar conhecimentos sobre esportes, saúde e capacidades físicas.
3. Estimular a participação por meio de perguntas, tempo limitado e combos.
4. Aplicar pontuação, porcentagem de acertos e estatísticas do jogador.
5. Exercitar conceitos de Engenharia de Software, como requisitos, fluxo e
   organização de funções.
6. Criar uma experiência responsiva que funcione em computador, tablet e
   celular.

## Como o jogo funciona

- Cada partida tem exatamente 10 perguntas.
- A Fase 1 — Aquecimento tem 3 perguntas fáceis, vale 100 pontos por acerto e
  usa 10 segundos por pergunta.
- A Fase 2 — Desafio tem 4 perguntas de dificuldade média, vale 150 pontos e
  usa 10 segundos por pergunta.
- A Fase 3 — Final tem 3 perguntas mais difíceis, vale 200 pontos e usa 15
  segundos por pergunta.
- As perguntas são escolhidas de forma aleatória sem repetir durante a
  partida, mantendo a proporção das três categorias.
- Três acertos consecutivos geram +50 pontos. Cinco acertos consecutivos geram
  +100 pontos. Errar reinicia o combo.
- Algumas perguntas oferecem um desafio físico opcional: polichinelos,
  agachamentos ou equilíbrio. Ao marcar como concluído, o jogador ganha +25
  pontos.

> Realize os desafios respeitando seus limites e seguindo as orientações do
> professor.

## Engenharia de Software

### Requisitos funcionais

- **RF01** — O sistema deve permitir informar o nome do jogador.
- **RF02** — O sistema deve iniciar uma partida.
- **RF03** — O sistema deve apresentar perguntas aleatórias.
- **RF04** — O sistema deve apresentar quatro alternativas.
- **RF05** — O sistema deve controlar o tempo de cada pergunta.
- **RF06** — O sistema deve verificar as respostas.
- **RF07** — O sistema deve calcular a pontuação.
- **RF08** — O sistema deve calcular a porcentagem de acertos.
- **RF09** — O sistema deve apresentar o resultado final.
- **RF10** — O sistema deve armazenar o ranking no `localStorage`.
- **RF11** — O sistema deve apresentar os 10 melhores resultados.
- **RF12** — O sistema deve permitir limpar o ranking após confirmação.

### Requisitos não funcionais

- **RNF01 — Usabilidade:** textos objetivos, botões grandes e feedback
  imediato.
- **RNF02 — Responsividade:** layout adaptável a celular, tablet e desktop.
- **RNF03 — Desempenho:** arquivos locais e leves, sem chamadas externas.
- **RNF04 — Compatibilidade:** funcionamento em navegadores modernos.
- **RNF05 — Simplicidade:** HTML, CSS e JavaScript puro, com funções pequenas.
- **RNF06 — Acessibilidade:** HTML semântico, foco visível, contraste e
  feedback textual além das cores.

### Fluxograma

```text
INÍCIO
  ↓
Informar nome
  ↓
Iniciar jogo
  ↓
Selecionar pergunta aleatória
  ↓
Iniciar cronômetro
  ↓
Jogador responde
  ↓
Resposta correta?
  ├── SIM → adicionar pontos
  └── NÃO → mostrar resposta correta
  ↓
Próxima pergunta
  ↓
10 perguntas concluídas?
  ├── NÃO → continuar
  └── SIM → calcular resultado
  ↓
Salvar resultado no localStorage
  ↓
Mostrar resultado
  ↓
FIM
```

## Onde aparece a Matemática

As perguntas trabalham porcentagem, regra de três, média, velocidade média,
distância, tempo, operações, leitura simples de dados e conversão de unidades.
Ela também aparece no próprio sistema:

- **Pontuação:** soma dos valores de cada fase e dos bônus.
- **Porcentagem de acerto:** `acertos ÷ 10 × 100`.
- **Velocidade média:** `distância ÷ tempo`.
- **Média:** soma dos valores dividida pela quantidade de valores.
- **Estatísticas:** comparação entre acertos, erros, pontuação e melhor combo.

## Onde aparece a Educação Física

As perguntas tratam de esportes e regras, modalidades, benefícios da atividade
física, alongamento, força, resistência, frequência cardíaca, hábitos
saudáveis e capacidades físicas. Os desafios opcionais aproximam o conteúdo da
prática com movimentos simples e sem equipamentos.

## Privacidade e `localStorage`

O jogo solicita somente um nome ou apelido. Não coleta senha, e-mail, endereço,
localização ou outros dados pessoais. O ranking, a melhor pontuação e os
resultados são salvos apenas no navegador/dispositivo utilizado. Limpar os
dados do navegador ou usar outro dispositivo remove esse ranking.

## Executar localmente

Como o jogo é estático, não é necessário instalar banco, servidor ou
dependência para jogar:

1. Baixe ou clone o repositório.
2. Abra `index.html` no navegador.
3. Informe um nome e clique em **Começar jogo**.

Durante o desenvolvimento, também é possível abrir a prévia do projeto pelo
ambiente de desenvolvimento. A versão que vai para o GitHub Pages continua
sendo composta apenas por HTML, CSS e JavaScript.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Faça upload de `index.html`, `style.css`, `script.js`, `README.md` e
   `.gitignore`.
3. Faça um commit na branch `main`.
4. Abra **Settings** no repositório.
5. Acesse **Pages**.
6. Em **Build and deployment**, selecione a branch `main`.
7. Selecione a pasta **root**.
8. Clique em **Save**.
9. Acesse o endereço gerado pelo GitHub Pages.

## Como apresentar aos professores

1. Explique o problema: transformar uma revisão interdisciplinar em uma
   atividade participativa.
2. Mostre o fluxo da partida: nome, perguntas, fases, tempo, feedback e
   resultado.
3. Jogue uma pergunta de Matemática e uma de Educação Física, destacando a
   integração entre as disciplinas.
4. Mostre um combo e o ranking salvo no navegador.
5. Abra o código para explicar a lista de perguntas, as funções do jogo e o
   uso do `localStorage`.
6. Finalize mostrando que o projeto funciona sem internet depois de carregado
   e pode ser publicado diretamente no GitHub Pages.