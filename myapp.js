var app = angular.module('MyApp', []);

app.controller('MyCtrl', function ($scope, $http) {
    $http.get('/people.js').success(function (data) {
        $scope.people = data;
    });

});