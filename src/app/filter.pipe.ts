import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'appFilter'})
export class FilterPipe implements PipeTransform {

  /** 
  *Transform
  *@param {any[]} items
  * @param {string} searchText
  * @returns {any[]}
  * 
  */

  transform(items: any[], searchText: string): any[] {
    if(!items ) {
    return []
    }
    if(!searchText){
      return []
    }
    searchText = searchText.toLocaleLowerCase()
    return items.filter(item => {
      console.log(searchText)
      return item.content.toLowerCase().includes(searchText)
    })
  }

}
