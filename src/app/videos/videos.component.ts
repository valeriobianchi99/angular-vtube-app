import { Component, OnInit, Output } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit{

  // Properties
  videos: any[] = [];
  searchedVideos: any[] = [];
  subscription: Subscription;
  position: any;
  filtro: string;
  @Output() setter = new EventEmitter<object>();

  constructor(private youtube: YoutubeService) {
    console.clear();
    // Getting list of videos from YT api
    this.subscription = this.youtube.getVideos().subscribe(
      res=>{
          for(let el of res['items']){
            // But not the first element
            if(res['items'].indexOf(el)>0){
              this.videos.push(el);
            }
          }
        }
    );
    console.log('Videos', this.videos);
    this.searchedVideos=this.videos;

  }
  
  // Getter method
  getVideos():any{
    return this.videos;
  }

  // Play the video passing the object to the player
  playVideo(obj:any):void {
    this.setter.emit(obj);
  }

  // Applying a filter to the list
  search():void{
    if(this.filtro==''){
      this.searchedVideos=this.getVideos();
    }
    else{
      this.searchedVideos = this.getVideos().filter(el=> el.snippet.title.toLowerCase().indexOf(this.filtro)>-1);
    }
  }

  // Reloading the page
  default():void {
    window.location.reload();
  }

  ngOnInit(){
  }
}

