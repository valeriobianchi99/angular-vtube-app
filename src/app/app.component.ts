import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Properties
  video: any;

  // Set method
  setVideo(obj):void{
    this.video=obj;
  }

  // GEt method
  getVideo():object {
    return this.video;
  }
  
  // Show/hide videos list
  showVideos():void {
    var status = document.getElementById('videosList').style.display;
    if(status=='none'){
      document.getElementById('videosList').style.display='block';
      document.getElementById('videosList').style.width='60%';
    }
    else {
      document.getElementById('videosList').style.display='none';
      document.getElementById('videosList').style.width='40%';

    }
  }

}
