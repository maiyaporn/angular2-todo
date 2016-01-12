import {Pipe, PipeTransform} from 'angular2/core';
import {EditItem} from './edit-item.model'

@Pipe({name: 'transformToEditItem'})
export class EditItemPipe implements PipeTransform {
  transform(obj:Object, args:string[]) : any {
    return new EditItem(obj);
  }
}
