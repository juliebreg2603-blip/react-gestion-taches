# Gestionnaire de tâches (React)

Application web de gestion de tâches développée avec React, réalisée dans le cadre d'un TP de formation. Les tâches sont enregistrées via une API REST simulée avec JSON Server.

## Technologies
- React 19, JavaScript (JSX)
- Vite
- JSON Server (API REST simulée à partir de `db.json`)
- CSS

## Fonctionnalités
- Affichage de la liste des tâches
- Ajout, suppression et modification du titre d'une tâche
- Marquer une tâche comme terminée ou à faire
- Recherche par titre, description ou catégorie
- Filtres par statut (toutes, actives, terminées) et par priorité
- Statistiques sur les tâches
- Message d'erreur si l'API n'est pas démarrée

## Lancer le projet
1. Cloner le dépôt puis installer les dépendances :
   ```bash
   npm install
   ```
2. Démarrer l'API (JSON Server) dans un premier terminal :
   ```bash
   npm run server
   ```
3. Démarrer l'application dans un second terminal :
   ```bash
   npm run dev
   ```
4. Ouvrir l'adresse affichée dans le terminal (généralement `http://localhost:5173`).

## Auteure
Julie Bregman
