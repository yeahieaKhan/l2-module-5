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