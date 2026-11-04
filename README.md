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
# Autenticação com Supabase

O login, o cadastro e a recuperação de senha usam Supabase Auth. Para habilitar:

1. Crie um projeto no Supabase e copie a URL do projeto e a chave publicável (anon).
2. Copie `.env.example` para `.env.local` e preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.
3. No painel Supabase, em **Authentication → URL Configuration**, defina a URL local (por exemplo `http://localhost:5173`) como Site URL e adicione `http://localhost:5173/?page=redefinir-senha` à lista de Redirect URLs. Adicione também a URL publicada do site e o respectivo caminho de redefinição.
4. Configure o provedor de e-mail em **Authentication → SMTP Settings** antes de publicar, para que confirmação de cadastro e recuperação cheguem aos usuários.
5. Reinicie o servidor Vite após alterar as variáveis de ambiente.

O projeto usa apenas a chave publicável/anon no navegador; nunca coloque a `service_role` no frontend. O botão “Aluno Demo” permanece disponível como acesso de demonstração e não cria uma conta Supabase.

