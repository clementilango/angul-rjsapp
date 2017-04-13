app.controller("titleCtrl", function ($scope, $filter, titleService, $routeParams, $location) {

    GetAllTitles();
    //To Get all book records  
    function GetAllTitles() {
        var categoryId = $routeParams.CategoryId;
        var getTitleData = titleService.getTitles(categoryId);
        getTitleData.then(function (Title) {
            $scope.titles = Title.data;
        }, function () {
            alert('Error in getting titles');
        });
    }
    $scope.deleteTitle = function (TopicId) {
        var getTitleData = titleService.DeleteTitle(TopicId);
        getTitleData.then(function (msg) {
            GetAllTitles();
        }, function () {
            alert('Error in deleting title');
        });
    }
    
    $scope.go = function (id) {
        $location.path('/editTitle/'+id);
    };

   
    $scope.currentPage = 0;
    $scope.pageSize = 4;
    $scope.q = '';

    $scope.getData = function () {
        return $filter('filter')($scope.titles, $scope.q)
    }

    $scope.numberOfPages = function () {
        return Math.ceil($scope.getData().length / $scope.pageSize);
    }

    //for (var i = 0; i < 65; i++) {
    //    $scope.titles.push("Item " + i);
    //}

});
app.controller("addtitleCtrl", function ($scope, titleService, categoryService, $routeParams, $location) {
    var selected = "";
    GetAllCategories();
    function GetAllCategories() {
        var getCategoryData = categoryService.getCategories();
        getCategoryData.then(function (Category) {
            $scope.categories = Category.data;
        }, function () {
            alert('Error in getting categories from server');
        });
    }
    $scope.setClicked = function (value) {
        selected = value;
    }
    $scope.AddTopic = function () {
        var Topic = {
            "CategoryId": selected,
            "TitleName": $scope.TitleName,
            "Description": $scope.Description
        };
        alert(Topic);
        var getTitleData = titleService.addTitle(Topic);
        getTitleData.then(function (msg) {
            alert(msg.data);
            $location.path('/title/' + selected);
        }, function () {
            alert('Error in adding a record');
        });
    }
});
app.controller("edittitleCtrl", function ($scope, titleService,categoryService, $routeParams, $location) {
    GetAllTitles();
    GetAllCategories();
    var CategoryId = 0;
    //To Get all book records  
    function GetAllTitles() {
        var getTitleData = titleService.getSpecificTitle($routeParams.TitleId);
        getTitleData.then(function (Title) {
            $scope.title = Title.data;
            CategoryId = Title.data.CategoryId;
        }, function () {
            alert('Error in getting Title details');
        });
    }
    function GetAllCategories() {
        var getCategoryData = categoryService.getCategories();
        getCategoryData.then(function (Category) {
            $scope.categories = Category.data;
        }, function () {
            alert('Error in getting categories from server');
        });
    }
    $scope.setClicked = function (value) {
        CategoryId = value;
    }
    $scope.SaveTopic = function (Id) {
        var Topic = {
            "TopicId": Id,
            "CategoryId":CategoryId,
            "TitleName": $scope.title.TitleName,
            "Description": $scope.title.Description
        };
        var getData = titleService.editTitle(Topic);
        getData.then(function (msg) {
            $location.path('/title/' + CategoryId);
        }, function () {
            alert('Error in updating Title details');
        });
    }
});