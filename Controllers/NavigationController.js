var NavigationController = angular.module("Ethnica")
.controller("NavigationController", function ($scope, $routeParams, $location) {

    $scope.navigateTo = function myfunction(view) {

        $location.url('/' + view)

    }



})