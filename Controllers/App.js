var Ethnica = angular.module("Ethnica", ['ngRoute'])
   .config(function ($routeProvider) {
       $routeProvider
      .when("/Home", { templateUrl: "/Views/Home.html", controller: "HomeController" })
      .when("/Accessories", { templateUrl: "/Views/Accessories.html", controller: "AccessoriesController" })

      .otherwise({ redirectTo: "/Home" });
   })  
 .filter("pagination", function () {
     return function (input, start) {
         start = +start;
         return input.slice(start);
     }
 });