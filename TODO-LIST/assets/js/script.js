let inputBox = document.getElementById("input_box")
let listContainer = document.getElementById("list_container")
let btn = document.getElementById("btn")


btn.addEventListener("click",()=>{
    let input = inputBox.value
    if(input == ""){
        alert("Please enter a task")
        }else{
            let li = document.createElement("li")
            li.innerText = input
            listContainer.appendChild(li)
            let span=document.createElement("span")
            span.innerText="\u00d7"
            li.appendChild(span)
            inputBox.value = ""
            saveData()
  

        }
})
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
    saveData()
})

function saveData(){
    localStorage.setItem("task",listContainer.innerHTML)
}
  function ShowTask(){
    let data = localStorage.getItem("task")
    if(data == null){
        listContainer.innerHTML = "<h3>Nothing to show</h3>"
        }else{
            listContainer.innerHTML = data
        }
  }
  ShowTask()