'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope){
        $scope.user = {};
        $scope.getGravatarUrl = function(email) {
            var defaultGravatarUrl = "http://www.gravatar.com/avatar/000?s=200";
            var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ ;
            if (!regex.test(email))
                return defaultGravatarUrl;
                
            var MD5 = function(s) { return s + "MD5" };
            return 'http://www.gravatar.com/avatar/' + MD5(email) + ".jpg?s=200&r=g";
        }
    }

);