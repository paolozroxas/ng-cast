angular.module('video-player')
  .component('videoListEntry', {
  
    bindings: {
      video: '<',
      index: '<',
      clickHandler: '<'
    },  
  
  
    templateUrl: 'src/templates/videoListEntry.html'
  });
