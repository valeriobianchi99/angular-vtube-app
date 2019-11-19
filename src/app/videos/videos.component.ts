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

  videos: any[] = [];
  searchedVideos: any[] = [];
  subscription: Subscription;
  position: any;
  filtro: string;
  @Output() setter = new EventEmitter<object>();

  constructor(private youtube: YoutubeService) { 
    this.subscription = this.youtube.getVideos().subscribe(
      res=>{
          for(let el of res['items']){
            if(res['items'].indexOf(el)>0){
              this.videos.push(el);
            }
          }
        }
    );
    console.log(this.videos);
    this.searchedVideos=this.videos;

  }
  
  getVideos():any{
    return this.videos;
  }

  playVideo(obj:any):void {
    this.setter.emit(obj);
  }

  search():void{
    if(this.filtro==''){
      this.searchedVideos=this.getVideos();
    }
    else{
      this.searchedVideos = this.getVideos().filter(el=> el.snippet.title.toLowerCase().indexOf(this.filtro)>-1);
    }
  }

  default():void {
    window.location.reload();
  }


  ngOnInit(){
  }
}

