document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit',function(e){
    e.preventDefault()
    let tasks = document.getElementById('tasks')
    let text = document.getElementById('new-task-description').value
    let lee = document.createElement("li")
    let newTask = tasks.appendChild(lee)
    newTask.innerHTML = text + ` <button>X</button>`
    lee.querySelector('button').addEventListener('click',function(e){

      e.target.parentNode.remove()
    })
    form.reset(); 
  })
});
