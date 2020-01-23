import { Injectable } from "@angular/core";
import { Lien } from "./lien";
import { Category } from "./category.enum";
import { from, of, zip } from "rxjs";
import { groupBy, map, mergeMap, toArray, tap } from "rxjs/operators";

@Injectable()
export class LienService {
  // add your links in this array
  // by using Lien class
  // new Lien('endOfStackblitz URL', 'NAME', Category.XXXX)
  // check category.enum for Category Attribute
  liens: Lien[] = [
    new Lien("js-es6-review", "ES6", Category.JAVASCRIPT),
    new Lien("js-es6-review", "@Input", Category.ANGULAR),
    new Lien("js-es6-review", "Observable", Category.RXJS),
    new Lien("js-es6-review", "Subject", 
    Category.RXJS),
    new Lien("js-es6-review", "BehaviorSubject", Category.RXJS),
    new Lien("js-es6-review", "React", 
    Category.REACT),
    new Lien("js-es6-review", "React Ts", Category.REACT_TS),
    new Lien("js-es6-review", "Svelte", Category.SVELTE),
    new Lien("js-es6-review", "Arrow Functions", Category.KENDO_REACT),
    new Lien("js-es6-review", "Arrow Functions", Category.IGNITE_UI),
    new Lien("js-es6-review", "Arrow Functions", Category.ANGULARJS)
  ];

  constructor() {}

  // Don't touch this function until u know RXJS enough
  get list() {
    return from(this.liens).pipe(
      groupBy(lien => lien.category),
      mergeMap(group => group.pipe(toArray())),
      map(data => {
        return {
          category: data[0].category,
          liens: data
        };
      }),
      toArray()
      //tap(console.log)
    );
  }
}
