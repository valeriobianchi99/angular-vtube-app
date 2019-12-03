import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LastVideoComponent } from './last-video/last-video.component';
import { VideosComponent } from './videos/videos.component';
import { YoutubeService } from './youtube.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LastVideoComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxYoutubePlayerModule,
    FormsModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
