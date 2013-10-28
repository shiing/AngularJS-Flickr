'use strict';

/* Controllers */

function PhoneListCtrl($scope, Phone) {
  $scope.orderProp = 'title';
  $scope.flickrQueryKeyword= 'cat';


  var queryResult = Phone.query({keyword:$scope.flickrQueryKeyword},function(data){
    $scope.phones = data.photos.photo;
  });

  $scope.flickrQuery = function(fqKeyword) {
    $scope.flickrQueryKeyword= angular.copy(fqKeyword);

    Phone.query({keyword:fqKeyword},function(data){
      $scope.phones = data.photos.photo;
    });
  };
/*
  $scope.reset = function() {
    $scope.fqKeyword = angular.copy($scope.flickrQueryKeyword);
  };
 
  $scope.reset();
  */
}



function PhoneDetailCtrl($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
