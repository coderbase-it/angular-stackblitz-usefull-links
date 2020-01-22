import { Injectable } from "@angular/core";
import { Lien } from "./lien";
import { Category } from "./category.enum";
import { from, of, zip} from 'rxjs';
import { groupBy ,map, mergeMap, toArray, tap} from 'rxjs/operators'; 

@Injectable()
export class LienService { 
  liens: Lien[] = [
    new Lien("js-es6-review", "ES6", Category.JAVASCRIPT),
    new Lien("js-es6-review", "ES6", Category.JAVASCRIPT),
    new Lien("js-es6-review", "ANGULAR", Category.ANGULAR),
    new Lien("js-es6-review", "RXJS", Category.RXJS)
  ];
  constructor() {}

  get list(){
    return from(this.liens).pipe(
       groupBy( (lien) => lien.category ),
            mergeMap(group =>  group.pipe(toArray())),
            map( data => {
              return {
                category:data[0].category,
                liens: data
              }
            }),
             toArray(),
            //tap(console.log)
    )
  }


}
