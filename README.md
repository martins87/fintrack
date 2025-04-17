# Fintrack

Aplicação web desenvolvida para visualização de cotações de ativos financeiros (ações, moedas, FIIs, BDRs, índices) com autenticação, exibição de gráficos e persistência de sessão.

Acesse o projeto online: [https://franq-fintrack.vercel.app](https://franq-fintrack.vercel.app)

## Funcionalidades

- Tela de login e cadastro de usuário com persistência em **localStorage**
- Validação de sessão com expiração após **30 minutos**
- Exibição de **cotações atualizadas** de ativos financeiros
- Diferenciação de **variação positiva (verde)** e **negativa (vermelho)**
- Visualização de **gráfico de evolução dos preços** de um ativo
- Layout **responsivo** para diferentes tamanhos de tela
- Consumo da [API de finanças da HG Brasil](https://hgbrasil.com/status/finance/)
- Dados persistidos localmente por usuário
- Navegação protegida por autenticação
- Aplicação hospedada na Vercel

## Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/en-US/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Query (@tanstack/react-query)](https://tanstack.com/query/latest)

## Desafios

- Estudo da [API da HG Brasil](https://hgbrasil.com/status/finance/) para descobrir e entender os endpoints necessários para exibir os dados
- A sessão de qualquer usuário localmente dura 30 minutos. Os dados do usuário são salvos em local storage, permitindo cadastro de múltiplos usuários
- Estudo de biblioteca para exibição de dados históricos de um ativo em um gráfico. A escolhida foi a [recharts](https://recharts.org/en-US/). Para simplificação da aplicação conforme os objetivos iniciais foi exibido gráfico de preços do último dia em que houve pregão
- Criação de endpoints internos para busca de dados específicos, como, por exemplo, dados gerais de ativos (e.g. índices e moedas); lista de tickers de ações, fiis e bdrs; dados históricos de um fii, bdr ou ação
- Para busca de dados na api, foram criados hooks (e.g. useFetchAssets), que utilizam a biblioteca [React Query](https://tanstack.com/query/latest) e chamam funções definidas em um service. Essas últimas, por sua vez, fazem as chamadas aos endpoints específicos
- Foi utilizada a bilbioteca de gerenciamento de estado [zustand](https://zustand-demo.pmnd.rs/) para fácil acesso a dados já buscados da api

## Endpoints criados internamente

- `/api/assets`: retorna dados gerais dos ativos em destaque (índices, moedas, etc.)
- `/api/stocks`: lista tickers disponíveis para consulta
- `/api/stocks/[ticker]`: busca dados históricos de ações, FIIs ou BDRs específicos

## Rodando localmente

Para executar o projeto em ambiente local:

```bash
git clone https://github.com/martins87/fintrack.git
cd fintrack
npm install
npm run dev
```
