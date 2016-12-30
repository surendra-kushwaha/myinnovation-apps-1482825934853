// angular.module is a global place for creating, registering and retrieving Angular modules

var app = angular.module('myInnovative', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
        .state('myinnovative-landing', {
            url: '/myinnovative-landing',
            templateUrl: 'views/myinnovative-home.html',
			controller: 'homeCtrl'
        })
        .state('myinnovative-addIdeas', {
            url: '/myinnovative-addIdeas',
            templateUrl: 'views/myinnovative-addideas.html',
			controller: 'homeCtrl'
        })
		.state('myinnovative-judge', {
            url: '/myinnovative-judge',
            templateUrl: 'views/myinnovative-judge.html',
			controller: 'homeCtrl'
        })
		.state('myinnovative-activechallenge', {
            url: '/myinnovative-activechallenge',
            templateUrl: 'views/myinnovative-activechallenge.html',
			controller: 'homeCtrl'
        })
        .state('myinnovative-myIdeas', {
            url: '/myinnovative-myIdeas',
            templateUrl: 'views/myinnovative-myideas.html',
			controller: 'homeCtrl'
        })
		.state('myinnovative-innovcontest', {
            url: '/myinnovative-innovcontest',
            templateUrl: 'views/myinnovative-innovcontest.html',
			controller: 'homeCtrl'
        })
        .state('myinnovative-mentordetails', {
            url: '/myinnovative-mentordetails',
            templateUrl: 'views/myinnovative-mentordetails.html',
			controller: 'homeCtrl'
        })
        .state('myinnovative-mentor', {
            url: '/myinnovative-mentor',
            templateUrl: 'views/myinnovative-mentor.html',
            controller: 'homeCtrl'
        });
	$urlRouterProvider.otherwise('/myinnovative-landing');
});
