//object literal
let salon = {
    name:"The Fashion pet",
    phone:"555-555-555",
    address:{
        street:"12 & imperial",
        zip:"22900",
        number:"34A"
    },
    pets:[]
}
let x=0;
//constructor
function Pet(name,age,breed,service){
    this.name=name;
    this.age=age;
    this.breed=breed;
    this.service=service;
    this.id=x++;
}
//inputs
const inputName = document.getElementById("txtName");
const inputAge = document.getElementById("txtAge");
const inputBreed = document.getElementById("txtBreed");
const inputService = document.getElementById("txtService");

function isValid(aPet){
    let validation =true;//assuming everything is correct
    inputName.classList.remove("alert-error");
    inputService.classList.remove("alert-error");


    if(aPet.name==""){
        validation=false;
        inputName.classList.add("alert-error");
    }
    if(aPet.service==""){
        validation=false;
        inputService.classList.add("alert-error");
    }
    
    return validation;
}

function register(){
    //get the values from the HTML
    let newPet = new Pet(inputName.value,inputAge.value,inputBreed.value,inputService.value);
    
    if(isValid(newPet)==true){
        salon.pets.push(newPet);
        //displayCards();
        displayTable();
        clearInputs();
    }
}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputBreed.value="";
    inputService.value="";
}  

function deletePet(petID){
    let deleteIndex;
    for(let i=0;i<salon.pets.length;i++){
        let pet=salon.pets[i];
        if(petID==pet.id){
            deleteIndex = i;//postion of the pet 
        }
    }
    salon.pets.splice(deleteIndex,1);
    document.getElementById(petID).remove();//remove the element from the HTML
}

function search(){
    let inputSearch = document.getElementById("txtSearch").value;
    for(let i=0;i<salon.pets.length;i++){
        let pet=salon.pets[i];
        
        if(inputSearch.toLowerCase()==pet.name.toLowerCase()){
            document.getElementById(pet.id).classList.add("alert-search");
        }else{
            document.getElementById(pet.id).classList.remove("alert-search");
        }
    }
}

function init(){
    let pet1 = new Pet("Scooby",60,"Dane","Grooming");
    let pet2 = new Pet("Scrappy",60,"Dane","Vaccines");
    let pet3 = new Pet("Speedy",60,"Dane","Nail trimming");
    salon.pets.push(pet1,pet2,pet3);// add objs into array
    //displayCards();
    displayTable();
}

window.onload=init;//waiting to render the HTML first



