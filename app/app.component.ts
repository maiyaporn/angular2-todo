import {Component} from 'angular2/core';
import {TodoComponent} from './todo.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [TodoComponent]
})
export class AppComponent {
}
