# Aprenda Sinais em React

## Como executar

1. Instale o Node.js.
2. Na pasta do projeto, execute `npm install`.
3. Execute `npm run dev` e abra o endereço informado pelo Vite.

## Gerar e conferir a versão de produção

1. Execute `npm run build` para gerar os arquivos otimizados na pasta `dist/`.
2. Execute `npm run preview` para abrir uma prévia local dessa versão.

## Organização

- `index.html`: único documento HTML de entrada do Vite, com metadados e carregamento das bibliotecas externas.
- `src/App.jsx`: montagem da aplicação.
- `src/layouts/SiteLayout.jsx`: estrutura compartilhada do site.
- `src/routes/AppRoutes.jsx`: seleção da página ativa.
- `src/pages/`: um componente React para cada tela.
- `src/components/`: cabeçalho público, overlays e componente de conteúdo.
- `src/data.js`: etapas do curso e catálogo de e-books.
- `src/styles.css`: tokens globais de cores, tipografia, cantos, sombras e acessibilidade.
- `src/styles/`: módulos CSS dos componentes.
- `public/legacy/`: lógica e templates das páginas, carregados para preservar as ações atuais da plataforma.

Tailwind CSS, Chart.js e Lucide continuam carregados por CDN, como no HTML original.

## Autenticação demonstrativa

Login e cadastro são simulações de front-end: não validam credenciais nem criam contas reais. O progresso e alguns dados são armazenados no `localStorage` deste navegador. Recuperação por e-mail não está disponível sem um serviço de autenticação.

