
let tasks = []


function getStoreTasks()
{
    let retrievedTasks = JSON.parse(localStorage.getItem("tasks")) 
    if(retrievedTasks == null)
    {
        tasks = []
    }else{
        tasks = retrievedTasks
    }
   
}

getStoreTasks()



function getDate()
{
    let foe = new Date()
    let ma = foe.getHours() +":"+ foe.getMinutes()+" | "+foe.getUTCDate() + "/" + (foe.getMonth() + 1) + "/" +foe.getFullYear() 
    return ma
}

function addTasks()
{
    document.getElementById("i-task").innerHTML = ""

    let index = 0
    for(task of tasks)
    {
    
            let content = `      
            <div class="f-task" id="i-task">
            <div class="task ${task.isDone ? 'done':''}" id="id-task">
                <div class="task-info">
                    <h3>${task.title}</h2>
                    
                    <div>
                        <span class="material-symbols-outlined">calendar_month</span>
                        <span>${task.data}</span>
                    </div>
                </div>
                    <div class="but-action">
                    ${task.isDone ? `<button onclick="doneTask(${index})" class="but-task done" id="but-close"><span class="material-symbols-outlined">close</span></button>`:`<button onclick="doneTask(${index})" class="but-task done" id="but-done"><span class="material-symbols-outlined">done_all</span></button>`}
                        
                        <button onclick="editTask(${index})"class="but-task" id="but-edit"><span class="material-symbols-outlined">edit</span></button>
                        <button onclick="deleteTask(${index})" class="but-task" id="but-delete"><span class="material-symbols-outlined">delete</span></button>
                    </div>
            
            </div>
        </div>    `
            document.getElementById("i-task").innerHTML += content
            index++

    }

}



addTasks()
document.getElementById("but-add").addEventListener("click",function(){
 let foo = prompt("Enter tasks:");
 if(foo == ""){
    return confirm("Can not tasks be empty")
 }
 let tasksx = {
    "title": foo,
    "data": getDate(),
    "isDone": false
 }
 tasks.push(tasksx)
 addTasks()
 storeTasks()


  
})


function deleteTask(index)
{
        tasks.splice(index, 1);
        storeTasks()
        addTasks()   
}


function doneTask(index)
{
    let task = tasks[index]
    if(task.isDone){
        task.isDone = false
    }else{
        task.isDone = true
    }
    storeTasks()
    addTasks() 
       
  
}

function editTask(index)
{
    let fou = prompt("Enter tasks:",tasks[index].title);
    tasks[index].title = fou
    addTasks()
    storeTasks()

}
   
//=========== STORE FUNCTION ============//
function storeTasks()
{
    let getTasks = JSON.stringify(tasks)
    localStorage.setItem("tasks", getTasks)
}


