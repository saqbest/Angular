var app = angular.module("myTaskList", []);
app.controller("myCtrl", function($scope, filterFilter) {
    $scope.taskItem1 = [
        {text:"test1",description:"description1",done:true},
        {text:"test2",description:"description2",done:true},
        {text:"test3",description:"description3",done:false}
    ];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.taskItem) {return;}
        if ($scope.taskItem.indexOf($scope.text) == -1) {
            $scope.taskItem.push({text:$scope.text,description:$scope.description,done:false});
            $scope.text='';
            $scope.description='';
        } else {
            $scope.errortext = "The item is already in your  list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.taskItem.splice(x, 1);
    }
    $scope.taskItem=$scope.taskItem1;
    $scope.all=function () {
       return $scope.taskItem = filterFilter($scope.taskItem1);

    }
    $scope.active=function () {
        return $scope.taskItem = filterFilter($scope.taskItem1, { done: false });

    }
    $scope.completed=function () {
       return $scope.taskItem = filterFilter($scope.taskItem1, { done: true });

    }
});