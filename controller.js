"use strict";
function TodoController() {
    const vm = this; //vm stands for View Model

    vm.todoList = [

        {
            todo: "be sexy",
            completed: false

        },
        {
            todo: "don't get murdered",
            completed: true
        },
        {
            todo: "be happy",
            completed: false
        },
        {
            todo: "take your vitamins",
            completed: true

        }
    ];

    vm.addTodo = (addTodo) => {
        vm.todoList.push(angular.copy({ todo: addTodo, completed: false }));
    }

    vm.todoCompleted = (index, todo, completed) => {
        vm.todoList.splice(index, { todo, completed });
    }

    vm.removeTodo = (index) => {
        vm.todoList.splice(index, 1);
    }

    vm.addClassCompleted = (index) => {
        vm.todoList[index].completed = true
    }


    vm.editTask = (index, value) => {
        let todo = vm.todoList[index].todo;;
        if (value !== null){
          vm.todoList[index].todo = value;
        }
      }
}

// getter syntax
angular
    .module("todoApp")
    .controller("TodoController", TodoController); 