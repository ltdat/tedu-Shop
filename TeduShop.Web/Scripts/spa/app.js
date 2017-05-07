/// <reference path="../plugins/angular/angular.js" />
var myApp = angular.module('myModule', []);
//myApp.controller("myController",myController);

//myController.$inject=['$scope'];
myApp.controller("schoolController", schoolController);
myApp.service('validator',validator)
myApp.directive('teduShopDirective',teduShopDirective)

schoolController.$inject=['$scope','validator']
//fucntion
//function studentController($rootScope, $scope) {
//    $rootScope.message="This is my message from Controller";
//}

function schoolController($scope, validator) {
    //$scope.message = "Announcement from school";
   
    $scope.checkNumber = function () {
        $scope.message = validator.checkNumber($scope.num);
    }
    $scope.num = 1;
}

function validator($window) {
    return {
        checkNumber:checkNumber
    }
    function checkNumber(input) {
        if (input % 2 == 0) {
            //$window.alert('This is even');
            return 'This is even';
        }
        else {
            //$window.alert('This is Odd')
            return 'This is odd'
        }
    }
}

function teduShopDirective() {
    return {
        templateUrl:"/Scripts/spa/teduShopDirective.html"
    }
}