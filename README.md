# Barbearia Classic

Landing page premium e responsiva para divulgar portfólio, serviços e canais
de contato da Barbearia Classic.

## Visão geral

- **Stack**: HTML5 + CSS3 + JavaScript vanilla.
- **Design**: Tipografia Poppins, paleta escura com detalhes em dourado e
  fotografias Pexels.
- **Destaques**:
  - Hero fullscreen com CTA duplo.
  - Cards de serviço com preços base.
  - Galeria/portfólio com fotos em alta.
  - Formulário de contato + link direto para WhatsApp.
  - Menu mobile com toggle acessível.

## Estrutura de pastas

```
barbearia/
├── img/             # Assets locais (logo etc.)
├── js/
│   └── script.js    # Interações (menu mobile)
├── index.html       # Página principal
├── styles.css       # Estilos globais
└── README.md        # Este arquivo
```

## Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/fau-33/barbearia.git
   cd barbearia
   ```

2. Abra o projeto de acordo com sua preferência:
   - Clique duas vezes no `index.html`, ou
   - Use a extensão **Live Server** no VS Code (`Open with Live Server`), ou
   - Sirva com qualquer HTTP server local (`npx serve .`, `python -m http.server`
     etc.).

3. No navegador, acesse a URL indicada (ex.: `http://127.0.0.1:5500/`).

> Requisitos: navegador moderno e conexão à internet para carregar Google Maps
> e imagens hospedadas no Pexels.

## Personalização rápida

- Edite textos e preços diretamente em `index.html`.
- Paleta, fontes e espaçamentos podem ser ajustados nas variáveis de
  `styles.css`.
- Para trocar as fotos do portfólio, substitua os links do Pexels ou coloque
  novas imagens na pasta `img/`.

## Autor

**Flávio Félix**  
GitHub: [@fau-33](https://github.com/fau-33)
