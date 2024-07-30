const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const duaDateInput = document.getElementById("dua-date");
const searchDateInput = document.getElementById("search-date");


function addTask(){
    if(inputBox.value === ''){
        alert("You must Add Somthing Task Here!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        
    }
    inputBox.value = "";    
    saveData();
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();

// TOGGLE THEMES
function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}


// Add task when Enter key is pressed
inputBox.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

 // Search tasks by dua date
 function searchTasks() {
    let searchDate = searchDateInput.value;
    let tasks = document.querySelectorAll("#list-container li");
    tasks.forEach(task => {
        let taskDate = task.querySelector(".dua-date").textContent;
        if (formatDateInput(taskDate) === searchDate) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }
    });
}

// Format date to readable format
function formatDate(date) {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Convert formatted date back to input value format
function formatDateInput(date) {
    let d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}











