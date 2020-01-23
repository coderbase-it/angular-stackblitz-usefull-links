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
    new Lien("js-jcyrkq", "ES6", Category.JAVASCRIPT),
    new Lien("typescript-qytgzf", "Typescript Example", Category.TYPESCRIPT),
    new Lien("angular-unxnpa", "@Input", Category.ANGULAR),
    new Lien("github-xagc9z", "Ignite Ui Example", Category.IGNITE_UI),
    new Lien("ionic-mhh9wg", "Arrow Functions", Category.IONIC),
    new Lien("rxjs-nwojyq", "Observable", Category.RXJS),
    new Lien("rxjs-nwojyq", "Subject", 
    Category.RXJS),
    new Lien("rxjs-nwojyq", "BehaviorSubject", Category.RXJS),
    new Lien("react-gzsmw7", "React Example", 
    Category.REACT),
    new Lien("react-ts-cxeup8", "React Ts Example", Category.REACT_TS),
    new Lien("github-lynl8k", "Kendo React Example", Category.KENDO_REACT),
    new Lien("svelte-ah6fyz", "Svelte Example", Category.SVELTE),
    new Lien("angularjs-agsisy", "Angular JS Example", Category.ANGULARJS)
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
