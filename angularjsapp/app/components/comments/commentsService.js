app.service("commentService", function ($http) {
    var url = "http://sony-pc/ForumWebApi/api/Categories/";
    this.getComments = function () {
        return $http({
    method: 'JSONP',
    url: url
})
    };   

    // Add title
    this.addComment = function (Comment) {
        var response = $http({
            method: "POST",
            url: url,
            data: JSON.stringify(Comment),
            dataType: "json"
        });
        return response;
    }
    //Delete title
    this.DeleteComment = function (commentId) {
        var response = $http({
            method: "post",
            url: url,
            params: {
                bookId: JSON.stringify(commentId)
            }
        });
        return response;
    }
});