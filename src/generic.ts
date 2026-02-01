// generic chara function

// function identity(value: any) {
//   return value;
// }

// identity(10);      // number
// identity("Hello"); // string


function identity<T>(value: T): T {
  return value;
}

identity<number>(10);
identity<string>("Hello");

console.log(identity)
