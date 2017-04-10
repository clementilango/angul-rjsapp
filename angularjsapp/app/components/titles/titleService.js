app.service("titleService", function ($http) {
    var url = "http://sony-pc/ForumWebApi/api/Categories/";
    this.getTitles = function (Id) {
        return $http({
    method: 'JSONP',
    url: url,
    data:Id
})
    };   

    // Add title
    this.addTitle = function (Title) {
        var response = $http({
            method: "POST",
            url: url,
            data: JSON.stringify(Title),
            dataType: "json"
        });
        return response;
    }
    //Delete title
    this.DeleteTitle = function (titleId) {
        var response = $http({
            method: "post",
            url: url,
            params: {
                bookId: JSON.stringify(titleId)
            }
        });
        return response;
    }
});