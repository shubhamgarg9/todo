angular.module('profile', []).config(['$urlRouterProvider','$stateProvider',function (urlRouterProvider,stateProvider) {
	stateProvider.state('home.profile',{
		url : '/profile',
		templateUrl : 'app/profile-component/profile.html',
		controller :'profileCtrl'
	});
}]);