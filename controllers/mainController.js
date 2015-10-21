(function(){
    var app = angular.module('demoApp');
    var mainController = function($scope, $http, $mdDialog, $filter){

            var onSuccess = function(response){
                $scope.users = response.data;
            };
             var onError = function(error){
                $scope.error = error;
            };
        
            $http.get('http://localhost:3000/people').then(onSuccess, onError);
        
            $scope.deletePerson = function(user){
                var confirm = $mdDialog.confirm()
                      .title('Would you like to delete ' + user.firstname +'?')
                      .content('This will permanently delete this user from our repository!')
                      .ariaLabel('Lucky day')
                      .ok('Please do it!')
                      .cancel('No, keep user!');
                $mdDialog.show(confirm).then(function() {
                    $http.delete('http://localhost:3000/person/' + user.id)
                    .then(function(response){
                    $http.get('http://localhost:3000/people').then(onSuccess, onError);
                    });
                });
            };
        
            $scope.addPerson = function(evt) {
                    $mdDialog.show({
                      controller: 'addDialogController',
                      templateUrl: 'http://localhost:8080/demoApp/views/dialogBox_templates/addPersonDialog.html',
                    }).then(function() {
                      $http.get('http://localhost:3000/people').then(onSuccess, onError);
                    });

            };
        
            $scope.editPerson = function(user) {
                    $mdDialog.show({
                      controller: 'editDialogController',
                      locals: {
                        id: user.id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        birthdate: user.birthdate,
                        description: user.description
                      },
                      templateUrl: 'http://localhost:8080/demoApp/views/dialogBox_templates/editPersonDialog.html',
                    })
                    .then(function() {
                      $http.get('http://localhost:3000/people').then(onSuccess, onError);
                    });
            };
       
    
    };
    
    app.controller('mainController', mainController);
}());

