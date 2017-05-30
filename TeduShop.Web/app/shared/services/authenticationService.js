(function (app) {
    'use strict';
    app.service('authenticationService', ['$http', '$q', '$window',
    function ($http, $q, $window) {
        var tokenInfo;

        this.setTokenInfo = function (data) {
            tokenInfo = data;
            //localStorageService.set("TokenInfo", JSON.stringify(tokenInfo));
            $window.sessionStorage["TokenInfo"] = JSON.stringify(tokenInfo);
        }

        this.getTokenInfo = function () {
            return tokenInfo;
        }

        this.removeToken = function () {
            tokenInfo = null;
            //localStorageService.set("TokenInfo", null);
            $window.sessionStorage["TokenInfo"] = null;
        }

        this.init = function () {
            //var tokenInfo = sessionStorage.get("TokenInfo");
            if ($window.sessionStorage["TokenInfo"]) {
                tokenInfo = JSON.parse($window.sessionStorage["TokenInfo"]);
                //authData.authenticationData.IsAuthenticated = true;
                //authData.authenticationData.userName = tokenInfo.userName;
                //authData.authenticationData.accessToken = tokenInfo.accessToken;


            }
        }

        this.setHeader = function () {
            delete $http.defaults.headers.common['X-Requested-With'];
            //if ((authData.authenticationData != undefined) && (authData.authenticationData.accessToken != undefined) && (authData.authenticationData.accessToken != null) && (authData.authenticationData.accessToken != "")) {
            //    $http.defaults.headers.common['Authorization'] = 'Bearer ' + authData.authenticationData.accessToken;
            //    $http.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            //}
            if ((tokenInfo != undefined) && (tokenInfo != undefined) && (tokenInfo != null) && (tokenInfo != "")) {
                $http.defaults.headers.common['Authorization'] = 'Bearer ' + tokenInfo.accessToken;
                    $http.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
                }
        }

        this.validateRequest = function () {
            var url = 'api/home/TestMethod';
            var deferred = $q.defer();
            $http.get(url).then(function () {
                deferred.resolve(null);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        this.init();
    }
    ]);
})(angular.module('tedushop.common'));