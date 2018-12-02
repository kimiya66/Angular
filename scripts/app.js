var app = angular.module('ngCards', ['ngRoute']);
app.controller('cardsController', function($scope, cardsFactory){

     	$scope.cards;
        cardsFactory.getCards().success(function(data){ //the data which comes from json file
            $scope.cards = data;

        }).error(function(error){
            console.log(error);
        });
      
      });
app.controller('homeController', function($scope, homeFactory){

$scope.homes;
homeFactory.getHome().success(function(data){
	$scope.homes= data;
}).error(function(error){
	console.log(error);
});

});

