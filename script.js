let tasks = []

let input = document.getElementById("taskInput")
let btn = document.getElementById("addBtn")
let list = document.getElementById("taskList")
let counter = document.getElementById("counter")

btn.addEventListener("click", addTask)
input.addEventListener("keypress", function (event) {
    if(event.key === "Enter") {
        btn.click();
    }
});

function addTask(){

let value = input.value

tasks.push(value);
input.value = "";

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
