# Portfólio Profissional - Luiz Gustavo Santos Cunha

Um portfólio moderno e responsivo desenvolvido com React, TypeScript e TailwindCSS.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset tipado do JavaScript
- **TailwindCSS** - Framework CSS utilitário
- **React Router V7** - Roteamento para aplicações React
- **Vite** - Build tool e servidor de desenvolvimento

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Navigation.tsx   # Barra de navegação
│   │   └── Footer.tsx       # Rodapé
│   ├── pages/              # Páginas da aplicação
│   │   ├── Home.tsx        # Página inicial
│   │   ├── Projects.tsx    # Galeria de projetos
│   │   ├── Skills.tsx      # Habilidades e competências
│   │   ├── Experience.tsx  # Experiência profissional
│   │   └── Education.tsx   # Formação acadêmica
│   ├── types/              # Definições TypeScript
│   │   └── index.ts        # Interfaces e tipos
│   ├── utils/              # Utilitários e dados
│   │   └── data.ts         # Dados estáticos do portfólio
│   ├── assets/             # Recursos estáticos
│   │   └── images/         # Imagens e screenshots
│   ├── App.tsx             # Componente principal
│   └── index.css           # Estilos globais
├── public/                 # Arquivos públicos
├── package.json            # Dependências e scripts
├── tailwind.config.js      # Configuração do TailwindCSS
└── vite.config.ts          # Configuração do Vite
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 20.19.0 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/GustavoCunh4/portfolio.git

# Entre no diretório
cd portfolio

# Instale as dependências
npm install
```

### Execução
```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## 📱 Funcionalidades

### Páginas Disponíveis
- **Home** - Apresentação pessoal e informações de contato
- **Projetos** - Galeria interativa com visualização em iframe
- **Habilidades** - Competências técnicas e soft skills
- **Experiência** - Histórico profissional e conquistas
- **Educação** - Formação acadêmica e cursos

### Recursos
- ✅ Design responsivo para todos os dispositivos
- ✅ Navegação fluida com React Router V7
- ✅ Animações e transições suaves
- ✅ Modal para visualização de projetos
- ✅ Links para repositórios e projetos ao vivo
- ✅ Interface moderna e intuitiva
- ✅ Otimização para SEO

## 🎨 Personalização

### Adicionando Novos Projetos
1. Edite o arquivo `src/utils/data.ts`
2. Adicione o novo projeto no array `projects`
3. Inclua a imagem do projeto em `src/assets/images/`

### Modificando Informações Pessoais
1. Edite o arquivo `src/utils/data.ts`
2. Atualize as informações em `personalInfo`
3. Adicione sua foto em `src/assets/images/avatar.jpg`

### Customizando Cores
1. Edite o arquivo `tailwind.config.js`
2. Modifique as cores personalizadas na seção `theme.extend.colors`

## 📦 Versionamento

Este projeto segue o [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Mudanças incompatíveis na API
- **MINOR** (0.1.0): Funcionalidades adicionadas de forma compatível
- **PATCH** (0.0.1): Correções de bugs compatíveis

### Como Atualizar a Versão
1. Edite o `package.json`
2. Crie uma nova release no GitHub
3. Documente as mudanças no CHANGELOG.md

## 🔄 Workflow de Desenvolvimento

### Branches
- `main` - Branch principal (produção)
- `develop` - Branch de desenvolvimento
- `feature/nome-da-feature` - Novas funcionalidades
- `hotfix/nome-do-fix` - Correções urgentes

### Pull Requests
1. Crie uma branch para sua feature
2. Faça suas alterações
3. Teste localmente
4. Crie um Pull Request para `develop`
5. Após aprovação, merge para `main`
6. Atualize a versão e crie uma release

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Luiz Gustavo Santos Cunha**
- Email: luiz.gustavo.cunha2003@gmail.com
- LinkedIn: [luiz-gustavo-santos-cunha-854988256](https://www.linkedin.com/in/luiz-gustavo-santos-cunha-854988256/)
- GitHub: [GustavoCunh4](https://github.com/GustavoCunh4)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Reportar bugs
2. Sugerir novas funcionalidades
3. Enviar Pull Requests
4. Melhorar a documentação

---

Desenvolvido com ❤️ usando React, TypeScript e TailwindCSS