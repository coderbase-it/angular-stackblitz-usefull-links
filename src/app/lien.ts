import { Category } from "./category.enum";
export class Lien {
  constructor(
    public url: string,
    public name: string,
    public category: Category
  ) {}

  open() {
    var win = window.open("https://stackblitz.com/edit/" + this.url, "_blank");
    win.focus();
  }
}
