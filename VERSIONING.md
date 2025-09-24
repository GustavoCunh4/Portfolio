# Guia de Versionamento - Portfólio

## 📋 Visão Geral

Este projeto segue o [Semantic Versioning (SemVer)](https://semver.org/) para controle de versões.

## 🔢 Formato de Versão

```
MAJOR.MINOR.PATCH
```

### Exemplos:
- `1.0.0` - Primeira versão estável
- `1.1.0` - Nova funcionalidade adicionada
- `1.1.1` - Correção de bug
- `2.0.0` - Mudança significativa (breaking change)

## 📝 Tipos de Mudanças

### MAJOR (X.0.0)
Mudanças incompatíveis que quebram a API:
- Remoção de funcionalidades
- Mudanças significativas na estrutura
- Alterações que requerem migração

**Exemplo**: Mudança na estrutura de dados dos projetos

### MINOR (X.Y.0)
Funcionalidades adicionadas de forma compatível:
- Novas páginas
- Novos componentes
- Melhorias na UI/UX
- Novas funcionalidades

**Exemplo**: Adição de uma nova seção no portfólio

### PATCH (X.Y.Z)
Correções de bugs compatíveis:
- Correções de bugs
- Melhorias de performance
- Atualizações de dependências
- Correções de texto/typos

**Exemplo**: Correção de um link quebrado

## 🚀 Processo de Versionamento

### 1. Desenvolvimento
```bash
# Criar branch para nova feature
git checkout -b feature/nova-funcionalidade

# Fazer alterações
# ... código ...

# Commit com mensagem descritiva
git commit -m "feat: adiciona nova seção de certificações"

# Push da branch
git push origin feature/nova-funcionalidade
```

### 2. Pull Request
- Criar PR para `develop`
- Revisar código
- Aprovar e fazer merge

### 3. Release
```bash
# Atualizar versão no package.json
# 1.0.0 -> 1.1.0

# Commit da versão
git commit -m "chore: bump version to 1.1.0"

# Criar tag
git tag v1.1.0
git push origin v1.1.0

# Criar release no GitHub
```

## 📋 Checklist para Release

### Antes de Fazer Release
- [ ] Código testado localmente
- [ ] Build funcionando (`npm run build`)
- [ ] Linting passando (`npm run lint`)
- [ ] Documentação atualizada
- [ ] CHANGELOG.md atualizado

### Durante a Release
- [ ] Atualizar `package.json`
- [ ] Criar tag Git
- [ ] Criar release no GitHub
- [ ] Documentar mudanças

### Após a Release
- [ ] Verificar se o deploy funcionou
- [ ] Notificar stakeholders
- [ ] Atualizar documentação

## 🏷️ Convenções de Tags

### Formato
```
v1.0.0
v1.1.0
v2.0.0-beta.1
v2.0.0-rc.1
```

### Tipos de Tags
- **v1.0.0** - Release estável
- **v1.1.0-beta.1** - Versão beta
- **v1.1.0-rc.1** - Release candidate

## 📊 Histórico de Versões

### v1.0.0 (2025-09-23)
- ✨ Versão inicial do portfólio
- ✨ Páginas: Home, Projetos, Habilidades, Experiência, Educação
- ✨ Design responsivo
- ✨ React Router V7
- ✨ TypeScript + TailwindCSS

## 🔄 Workflow de Branches

### Estrutura
```
main (produção)
├── develop (desenvolvimento)
    ├── feature/nova-funcionalidade
    ├── feature/melhorias-ui
    └── hotfix/correcao-urgente
```

### Fluxo
1. **Feature**: `main` → `develop` → `feature/nome`
2. **Hotfix**: `main` → `hotfix/nome`
3. **Release**: `develop` → `main`

## 📝 Mensagens de Commit

### Formato
```
tipo(escopo): descrição

Corpo da mensagem (opcional)

Rodapé (opcional)
```

### Tipos
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Tarefas de manutenção

### Exemplos
```
feat(projects): adiciona modal de visualização
fix(navigation): corrige menu mobile
docs(readme): atualiza instruções de instalação
```

## 🎯 Próximas Versões

### v1.1.0 (Planejada)
- [ ] Seção de certificações
- [ ] Modo escuro
- [ ] Animações aprimoradas

### v1.2.0 (Futura)
- [ ] Blog integrado
- [ ] Sistema de contato
- [ ] Analytics

---

**Lembre-se**: Sempre teste localmente antes de fazer uma release!
