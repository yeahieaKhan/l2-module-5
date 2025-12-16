const user = {
    id: 123,
    name: {
        firstName: "Sohag",
        middleName: "hossain",
        lastName:"Jewel"
    }
}


const { name: { firstName, middleName, lastName },} = user;


console.log(firstName)