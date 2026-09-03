# Connexion

# Parcours Utilisateur : Authentification

**Acteur :** Utilisateur final (consommateur)
**Objectif :** Se connecter à l'application Smart Energy Optimizer pour accéder à son suivi de consommation et à ses recommandations.

## 🟢 Scénario Nominal (Succès)

1. **Accès :** L'utilisateur arrive sur la page d'accueil de l'application. Si aucune session n'est active, la page de connexion s'affiche.
2. **Saisie :** L'utilisateur renseigne son adresse e-mail et son mot de passe dans les champs prévus.
3. **Validation :** L'utilisateur clique sur le bouton **"Se connecter"**.
4. **Traitement en arrière-plan :**
    - Le frontend Angular vérifie que les champs ne sont pas vides et que le format de l'e-mail est valide.
    - La requête est envoyée via l'API Gateway vers le service d'authentification.
    - Le backend valide les credentials et retourne un token d'accès (JWT).
5. **Redirection :** L'utilisateur est connecté et automatiquement redirigé vers son **Tableau de bord** (affichage de la courbe de charge et des métriques énergétiques).

---

## 🟠 Scénarios Alternatifs (Erreurs et Résolutions)

### A. Identifiants incorrects
- *Déclenchement :* À l'étape 4, le backend ne reconnaît pas la combinaison e-mail/mot de passe (Erreur HTTP 401).
- *Réaction UI :* Le champ e-mail est conservé, le champ mot de passe est réinitialisé.
- *Message :* Un encart rouge s'affiche : *"Adresse e-mail ou mot de passe incorrect."*
- *Résolution :* L'utilisateur corrige son erreur et clique à nouveau sur "Se connecter".

### B. Mot de passe oublié
1. *Déclenchement :* L'utilisateur clique sur le lien **"Mot de passe oublié ?"** situé sous le formulaire.
2. *Action :* Il est redirigé vers une page demandant son adresse e-mail.
3. *Validation :* Il saisit son e-mail et clique sur "Envoyer le lien de réinitialisation".
4. *Message :* *"Si un compte est associé à cette adresse, un e-mail vient de vous être envoyé."* (Pour des raisons de sécurité, on ne confirme pas si l'e-mail existe en base).
5. *Résolution :* L'utilisateur ouvre l'e-mail, clique sur le lien sécurisé, crée un nouveau mot de passe et est redirigé vers l'écran de connexion.

### C. Sécurité anti-bruteforce (Compte verrouillé)
- *Déclenchement :* L'utilisateur saisit un mot de passe incorrect 5 fois d'affilée.
- *Réaction UI :* Le bouton de connexion est désactivé.
- *Message :* *"Trop de tentatives échouées. Votre compte est verrouillé pour 15 minutes par mesure de sécurité."*