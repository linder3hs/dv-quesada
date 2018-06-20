angular.module('MainApp', [])

function controladorPrincipal($scope, $http){
   $scope.partidos = {};

   $http.get('/api/partidos').success(function(data){
        $scope.partidos = data;
   }).error(function(data){
    console.log('Error: '+ data);
   });
}