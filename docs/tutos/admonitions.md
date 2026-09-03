# Admonitions (encadrés)

!!! warning "Attention"
    Il faut bien respecter l'indentation sinon ça ne fonctionnera pas

## Les différents admonitions

!!! note "Note importante"
    Le contenu de l'admonition supporte **tout le Markdown** :
    listes, code, liens, etc.

!!! tip "Astuce"
    Utilisez `mkdocs serve --dirty` pour accélérer le rechargement
    sur les gros projets (seules les pages modifiées sont regénérées).

!!! warning "Attention"
    Ne commitez jamais de secrets dans votre documentation.

!!! danger "Danger"
    Supprimer le dossier `site/` en production efface la documentation
    déployée.

!!! abstract "Je s'appelle Groot 1"

!!! info "Je s'appelle Groot 2"

!!! success "Je s'appelle Groot 3"

!!! question "Je s'appelle Groot 4"

!!! failure "Je s'appelle Groot 5"

!!! bug "Je s'appelle Groot 6"

!!! example "Je s'appelle Groot 7"

!!! quote "Je s'appelle Groot 8"



## Les faire dépliables (fermés par défaut)

??? example "Cliquez pour voir l'exemple"
    Contenu masqué par défaut. Utile pour les longues sorties
    de commandes ou les configurations complètes.

## Les faire dépliables (ouvert par défaut)

???+ example "Cliquez pour cacher l'exemple"
    Contenu masqué par défaut. Utile pour les longues sorties
    de commandes ou les configurations complètes.


## Spécification

!!! note ""
    Le contenu de l'admonition supporte **tout le Markdown** :
    listes, code, liens, etc.
    !!! question "As-tu remarqué ?"
        Celui de niveau 1 n'a pas de titre


## Rendre l'admonition flottant

!!! tip inline "A Gauche !"
    Cet encadré flotte à gauche du paragraphe suivant.

!!! info inline end "Rappel"
    Cet encadré flotte à droite du paragraphe suivant.

