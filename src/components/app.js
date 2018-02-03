angular.module('video-player')

  .component('app', {
    
    //don't use an arrow function here. It messes up the 'this' value.
    controller: function ($window, $http, youTube) {
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
      console.log(this.videos);
      
      this.clickHandler = (index) => {
        console.log(index, 'YEEE');
        this.video = this.videos[index];
      };

      this.searchHandler = (query) => {
        var successCallback = (response) => {
          console.log(response.data.items);
          this.videos = response.data.items;
          this.video = this.videos[0];
        };
        youTube.fetch(query, successCallback);
      };
    },
    
    
    templateUrl: 'src/templates/app.html'
  });
