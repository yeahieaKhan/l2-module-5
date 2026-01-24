// const user: {
//     firstName: "sohag";
//     middleName: string;
//     lastName?: string;
// } = {
//     firstName: "sohag",
//     middleName: "hossain",
    
// }

// console.log(user)



// let a: number = 126554;
// console.log(a)


// let same: string = "Sohag";
// console.log(same);

// const firstChar = same.charAt(0);
// console.log(firstChar); // "S"


let name: string = "Sohag";

// const index: number = 2;
// console.log(name.charAt(index)); // "h"


console.log(name.charAt);



// Type declarations


// let person: {
//     name: string,
//     age: number,
//     city:string
// } =  {
//     name: "Sohag",
//     age: 25,
//     city: "Sirajgaj",
// }

// console.log(person)




// type alias

type TPerson = {
    name: string,
    age: number,
    city: string,
    address: {
        village: string,
        wordNumber: number,
    }
}




let person: TPerson = {
    name: "Sohag",
    age: 24,
    city:"Sirajganj",
    address: {
        village: "Charpodom pal",
        wordNumber: 15
    }
}

console.log(person)

let person2: TPerson = { 
    name: "asif",
    age: 24,
    city: "belkuchi",
    address: {
        village: "belkuchi",
        wordNumber: 15
    }
}

console.log(person2)