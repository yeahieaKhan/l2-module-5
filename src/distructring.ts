// const user = {
//     id: 123,
//     name: {
//         firstName: "Sohag",
//         middleName: "hossain",
//         lastName:"Jewel"
//     }
// }


// const { name: { firstName, middleName, lastName },} = user;


// console.log(firstName)


type User = {
    id: number,
    name: {
        firstName: string,
        middleName?: string,
        lastName:string,
    }
    isMarried:boolean
}

const user: User = {
    id: 123,
    name: {
        firstName: "Sohag",
        middleName: "Hossain",
        lastName: "Raj"
    },
    isMarried:true
}


const { name: { firstName, middleName, lastName } } = user;
console.log(firstName)