


L'objectif principal était de comprendre quand utiliser MongoDB et postgres ( SQL & NOSQL)
les avantages est la liaison des deux qui permet d'avoir rigeur et souplesse en meme temps.
les difficultés que j'ai rencontré sont les problème de connexions entres mes bases de données du a des erreurs de code ( commande mixte) et des problèmes
de connexions entre visual et ma base de données.
A travers tout ça j'ai pue apprendre a utilisé modifié et crée une base de donnée sql via mongo et utiliser en meme temps une base de donnée no sql  et les connectée entre elle via une API.



Comparitif entre : PostgreSQL et Mongo
 latence : niveau latence mongo est légerement plus lent pour moi
 mise a jour : mongo est beaucoup plus reactif pas besoin de crée une base ou quoi que se soit sa permet de gagner énormement de temps et d'éfficacité comparé à PostgreSQL qui neccecite des requetes sql et qu'on refresh apres chaque requete pour que cela soit mits a jours.
Structure des données  : pour la structure des données PostgreSQL est bien meilleurs pour le coup tout est clair et simple comparé à mongo.


[Client (Postman / React)]
                           |
                           v
               [API Node.js / Express (server.js)]
                           |
      +--------------------+----------------------+
      |                                           |
      v                                           v
[Contrôleurs/Modèles SQL]               [Contrôleurs/Modèles NoSQL]
(userController, bookController)         (profileController)
      |                                           |
      v                                           v
[Module 'pg' (db.postgres.js)]          [Module 'mongoose' (db.mongo.js)]
      |                                           |
      v                                           v
[Base PostgreSQL (bookly_sql)]          [Base MongoDB (bookly_nosql)]
  -> Table 'users' (id, name)              -> Collection 'profiles'
  -> Table 'books'                           (userId, preferences, history)
      ^                                           |
      |                                           |
      +-------- [Lien Logique: users.id <=> profiles.userId] --------+