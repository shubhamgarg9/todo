var app = angular.module('genesisApp', ['ui.router', 'login','dashboard','profile']);
app.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('login');

    $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'app/login-component/login.html',
            controller: 'loginCtrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'app/home-component/home.html',
            controller: 'homeCtrl'
        });
});