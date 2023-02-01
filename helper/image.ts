import * as CONSTANT_PI from './const';
import {PersonInterface} from './const';

abstract class Human {
  constructor(public birthYear: number) {}
}
/**
 * class {@link Person}
 * @example <caption>Example usage of showAge.</caption>
 * const person = new Person('Bob', 2050);
 */
class Person extends Human implements PersonInterface {
  private id = 1_1000_1000;
  static car = 'tesla';
  constructor(public firstName: string, public birthYear: number) {
    super(birthYear);
  }
  introduce() {
    return `I am ${this.firstName}, my pleasure to meet you in person!`;
  }
  set idNum(num) {
    const x = 'hjhj';
    try {
      let ghg = x;
      if ((num + '').length !== 9) throw new Error('Error message!');
      else {
        this.id = num;
      }
    } catch (error) {
      void error;
    }
  }
  get idNum() {
    return this.id;
  }
  age() {
    return 2050 - this.birthYear;
  }
}
const person = new Person('Dom', 2030);

const map = <InType, OutType>(arr: InType[], cb: (val: InType) => OutType) => {
  let newArr = [];
  for (const item of arr) {
  }
  return newArr;
};
