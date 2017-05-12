﻿(function (app) {
    app.factory('notificationService', notificationService);
    function notificationService() {
        toastr.options = {
            "debug": false,
            "positionClass": "toast-top-right",
            "onclick": null,
            "fadeIn": 300,
            "fadeOut": 1000,
            "timeOut": 3000,
            "extendedTimeOut": 1000
        };
        
        function success(message) {
            toastr.success(message);
        }
        function error(error) {
            if (Array.isArray(error)) {
                error.each(function (err) {
                    toastr.error(err);
                });
            }
            else {
                toastr.error(error);
            }
        }
        function warning(message) {
            toastr.warning(message);
        }
        function info(message) {
            toastr.info(message);
        }

        return {
            success: success,
            error: error,
            warning: warning,
            info: info
        }
    }
})(angular.module('tedushop.common'));