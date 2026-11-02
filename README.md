# MyCss

Design tokens de l'univers Rev0 : palette, typographie, formes et mouvement, en custom properties CSS pures (aucun framework).

## Utilisation

```css
@import url('https://cdn.jsdelivr.net/gh/Rev0li/MyCss@v1.1.0/dist/rv-tokens.css');
```

Toujours pointer sur un **tag** (`@v1.1.0`), jamais sur `@main`.

Polices (Google Fonts) : Schibsted Grotesk, Pixelify Sans, JetBrains Mono — lien complet en tête de `dist/rv-tokens.css`.

## Modes

| Mode | Activation | Pour |
|---|---|---|
| Clair | par défaut | home, pages projet |
| Sombre | `prefers-color-scheme`, ou `data-theme="dark"` | idem |
| Sobre | `data-mode="sobre"` ; sombre avec le thème de la page | cas d'étude, apps |

Les attributs marchent sur `<html>` ou sur un bloc :

```html
<html data-theme="dark">
<section data-mode="sobre">…</section>
```

## Règles

- 2 couleurs fortes max : `--rv-turq`, `--rv-rose`. `--rv-ocre` en détail. `--rv-violet` = IA uniquement.
- Texte coloré → variante `-ink` (≥ 4,5:1 sur `bg` et `surface`).
- Texte posé sur une couleur → `--rv-on-accent`.
- États : `--rv-success`, `--rv-danger`, `--rv-warning` (+ `-ink`, `-soft`), jamais décoratifs.
- Animations ≤ `--rv-dur-slow` (300 ms), coupées par `prefers-reduced-motion`.
- Traits : `--rv-line` (filets), `--rv-line-strong` (contours de tags, puces).
- Arrondis : `xs` 6 · `sm` 8 · `md` 10 · `window` 12 · `lg` 16 · `control` 999 (8 en sobre).
- Verre (étiquettes posées sur une image) : `--rv-glass`, `--rv-glass-strong`, `--rv-glass-line`.

Le mode sobre suit le thème : `data-theme="dark"` sur la page (ou `prefers-color-scheme: dark`) passe aussi les blocs sobres en sombre ; `data-theme="light"` sur un bloc le garde clair.

## Fichiers

- `dist/rv-tokens.css` — tokens v1.1 (préfixe `--rv-`).
- `dist/tokens.css` — **obsolète**, conservé pour les consommateurs pas encore migrés.
- `app/`, `components/` — ancienne vitrine Next.js (brouillon).
