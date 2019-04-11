'use strict'; 

angular.module('todoListApp')
.controller("mainCtrl", function($scope, dataService) {
    $scope.addTodo = function() {
        var todo = {name: "Click to Edit Me!"};
        $scope.todos.unshift(todo);
    };


    $scope.learningNgChange = function() {
        console.log("Input changed");
    };
    $scope.helloConsole = dataService.helloConsole;  
    
    $scope.todos = [
        {"name": "Feed the Dog"},
        {"name": "Pet the Dog"},
        {"name": "Play with the Dog"},
        {"name": "Tell the Dog you Love him"},
        {"name": "Hold the Dog Untill he Barks"},
        {"name": "Say hi to Husband"}
    ];

    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };
 
})