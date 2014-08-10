var app = angular.module('MyApp', ['ngResource']);

app.controller('MyCtrl', function ($scope, $http, $resource) {
    $scope.people = $resource('/people.js').query();
});