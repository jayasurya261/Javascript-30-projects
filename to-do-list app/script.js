const inputBox1 = document.getElementById("inputBox");
const listcontainer1 = document.getElementById("listcontainer");
function addTask(){
    if(inputBox1.value ===''){
        alert("You must write somthing!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox1.value;
        listcontainer1.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox1.value = "";
    saveData();
}

listcontainer1.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listcontainer1.innerHTML);
}
function showData(){
    listcontainer1.innerHTML = localStorage.getItem("data");
}
showData();