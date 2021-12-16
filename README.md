# Projet

Ceci est le projet de Alexis

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Prérequis

Node.js doit être installé

Le projet est sur Angular 13

Pour installer les modules prérequis au fonctionnement, exécuter la commande ci-dessous

```
npm install -g @angular/cli bootstrap @forevolve/bootstrap-dark rxjs
```

Bootstrap doit être installé afin que les onglets soient supportés, en exécutant la commande suivante
Le projet utilise aussi [ForEvolve/bootstrap-dark](https://github.com/ForEvolve/bootstrap-dark) afin d'avoir un mode sombre.

## Description composants

### choix-modele

Rechercher un modèle parmi les bateaux de la base de donnée.

### details-bateau

Décris les détails des dimensions de la voile.

### info-voiles

Décris les voiles disponibles ainsi que le prix.

# Réussites

Ça fonctionne

L'interface est relativement belle

Les composants sont bien séparés

Bootstrap en dark mode, c'est bon pour les yeux

# Échecs

J'aurais aimé faire la gestion des voiles de manière plus concise dans le HTML.

Au début j'ai essayé de communiquer avec l'API en utilisant rxHr, mais finalement http.get est utilisé.
