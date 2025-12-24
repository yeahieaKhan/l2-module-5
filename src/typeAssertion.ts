let anything: any;
anything = "25";

// console.log(typeof anything);


const kgToGMConverter = (input: string | number) : string | number | undefined =>  {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Conveted number is ${Number(value)* 2000} `
    }
}


const result1 = kgToGMConverter("5") as number;
console.log(result1)