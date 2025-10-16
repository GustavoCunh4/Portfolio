# Portfolio - Luiz Gustavo Santos Cunha

Aplicacao web responsiva criada para apresentar projetos, experiencia e informacoes de contato de Luiz Gustavo Santos Cunha. O projeto usa React com TypeScript, Tailwind CSS e React Router.

## Tecnologias
- React 19
- TypeScript
- Vite 7
- Tailwind CSS
- React Router v7

## Estrutura do projeto
```
portfolio/
  public/
  src/
    assets/
      images/
    components/
    pages/
    types/
    utils/
  package.json
  tsconfig*.json
  vite.config.ts
```

## Como iniciar

### Requisitos
- Node.js 20.19 ou superior (versoes mais antigas geram aviso no build)
- npm (instalado com o Node)

### Instalacao
```bash
git clone https://github.com/GustavoCunh4/Portfolio.git
cd Portfolio
npm install
```

### Scripts principais
```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de producao em dist/
npm run preview  # preview local do build
npm run lint     # verifica padroes de codigo
```

## Conteudo estatico
- Informacoes pessoais, projetos e habilidades estao em `src/utils/data.ts`.
- As imagens usadas na interface ficam em `src/assets/images/`. Ao adicionar novas imagens, importe-as no arquivo de dados para que o Vite gere as URLs corretas na build.
- As rotas da aplicacao sao definidas em `src/App.tsx`.

## Deploy

### Vercel
1. Execute `npm run build` localmente para garantir que o bundle esteja ok.
2. Faça push para `main`. A Vercel pode estar integrada ao repositorio e deploya automaticamente.
3. Se preferir, use a CLI da Vercel com `vercel --prod`.

### GitHub Pages
1. O arquivo `.github/workflows/deploy.yml` gera o build e publica automaticamente a pasta `dist/` sempre que a branch `main` recebe push.
2. No GitHub, acesse *Settings → Pages* e deixe `Source` configurado como *GitHub Actions*.
3. O site fica disponivel em `https://gustavocunh4.github.io/Portfolio/`.
4. Para forcar um rebuild manual, utilize *Actions → Deploy to GitHub Pages → Run workflow*.

## Contribuicoes
Contribuicoes sao bem-vindas. Abra uma issue com sugestoes, reporte bugs ou envie pull requests.

## Licenca
Distribuido sob a licenca MIT. Veja `LICENSE` para detalhes.
