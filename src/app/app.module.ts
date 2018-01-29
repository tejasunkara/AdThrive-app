import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {
  MatPaginatorModule,  MatCardModule, MatTableModule,  MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { VideoLibraryListComponent } from './video-library-list/video-library-list.component';
import { YoutubeService } from './services/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoLibraryListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatListModule,
    HttpModule
  ],
  exports: [
    AppComponent,
    VideoLibraryListComponent
  ],
  providers: [HttpClientModule, YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
