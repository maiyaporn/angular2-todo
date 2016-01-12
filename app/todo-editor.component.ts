import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Todo} from './todo.model';
import {RestoreService} from './restore.service';

@Component({
  selector: 'todo-editor',
  templateUrl: 'app/todo-editor.component.html',
  providers: [RestoreService]
})
export class TodoEditorComponent {
  @Output() saved = new EventEmitter<Todo>();
  @Output() canceled = new EventEmitter<Todo>();

  @Input()
  set item(item: Todo) {
      this.restoreService.setItem(item);
  }
  get item() {
      return this.restoreService.getItem();
  }

  constructor(private restoreService: RestoreService<Todo>) {
  }

  onSaved() {
    this.saved.next(this.restoreService.getItem());
  }

  onBlurred() {
    this.item = this.restoreService.restoreItem();
    this.canceled.next(this.item);
  }
}
