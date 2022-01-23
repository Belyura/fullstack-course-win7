(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);
//сл. строка защита от минимизации кода
MsgController.$inject = ['$scope']; //в котроллере инъектировали(передали) сервис $scope 
function MsgController($scope) {
  $scope.name = "Belyura";
  $scope.stateOfBeing = "hungry";
  $scope.sayMessage = function () {
      return "Belyura likes to eat snacks at night!";
  };

  $scope.feedBelyura = function () {
    $scope.stateOfBeing = "fed";
  }
}

})();
