var app = angular.module('dashboard').controller('dashboardCtrl',function($scope,$state){
    $scope.todoObj={};
    $scope.todoObj.todoName='';
    $scope.todoObj.todoDesc='';
    $scope.todoObj.check=false;
    $scope.print='';
    $scope.taskList = [
        {
          todoName: 'Captain America',
          todoDesc: 'isme alag hi jhass h, katora leakr chalta h and koi power h ni lekin thanos ka haath rok dia',
          check:  false
        },
        {
          todoName: 'Iron',
          todoDesc: 'isse thanos ganda marega, bht pitne wala h ye pakka',
          check:  false
        },
        {
          todoName: 'John Doe',
          todoDesc: 'ye pta ni kaun h, abhi tak to aya ni aage dekhte h, kuch bhi karva lo marvel vaalo se',
          check:  false
        }
      ];
    
    $scope.addTask = function(){
      $scope.todoObj.check=false;
      if($scope.todoObj.todoDesc==='')
        $scope.todoObj.todoDesc='no content';
      $scope.taskList.push(angular.copy($scope.todoObj));
     //   $scope.taskList.push({'todoName': $scope.todoName, 'todoDesc': $scope.todoDesc,'check': false});
        $scope.todoObj.todoName = "";
        $scope.todoObj.todoDesc = "";
    };

    $scope.removeTask = function(index){
        $scope.taskList.splice(index,1);
        console.log($scope.taskList[1]);
    };

    $scope.strike = function(index){
      $scope.taskList[index].check= !$scope.taskList[index].check;
      // console.log($scope.taskList);
    };
    $scope.tododesc=function(index)
    {
      $scope.print=$scope.taskList[index].todoDesc;
      // console.log($scope.print);
    };

    $scope.tododescno=function()
    {
      $scope.print='';
      // console.log($scope.print);
    };

});
