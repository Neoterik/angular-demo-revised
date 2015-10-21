(function(){
    var app = angular.module('demoApp', ['ngMaterial','ngRoute']);
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "views/main.html",
                controller: "mainController"
        })
        .otherwise({redirectTo: "/main"});
    });
}());