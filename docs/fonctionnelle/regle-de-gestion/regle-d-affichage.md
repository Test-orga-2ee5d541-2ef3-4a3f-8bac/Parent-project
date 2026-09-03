# Régle d'affichage

# Règles de Gestion : Affichage des Données (RG-AFF)

## 1. Formats et Unités de Mesure

* **RG-AFF-01 (Énergie) :** Toutes les valeurs de consommation ou de production doivent être affichées en Kilowattheure (kWh).
    * Si la valeur est strictement inférieure à 100 : affichage avec 1 décimale (ex. : `45,2 kWh`).
    * Si la valeur est supérieure ou égale à 100 : arrondi à l'entier le plus proche (ex. : `142 kWh`).
* **RG-AFF-02 (Monétaire) :** Les montants financiers (estimations, factures, économies potentielles) sont affichés en Euros (€), systématiquement avec deux décimales, un séparateur de milliers (espace insécable) et le symbole placé à droite (ex. : `1 024,50 €`).
* **RG-AFF-03 (Dates et Heures) :** Le format d'affichage standard s'adapte à la locale de l'utilisateur (fr-FR par défaut).
    * Format court : `JJ/MM/AAAA` (ex. : `04/10/2026`).
    * Format horaire : `HH:mm` (ex. : `14:30`).
* **RG-AFF-04 (Pourcentages) :** Les variations relatives sont arrondies à l'entier le plus proche avec le signe toujours explicite, même en cas de valeur positive (ex. : `+5 %`, `-12 %`).

## 2. Indicateurs Visuels et Code Couleur

* **RG-AFF-05 (Sensibilité Écologique/Financière) :** La sémantique des couleurs est inversée par rapport à une métrique de croissance classique.
    * Une baisse de consommation (évolution positive pour l'utilisateur) est affichée en **vert** avec une icône de flèche descendante.
    * Une hausse de consommation (évolution négative) est affichée en **rouge** (ou orange) avec une icône de flèche montante.
    * Une stagnation (variation entre -1 % et +1 %) est affichée en **gris** neutre.
* **RG-AFF-06 (Fiabilité ML) :** Les scores de pertinence issus des modèles de Machine Learning sont affichés sous forme de badges de confiance. Si le score prédictif d'une recommandation est inférieur à 60 %, le badge de confiance est masqué pour ne pas induire l'utilisateur en erreur.

## 3. Gestion des Données Manquantes et Anomalies (Fallbacks)

* **RG-AFF-07 (Valeurs Indisponibles) :** Si une donnée est manquante côté backend (ex. : délai de traitement Kafka, coupure de télérelève), l'interface frontend ne doit jamais afficher `0`, `null`, `NaN` ou `undefined`. La valeur est remplacée par un tiret `—` ou la mention `N/D` (Non Disponible).
* **RG-AFF-08 (Graphiques Vides) :** Lorsqu'une période sélectionnée sur la courbe de charge (Angular / Plotly) ne contient aucun point de donnée, le conteneur du graphique doit afficher un état vide (Empty State) illustré, comportant le message : *"Aucune donnée remontée pour cette période"*.

## 4. Pagination et Ergonomie

* **RG-AFF-09 (Limites d'affichage) :** Les tableaux de bord détaillés (historique des consommations, logs d'actions) sont paginés côté serveur par blocs de 10 lignes par défaut.
* **RG-AFF-10 (Troncature) :** Les libellés longs (ex. : titres des recommandations sur interface mobile) sont limités à 2 lignes maximum. Le texte excédentaire est remplacé par des points de suspension `...`, et la version complète reste accessible via une infobulle (tooltip) au survol.