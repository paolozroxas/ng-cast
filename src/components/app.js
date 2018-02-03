angular.module('video-player', [])

.component('app', {
  
  //don't use an arrow function here. It messes up the 'this' value.
  controller: function ($window) {
    this.videos = $window.exampleVideoData;
    this.select = $window.firstVideo;

  },
  
  
  templateUrl: 'src/templates/app.html'
});
