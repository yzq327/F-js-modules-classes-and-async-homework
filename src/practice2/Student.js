// eslint-disable-next-line import/named
import { Person } from "./Person";

export class Student extends Person {
  constructor(name, className) {
    super(name);
    this.className = className;
    this.study = this.study.bind(this);
  }

  study() {
    this.move();
    console.log(`${this.name} is studying in ${this.className}`);
  }
}
