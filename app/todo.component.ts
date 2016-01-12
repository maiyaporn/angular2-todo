import {Component} from 'angular2/core';
import {TodoListComponent} from './todo-list.component';
import {TodoFormComponent} from './todo-form.component';
import {Todo} from './todo.model';
import {EditItem} from './edit-item.model';
import {TodoService} from './todo.service';

@Component({
  selector: 'todo-app',
  templateUrl: 'app/todo.component.html',
  directives: [TodoListComponent, TodoFormComponent]
})
export class TodoComponent {
  todos: Array<EditItem<Todo>>;
  // todos: Array<Todo>;

  constructor(public todoService: TodoService) {
    todoService.todos$.subscribe(updatedTodos => {
      // this.todos = updatedTodos;
      this.todos = updatedTodos.map((item) => new EditItem(item))
    });
    todoService.loadTodos();
  }

  addItem(item: Todo) {
    this.todoService.createTodo(item);
  }

  updateItem(item: Todo) {
    this.todoService.updateTodo(item);
  }

  deleteItem(item: Todo) {
    this.todoService.deleteTodo(item);
  }

}
