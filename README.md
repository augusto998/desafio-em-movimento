**Site oficial:** https://augusto998.github.io/desafio-em-movimento/

**Repositório GitHub:** https://github.com/augusto998/desafio-em-movimento

### Sobre o projeto

O Desafio em Movimento é um jogo educativo digital que combina Matemática e Educação Física por meio de perguntas, desafios interativos e elementos de gamificação. O objetivo é tornar o aprendizado mais dinâmico, estimular o raciocínio lógico e incentivar o movimento.

### Funcionalidades do jogo

* Quiz educativo com 10 perguntas.
* Cronômetro para responder às questões.
* Sistema de pontuação e combos.
* Mini-desafios físicos opcionais que oferecem pontos extras.
* Resultado final com acertos e aproveitamento.
* Ranking para comparar as pontuações dos participantes.

### Tecnologias e arquitetura

O projeto utiliza uma estrutura monorepo que reúne:

* React e Vite para a aplicação frontend.
* JavaScript e/ou TypeScript, conforme a implementação.
* Node.js e Express para o servidor de apoio.
* Bibliotecas compartilhadas para cliente de API, especificações, validação e banco de dados.
* pnpm para gerenciamento de dependências.
* GitHub Pages para publicação do frontend.

### Estrutura do repositório

```text
.
├── artifacts/
│   ├── api-server/
│   └── desafio-em-movimento/
├── lib/
│   ├── api-client-react/
│   ├── api-spec/
│   ├── api-zod/
│   └── db/
├── scripts/
├── screenshots/
├── .github/
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── README.md
```

### Seções obrigatórias do README

1. Título e slogan: “Desafio em Movimento — Pense. Mexa. Supere.”
2. Apresentação do projeto.
3. Objetivo geral e objetivos educacionais.
4. Funcionalidades.
5. Tecnologias utilizadas.
6. Estrutura de diretórios e explicação de cada módulo.
7. Pré-requisitos para executar o projeto.
8. Instruções de instalação e execução local.
9. Informações sobre arquitetura e funcionamento.
10. Link para acessar o jogo publicado.
11. Espaço para capturas de tela.
12. Público-alvo e benefícios educacionais.
13. Possíveis melhorias futuras, identificadas claramente como sugestões.
14. Informações sobre autoria e licença.

### Requisitos de qualidade

* Escreva em português brasileiro.
* Utilize Markdown corretamente, com títulos, listas, tabelas e blocos de código.
* Use emojis com moderação para facilitar a leitura.
* Mantenha uma linguagem clara, técnica e profissional.
* Inclua comandos de instalação e execução somente quando forem compatíveis com os arquivos reais do projeto.
* Consulte o site e os arquivos do repositório para confirmar as funcionalidades e tecnologias.
* Não invente funcionalidades, dependências, comandos, licenças ou informações técnicas.
* Explique que o frontend publicado no GitHub Pages não garante que o servidor Express esteja hospedado publicamente.
* Não apresente sugestões futuras como recursos já implementados.

**Resultado esperado:** entregar o conteúdo completo do arquivo `README.md`, pronto para ser colocado na raiz do repositório GitHub do Desafio em Movimento.
