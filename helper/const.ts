const CONSTANT_PI = 3.141_592_653_589_793;
let variableLet: RegExp = /ab+c/i;
export default CONSTANT_PI;

type ObjectType = {
  birthYear: number;
  age: () => number;
  garbage?: string;
};

const myObject: ObjectType = {
  birthYear: 2000,
  age() {
    return 2050 - this.birthYear;
  },
  garbage: 'jdccnksc',
};
delete myObject.garbage;

interface Interface1 {
  firstName: string;
  introduce: (greeting: string) => string;
}
interface PersonInterface extends Interface1, ObjectType {}

export {PersonInterface};
