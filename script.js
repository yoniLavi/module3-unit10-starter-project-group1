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

taskList.addEventListener("click", (event)=>{
    if (event.target.matches("button")){
        const targetElement =  event.target.dataset.element;
        let newArray = []
        console.log("Element " + targetElement + " To be deleted");
        for (let i = 0; i < tasks.length; i++){
            if (i === parseInt(targetElement))
                continue;
            else
                newArray.push(tasks[i]);
        }
        tasks = newArray;
        render();
    }
});

function addTask(){

    let value = input.value
    
    if (value === ""){
        showErrorMessage("Input cannot be empty");
        return;
    }
    tasks.push(value)

input.value = "";

render()


}

function render(){

    list.innerHTML = "";

    const statusPane = document.querySelector(".statusSection");
    statusPane.classList.add('hidden');
    
    for(let i=0;i<tasks.length;i++){
        let li = document.createElement("li")
        const button = document.createElement("button");
        button.textContent = "Delete Me";
        button.classList.add("delButton");
        button.setAttribute("data-element", i);

        li.textContent = tasks[i]
        li.appendChild(button);
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
