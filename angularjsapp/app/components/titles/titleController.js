app.controller("titleCtrl", function ($scope, titleService, $routeParams) {
   
    GetAllTitles();
    //To Get all book records  
    function GetAllTitles() {
        var categoryId= $routeParams.ID;
        var getTitleData = titleService.getTitles(categoryId);
        getTitleData.then(function (Category) {
            $scope.titles = Category.data;
        }, function () {
            alert('Error in getting book category');
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
app.controller("addtitleCtrl", function ($scope, titleService) {
    $scope.$parent.name = "Add a new title";
    $scope.AddCategory = function () {
        var Title = {
            id: 1,
            name: "abc",
            description: "abc",
            position: "abc"
        };        
        var getTitleData = titleService.addTitle(Title);
            getTitleData.then(function (msg) {
                alert(msg.data);
            }, function () {
                alert('Error in adding nes record');
            });
    }
});