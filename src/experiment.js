//app.js
angular.module('app', [])
.component('todoList', {
  bindings: {
    todos: '<'
  },
  controller: function(){
    this.newTodo = '';

    this.addTodo = () => {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    };

    this.removeTodo = (index) => {
      this.todos.splice(index, 1);
    };
  },
  template: `
    <h1>Todo List</h1>
    <input ng-model="$ctrl.newTodo">
    <button ng-click="$ctrl.addTodo()">add</button>
    <ul>
      <entry
        item="todo"
        index="$index"
        on-click="$ctrl.removeTodo"
        ng-repeat="todo in $ctrl.todos track by $index"
      />
    </ul>
    <hr/>
  `
})
.component('entry', {
  bindings: {
    item: '<',
    index: '<',
    onClick: '<'
  },
  controller: function(){
    debugger;
  },
  template: `
    <li ng-click="$ctrl.onClick($ctrl.index)">{{$ctrl.item}}</li>
  `
})