import {Component, Output, EventEmitter} from 'angular2/core';
import {Todo} from './todo.model';

@Component({
  selector: 'todo-form',
  templateUrl: 'app/todo-form.component.html',
  styleUrls: ['app/todo-form.component.css']
})
export class TodoFormComponent{
  @Output() newItem = new EventEmitter<Todo>();
  text: string = '';

  addTodo() {
    if( this.text ) {
      this.newItem.next({text: this.text, checked: false})
    }
    this.text = '';
  }
}
