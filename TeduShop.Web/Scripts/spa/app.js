/// <reference path="../plugins/angular/angular.js" />
var myApp = angular.module('myModule', []);
//myApp.controller("myController",myController);

//myController.$inject=['$scope'];
myApp.controller("schoolController", schoolController);
myApp.controller("studentController", studentController);
myApp.controller("teacherController", teacherController);

//fucntion
//function studentController($rootScope, $scope) {
//    $rootScope.message="This is my message from Controller";
//}

function schoolController($scope) {
    $scope.message = "Announcement from school";
}
function studentController($scope) {
    //$scope.message = "This is my message from student";
}
function teacherController($scope) {
    //$scope.message = "This is my message from teacher";
}