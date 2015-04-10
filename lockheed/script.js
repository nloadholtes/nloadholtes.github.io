// declare the angular application first (a module 
// we shall call "myApp") and declare our dependencies
// (here we have just one dependency which is ngRoute, 
// Angular's default routing service)
angular.module('myApp',['ngRoute'])
 .config(function($routeProvider) {
   $routeProvider
   .when('/', {
    templateUrl: 'homeView.html',
    controller: 'myAppController'
    });
 })
 .controller('myAppController', function($scope) {
     $scope.keyword = '';
     var url = 'http://search.lockheedmartinjobs.com/Rss/ByKeyword/';
     console.log("testing")
     console.log($scope.keyword)
 });
