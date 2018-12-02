angular
  .module('ngCards')
   .factory('homeFactory', function($http){

      	function getHome(){
      		return $http.get('data/smartHome.json');
      	}
      	return {
      		getHome: getHome
      	}

  });