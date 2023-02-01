import * as CONSTANT_PI from '../helper/const';
export {CONSTANT_PI};

const CONSTANT_E = 2.718_281_828_4590;
const variableConst: RegExp = /ab+c/i;
let variableLet: RegExp = /ab+c/i;
var variableVar: RegExp = /ab+c/i;

const year = document.getElementById('year') as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;

{
  templateLiteral: `string ${variableConst}, ${variableLet} ${'string'}`;
}

type ObjectType = {
  birthYear: number;
  age: () => number;
  garbage?: string;
};
enum EnumName {
  A,
  B = '5+',
}
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
  lastName: string;
  introduce: (greeting: string) => string;
  showSecret: () => void;
  idNum: number;
  readonly takeCar: () => string;
}

interface PersonInterface extends Interface1, ObjectType {}

// @ts-check
/**
 * a human
 * @typedef {{birthYear: number}} Human
 */
/**
 * showAge a human age
 * @typedef {function(): string} ShowAge
 */
/**
 * @typedef PublicField
 * @public field (simular to property, available on created object)
 */
/**
 * @typedef PrivateField
 * @private field (not accessible outside of class)
 */

/**
 * class Human
 * @class {Human} human - representing a {@link Human}
 * @abstract
 * Classes just syntactic sugar over constructor functions.
 * Classes aren't hoisted.
 * Classes are first-class citizens.
 * Class body is always executed in 'strict mode'.
 */
abstract class Human {
  constructor(public birthYear: number) {}
  age() {
    return 2050 - this.birthYear;
  }
  get showAge() {
    return this.age();
  }
}
class Person extends Human implements PersonInterface {
  private id = 1_1000_1000;
  protected creditCardNum = '**** **** **** 1111';
  static car = 'tesla';
  constructor(
    public firstName: string,
    public lastName: string,
    public birthYear: number,
    private pin: number
  ) {
    super(birthYear);
    this.pin = pin;
  }
  introduce(greeting) {
    let output = '';
    switch (greeting) {
      case 'hi':
        output = `Hi, I am ${this.firstName}!`;
        break;
      default:
        output = `I am ${this.firstName}, my pleasure to meet you in person!`;
        break;
    }
    return output;
  }
  takeCar() {
    return `Here are the keys from my ${Person.car}`;
  }
  showSecret() {
    console.log(
      `${this.takeCar()}, card ${this.showCard()} and pin ${this.pin}`
    );
  }
  private showCard() {
    return this.creditCardNum;
  }
  set idNum(num) {
    const x = 'hello';
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
}
const person = new Person('Dom', 'N', 2030, 2221);
person.showSecret();
person.showAge;

const map = <InType, OutType>(arr: InType[], cb: (val: InType) => OutType) => {
  let newArr = [];
  for (const item of arr) {
    newArr.push(cb(item));
  }
  return newArr;
};
// prettier-ignore
const array = new Array(globalThis, undefined,
  // @ts-ignore prettier-ignore
  typeof null, NaN !== NaN, {} !== {}, CONSTANT_E, true,
  // prettier-ignore
  "string", !!'string', new Intl.Locale('en'), ~~3.4, 10n, -0 != 0, Infinity, functionDeclaration, myObject, typeof Symbol, [] instanceof Object, (() => this)()
);
// @ts-ignore
void array.at(-1);

const [a1, b1, ...rest] = [...new Set([1, 3, 4, 1, 3, 1, 5])];

const {birthYear, garbage}: ObjectType = myObject;

for (const iterator of array) {
  console.log(iterator, 1);
}
// prettier-ignore
void (
  (
    (
      (
        (
          (
            (((((((""+''+``)))))))
          )
        )
      )
    )
  )
)
// prettier-ignore
{{{{{{{{{{{{{{}}}}}}}}}}}}}}

const functionExpression = function (a = 1, c = a ** a, {b, d}) {
  return arguments;
};
async function functionDeclaration() {
  return this;
}
function* yieldArray(number = 3) {
  yield* Array.from({length: number}, (_, i) =>
    (i + 1) % (3 * 5) === 0
      ? 'FizzBuzz'
      : (i + 1) % 5 === 0
      ? 'Buzz'
      : (i + 1) % 3 === 0
      ? 'Fizz'
      : i + 1
  );
}
let y = yieldArray(15);
let z: {value: string | number | undefined; done: boolean} = {
  value: '',
  done: false,
};

functionExpression.apply(this, 3);
functionExpression.call(this, 3);
functionExpression.bind(this, 3);

for (const key in myObject) {
  if (myObject.hasOwnProperty.call(myObject, key)) {
    const element = myObject[key];
    void element;
  }
}

for (let i = 0; i < array.length; i++) {
  const e = array[i];
  if (!e) continue;
  else {
    void e;
  }
  if (i === 100) break;
}
let i = 0;

// prettier-ignore
// Assignment Operators
void [i=0, i*=1, i/=1, i%=1, i+=1, i-=0, i<<=0, i>>=0, i>>>=0, i&=0, i^=0, i|=1, i**=0, i&&=0, i||=0, i??=1]
// prettier-ignore
// Arithmetic Operators
void [++i, --i, i + i, i - 0, i ** 1, i * i, i / i, i % 1];
// prettier-ignore
// Relational Operators
void [0 < 1, 1 > 0, 0 <= 1, 0 >= 0];
// prettier-ignore
// Comparison operators
void [0 == -0, 0 != 0, 0 === 0, NaN !== NaN];
// prettier-ignore
// Bitwise Operators
void [~1.2, 1 << 0, 0 >> 0, 0 >>> 0, 0 & 1, 1 | 0, 0 ^ 0];
// Binary logical operators
void [1 && 1, !0, 1 || 0, 0 ?? 1];
