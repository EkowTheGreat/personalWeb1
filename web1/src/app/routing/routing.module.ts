import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { IntroPageComponent } from '../intro-page/intro-page.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { PlayerComponent } from '../player/player.component';

const routes = [
  {
    path: 'home',
    component: HomePageComponent


  },
  {
    path: 'p',
    component: PlayerComponent
  },
  {
    path: '',
    component: IntroPageComponent
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
