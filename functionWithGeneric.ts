const learningGeneric = (value: any) => {
  return value;
};

const a = learningGeneric("Hello");

a.number;   // ❌ Error দেখায় না (ভুল)
// a = "15";   // ❌ Error দেখায় না (ভুল)


console.log(typeof a);