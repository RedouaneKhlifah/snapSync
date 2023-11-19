# Introduction
Bienvenue dans *SNAPSYNC*, une plateforme de publication interactive qui permet aux utilisateurs de créer, explorer, modifier et supprimer des publications. Cette application utilise les technologies modernes telles que React, Redux, Mongoose, MongoDB Atlas, Axios, react-file-base64, moment, et Redux Thunk pour offrir une expérience utilisateur robuste.

## Configuration
### Dépendances nécessaires
- Node.js
- npm 

### Prérequis
- Compte MongoDB Atlas pour la base de données.

## Installation
1. Cloner le projet :
    ```bash
    git clone https://github.com/6-ON/snap-sync.git
    ```

2. Installer les dépendances du backend :
    ```bash
    cd Backend
    npm install
    ```

3. Configurer MongoDB Atlas :
    - Créez un cluster sur MongoDB Atlas.
    - Copiez la chaîne de connexion MongoDB et remplacez-la dans le fichier `.env` du dossier Backend.

4. Installer les dépendances du frontend :
    ```bash
    cd ../frontend
    npm install
    ```

5. Configurer le frontend :
    - Assurez-vous que l'URL de l'API dans le fichier `frontend/src/api/api.js` correspond à votre backend.

## Utilisation
- Démarrer le backend :
    ```bash
    npm run server
    ```

- Démarrer le frontend :
    ```bash
    npm run frontend
    ```

- Démarrer le backend et le frontend simultanément :
    ```bash
    npm run both
    ```

## Architecture
### Dossiers principaux
- **Backend**: Contient le code du backend.
- **frontend**: Contient le code du frontend et ses tests.

### Scripts
- **start**: Lance le serveur Node.js du backend.
- **server**: Lance le serveur Node.js avec nodemon pour le développement.
- **frontend**: Lance le frontend en mode développement.
- **both**: Lance simultanément le backend et le frontend.

## Tests
Pour exécuter les tests et vérifier la couverture :
```bash
cd frontend
npm test
