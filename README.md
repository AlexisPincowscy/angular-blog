# Blog — Projeto Angular

Este é um pequeno projeto de blog construído com Angular, criado para demonstrar componentes reutilizáveis, roteamento e estilo responsivo. Abaixo estão as características principais do projeto, instruções rápidas para rodar localmente e dicas de contribuição.

**Características:**

- **Componentes reutilizáveis:** `big-card` e `small-card` para listar conteúdo em destaque e pré-visualizações.
- **Roteamento simples:** páginas separadas (home, contents, etc.) organizadas em `src/app/pages`.
- **Estilo modular:** cada componente possui seu CSS local em `src/app/components/*` para facilitar manutenção.
- **Assets e imagens:** use `src/assets/` para imagens locais; os componentes referenciam imagens por caminho relativo `assets/...`.

**Como rodar localmente:**

- Instale dependências:

```powershell
npm install
```

- Rodar servidor de desenvolvimento:

```powershell
ng serve
```

- Abra `http://localhost:4200/` no navegador. O servidor fará live-reload ao salvar alterações.

**Arquitetura e arquivos importantes:**

- `src/app/app.routes.ts` — configura o roteamento da aplicação.
- `src/app/components/big-card/*` — componente de destaque com imagem grande e descrição.
- `src/app/components/small-card/*` — componentes de pré-visualização usados em listas.
- `src/assets/` — coloque imagens e arquivos estáticos aqui.

**Sugestões para imagens dos cards:**

- Para evitar problemas de licenciamento com personagens da Marvel, você pode usar imagens próprias ou imagens livres de bancos como Unsplash (ex.: busque por "cosplay iron man" ou "superhero group"). Coloque os arquivos em `src/assets/` e aponte os `src` das `img` para `assets/nome-da-imagem.jpg`.

**Contribuindo:**

- Faça um fork/branch, implemente as mudanças e abra um pull request com descrição clara.
- Teste localmente com `ng serve` antes de submeter.

Se quiser, posso também:

- adicionar instruções de build/CI (ex.: GitHub Actions) para deploy automático;
- criar exemplos de imagens em `src/assets/` e atualizar os componentes para apontarem para elas;
- gerar um `CHANGELOG.md` ou uma seção `Contributors`.

---

Se quiser que eu faça o commit dessas mudanças e empurre para o repositório, diga e eu executo (`git add README.md && git commit -m "Update README with project features" && git push`).
