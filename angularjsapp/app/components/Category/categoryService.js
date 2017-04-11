app.service("categoryService", function ($http) {
    var url = "http://localhost:58553/api/Categories";
    //get All Books
    this.getCategories = function () {        
        return $http.get(url);
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