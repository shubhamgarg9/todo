var app = angular.module('login').controller('loginCtrl',function($scope,$state){

    $scope.username = '';
    $scope.password = '';

    $scope.login = function(){
        localStorage.setItem('username',$scope.username);
        localStorage.setItem('password',$scope.password);        
        $state.go('home');
    };
  });