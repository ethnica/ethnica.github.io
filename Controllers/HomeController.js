var HomeController = angular.module("Ethnica")
.controller("HomeController", function ($scope, $rootScope) {
    $scope.MagicSpinLoader = true;

    //Showing the loader untill the data initializes
    window.setTimeout(function () {
        $scope.$apply(function () {
            $scope.MagicSpinLoader = false;
        });
    }, 3000)
});