import {Pipe, PipeTransform} from 'angular2/core';
import {EditItem} from './edit-item.model';

@Pipe({name: 'sorting'})
export class SortingPipe implements PipeTransform {

  transform(value: Array<EditItem<Object>>, args: string[] = []): any {
    if( args.length < 2 ) {
        throw new Error("Sorting pipe requires two arguments: sortColumn and sortOrder");
    }

    let sortColumn = args[0];
    let sortOrder = args[1].toLowerCase() == 'asc' ? 1 : -1;

    return value.sort(function(a, b) {
        return ((a.item[sortColumn] < b.item[sortColumn]) ? -1 : (a.item[sortColumn] > b.item[sortColumn]) ? 1 : 0) * sortOrder;
    });
  }

}
