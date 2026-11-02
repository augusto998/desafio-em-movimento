# Histórias de usuário — Desafio em Movimento

Este documento descreve o objetivo do ponto de vista de quem usa o quiz e registra critérios alinhados ao comportamento implementado no site.

## História principal

> **Como estudante do Ensino Médio Integrado, quero responder a perguntas que conectam Matemática e Educação Física em rodadas curtas e com feedback, para revisar conteúdos de forma participativa e acompanhar meu desempenho.**

### Critérios de aceitação

1. Deve ser possível entrar/criar conta por e-mail quando a API estiver disponível ou escolher o modo convidado.
2. A pessoa deve poder selecionar uma ou mais matérias; cada partida tem 20 questões fáceis, 15 médias e 10 difíceis.
3. Cada questão deve apresentar quatro alternativas e um cronômetro configurável entre dez e trinta e cinco segundos.
4. Depois de uma resposta ou do fim do tempo, a aplicação deve indicar a alternativa correta e exibir uma explicação.
5. Respostas corretas devem somar os pontos da fase. Três acertos consecutivos concedem 50 pontos extras; cinco consecutivos, 100 pontos extras. Uma resposta incorreta reinicia o combo.
6. Questões selecionadas podem oferecer um desafio físico opcional; ao marcá-lo como concluído, a pessoa recebe 25 pontos extras.
7. Ao finalizar as 45 questões, devem ser somados os pontos e apresentados acertos, erros, percentual, maior combo e posição no ranking.
8. O ranking global deve manter até dez contas, guardar o melhor resultado de cada conta e permitir excluir o próprio resultado.
9. A interface deve se adaptar a telas menores e o modo convidado deve continuar disponível quando o serviço remoto não estiver implantado.
10. O banco autoral deve reduzir repetições entre partidas e permitir alternar o idioma durante o jogo.
11. O login deve sincronizar conta e ranking entre dispositivos quando a API e o PostgreSQL estiverem publicados; convidado não salva pontuação.

## Histórias complementares

### Consultar as instruções

> **Como participante, quero consultar uma explicação breve das regras antes de jogar, para saber como funcionam as fases, o tempo e os bônus.**

**Critério de aceitação:** a navegação deve permitir abrir a tela “Como jogar”, que explica a dinâmica e oferece um caminho para iniciar.

### Comparar resultados

> **Como participante, quero consultar o ranking salvo neste navegador, para comparar minha pontuação com as partidas registradas no mesmo dispositivo.**

**Critérios de aceitação:** o ranking global deve ordenar até dez contas por pontuação, guardar somente o melhor resultado de cada conta e indicar um estado vazio quando não houver partidas salvas. O serviço depende da API e do banco PostgreSQL implantados; convidado não é registrado.

### Participar com segurança

> **Como participante, quero poder ignorar o desafio físico e receber uma orientação para respeitar meus limites, para jogar sem me sentir obrigado a realizar movimentos.**

**Critério de aceitação:** o bônus físico deve ser opcional e a orientação de segurança deve acompanhar a documentação ou a apresentação da atividade.
