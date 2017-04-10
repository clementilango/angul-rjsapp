app.service("categoryService", function ($http) {
    var url = "http://localhost:58553/api/Categories";
    //get All Books
    this.getCategories = function () {
        //var url = "http://sony-pc/ForumWebApi/api/Categories/";
        
        return $http.get(url);
        //$http.get("http://sony-pc/ForumWebApi/api/Categories/");
    };   

    // Add Book
    this.addCategory = function (Category) {
        var response = $http({
            method: "POST",
            url: url,
            data: Category,
            headers: {
        'Content-Type': 'application/json'
        }

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