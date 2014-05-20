'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData){
    
        $scope.buttonDisabled = false;
        $scope.sortorder = 'name';
        $scope.event = eventData.event;
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);