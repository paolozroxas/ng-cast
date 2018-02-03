angular.module('video-player', [])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.youtube.com/**'
    ]);
  });

window.YOUTUBE_API_KEY = 'AIzaSyASXWJ5vnGbt6Xw4HeYaJhSagLRI3jyvXs';