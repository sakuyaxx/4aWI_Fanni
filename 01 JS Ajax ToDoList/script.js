//JS OBJECT NOTATION

//var task1 = {name: "putzen", isDone: false, responsible: "Danny"}
//var task2 = {name: "schwimmen", isDone: true, responsible: "Andrea"}
//var task3 = {name: "anime schauen", isDone: false, responsible: "Alex"}

//const tasks = [task1, task2, task3];
const tasks = [];

printTaskList();

document.getElementById("addTask").addEventListener("click", function(){
   addTask();
});

function addTask(){
    let newTask = document.getElementById("txtNewTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;
    let task = {name: newTask, responsible: taskResponsible, isDone: false};

    tasks.push(task);
    printTaskList();
}

function printTaskList(){
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}

function markTask(element){
let index = element.attributes["data-index"].value;
let isChecked = element.checked;

tasks[index].isDone = isChecked;
printTaskList();
}

function getHTMLTasks(){
    let html = "";
    let index = 0;
    tasks.forEach(element => {
        let checked = "";
        if(element.isDone){
            checked = "checked";
        }
        html += "<li><input onClick='markTask(this)' name='checkbox' data-index='" + index + "' type = 'checkbox'" + checked + "/>" + element.name + " - " + element.responsible + "</li>";
        index++; //index für isDone
        console.log(element);
    });
    return html;
}
