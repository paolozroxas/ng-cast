angular.module('video-player')
  .service('youTube', function($http) {
    this.fetch = function(query, successCallback) {
      console.log('input!');
      var baseUrl = 'https://www.googleapis.com/youtube/v3';       
      var url = `${baseUrl}/search?part=snippet&q=${query}&type=video&maxResults=5&videoEmbeddable=true&key=${window.YOUTUBE_API_KEY}`;
      $http.get(url)
        .then(response => successCallback(response));
      
    };
    
  });



