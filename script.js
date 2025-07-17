const inputbox = document.getElementById("input");
const list = document.getElementById("list");

function addtask(){
    if( inputbox.value === ''){
        alert("write something first you dumass!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    savedata();
}
//fonction to add the checked class when LI is clicked 
//and to remove li when span is clicked
list.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
    
}, false);
//fonction to save items inside list
function savedata() {
    localStorage.setItem("data", list.innerHTML);
}
// fonction to show the saved data
function showtask() {
    list.innerHTML = localStorage.getItem("data");
}
showtask();
//code to add task when the enter button is pressed
inputbox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addtask();
    }
});
