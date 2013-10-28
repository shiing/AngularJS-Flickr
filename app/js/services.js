'use strict';

/* Services */

var phonecatService = angular.module('phonecatServices', ['ngResource']);

phonecatService.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

phonecatService.factory('Phone', function($resource){
  return $resource("http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7332a03bd773d460e2ff1311abc037d9&text=:keyword&format=json&nojsoncallback=1",
  	{
  		keyword: "test"
  	}, {
		query: {method:'GET', params:{charge:true}, isArray:false, timeout:5}
  	});
});
