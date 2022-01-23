 (function () {
'use strict';

angular.module('DIApp', [])
//.controller('DIController', DIController); //сместо этой строки сделаем слудующую, это нужно для того чтобы бороться с миификатором (т.е. минимизацией, которая производится сервером перед отправкй пользователю)
//.controller('DIController', ['$scope', '$filter', DIController]); //делаем массив из аргументов, котоорые передаем самой ф-ции, и в конце указываем название самой функции
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter']; //вызываем свойство инъектор ф-ции, спасая ее(вернее ее аргументы ($scope и $filter) от минификации
function DIController ($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name); //как теряет фокус- сразу верхний регистр
  };
}

})();
 


