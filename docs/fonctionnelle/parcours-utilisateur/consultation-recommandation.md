# Consultation recommandation

# Parcours Utilisateur : Consultation des Recommandations

**Acteur :** Utilisateur final (consommateur connecté)
**Objectif :** Consulter, analyser et interagir avec les recommandations personnalisées d'optimisation énergétique générées par l'application Smart Energy Optimizer.

## 🟢 Scénario Nominal (Succès)

1. **Accès :** Depuis le Tableau de bord, l'utilisateur clique sur l'onglet **"Mes Recommandations"** dans le menu de navigation.
2. **Chargement :** L'interface Angular affiche des *skeletons* (écrans de chargement fantômes) pendant que la requête transite via l'API Gateway vers le module de Machine Learning Python.
3. **Affichage de la liste :** L'écran présente une liste de recommandations priorisées par impact financier et écologique (ex. : *"Décaler le chauffe-eau en heures creuses"*, *"Réduire le talon de consommation de 15%"*). Chaque carte affiche un résumé visuel de l'économie potentielle (en € et en kWh).
4. **Consultation détaillée :** L'utilisateur clique sur une recommandation spécifique (ex. : *"Décaler la machine à laver"*). Un panneau latéral ou une page dédiée s'ouvre avec :
    - L'explication du modèle (pourquoi cette action est recommandée basée sur sa courbe de charge).
    - L'estimation précise des gains annuels.
    - Les étapes pour mettre en place l'action.
5. **Interaction (Prise de décision) :** L'utilisateur choisit une action parmi trois options :
    - **"Planifier / Accepter"** : L'action est ajoutée à sa liste de tâches énergétiques.
    - **"Marquer comme fait"** : Le système enregistre l'action pour ajuster les futures prédictions.
    - **"Ignorer"** : La recommandation est masquée et le modèle ML en tient compte pour ne plus la proposer.
6. **Mise à jour :** L'interface affiche une notification de succès (*"Action enregistrée"*), le score de sobriété énergétique de l'utilisateur est recalculé, et la liste se rafraîchit.

---

## 🟠 Scénarios Alternatifs (Erreurs et Cas Particuliers)

### A. Historique de données insuffisant (Cold Start)
- *Déclenchement :* L'utilisateur vient de créer son compte et le module ML n'a pas encore suffisamment de données de télérelève (compteur Linky) pour identifier des modèles de consommation.
- *Réaction UI :* Au lieu de la liste vide, une bannière explicative apparaît.
- *Message :* *"Votre profil énergétique est en cours d'analyse. Il nous faut environ 7 jours de données pour vous proposer des recommandations sur mesure."*
- *Résolution :* L'application affiche en attendant des "Éco-gestes génériques" (bonnes pratiques standard).

### B. Indisponibilité du service de recommandation (Timeout)
- *Déclenchement :* Le backend Python (module ML) met trop de temps à répondre ou est indisponible (Erreur HTTP 503 ou 504).
- *Réaction UI :* Le chargement s'arrête. Les squelettes de chargement sont remplacés par un état d'erreur (Empty state).
- *Message :* *"Oups ! Nos algorithmes sont temporairement indisponibles. Impossible de charger vos recommandations pour le moment."*
- *Résolution :* L'interface propose un bouton **"Réessayer"** permettant de relancer l'appel API sans recharger toute la page.

### C. Liste de recommandations vide (Inertie positive)
- *Déclenchement :* L'utilisateur a déjà consulté, validé ou ignoré toutes les recommandations générées pour son profil actuel.
- *Réaction UI :* Une illustration de succès (type trophée ou jauge pleine) s'affiche à la place de la liste.
- *Message :* *"Félicitations ! Vous avez traité toutes nos recommandations actuelles. Continuez ainsi, nous analysons votre courbe de charge pour trouver de nouvelles pistes d'économies."*