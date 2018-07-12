angular.module('dashboard', []).config(['$urlRouterProvider','$stateProvider',function (urlRouterProvider,stateProvider) {
	stateProvider.state('home.dashboard',{
		url : '/dashboard',
		templateUrl : 'app/dashboard-component/dashboard.html',
		controller :'dashboardCtrl'
	});
}]);