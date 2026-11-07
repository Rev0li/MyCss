# MyCss

Design system de l'univers Rev0 : tokens (palette, typographie, formes, mouvement) et composants, en CSS pur (aucun framework). Les composants sont réglés sur les vraies pages du portfolio, puis extraits ici.

## Utilisation

```css
@import url('https://cdn.jsdelivr.net/gh/Rev0li/MyCss@v1.2.0/dist/rv-tokens.css');
@import url('https://cdn.jsdelivr.net/gh/Rev0li/MyCss@v1.2.0/dist/rv-components.css');
/* Optionnel : base de page (body, liens, focus), si la page n'a pas déjà la sienne */
@import url('https://cdn.jsdelivr.net/gh/Rev0li/MyCss@v1.2.0/dist/rv-base.css');
```

Toujours pointer sur un **tag** (`@v1.2.0`), jamais sur `@main`.

Polices (Google Fonts ou Fontsource) : Schibsted Grotesk, Pixelify Sans, JetBrains Mono — lien complet en tête de `dist/rv-tokens.css`.

**Vitrine :** ouvrir `index.html` dans un navigateur. Elle montre tokens et composants, avec un sélecteur de thème (auto, clair, sombre) et de mode (Rev0, sobre). Elle sert aussi de test visuel.

## Fichiers

| Fichier | Contenu | Touche aux éléments ? |
|---|---|---|
| `dist/rv-tokens.css` | Custom properties `--rv-*` : couleurs, typo, formes, mouvement, modes | non (`:root` et attributs) |
| `dist/rv-components.css` | Classes `.rv-*` : composants | non |
| `dist/rv-base.css` | Base de page : `body`, liens, focus, défilement | oui, optionnel |
| `index.html` | Vitrine | — |

## Modes

| Mode | Activation | Pour |
|---|---|---|
| Clair | par défaut | home, pages projet |
| Sombre | `prefers-color-scheme`, ou `data-theme="dark"` | idem |
| Sobre | `data-mode="sobre"` ; sombre avec le thème de la page | cas d'étude, applis (rev0auth…) |

Les attributs marchent sur `<html>` ou sur un bloc :

```html
<html data-theme="dark">
<section data-mode="sobre">…</section>
```

Le mode sobre suit le thème : `data-theme="dark"` sur la page (ou `prefers-color-scheme: dark`) passe aussi les blocs sobres en sombre ; `data-theme="light"` sur un bloc le garde clair.

## Composants (v1.2)

| Classe | Rôle | En sobre |
|---|---|---|
| `.rv-label` `.rv-mono` `.rv-px` `.rv-muted` `.rv-hair` `.rv-sr` | Typo utilitaire, filet, texte pour lecteur d'écran | `.rv-px` passe en police normale |
| `.rv-sec` `.rv-h2` | Section avec gouttières, grand titre | titre 44 px (token) |
| `.rv-win` + `-wrap` `-bar` `-title` `-ghost` `-tip`, `.rv-gels` `.rv-gel` | Fenêtre rétro ; barre déplaçable avec `data-drag` (JS de la page : `--x` / `--y`, `.rv-win-lifted`) | sans ombre dure ni trame, pastilles grises |
| `.rv-pill` `.big` `.solid` `.gel` | Boutons et liens-boutons ; **un seul gel par écran** | gel → bouton plein turquoise |
| `.rv-ulink` | Lien souligné | — |
| `.rv-dot` | Pastille « en ligne » qui pulse | — |
| `.rv-next` `.rv-next-q` `.rv-bob` | Question de bas de section qui mène à la suivante | — |
| `.rv-nav` `.rv-nav-link` `.rv-nav-cta` `.rv-icon-btn` `.rv-avatar` | Barre du haut collante (56 px) | avatar à bord fin |
| `.rv-key` `.rv-hint` | Touche en relief (`aria-pressed` / `aria-selected` = enfoncée), consigne « touchez » | relief remplacé par un fond turquoise doux |

Petits écrans (≤ 760 px) : cibles de 44 px dans la barre, pas de déplacement des fenêtres au doigt. Les réglages de mise en page propres à une page (gouttières et tailles de titre en mobile, sections plein écran, stickers) restent dans la page.

## Règles

- 2 couleurs fortes max : `--rv-turq`, `--rv-rose`. `--rv-ocre` en détail. `--rv-violet` = IA uniquement.
- Texte coloré → variante `-ink` (≥ 4,5:1 sur `bg` et `surface`).
- Texte posé sur une couleur → `--rv-on-accent`.
- États : `--rv-success`, `--rv-danger`, `--rv-warning` (+ `-ink`, `-soft`), jamais décoratifs.
- Animations ≤ `--rv-dur-slow` (300 ms), coupées par `prefers-reduced-motion`.
- Traits : `--rv-line` (filets), `--rv-line-strong` (contours de tags, puces).
- Arrondis : `xs` 6 · `sm` 8 · `md` 10 · `window` 12 · `lg` 16 · `control` 999 (8 en sobre).
- Verre (étiquettes posées sur une image) : `--rv-glass`, `--rv-glass-strong`, `--rv-glass-line`.

## Versions

- **v1.2.0** — composants (`rv-components.css`), base optionnelle (`rv-base.css`), vitrine HTML. Retirés : l'ancienne vitrine Next.js et `dist/tokens.css` (obsolète, toujours servi par les anciens tags).
- **v1.1.0** — mode sobre sombre, tokens de la planche (traits, arrondis, verre).
- **v1.0.0** — palette v1 (clair, sombre, sobre).
