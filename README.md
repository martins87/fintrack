# 💹 Fintrack

Aplicação web desenvolvida para visualização de cotações de ativos financeiros (ações, moedas, FIIs, BDRs, índices) com autenticação, exibição de gráficos e persistência de sessão.

Acesse o projeto online: [https://franq-fintrack.vercel.app](https://franq-fintrack.vercel.app)  
Código-fonte no GitHub: [github.com/martins87/fintrack](https://github.com/martins87/fintrack)

## 🧠 Funcionalidades

- Tela de login e cadastro de usuário com persistência no **localStorage**
- Validação de sessão com expiração após **30 minutos**
- Exibição de **cotações atualizadas** de 10 ativos financeiros
- Diferenciação de **variação positiva (verde)** e **negativa (vermelho)**
- Visualização de **gráfico de evolução dos preços** de um ativo
- Layout **responsivo** para diferentes tamanhos de tela
- Consumo da [API de finanças da HG Brasil](https://hgbrasil.com/status/finance/)
- Dados persistidos localmente por usuário
- Navegação protegida por autenticação
- Aplicação hospedada na Vercel

## 🔧 Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/en-US/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Query (@tanstack/react-query)](https://tanstack.com/query/latest)

## 📡 Endpoints criados internamente

- `/api/stocks/[ticker]`: busca dados históricos de ações, FIIs ou BDRs
- `/api/assets`: lista tickers disponíveis para consulta
- `/api/highlights`: retorna dados gerais dos ativos em destaque (índices, moedas, etc.)

## 🚀 Rodando localmente

Para executar o projeto em ambiente local:

```bash
git clone https://github.com/martins87/fintrack.git
cd fintrack
npm install
npm run dev
```
