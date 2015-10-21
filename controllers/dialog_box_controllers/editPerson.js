(function(){
    var app = angular.module('demoApp');
    
    var editDialogController = function($scope,$http, $mdDialog,$filter, id, firstname, lastname, birthdate, description){                                                                                               
            var newBday = new Date(birthdate);          
             $scope.user = {
                id: id,
                firstname: firstname,
                lastname: lastname,
                birthdate: newBday,
                description: description
              };
              $scope.cancel = function() {
                $mdDialog.cancel();
              };
              $scope.save = function(user) {
                $scope.user.birthdate = $filter('date')($scope.user.birthdate, 'yyyy-MM-dd')
                $http.put('http://localhost:3000/person',user);
                $mdDialog.hide();
              };
            };
    editDialogController.$inject = ['$scope','$http', '$mdDialog','$filter', 'id', 'firstname','lastname', 'birthdate', 'description'];
    app.controller("editDialogController", editDialogController);
}());
