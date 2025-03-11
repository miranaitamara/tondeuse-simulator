# TondeuseSimulator 🚜

TondeuseSimulator est une application web développée avec **React** et **TypeScript**, qui permet de simuler le déplacement de tondeuses sur une pelouse en fonction d'instructions prédéfinies dans un fichier.

---

## 📌 **Fonctionnalités**

- 📂 **Upload de fichier** : Importer un fichier texte contenant les instructions.
- 🎬 **Lancer la simulation** : Exécuter les instructions pour voir le déplacement des tondeuses.
- 🔄 **Réinitialisation** : Effacer les résultats et le fichier sélectionné.
- ✅ **Test unitaire** : Vérification du bon fonctionnement avec Jest & React Testing Library.

---

## 🚀 **Installation et Exécution**

### 📥 **1. Cloner le projet**

```sh
git clone https://github.com/ton-profil/TondeuseSimulator.git
cd TondeuseSimulator
```

### 📦 **2. Installer les dépendances**

```sh
npm install
```

### ▶️ **3. Lancer l'application en mode développement**

```sh
npm run dev
```

🔹 L'application sera accessible à **http://localhost:5173/** (si tu utilises Vite).

### 🏗 **4. Construire le projet pour la production**

```sh
npm run build
```

Les fichiers seront générés dans le dossier **dist/**.

### 🧪 **5. Lancer les tests unitaires**

```sh
npm run test
```

---

## 📂 **Structure du projet**

```
TondeuseSimulator/
│── src/
│   ├── components/       # Composants réutilisables
│   │   ├── FileUpload/   # Upload de fichier
│   │   ├── MowerResults/ # Résultats de la simulation
│   ├── services/         # Logique métier (simulation des tondeuses)
│   ├── tests/            # Tests unitaires
│   ├── App.tsx           # Composant principal
│   ├── TondeuseSimulator.tsx # Simulation des tondeuses
│── public/               # Assets statiques
│── dist/                 # Fichiers de build (prod)
│── package.json          # Dépendances et scripts
│── tsconfig.json         # Configuration TypeScript
│── vite.config.ts        # Configuration Vite
│── README.md             # Documentation
```

---

## 🌍 **Déploiement**

### **Sur Vercel**

1. Créer un compte sur [Vercel](https://vercel.com/).
2. Importer le projet depuis GitHub.
3. Définir les paramètres :
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
4. Déployer 🚀

Ou utiliser la CLI :

```sh
npm install -g vercel
vercel
```

### **Sur Netlify**

1. Créer un compte sur [Netlify](https://www.netlify.com/).
2. Importer le projet depuis GitHub.
3. Définir les paramètres :
   - **Build Command** : `npm run build`
   - **Publish Directory** : `dist`
4. Déployer 🚀

Ou utiliser la CLI :

```sh
npm install -g netlify-cli
netlify deploy
```

---

## 🛠 **Technologies utilisées**

- **React** (Vite)
- **TypeScript**
- **Jest + React Testing Library** (Tests unitaires)
- **Vercel / Netlify** (Déploiement)
- **CSS Modules** (Styles)

---

## 📌 **Améliorations possibles**

- 🖼 Interface utilisateur améliorée avec animations.
- 📊 Ajout d'une visualisation graphique des déplacements.
- 💾 Sauvegarde des simulations.

---

## 👨‍💻 **Auteur**

📌 Développé par **[Ryma NaitAmara]**

💡 Inspiré du défi de simulation de tondeuse !

🔗 [GitHub](https://github.com/ton-profil/TondeuseSimulator)

---

🔥 **Merci d'utiliser TondeuseSimulator !** 🚜
