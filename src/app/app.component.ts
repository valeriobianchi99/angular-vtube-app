import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  video: any;

  setVideo(obj):void{
    this.video=obj;
  }

  getVideo():object {
    return this.video;
  }

  showVideos():void {
    var status = document.getElementById('videosList').style.display;
    if(status=='none'){
      document.getElementById('videosList').style.display='block';
    }
    else {
      document.getElementById('videosList').style.display='none';
    }
  }

}
