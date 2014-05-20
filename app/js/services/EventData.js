eventsApp.factory('eventData', function(){
    return {
        event : {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location:{
                address: 'FactSet New York Office',
                city: 'New York',
                province: 'NY'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: ' learn directives in this section',
                    upVoteCount: 2
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Tom Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'learn scope in this section',
                    upVoteCount: 3
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: 3,
                    level: 'Intermediate',
                    abstract: 'learn controller in this sections',
                    upVoteCount: 0
                }
            ]
        }
    };
});