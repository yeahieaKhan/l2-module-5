let numbers: number[] = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(num);
});


let fruits: Array<string> = ["apple", "banana", "mango"];
console.log(fruits);


type Person = {
  name: string;
  age: number;
};

let people: Person[] = [
  { name: "Sohag", age: 24 },
  { name: "Rahim", age: 30 }
];

console.log(people);
