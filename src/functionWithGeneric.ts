// const learningGeneric = (value: any) => {
//   return value;
// };

// const a = learningGeneric("Hello");

// a.number;   // ❌ Error দেখায় না (ভুল)
// // a = "15";   // ❌ Error দেখায় না (ভুল)


// console.log(typeof a);


const learningGeneric = <T> (value : T) : T=> {
  return value;
}

const hello = learningGeneric("Hello typescript")
const hello1 = learningGeneric(123456)

console.log (typeof hello)
console.log(typeof hello1)







