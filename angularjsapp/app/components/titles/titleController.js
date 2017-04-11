app.controller("titleCtrl", function ($scope, titleService, $routeParams) {
   
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
    $scope.deleteTitle = function (Title) {
        var getTitleData = titleService.DeleteTitle(Title.Id);
        getTitleData.then(function (msg) {
            alert(msg.data);
            GetAllTitles();
        }, function () {
            alert('Error in deleting title');
        });
    }
});
app.controller("addtitleCtrl", function ($scope, titleService, categoryService, $routeParams) {
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
            }, function () {
                alert('Error in adding a record');
            });
    }
});