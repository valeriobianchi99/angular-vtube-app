import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  // Properties
  current = new Subject<any>();
  currentVideo = {};
  apiKey: string = 'AIzaSyCFyXjL5JExyytE9DdCJkJMeK6DzR2B848'; // API key
  position: any = {};

  constructor(private http: HttpClient) { }

  // Get call to YT api
  getVideos():Observable<Object> {
    var date = new Date();
    return this.http.get(
    'https://www.googleapis.com/youtube/v3/search?key='+this.apiKey+'&location=41.894802%2C12.4853384&locationRadius=10km&regionCode=IT&order=viewCount&part=snippet&type=video&maxResults=40&publishedAfter='+date.getFullYear().toString()+'-'+(date.getMonth()+1).toString()+'-'+(date.getDate()-1).toString()+'T'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'Z'
    ).pipe(
      map(res=>{return res}),
      catchError(this.handleError)
    );
  }

  // Handling errors, showing err message to video
  handleError(err: HttpErrorResponse){
    document.getElementById('main').innerHTML = '&nbsp; '+ err.status + ' - ' + err.statusText;
    console.clear();
    return throwError(err);
  }

}



