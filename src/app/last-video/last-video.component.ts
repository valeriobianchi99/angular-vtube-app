import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-last-video',
  templateUrl: './last-video.component.html',
  styleUrls: ['./last-video.component.css']
})

export class LastVideoComponent implements OnInit, OnChanges {

  // Properties
  @Input() lastVideo: any;
  player: YT.Player;
  subscription: Subscription;
  position: any;

  constructor(private youtube: YoutubeService) {
    // Getting lastVideo from YT api
    this.subscription = this.youtube.getVideos().subscribe(
      res => {
        if (res) {
          this.lastVideo = res['items'][0];
        }
      }
    );
  }

  // Changing the loaded video in the player
  ngOnChanges(changes: SimpleChanges) {
    if (changes.lastVideo.currentValue) {
      this.player.loadVideoById(this.lastVideo.id.videoId);
    }
  }

  // When the player is ready
  readyPlayer(play: any) {
    this.player = play;
    this.player.loadVideoById(this.lastVideo.id.videoId);
  }

  ngOnInit() {
  }

}