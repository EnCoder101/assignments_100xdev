/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){}
  tasks = [];

  add(todo){
    this.tasks.push(todo);
  }
  remove(indexoftodo){
    this.tasks.splice(indexoftodo , 1);
  }
  update(index, updatedTodo){
    if(index < this.tasks.length){
      this.tasks[index] = updatedTodo;
    }
  }
  getAll(){
    console.log(this.tasks);
    return this.tasks;
  }

  get(indexOfTodo){
    console.log(this.tasks[indexOfTodo]);
    if(indexOfTodo < this.tasks.length){
      return this.tasks[indexOfTodo];
    }else{
      return null;
    }
  }

  clear(){
    return this.tasks = [];
  }
}

module.exports = Todo;

// let listoftask = new Todo()
// listoftask.add("task a");
// listoftask.add("task b");
// listoftask.add("task c");   
// listoftask.update(1,"task d");
// listoftask.update(3,"invalid task");
// listoftask.getAll()