import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  current = new Subject<any>();
  currentVideo = {};
  apiKey: string = 'AIzaSyBubZIbxXqSJhhRGvqEskXxy1AHAH6zymU';
  position: any = {};

  constructor(private http: HttpClient) { }

  getVideos():Observable<Object> {
    var date = new Date();
    console.log(date.getMonth());
    return this.http.get(
      'https://www.googleapis.com/youtube/v3/search?key='+this.apiKey+'&location=41.894802%2C12.4853384&locationRadius=10km&regionCode=IT&order=viewCount&part=snippet&type=video&maxResults=40&publishedAfter='+date.getFullYear().toString()+'-'+(date.getMonth()+1).toString()+'-'+(date.getDate()-1).toString()+'T'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'Z'
      ).pipe(map(res=>{return res}));
  }

}



