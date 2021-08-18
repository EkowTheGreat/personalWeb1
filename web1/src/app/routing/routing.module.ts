import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { NavigationComponent } from '../navigation/navigation.component';

const routes = [
  {
    path: '',
    component: HomePageComponent


  },
  {
    path: 'nav',
    component: NavigationComponent
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
