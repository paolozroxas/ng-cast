angular.module('video-player')

  .component('app', {
    
    //don't use an arrow function here. It messes up the 'this' value.
    controller: function ($window, $http) {
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
      console.log(this.videos);
      
      this.clickHandler = (index) => {
        console.log(index, 'YEEE');
        this.video = this.videos[index];
      };
      //PLEASE send searchHandler down to search and listen for submit
      this.searchHandler = (input) => {
        console.log('input!');
        var baseUrl = 'https://www.googleapis.com/youtube/v3';
        var url = `${baseUrl}
                        /search?part=snippet
                        &q=${input}
                        &type=video
                        &maxResults=5
                        &videoEmbeddable=true
                        &key=${window.YOUTUBE_API_KEY}
                      `;
        $http.get(url)
          .then((response) => {
            console.log(response);
            this.videos = response.results;
          });
      };
    },
    
    
    templateUrl: 'src/templates/app.html'
  });
