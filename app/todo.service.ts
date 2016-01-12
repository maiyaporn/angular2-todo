import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Todo} from './todo.model';
import {TODOS} from './mock/mock-todos';

@Injectable()
export class TodoService {
  todos$: Observable<Array<Todo>>;
  private _todosObserver: any;
  private _dataStore: {
    todos: Array<Todo>
  };

  constructor() {
    this.todos$ = new Observable( observer =>
      this._todosObserver = observer
    ).share();

    this._dataStore = { todos: [] };
  }

  loadTodos()  {
    this._dataStore.todos = TODOS;
    this._todosObserver.next(this._dataStore.todos);

  //   this._http.get('mock/todos.json')
  //             .map( response => response.json() )
  //             .subscribe( data => {
  //               this._dataStore.todos = data;
  //               this._todosObserver.next(this._dataStore.todos);
  //             },
  //             error => console.log(error));
  }

  createTodo(item: Todo) {
    item.id = this.getNextId();
    item.createdDate = new Date();
    this._dataStore.todos.push(item);
    this._todosObserver.next(this._dataStore.todos);
  }

  getNextId(): number {
    return this._dataStore.todos.length + 1;
  }

  updateTodo(item: Todo) {
    this._dataStore.todos.forEach((todo, i) => {
      if( todo.id === item.id ) {
        this._dataStore.todos.splice(i, 1);
      }
    });
    this._dataStore.todos.push(item);
    this._todosObserver.next(this._dataStore.todos);
  }

  deleteTodo(item: Todo) {
    this._dataStore.todos.forEach((todo, i) => {
      if( todo.id === item.id ) {
        this._dataStore.todos.splice(i, 1);
      }
    });

    this._todosObserver.next(this._dataStore.todos);
  }

}
