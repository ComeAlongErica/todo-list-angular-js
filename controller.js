"use strict";
function TodoController() {
    const vm = this; //vm stands for View Model

    vm.todoList = [
        {
            todo: "be sexy",
            completed: false
        }, {
            todo: "don't get murdered",
            completed: true
        }, {
            todo: "be happy",
            completed: false
        }, {
            todo: "take your vitamins",
            completed: true
        }
    ];

    //push to task list
    vm.addTodo = (addTodo) => {
        vm.todoList.push(angular.copy({ todo: addTodo, completed: false }));
    }

    // remove task from array
    vm.removeTodo = (index) => {
        vm.todoList.splice(index, 1);
    }

    // add boolean of true to completed
    vm.addClassCompleted = (index) => {
        vm.todoList[index].completed = true
    }

    // edit a task
    vm.editTask = (index, value) => {
        vm.todoList[index].todo = value;
    }

}

// getter syntax
angular
    .module("todoApp")
    .controller("TodoController", TodoController); 