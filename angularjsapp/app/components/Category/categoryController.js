app.controller("categoryCtrl", function ($scope,categoryService) {
    //$scope.$parent.name = "Categories";
    //$scope.divBook = false;
    GetAllCategories();
    //To Get all book records  
    function GetAllCategories() {
        $scope.categories = [
       { name: 'Cat1'},
       { name: 'Cat2'},
       { name: 'Cat3'}
        ];
        var getCategoryData = categoryService.getCategories();
        getCategoryData.then(function (category) {
            $scope.categories = category.data;
        }, function () {
            alert('Error in getting book category');
        });
    }
});
app.controller("addcategoryCtrl", function ($scope, categoryService) {
    $scope.$parent.name = "Add a new category";
    $scope.AddCategory = function () {
        var category ={
            "category":[
                {"id":1, "name":"Doe", "description":"Doe", "position":"Doe"}
            ]
        };        
        var getBookData = categoryService.addCategory(category);
            getBookData.then(function (msg) {
                GetAllBooks();
                alert(msg.data);
            }, function () {
                alert('Error in adding nes record');
            });
    }
});