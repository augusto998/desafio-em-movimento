# Histórias de usuário — Desafio em Movimento

Este documento descreve o objetivo do ponto de vista de quem usa o quiz e registra critérios alinhados ao comportamento implementado no site.

## História principal

> **Como estudante do Ensino Médio Integrado, quero responder a perguntas que conectam Matemática e Educação Física em rodadas curtas e com feedback, para revisar conteúdos de forma participativa e acompanhar meu desempenho.**

### Critérios de aceitação

1. Deve ser possível informar um nome ou apelido antes de começar; sem esse dado, a partida não inicia.
2. A pessoa deve poder selecionar uma ou mais matérias e uma dificuldade antes de começar; a partida contém dez perguntas de múltipla escolha compatíveis com essas escolhas.
3. Cada questão deve apresentar quatro alternativas e um cronômetro configurável entre dez e vinte e cinco segundos.
4. Depois de uma resposta ou do fim do tempo, a aplicação deve indicar a alternativa correta e exibir uma explicação.
5. Respostas corretas devem somar os pontos da fase. Três acertos consecutivos concedem 50 pontos extras; cinco consecutivos, 100 pontos extras. Uma resposta incorreta reinicia o combo.
6. Questões selecionadas podem oferecer um desafio físico opcional; ao marcá-lo como concluído, a pessoa recebe 25 pontos extras.
7. Ao finalizar, devem ser apresentados pontuação, acertos, erros, percentual de aproveitamento, maior combo e posição no ranking.
8. Os dez melhores resultados de perfis devem ser guardados no navegador atual, sem nomes repetidos, mantendo a melhor pontuação de cada apelido; deve ser possível limpar o ranking após confirmação.
9. A interface deve se adaptar a telas menores, sem exigir instalação para jogar a versão estática.
10. O banco deve oferecer centenas de perguntas em português e espanhol, reduzir repetições entre partidas e permitir alternar o idioma durante o jogo.
11. Deve haver um modo de perfil local e um modo convidado sem registro no ranking; a interface informa que não existe autenticação nem sincronização online.

## Histórias complementares

### Consultar as instruções

> **Como participante, quero consultar uma explicação breve das regras antes de jogar, para saber como funcionam as fases, o tempo e os bônus.**

**Critério de aceitação:** a navegação deve permitir abrir a tela “Como jogar”, que explica a dinâmica e oferece um caminho para iniciar.

### Comparar resultados

> **Como participante, quero consultar o ranking salvo neste navegador, para comparar minha pontuação com as partidas registradas no mesmo dispositivo.**

**Critérios de aceitação:** o ranking deve ordenar até dez perfis por pontuação, guardar somente o melhor resultado de cada apelido e indicar um estado vazio quando não houver partidas salvas. A tela deve deixar claro que esses dados são locais, não compartilhados entre dispositivos; partidas de convidado não são registradas.

### Participar com segurança

> **Como participante, quero poder ignorar o desafio físico e receber uma orientação para respeitar meus limites, para jogar sem me sentir obrigado a realizar movimentos.**

**Critério de aceitação:** o bônus físico deve ser opcional e a orientação de segurança deve acompanhar a documentação ou a apresentação da atividade.
