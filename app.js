var userInput = document.querySelector("#userInput")
var div = document.querySelector ("ol")
var globalArray = []

function TodoApp(){
    globalArray.push(userInput.value);
    console.log(globalArray);
    
    div.innerHTML ='';
    for(var i=0; i <globalArray.length; i++){
        div.innerHTML += `
        <li>${globalArray[i]}
        <button class="btn" onclick="remove(${i})">DELETE</button>
        <button class="btn" onclick="edit(${i})">EDIT</button>
        </li>`;
    }

    userInput.value =""

}

function remove(i){

    globalArray.splice(i, 1)

    div.innerHTML = "";

    for(var i=0; i <globalArray.length; i++){
        div.innerHTML += `
        <li>${globalArray[i]}
        <button class="btn" onclick="remove(${i})">DELETE</button>
        <button class="btn" onclick="edit(${i})">EDIT</button>
        </li>`;


}
}

function edit(i) {
    var newArray = prompt("Enter a new Value")
    globalArray[i] =newArray

    div.innerHTML = "";

    for(var i=0; i <globalArray.length; i++){
        div.innerHTML += `
        <li>${globalArray[i]}
        <button class="btn" onclick="remove(${i})">DELETE</button>
        <button class="btn" onclick="edit(${i})">EDIT</button>
        </li>`;
}
}
