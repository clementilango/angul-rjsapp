app.service("categoryService", function ($http) {
    var url = "http://sony-pc/ForumWebApi/api/Categories/";
    //get All Books
    this.getCategories = function () {
        //var url = "http://sony-pc/ForumWebApi/api/Categories/";
        
        return $http({
    method: 'JSONP',
    url: url
})
        //$http.get("http://sony-pc/ForumWebApi/api/Categories/");
    };   

    // Add Book
    this.addCategory = function (category) {
        var response = $http({
            method: "POST",
            url: url,
            data: JSON.stringify(category),
            dataType: "json"
        });
        return response;
    }

    //Delete Book
    this.DeleteBook = function (bookId) {
        var response = $http({
            method: "post",
            url: "Home/DeleteBook",
            params: {
                bookId: JSON.stringify(bookId)
            }
        });
        return response;
    }
});