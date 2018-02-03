angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },
  
  controller: function() {
    
    console.log('Here in videoList, this.videos = ', this.videos);
  },
  
  
  templateUrl: 'src/templates/videoList.html'
});
