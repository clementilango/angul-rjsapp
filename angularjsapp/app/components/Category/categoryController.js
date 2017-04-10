app.controller("categoryCtrl", function ($scope,categoryService) {
    //$scope.$parent.name = "Categories";
    //$scope.divBook = false;
    GetAllCategories();
    //To Get all book records  
    function GetAllCategories() {
        var getCategoryData = categoryService.getCategories();
        getCategoryData.then(function (Category) {
            $scope.categories = Category.data;
        }, function () {
            alert('Error in getting book category');
        });
    }
});
app.controller("addcategoryCtrl", function ($scope, categoryService, $location) {
    $scope.AddCategory = function () {
        var category = { "CategoryName": $scope.Name, "Description": $scope.Description};        
        var getData = categoryService.addCategory(category);
            getData.then(function (msg) {                
                alert(msg.data);
                $location.path('/london');
;            }, function () {
                alert('Error in adding nes record');
            });
    }
});