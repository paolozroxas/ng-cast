angular.module('video-player')

  .component('app', {
    
    //don't use an arrow function here. It messes up the 'this' value.
    controller: function ($window) {
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
      console.log(this.videos);
      
      this.clickHandler = (index) => {
        console.log(index, 'YEEE');
        this.video = this.videos[index];
      };
    },
    
    
    templateUrl: 'src/templates/app.html'
  });
