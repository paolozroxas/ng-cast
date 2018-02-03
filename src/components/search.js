angular.module('video-player')

  .component('search', {
    
    bindings: {
      searchHandler: '<'
    },
    
    controller: function() {
      this.searchQuery = '';

      this.keyUpHandler = ($event) => {
        if ($event.key === 'Enter') {
          this.searchHandler(this.searchQuery);
        }
      };

      this.btnHandler = ($event) => {
        this.searchHandler(this.searchQuery);
      };


    },

    templateUrl: 'src/templates/search.html'
  });
