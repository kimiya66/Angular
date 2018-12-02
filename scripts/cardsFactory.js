angular
  .module('ngCards')
  .factory('cardsFactory', function($http){

      	function getCards(){
      		return $http.get('data/data.json');
      	}
      	return {
      		getCards: getCards
      	}

  });