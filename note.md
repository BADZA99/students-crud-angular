# Bases d'Angular

Angular est un framework puissant basé sur TypeScript pour construire des applications web modernes. Voici les concepts fondamentaux :

## 1. **Architecture d'Angular**
- **Modules** : Organisent l'application en blocs logiques. Le fichier `app.module.ts` est le point d'entrée principal.
- **Composants** : Contrôlent une vue (HTML) et la logique associée (TypeScript). Chaque composant a un fichier `.ts`, `.html`, `.css`, et `.spec.ts`.
- **Services** : Gèrent la logique métier et les appels API. Ils sont injectés dans les composants via le système d'injection de dépendances.

## 2. **Commandes Angular CLI**
- **Créer un nouveau projet** : `ng new nom-du-projet`
- **Démarrer le serveur de développement** : `ng serve`
- **Générer un composant** : `ng generate component nom-composant` ou `ng g c nom-composant`
- **Générer un service** : `ng generate service nom-service` ou `ng g s nom-service`
- **Construire le projet** : `ng build`

## 3. **Cycle de vie des composants**
Angular propose des hooks pour gérer le cycle de vie des composants :
- `ngOnInit` : Appelé après l'initialisation du composant.
- `ngOnChanges` : Appelé lorsque les propriétés d'entrée changent.
- `ngOnDestroy` : Appelé avant la destruction du composant.

## 4. **Routing**
Angular utilise un système de routage intégré pour gérer la navigation :
- Déclare les routes dans `app-routing.module.ts`.
- Exemple :
  ```typescript
  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
  ];
  ```

## 5. **Services et Injection de Dépendances**
Les services sont utilisés pour partager des données ou des fonctionnalités entre les composants :
- Crée un service : `ng generate service nom-service`
- Exemple d'injection dans un composant :
  ```typescript
  constructor(private monService: MonService) {}
  ```

## 6. **Formulaires**
Angular propose deux approches pour les formulaires :
- **Template-Driven Forms** : Utilise des directives comme `ngModel`.
- **Reactive Forms** : Utilise des objets `FormGroup` et `FormControl` pour une gestion plus complexe.

## 7. **HTTP Client**
Pour les appels API, Angular utilise `HttpClient` :
- Importer `HttpClientModule` dans `app.module.ts`.
- Exemple d'utilisation :
  ```typescript
  this.http.get('https://api.example.com/data').subscribe(data => {
    console.log(data);
  });
  ```

## 8. **Optimisation et Bonnes Pratiques**
- **Lazy Loading** : Charge les modules à la demande pour améliorer les performances.
- **Change Detection** : Utilise `OnPush` pour optimiser les performances.
- **Testing** : Angular inclut Jasmine et Karma pour les tests unitaires.

## 9. **Ressources pour aller plus loin**
- **Documentation officielle** : [angular.io](https://angular.io)
- **Tutoriels interactifs** : [Tour of Heroes](https://angular.io/tutorial)
- **Communauté** : StackOverflow, forums, et meetups Angular.

---

ng new projet-angular
ng c nom-composant
ng g s nom-service


Standalone vs Non-Standalone
En mode standalone, les composants peuvent être utilisés directement sans être déclarés dans un module. Ils importent eux-mêmes leurs dépendances.
En mode non-standalone, les composants doivent être déclarés dans un module, mais cela ne signifie pas qu'ils seront tous rendus automatiquement.
