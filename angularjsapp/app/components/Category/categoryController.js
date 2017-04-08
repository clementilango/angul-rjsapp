app.controller("categoryCtrl", function ($scope,categoryService) {
    //$scope.$parent.name = "Categories";
    //$scope.divBook = false;
    GetAllCategories();
    //To Get all book records  
    function GetAllCategories() {
        $scope.categories = [
       { name: 'Jani'},
       { name: 'Hege'},
       { name: 'Kai'}
        ];
        //var getCategoryData = categoryService.getCategories();
        //getCategoryData.then(function (Category) {
        //    $scope.categories = Category.data;
        //}, function () {
        //    alert('Error in getting book category');
        //});
    }
});
app.controller("addcategoryCtrl", function ($scope, categoryService) {
    $scope.$parent.name = "Add a new category";
    $scope.AddCategory = function () {
        var Category = {
            id: 1,
            name: "abc",
            description: "abc",
            position: "abc"
        };        
        var getBookData = categoryService.addCategory(Category);
            getBookData.then(function (msg) {
                GetAllBooks();
                alert(msg.data);
            }, function () {
                alert('Error in adding nes record');
            });
    }
});