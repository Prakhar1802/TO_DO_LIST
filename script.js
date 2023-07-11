let input_box = document.getElementById("input_task");
let list_container = document.getElementById("list-container");
document.querySelector("#add_btn").onclick = ()=>{
    if(input_box.value === ""){
        alert("You Must Write Something There!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_box.value = "";
    storedata();
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storedata();
    }
}, false)

function storedata(){
    localStorage.setItem("data", list_container.innerHTML);
}
function showdata(){
    list_container.innerHTML = localStorage.getItem("data");
}
showdata();
