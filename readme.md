# effi Related Pages

* **Auteur :** Cédric GIRARD
* **Tags :** gutenberg, block, bloc, maillage interne, pages associées, related pages, internal linking
* **Requires at least:** 6.2
* **Tested up to:** 6.5
* **Requires PHP:** 7.4
* **Stable tag:** 1.5.0
* **License:** GPLv2 or later
* **License URI:** https://www.gnu.org/licenses/gpl-2.0.html

Un bloc Gutenberg puissant et entièrement configurable pour afficher dynamiquement des pages associées et améliorer votre maillage interne.

## Description

**effi Related Pages** est un plugin WordPress qui ajoute un bloc Gutenberg avancé à votre éditeur. Il vous permet d'afficher automatiquement une liste ou une grille de pages enfants ou sœurs par rapport à la page actuelle, sans jamais avoir à écrire une seule ligne de code.

Entièrement personnalisable via la barre latérale de l'éditeur et une page de réglages globaux, ce bloc a été conçu pour être à la fois simple d'utilisation, flexible et performant grâce à un système de cache intégré. C'est l'outil idéal pour renforcer la structure de votre site et guider vos visiteurs vers des contenus pertinents.

## Fonctionnalités Principales

Ce plugin a été développé pour offrir un maximum de contrôle et de flexibilité.

### 🏛️ **Contenu et Relations**
* **Relations dynamiques :** Affichez automatiquement les **pages enfants** ou les **pages sœurs** de la page courante.
* **Contrôle de la quantité :** Choisissez le nombre exact d'éléments à afficher, ou laissez sur 0 pour tous les afficher.
* **Options de tri avancées :** Triez les résultats par :
    * Titre (ordre alphabétique)
    * Date de publication
    * ID de la page
* **Ordre de tri :** Affichez les résultats en ordre **croissant** ou **décroissant**.

### 🎨 **Mise en Page et Style**
* **Deux layouts principaux :** Affichez vos pages en **Liste** ou en **Grille**.
* **Grille personnalisable :** Choisissez le nombre de colonnes pour votre grille (de 1 à 4).
* **Responsive design :** La grille bascule automatiquement sur **une seule colonne** sur les écrans mobiles pour une lisibilité parfaite, tout en conservant la structure interne de chaque élément.
* **Largeur du bloc :** Contrôlez la largeur du conteneur du bloc (standard, large ou pleine largeur) via les réglages natifs de Gutenberg.
* **Dimensions :** Gérez précisément les **marges** et l'**espacement interne** (padding) du bloc grâce aux contrôles natifs de l'éditeur.

### 🖼️ **Personnalisation des Éléments**
* **Image à la une :**
    * Affichez ou masquez l'image.
    * Choisissez sa taille (`thumbnail`, `medium`, `large`, `full`).
    * Contrôlez le **ratio** (1:1, 16:9, 4:3) et activez le **recadrage** pour une grille parfaitement uniforme.
    * Définissez la **position de l'image** (haut, bas, gauche ou droite), une mise en page qui est conservée sur mobile.
* **Titre et Extrait :**
    * Affichez ou masquez le titre et l'extrait.
    * Choisissez la **balise HTML** du titre (`H2`, `H3`, etc.) pour une sémantique SEO optimale.
    * Définissez le nombre de mots maximum pour l'extrait.
* **Couleurs :** Personnalisez la couleur du texte, des liens et de l'arrière-plan avec les sélecteurs de couleur natifs de WordPress.

### ⚙️ **Administration et Performance**
* **Réglages globaux :** Une page de réglages complète dans **Réglages > effi Related Pages** pour définir les valeurs par défaut de tous vos nouveaux blocs.
* **Point de rupture responsive :** Personnalisez la largeur en pixels à laquelle la grille bascule en mode mobile.
* **Optimisation des performances :** Un système de **mise en cache (Transients)** est intégré pour réduire drastiquement le nombre de requêtes à la base de données, assurant une vitesse de chargement optimale. Le cache se vide automatiquement lorsqu'une page est mise à jour.
* **Internationalisation :** Le plugin est prêt à être traduit (`.pot` inclus).

## Installation

1.  Uploadez le dossier `effi-related-pages` dans le répertoire `/wp-content/plugins/` de votre site.
2.  Activez l'extension via le menu "Extensions" de WordPress.
3.  (Optionnel) Configurez les réglages par défaut dans **Réglages > effi Related Pages**.
4.  Ajoutez le bloc "effi Related Pages" dans vos pages et articles !