app.controller("commentCtrl", function ($scope, commentService) {
   
    GetAllComments();
    //To Get all Comment records  
    function GetAllComments() {
        $scope.comments = [
       { name: 'comment1'},
       { name: 'comment2'},
       { name: 'comment3' }
        ];        
    }
    $scope.deleteComment = function (Comment) {
        var getBookData = commentService.DeleteComment(Comment.Id);
        getBookData.then(function (msg) {
            alert(msg.data);
            GetAllComments();
        }, function () {
            alert('Error in deleting title');
        });
    }
    $scope.AddComment = function () {
        var Comment = {
            id: 1,
            name: "abc",
            description: "abc",
            position: "abc"
        };
        var getCommentData = commentService.addComment(Comment);
        getCommentData.then(function (msg) {
            GetAllComments();
            alert(msg.data);
        }, function () {
            alert('Error in adding nes record');
        });
    }
});
