import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlayerComponent } from './player/player.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { BasiliskComponent } from './basilisk/basilisk.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ToolbarComponent,
    NavigationComponent,
    PlayerComponent,
    IntroPageComponent,
    ComingSoonComponent,
    BasiliskComponent,
   
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
