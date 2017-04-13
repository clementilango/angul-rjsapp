var app = angular.module("myApp", ["ngRoute","pascalprecht.translate"]);

app.config(function ($translateProvider) {
    $translateProvider.fallbackLanguage('en');
    $translateProvider.registerAvailableLanguageKeys(['en','fr'],
        {
            'en_*': 'en',
            'fr_*': 'fr'
        })
    $translateProvider.translations('en',translationsEN);    
	$translateProvider.translations('fr', translationsFR);

	$translateProvider.useSanitizeValueStrategy('escape')
	$translateProvider.preferredLanguage('en');
});

app.controller("langCtrl",['$scope','$translate', function ($scope, $translate) {
    $scope.setEnglish = function () {
        $translate.use('en');
    }
    $scope.setFrench = function () {
        $translate.use('fr');
    }
}]);

app.filter('startFrom', function () {
    return function (input, start) {
        start = +start; 
        return input.slice(start);
    }
});