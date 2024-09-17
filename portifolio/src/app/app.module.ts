import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainComponent } from './main/main.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './about/about.component';
import { TimelineComponent } from './timeline/timeline.component';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ArtsComponent } from './arts/arts.component';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from './video-player/safe-url.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainComponent,
    AboutComponent,
    TimelineComponent,
    InteractiveMapComponent,
    VideoPlayerComponent,
    CarouselComponent,
    ArtsComponent,
    SafeUrlPipe,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    FontAwesomeModule
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
