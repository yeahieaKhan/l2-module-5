<<<<<<< HEAD
function add(num1: number, num2: number) {
    return num1 + num2
}

add(2, 2)

console.log(add(2, 3))


    
=======
const add = (a: number, b: number): number => {
    return a + b;   
}

const result = add(5, 10);
console.log(`The result is: ${result}`);


const subtract = (a: number, b: number): number => {
    return a - b;
}

const result2 = subtract(10, 5);
console.log(`The result is: ${result2}`);


const login =(email:string,password:string):string=>{
    if(email === "user@gmail.com" && password === "password123"){
        return "Login successful";
    } else {
        return "Login failed";
    }
}

console.log(login("user@gmail.com", "password123"));
>>>>>>> aa06f38afea3a671e7d9ca0fbd825c292bda1803
