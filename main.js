// style of body .
document.body.style = "display: flex; align-items: center; flex-direction: column; width: 100%; height: 100vh; margin:0;";

// container
let container = document.createElement("div");
container.style = "width: 100%;height: 100vh;display: flex;align-items: center;flex-direction: column;margin: 0 30px;max-width: 95%;";

// create form container and style it .
let form = document.createElement("div");
form.className = "form";
form.style = "background-color: rgb(221, 221, 221);width: 500px;margin: 20px 30px 0px;padding: 20px;border-radius: 10px;display: flex;justify-content: space-between;gap: 20px;max-width: 90%;margin: 20px 20px 0;";

// create input and style it .
let taskInp = document.createElement("input");
taskInp.type = "text";
taskInp.style = "width: 300px; padding: 10px; border-radius: 10px; border:none";

// create add btn and style it .
let addBtn = document.createElement("button");
addBtn.innerHTML = "Add Task";
addBtn.style = "padding: 10px; background-color: red; color: white; font-size: 16px; font-weight: bold; border-radius: 10px; cursor: pointer";

// append form's elements .
form.append(taskInp);
form.append(addBtn);

// append form in body .
container.append(form);
document.body.append(container);




let boxTasks = document.createElement("div");
  boxTasks.style = "background-color: rgb(221, 221, 221);width: 500px;margin: 20px 30px 0px;padding: 20px;border-radius: 10px;display: flex;justify-content: space-between;flex-direction: column;gap: 10px;max-width: 90%;margin: 20px;";


 let arrValue = window.localStorage.tasks
  ? window.localStorage.tasks.split(",")
  : [];

addBtn.onclick = function () {
  if (taskInp.value === "") {
    return;      
  }

  let task = document.createElement("div");
  task.style = "padding: 10px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; background-color: white";

  let taskText = document.createElement("span");
  taskText.style = "max-width: 70%;overflow: hidden;display: flex;flex-wrap: wrap;"

  let delBtn = document.createElement("button");
  delBtn.innerHTML = "Delete";
  delBtn.style = "padding: 10px; background-color: red; color: white; font-size: 14px; border-radius: 10px; cursor:pointer"

  taskText.innerHTML = taskInp.value;  

  arrValue.push(taskInp.value)

  window.localStorage.setItem("tasks", arrValue);
  
  task.append(taskText);
  task.append(delBtn);
  boxTasks.append(task);

  delBtn.onclick = function () {
    task.remove();
     let index = arrValue.indexOf(taskText.innerHTML);

    arrValue.splice(index, 1);

    window.localStorage.setItem("tasks", arrValue);

    if (boxTasks.children.length === 0) {
       boxTasks.remove()
    }
  }

  taskInp.value = "";
  container.append(boxTasks);
  document.body.append(container);
  
}


for (let i = 0; i < arrValue.length; i++) {
    
    let task = document.createElement("div");
    task.style = "padding: 10px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; background-color: white";

    let taskText = document.createElement("span");
    taskText.innerHTML = arrValue[i];

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.style = "padding: 10px; background-color: red; color: white; font-size: 14px; border-radius: 10px; cursor:pointer";

    task.append(taskText);
    task.append(delBtn);
    boxTasks.append(task);

    delBtn.onclick = function () {
        task.remove();

        let index = arrValue.indexOf(taskText.innerHTML);

        if (index !== -1) {
            arrValue.splice(index, 1);
        }

        if (boxTasks.children.length === 0) {
            boxTasks.remove();
        }

        window.localStorage.setItem("tasks", arrValue);
    };
    container.append(boxTasks);
    document.body.append(container);
}
