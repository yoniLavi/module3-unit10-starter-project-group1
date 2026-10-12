let tasks = []

let input = document.getElementById("taskInput")
let btn = document.getElementById("addBtn")
let list = document.getElementById("taskList")
let counter = document.getElementById("counter")

btn.addEventListener("click", addTask)

    function addTask(){

    let value = input.value
    
    if (value === ""){
        showErrorMessage("Input cannot be empty");
        return;
    }
    tasks.push(value)

    render()

}

function render(){

for(let i=0;i<tasks.length;i++){

let li = document.createElement("li")
li.textContent = tasks[i]

list.appendChild(li)

}

counter.textContent = "Tasks: " + tasks.length

}

function showErrorMessage(message){
    const statusMessage = document.getElementById("errorMessage");
    const statusPane = document.querySelector(".statusSection");
    statusMessage.textContent = message;
    statusPane.classList.remove('hidden');
}
