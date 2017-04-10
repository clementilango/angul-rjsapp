
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
}); 
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/components/home/homeView.html",
        controller: "homeCtrl"
    })
    .when("/london", {
        templateUrl : "app/components/Category/categoryView.html",
        controller : "categoryCtrl"
        })
    .when("/addCategory", {
        templateUrl: "app/components/Category/addCategoryView.html",
        controller : "addcategoryCtrl"
    })
    .when("/title:CategoryId", {
        templateUrl: "app/components/titles/titleView.html",
        controller : "titleCtrl"
    })
    .when("/comments", {
        templateUrl: "app/components/comments/commentsView.html",
        controller: "commentCtrl"
    });
});
app.controller("homeCtrl", function ($scope) {
    $scope.$parent.name = "Home";
});
app.controller("forumCtrl", function ($scope) {
    $scope.$parent.name = "I love Paris";
});
commentCtrl
//</script>


//(function () {

//'use strict'; 
 
//config.$inject = ['$routeProvider', '$locationProvider']; 
 
//angular.module('myApp', [
//    'ngRoute', 'myServices'
//]).config(config);
 
//function config($routeProvider, $locationProvider) {
//    $routeProvider
//        .when('/', {
//            templateUrl: '/app/components/Category/home/homeView.html',
//            controller: 'HomeController'
//        })
//        .when('/categories', {
//            templateUrl: 'app/components/Category/categoryView.html',
//            controller: 'Category'
//        })
//        .when('/addCategory', {
//            templateUrl: 'app/components/comments/commentsView.html',
//            controller: 'MoviesEditController'
//        })
//        //.when('/movies/delete/:id', {
//        //    templateUrl: '/Views/delete.html',
//        //    controller: 'MoviesDeleteController'
//        //});
 
//    $locationProvider.html5Mode(true); 
//}
 
//})();