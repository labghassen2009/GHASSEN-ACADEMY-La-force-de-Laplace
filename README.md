# GHASSEN ACADEMY — Virtual Physics Laboratory

Laboratoire de physique interactif consacré à la force de Laplace, pour le programme de 3ème année secondaire, section Sciences techniques, en Tunisie.

## Démarrer avec Visual Studio Code

1. Installer **Node.js LTS** si nécessaire.
2. Ouvrir ce dossier dans VS Code.
3. Dans le terminal intégré, exécuter `npm install`.
4. Lancer `npm run dev`, puis ouvrir l’adresse locale affichée par Vite.

Pour contrôler les types et produire le site de livraison : `npm run typecheck` puis `npm run build`. La compilation obfusque les bundles applicatifs. Three.js reste minifié dans son propre bundle chargé uniquement avec l’expérience 3D, afin d’éviter d’augmenter inutilement sa taille. L’obfuscation n’est pas un chiffrement : le code livré au navigateur peut toujours être récupéré et analysé. Le code binaire ASCII de la signature est conservé en commentaire dans `src/App.tsx`, pas dans l’interface du site.

Après `npm run build`, ne pas ouvrir `dist/index.html` directement avec `file://` : les modules JavaScript nécessitent un serveur HTTP. Utiliser `npm run preview`, puis ouvrir l’adresse affichée. Sous Windows, double-cliquer sur `start-local.bat` construit le site, lance automatiquement cette prévisualisation et ouvre `http://127.0.0.1:4173/`.

Le fichier `index.html` à la racine est l’entrée de développement Vite ; il ne doit pas être ouvert directement.

## Publier sur GitHub Pages

Le workflow GitHub Actions construit et publie automatiquement `dist/` après chaque push sur `main` ou `master`. Dans le dépôt GitHub, ouvrir **Settings → Pages**, puis choisir **GitHub Actions** comme source de déploiement. Le premier déploiement démarre au prochain push ou depuis **Actions → Deploy to GitHub Pages → Run workflow**.

Three.js, Chart.js, React, TypeScript et Tailwind CSS sont configurés comme dépendances du projet. MathJax et les polices sont chargés depuis des CDN ; une connexion Internet est donc requise pour le rendu des équations et des polices.

## Les trois pages

- **Expérience** (`#experience`) — scène Three.js manipulable des rails de Laplace, commandes pour B, I, L, α et inversion du courant/champ, déplacement signé de la tige avec inertie et amortissement, et calcul détaillé.
- **Graphiques** (`#graphiques`) — quatre courbes Chart.js interactives, avec les axes, les unités, une légende et un point identifiant les conditions actuelles.
- **Cours** (`#cours`) — définition, conditions d’apparition, montage des rails, caractéristiques, règle de la main droite, unités SI et exemple corrigé.

La navigation affiche une page à la fois. Utiliser les flèches gauche/droite pour changer de page et haut/bas pour faire défiler. Appuyer sur `?` ou `؟` pour afficher l’aide des raccourcis et sur `Échap` pour la fermer. Les flèches gauche/droite restent disponibles pour régler les curseurs lorsqu’ils ont le focus. Les valeurs de l’expérience restent conservées en passant aux graphiques.

La force est calculée selon \(F=BIL\sin(\alpha)\), α étant converti en radians. La scène emploie une masse modélisée de 0,22 kg, un amortissement numérique et une course finie pour garder la tige sur les rails. Ces paramètres donnent un modèle visuel, et ne prétendent pas représenter les mesures d’un montage réel. L’application est entièrement virtuelle et ne comporte aucun circuit électrique réel.
