var app = angular.module("myApp", ["ngRoute"]);

app.config(function($translateProvider, $translatePartialLoaderProvider ) {
	$translateProvider.useLoader('$translatePartialLoader', {
		urlTemplate: '/app/translations/{lang}/{part}.json'
	});

	$translateProvider.preferredLanguage('en-IN');
});
angular.module('league', [
  'templates-app',
  'templates-common',
  'common.error_handling',
  'common.authentication',
  'pascalprecht.translate',
  'angularTranslateApp',
  'league.home',
  'league.about',
  'league.club',
  'league.team',
  'league.login',
  'ui.state',
  'ui.route'
])