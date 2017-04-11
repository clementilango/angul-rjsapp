app.service("titleService", function ($http) {
    var url = "http://localhost:58553/api/Title";
    this.getTitles = function (Id) {
        return $http.get(url + "/?CategoryId=" + Id);        
    };   

    // Add title
    this.addTitle = function (Topic) {
        var response = $http({
            method: "POST",
            url: url,
            data: Topic,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    //Delete title
    this.DeleteTitle = function (titleId) {
        var response = $http({
            method: "DELETE",
            url: url,
            params: {
                bookId: JSON.stringify(titleId)
            }
        });
        return response;
    }
});