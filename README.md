# Advinhe

Jogo de adivinhar palavras feito com React, TypeScript e Vite.

Projeto de estudo desenvolvido a partir do projeto base aprendido na Rocketseat. A aplicação sorteia uma palavra, mostra uma dica e permite tentar letras até descobrir a palavra ou atingir o limite de tentativas.

## Tecnologias

- React
- TypeScript
- Vite
- Biome
- CSS Modules

## Como rodar

Instale as dependências:

```bash
npm install
```

Rode o projeto em modo desenvolvimento:

```bash
npm run dev
```

Gere a build de produção:

```bash
npm run build
```

Visualize a build:

```bash
npm run preview
```

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: valida TypeScript e gera a build com Vite.
- `npm run lint`: executa o linter do Biome.
- `npm run format`: formata os arquivos com Biome.
- `npm run check`: executa lint, format check e organize imports.
- `npm run preview`: serve a build de produção localmente.

## Estrutura

```txt
src/
  assets/              imagens e ícones
  components/          componentes reutilizáveis
    Button/
    Header/
    Input/
    Letter/
    LettersUsed/
    Tip/
  utils/
    words.ts           palavras e dicas do jogo
  App.tsx              lógica principal do jogo
  main.tsx             entrada da aplicação
```

## Funcionalidades atuais

- Sorteio de palavra.
- Exibição de dica.
- Campo para tentar uma letra.
- Registro de letras usadas.
- Indicação de letras corretas e erradas.
- Revelação de letras acertadas.
- Reinício do jogo.
- Fluxo de vitória ou derrota.

## Qualidade

O projeto usa Biome para manter padrão de formatação, lint e organização de imports.
