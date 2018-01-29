import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { Video, Item } from '../models/video.model';

@Injectable()
export class YoutubeService {

  constructor(private http: Http) { }

  getYoutubeVideos(): Observable<Video> {
    const apiURL = `${environment.googleApiRoot}`;
      // tslint:disable-next-line:max-line-length
      return this.http.get(environment.googleApiRoot + '?part=snippet&channelId=UCbn1OgGei-DV7aSRo_HaAiw&key=AIzaSyA8OHCyYSR7aFsJXsna7TumltQ0v56rUWU')      
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json() || 'Server error');
  }
}
