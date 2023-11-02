

function displayTable(){
    let tr="";
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        tr+=`
        <tr id="${pet.id}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>
                <button onclick="deletePet(${pet.id});"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
        `;
    }
    document.getElementById("petTable").innerHTML=tr;
}


// 1. add the phone number input on the HTML
// 2. add the phone number attribute on the constructor
// 3. clear the phone number input
// 4. add phone number property to the three pets that we have (scooby, scrappy ... )
// 5. display the phone number property (HTML,JS)