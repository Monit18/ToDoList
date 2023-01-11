var date = new Date();
var taskName = document.querySelector("#taskName");
var taskList = document.querySelector("#taskList");
count = 0;
document.getElementById("dateTime").innerHTML = date.toLocaleString();

document.querySelector("#addTask").addEventListener('click',function(){
    if(taskName.value == "")
        alert("Enter the task name");
    else
    {
        count++;
        taskList.innerHTML += '<div class="task" id="task'+count+'"> <span id="text'+count+'">'+taskName.value + '</span> <button class="check-btn" id="button'+count+'" onclick="changeStatus('+count+')"><i class="fas fa-check"></i></button> <button class="delete-btn" onclick="removeDiv('+count+')"><i class="fas fa-trash"></i></button></div><br><br>';
        taskName.value = '';
    }
})

function removeDiv(id)
{
    var flag = confirm("Are you want to delete this task ? ");
    flag ? document.getElementById("task"+id).remove(): " ";
}

function changeStatus(id)
{
    var taskTitle = document.getElementById("text"+id);
    taskTitle.style.textDecoration = 'line-through';
}