'use strict'; 

angular.module('todoListApp')
.service('dataService', function () {
    this.helloConsole = function() {
        console.log("This is the hello console service");
    }; 

    this.deleteTodo = function(todo) {
        console.log("The " + todo.name + " todo has been deleted ")
    }; 
 
}); 