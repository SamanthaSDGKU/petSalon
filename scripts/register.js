//object literal
let salon = {
    name:"The Fashion pet",
    phone:"555-555-555",
    address:{
        street:"12 & imperial",
        zip:"22900",
        number:"34A"
    },
    pets:[
        {
            name:"scooby",
            age:60,
            breed:"Dane",
            service:"Grooming"
        },
        {
            name:"scrappy",
            age:65,
            breed:"Mixed",
            service:"Vaccines"
        },
        {
            name:"speedy",
            age:75,
            breed:"Mixed",
            service:"Nails cut"
        }
    ]
}

function displayPetNames(){//creating the fn

    for(let i=0;i<salon.pets.length; i++){
        console.log(salon.pets[2].name);
    }
}

displayPetNames();// run the fn
