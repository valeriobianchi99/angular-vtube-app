import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-last-video',
  templateUrl: './last-video.component.html',
  styleUrls: ['./last-video.component.css']
})

export class LastVideoComponent implements OnInit, OnChanges {

  @Input() lastVideo: any;
  player: YT.Player;
  subscription: Subscription;
  position: any;

  constructor(private youtube: YoutubeService) {
    this.subscription = this.youtube.getVideos().subscribe(
      res=>{
        if(res){
          this.lastVideo=res['items'][0];
        }
      }
    );
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.lastVideo.currentValue) {
      this.player.loadVideoById(this.lastVideo.id.videoId);
    }
  }

  readyPlayer(play: any) {
    this.player = play;
    this.player.loadVideoById(this.lastVideo.id.videoId);
  }

  ngOnInit() {
  }


}
