(function () { //локальные переменные не попадают в глобальную область
'use strict';   ///эта строчка защищает от ошибок(пока прост запомнить)

angular.module('DIApp', [])  //делаем модуль Ангулар и назовем его 'DIApp';  второй параметр([]) - это 
                                  //список зависимостей в виде массива 

.controller('DIController', DIController);  //здесь описание контролера, т.е. скорее всего представления - 
                                                //index.html, 2 парамент - это ф-ция этого контроллера
                                                //Контроллер — это место, где живут данные представления и логика представления представления, 
                                                //так что да, это и есть ViewModel
     function DIController ($scope, 
                            $filter, 
                            $injector) { //$scope будет связывать наше модель с нашим представлением, а сервис $filter - это с помощью которого будет фокусировка, $injector - эта служба анализирует переданные данные из модуля и делает экземпляры различных ф-ций 
            $scope.name = "Belyura";  //в сервисе $scope вызываем св-во name, а эта область доступна моему ng-controller
            
            $scope.upper = function() {      //в сервис области видимости $scope подключаем upper(так назовем) - это ф-ция перевода в верхний регистр
                 var upCase = $filter('uppercase'); //новая ф-ция вызываем сервис Андулар $filter и подключаем у него перевод в верхний регистр ('uppercase')
                 $scope.name = upCase($scope.name); //вызываем созданную ф-цию upCase 
            };
            
            console.log($injector.annotate(DIController)); //ф-цию DIController окружаем сервисом $injector c параметром annotate  
        }

    //создадим для примера отвлеченную ф-цию
     function AnnonateMe(name, job, blah) { //передаем ф-ции любые параметры, которые приходят в голову
        return "Blah!";
    }

     //console.log(AnnonateMe.toString());
     console.log(DIController.toString());  

     })();
                                                
     
