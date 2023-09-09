import {Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/pages/home/home.component";

export const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
      path: "home",
      component: HomeComponent
    },
    {
      path: "game",
      loadComponent: () => import('./modules/game/pages/game/game.component').then((x) => x.GameComponent)
    }
  ]
;
