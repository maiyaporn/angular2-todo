import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Todo} from './todo.model';

@Component({
  selector: 'todo-detail',
  templateUrl: 'app/todo-detail.component.html',
  styleUrls: ['app/todo-detail.component.css']
})
export class TodoDetailComponent {
    @Input() item: Todo;
    @Input() idx: number;

    @Output() editing = new EventEmitter();

    onEdit(item: Todo) {
      this.editing.next(item);
    }

}
