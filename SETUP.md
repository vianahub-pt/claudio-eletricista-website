# Setup do Projeto Claudio Eletricista

## Passos para resolver problemas de build:

### 1. Limpar completamente o projeto
\`\`\`bash
# Remover node_modules e arquivos de cache
rm -rf node_modules
rm -rf .next
rm -f package-lock.json
rm -f yarn.lock
\`\`\`

### 2. Verificar se não há pacotes shadcn instalados
\`\`\`bash
# Verificar se há pacotes shadcn
npm list | grep shadcn
\`\`\`

### 3. Se houver pacotes shadcn, removê-los
\`\`\`bash
npm uninstall shadcn @shadcn/ui shadcn-ui
\`\`\`

### 4. Reinstalar dependências
\`\`\`bash
npm install
\`\`\`

### 5. Executar o projeto
\`\`\`bash
npm run dev
\`\`\`

## Estrutura do projeto:
- Next.js 13.4.4 com App Router
- React 18.2.0
- Tailwind CSS 3.3.2
- TypeScript 5.1.6
- Lucide React para ícones

## Sem dependências do shadcn/ui
Este projeto foi configurado para funcionar sem shadcn/ui, usando apenas Tailwind CSS puro.
