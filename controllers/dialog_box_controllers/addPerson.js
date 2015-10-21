(function(){
    var app = angular.module('demoApp');
    
    function addDialogController($scope,$http, $mdDialog,$filter) {
              $scope.user = {};
              $scope.cancel = function() {
                $mdDialog.cancel();
              };
              $scope.save = function(user) {
                $scope.user.birthdate = $filter('date')($scope.user.birthdate, 'yyyy-MM-dd')
                $http.post('http://localhost:3000/person',$scope.user);
                $mdDialog.hide();
              };
        };
    
    addDialogController.$inject = ['$scope','$http', '$mdDialog','$filter'];
    app.controller("addDialogController", addDialogController);
}());
