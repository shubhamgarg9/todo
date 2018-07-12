var app = angular.module('genesisApp').controller('homeCtrl',function($scope,$state){

    $scope.username = localStorage.getItem('username');

    $scope.gotoHome = function(){
        $state.go('home');
    };
    $scope.gotoDashboard = function(){
        $state.go('home.dashboard');
    };
    $scope.gotoProfile = function(){
        $state.go('home.profile');
    };
    $scope.logout = function(){
        $state.go('login');
    };
});


app.filter('firstLetter', function() {
    return function(data) {
        return data.split('')[0];
    };
});