import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { PlayerComponent } from '../player/player.component';

const routes = [
  {
    path: '',
    component: HomePageComponent


  },
  {
    path: 'p',
    component: PlayerComponent
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
