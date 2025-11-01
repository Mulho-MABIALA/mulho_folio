# Guide de Transformation - Thème Noir & Doré Luxueux

## Fichiers déjà transformés ✅
1. **Navbar** (navabar.jsx) - Terminé
2. **Hero** (Hero.jsx) - Terminé
3. **Stats** (Stats.jsx) - Terminé

## Transformations de couleurs à appliquer

### Palette de remplacement
Remplacer systématiquement dans TOUS les fichiers restants:

#### Couleurs principales:
- `cyan-400` → `amber-400`
- `cyan-500` → `amber-500`
- `blue-400` → `yellow-400`
- `blue-500` → `yellow-500`
- `blue-600` → `yellow-600`
- `purple-400` → `amber-500`
- `purple-500` → `amber-600`
- `purple-600` → `yellow-600`
- `pink-400` → `yellow-500`
- `pink-500` → `amber-500`
- `pink-600` → `amber-600`

#### Fonds:
- `slate-950` → `black`
- `slate-900` → `zinc-900`
- `slate-800` → `zinc-800`
- `slate-700` → `zinc-700`

#### Textes:
- `slate-400` → `gray-400`
- `slate-300` → `gray-300`
- `slate-200` → `gray-200`

#### Bordures:
- `border-slate-700` → `border-amber-500/20`
- `border-slate-800` → `border-amber-500/20`
- `border-purple-*` → `border-amber-*`
- `border-cyan-*` → `border-amber-*`

#### Ombres (shadows):
- `shadow-cyan-500` → `shadow-amber-500`
- `shadow-purple-500` → `shadow-amber-500`
- `shadow-blue-500` → `shadow-yellow-500`

#### Effets de fond (bg blur):
- `bg-cyan-500/5` → `bg-amber-500/5`
- `bg-purple-500/5` → `bg-yellow-600/5`

## Fichiers à transformer manuellement

### 1. Skills.jsx
- Changer les couleurs des cercles de progression
- Remplacer les gradients dans `mainSkills`:
  ```javascript
  { name: 'HTML', percent: 98, color: '#fbbf24', gradient: ['#fbbf24', '#f59e0b'] },
  { name: 'CSS', percent: 95, color: '#f59e0b', gradient: ['#f59e0b', '#d97706'] },
  { name: 'JavaScript', percent: 90, color: '#fbbf24', gradient: ['#fbbf24', '#f59e0b'] },
  { name: 'React', percent: 85, color: '#eab308', gradient: ['#eab308', '#f59e0b'] },
  { name: 'Tailwind', percent: 92, color: '#f59e0b', gradient: ['#f59e0b', '#d97706'] },
  { name: 'Node.js', percent: 80, color: '#d97706', gradient: ['#d97706', '#b45309'] },
  ```
- Background: `bg-black`
- Stroke circle: `stroke="#1a1a1a"`

### 2. About.jsx
- Background: `from-black via-zinc-900 to-black`
- Cards hover: `hover:border-amber-500/50`
- Icons colors:
  - Email: `text-amber-400`
  - Phone: `text-yellow-400`
  - Location: `text-amber-500`

### 3. MernStack.jsx
- Background: `from-black via-zinc-900 to-black`
- Gradient title: `from-amber-400 via-yellow-500 to-amber-600`
- Stack items colors (garder MongoDB vert, autres en doré):
  - Express: `from-amber-400 to-yellow-600`
  - React: `from-yellow-400 to-amber-500`
  - Node: `from-amber-500 to-yellow-500` (ou garder vert)

### 4. Projects.jsx
- Background: `from-black via-zinc-900 to-black`
- Filter buttons active: `bg-amber-500`
- Cards border hover: `hover:border-amber-500/50`
- Shadow hover: `hover:shadow-amber-500/20`
- Badge "En vedette": `bg-amber-500`
- Bouton "Démo": `bg-amber-500`

### 5. Contact.jsx
- Background: `from-black via-zinc-900 to-black`
- Form inputs focus: `focus:border-amber-500/50`
- Submit button: `from-amber-500 to-yellow-600`
- Social icons hover: `hover:text-amber-400`

### 6. Footer.jsx
- Background: `from-black to-zinc-900`
- Border top: `border-amber-500/20`
- Links hover: `hover:text-amber-400`
- Social hover: `hover:border-amber-500/50`

## Ajout du fichier CSS thème

Dans `src/App.jsx`, ajouter l'import:
```javascript
import './App.css'
import './gold-theme.css'  // ← AJOUTER CETTE LIGNE
```

## Vérifications finales

- [ ] Tous les dégradés `from-cyan/blue/purple` sont en `from-amber/yellow`
- [ ] Tous les backgrounds `slate-*` sont en `black/zinc-*`
- [ ] Tous les textes `slate-*` sont en `gray-*` ou `white`
- [ ] Toutes les bordures sont en `amber-500/*`
- [ ] Toutes les ombres sont en `amber-500/*` ou `yellow-*/*`
- [ ] Les effets hover utilisent des tons dorés
- [ ] Les backgrounds sont noirs ou zinc foncés

## Résultat attendu

Un portfolio élégant avec:
- Fond noir profond
- Accents dorés (amber/yellow) sur tous les éléments interactifs
- Effets de lumière dorée subtils
- Sensation de luxe et d'exclusivité
- Excellente lisibilité avec contraste blanc/doré sur noir
