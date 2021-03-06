// declare the angular application first (a module 
// we shall call "myApp") and declare our dependencies
// (here we have just one dependency which is ngRoute, 
// Angular's default routing service)
//Originally from: http://www.angularjstutorial.com/2014/05/20/angularjs-basics-part-3-routing/
angular.module('myApp',['ngRoute'])
 .config(function($routeProvider) {
   $routeProvider
   .when('/', {
    templateUrl: 'homeView.html',
    controller: 'myAppController'
    });
 })
 .controller('myAppController', function($scope, $http) {
     $scope.keyword = 'python';
     var url = 'http://search.lockheedmartinjobs.com/Rss/ByKeyword/';
     console.log("testing")
     console.log($scope.keyword)
     if ($scope.keyword) {
         console.log("Searching for keyword:" + $scope.keyword);
         //Search for
         url = url + $scope.keyword;
         var rss_promise = $http.jsonp(url, {});
         rss_promise.success(function (data) {
             console.log('worked: ' + data);
         });
         rss_promise.error(function (data) {
             console.log('failed: ' + data);
         });
     }
     $scope.results = "";
 });
