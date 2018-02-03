angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      clickHandler: '<'
    },
    
    controller: function() {
      
   
    },
    
    
    templateUrl: 'src/templates/videoList.html'
  });
