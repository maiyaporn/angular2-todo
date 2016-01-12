import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {COMMON_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';
import {Todo} from './todo.model';
import {EditItem} from './edit-item.model';
import {TodoDetailComponent} from './todo-detail.component';
import {TodoEditorComponent} from './todo-editor.component';
import {SortingPipe} from './sorting.pipe';
import {EditItemPipe} from './editItem.pipe'

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todo-list.component.html',
  styleUrls: ['app/todo-list.component.css']
  directives: [COMMON_DIRECTIVES, CORE_DIRECTIVES, TodoDetailComponent, TodoEditorComponent],
  pipes: [SortingPipe, EditItemPipe]
})
export class TodoListComponent {
  @Input() todos: Array<EditItem<Todo>>;
  // @Input() todos: Array<Todo>;
  @Output() updated = new EventEmitter<Todo>();
  @Output() deleted = new EventEmitter<Todo>();

  newEditItem(item: Todo) {
    return new EditItem(item);
  }

  onUpdated(item: Todo) {
    this.updated.next(item);
  }

  onDelete(item: Todo) {
    this.deleted.next(item);
  }

}
