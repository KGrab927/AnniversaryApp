var app = angular.module('Anniversary App', []);
app.controller('mainCtrl', ($scope, $interval) => {

    // Time of start date in seconds
    var startDate = new Date('October, 30, 2016 22:00:00');
    startDate = startDate.getTime() / 1000;

    $scope.timeChunks = getTime(startDate);
    $scope.currDate = new Date();

    // Recurring update to the time
    $interval(_ => {
        $scope.timeChunks = getTime(startDate);
        $scope.currDate = new Date();
    }, 1000);

});

// Brute forcing the calculations for time
function getTime(start) {
    let currDate = new Date();
    currDate = currDate.getTime() / 1000;
    let timeDiff = currDate - start;
    let years = Math.floor(timeDiff/(60*60*24*365));
    timeDiff -= years * 60 * 60 * 24 * 365;
    let days = Math.floor(timeDiff/(60*60*24));
    timeDiff -= days * 60 * 60 * 24;
    let hours = Math.floor(timeDiff/(60*60));
    timeDiff -= hours * 60 * 60;
    let minutes = Math.floor(timeDiff/60);
    timeDiff -= minutes * 60;
    let seconds = Math.floor(timeDiff);
    return {years: years, days: days, hours: hours, minutes: minutes, seconds: seconds}
}