# API de contas e ranking — Render

O arquivo `render.yaml` na raiz define um Render Blueprint com aplicação web, frontend estático servido no mesmo domínio e PostgreSQL Free. A implantação precisa ser iniciada na conta Render vinculada ao repositório.

## Ativar o Blueprint

1. Faça push da branch `main` para o GitHub.
2. Entre em [Render](https://dashboard.render.com), escolha **New → Blueprint**, conecte este repositório e selecione a branch `main`.
3. Revise os recursos indicados pelo Blueprint e confirme a criação. O plano configurado é `free`; o Blueprint vincula `DATABASE_URL`, e o serviço permite a própria origem HTTPS do hostname atribuído pelo Render.
4. Aguarde o primeiro deploy ficar **Live**. No dashboard, copie o hostname público atribuído ao serviço. Teste `<URL-DO-SERVIÇO>/api/healthz`; deve retornar `{"status":"ok"}`. Abra `<URL-DO-SERVIÇO>/` para usar frontend e API no mesmo domínio.
5. Faça o cadastro de teste. Crie conta, conclua as 45 questões usando o conjunto de matérias padrão e confira o ranking. O login deve sincronizar no telefone quando também usar o endereço `onrender.com`.

## Limitações do plano gratuito

A configuração gratuita é para teste, não produção: a aplicação web pode dormir após 15 minutos sem tráfego e levar cerca de um minuto para despertar; o PostgreSQL Free do Render expira 30 dias após a criação e, depois de um período de carência, o Render o exclui. Portanto, os dados do ranking **não são permanentes** nesse plano. Faça upgrade do PostgreSQL para um plano persistente antes de usar com dados que precisam ser mantidos.

Use a URL `onrender.com` da aplicação Render para autenticação. O site antigo no GitHub Pages é outra origem e navegadores podem bloquear cookies cross-site; o Blueprint serve a própria interface e a API no mesmo domínio, usando cookies HttpOnly de primeira parte.

## Variáveis de ambiente (implantação manual)

Configure-as na plataforma de hospedagem como secrets/variáveis de ambiente — não coloque credenciais no código nem no Git:

- `PORT`: porta fornecida pelo host.
- `DATABASE_URL`: URL TLS de um PostgreSQL gerenciado.
- `FRONTEND_ORIGINS`: origens exatas permitidas, separadas por vírgula; por exemplo, `https://seu-dominio.example` e `http://localhost:4173` durante desenvolvimento.
- `NODE_ENV=production`: ativa cookies seguros.
- `COOKIE_SAME_SITE=none`: necessário para frontend e API em sites diferentes; ambos devem usar HTTPS. Navegadores podem bloquear cookies de terceiros; para maior compatibilidade, use frontend e API em subdomínios do mesmo domínio próprio.
- `TRUST_PROXY`: quantidade de proxies reversos confiáveis do provedor. Configure conforme a documentação do host; não confie em cabeçalhos de proxy arbitrários.

A URL pública da API é configurada no `<meta name="api-base">` de `artifacts/desafio-em-movimento/index.html` ou antes do carregamento por `window.DESAFIO_API_BASE`. Use apenas a URL HTTPS publicada da API, sem o sufixo `/api`.

## Banco e execução manual

Após criar um PostgreSQL, aplique as tabelas com `DATABASE_URL` configurada no ambiente e rode `pnpm --filter @workspace/db push`. Publique o pacote `@workspace/api-server` com `pnpm --filter @workspace/api-server build` e inicie com `pnpm --filter @workspace/api-server start`.

O cadastro requer e-mail válido, nome de exibição e senha de 10 a 128 caracteres. Senhas são derivadas com `scrypt`; o servidor guarda apenas o hash. A sessão opaca é guardada como hash no banco e usa cookie `HttpOnly`, `Secure` em produção, com validade de 30 dias. Login e cadastro têm limites de tentativa em memória por processo.

## Antes de disponibilizar publicamente

A implantação do Blueprint cria serviço e banco somente depois de autorizada na conta Render; nenhum recurso foi provisionado automaticamente. O cadastro não verifica a posse do e-mail e não oferece recuperação de senha. O placar recebe pontuações do navegador, portanto não é uma competição resistente a adulteração. Planeje verificação/recuperação de e-mail, monitoramento e proteção contra abuso antes de uso público.
