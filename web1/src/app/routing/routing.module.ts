import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasiliskComponent } from '../basilisk/basilisk.component';
import { ComingSoonComponent } from '../coming-soon/coming-soon.component';
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
    path: 'intro',
    component: IntroPageComponent
  },
  {
    path: '',
    component: ComingSoonComponent
  },
  {
    path: 'basilisk',
    component: BasiliskComponent
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
