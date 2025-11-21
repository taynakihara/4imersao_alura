# 🪄 Galeria de Filmes Harry Potter

Este é um projeto de uma página web interativa que exibe uma galeria com todos os filmes da saga Harry Potter. A aplicação permite que os usuários visualizem informações sobre cada filme e utilizem uma funcionalidade de busca para filtrá-los por título.

Este projeto foi desenvolvido como parte da 4ª Imersão Dev da Alura.

## ✨ Funcionalidades

- **Galeria de Filmes:** Exibição dos filmes em formato de cards, contendo pôster, título e descrição.
- **Busca Dinâmica:** Campo de pesquisa para filtrar os filmes em tempo real conforme o usuário digita.
- **Links Externos:** Cada card possui um link que direciona para a página do filme no IMDb para mais informações.
- **Design Temático e Responsivo:** A interface é estilizada com o tema de Harry Potter e se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias web:

- **HTML5:** Para a estruturação semântica do conteúdo.
- **CSS3:** Para a estilização, layout (Flexbox e Grid) e animações.
- **JavaScript:** Para a manipulação do DOM, carregamento de dados e implementação da lógica de busca.
- **JSON:** Como formato para armazenar os dados dos filmes de forma estruturada.

## 📂 Estrutura do Projeto

O repositório está organizado da seguinte forma:

```
├── 📄 index.html      # Arquivo principal com a estrutura da página
├── 🎨 style.css       # Folha de estilos com toda a personalização visual
├── 📜 script.js       # Código JavaScript com a lógica da aplicação
├── 💾 data.json       # Arquivo com os dados dos filmes
├── 🖼️ images/         # Pasta com as imagens (pôsteres, logo, etc.)
└── 📖 README.md       # Este arquivo
```

- `index.html`: Contém a estrutura base da página, incluindo o cabeçalho, a área principal para os cards e o rodapé.
- `style.css`: Responsável por todo o design, desde o fundo temático e as cores até o layout responsivo dos cards e as animações.
- `script.js`: Contém a lógica para:
  - Carregar os dados do arquivo `data.json`.
  - Gerar dinamicamente os cards de filmes e inseri-los na página.
  - Implementar a funcionalidade de busca que filtra os cards exibidos.
- `data.json`: Funciona como um pequeno "banco de dados", armazenando as informações de cada filme (título, descrição, caminho da imagem e link).

## 🚀 Como Executar

Como este é um projeto front-end estático, você não precisa de um servidor complexo para executá-lo.

1.  **Clone o repositório** (ou baixe os arquivos):

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Navegue até a pasta do projeto**:

    ```bash
    cd nome-do-repositorio
    ```

3.  **Abra o arquivo `index.html`** no seu navegador de preferência.

Pronto! A galeria de filmes será exibida e você poderá interagir com a funcionalidade de busca.
