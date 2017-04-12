
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
        templateUrl: "app/components/Category/categoryView.html",
        controller: "categoryCtrl"
    })
    .when("/addCategory", {
        templateUrl: "app/components/Category/addCategoryView.html",
        controller: "addcategoryCtrl"
    })
    .when("/title/:CategoryId", {
        templateUrl: "app/components/titles/titleView.html",
        controller: "titleCtrl"
    })
    .when("/comments", {
        templateUrl: "app/components/comments/commentsView.html",
        controller: "commentCtrl"
    })
    .when("/addTitle", {
        templateUrl: "app/components/titles/addNewTitle.html",
        controller: "addtitleCtrl"
    });
});
app.controller("homeCtrl", function ($scope) {
    $scope.$parent.name = "Home";
});
app.controller("forumCtrl", function ($scope) {
    $scope.$parent.name = "I love Paris";
});