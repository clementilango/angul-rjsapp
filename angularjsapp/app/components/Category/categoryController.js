app.controller("categoryCtrl", function ($scope,$translate, categoryService) {
    GetAllCategories();
    function GetAllCategories() {
        var getCategoryData = categoryService.getCategories();
        getCategoryData.then(function (Category) {
            $scope.categories = Category.data;
        }, function () {
            alert('Error in getting categories from server');
        });
    }
});
app.controller("addcategoryCtrl", function ($scope,$translate, categoryService, $location) {
    $scope.AddCategory = function () {
        var category = { "CategoryName": $scope.Name, "Description": $scope.Description };
        var getData = categoryService.addCategory(category);
        getData.then(function (msg) {
            $location.path('/london');
        }, function () {
            alert('Error in adding a new category');
        });
    }
});