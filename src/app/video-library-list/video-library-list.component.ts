import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {MatPaginator} from '@angular/material';

import { Video, Item } from '../models/video.model';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-video-library-list',
  templateUrl: './video-library-list.component.html',
  styleUrls: ['./video-library-list.component.css']
})
export class VideoLibraryListComponent implements OnInit  {

  videos: Video;
  items: Item[];
  errorMessage: any;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.youtubeService.getYoutubeVideos()
    .subscribe(data => {
      this.videos = data;
      this.items = this.videos.items;
      }, err => {
        console.log(err);
      });
  }
}
