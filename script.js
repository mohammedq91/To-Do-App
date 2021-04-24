const form = document.querySelector('#form');
var clear = document.querySelector('#clear') 
const input = document.getElementById('task')
var list = document.getElementById('taskList');
const li = document.createElement('li')
const removeButton = document.getElementById('remove')



//load submit button event when task is enterered
form.addEventListener('click', function (e){
    e.preventDefault();
    
    if (input.value == ""){
       // window.alert("Please enter an item!")
    } else {
        //(input.value != "");
        addTask(input.value);
        // clearing input field after task submission
    input.value = "";
    };
});

function addTask(task){
    // create new line
    const li = document.createElement('li');

     // add task to the new line
    //li.textContent = input.value 

    li.innerHTML = '<button id="remove"> x </button>' + input.value
         
    // append the new line to the task-listS
    list.appendChild(li);
};

clear.addEventListener('click', function(){
   list.innerHTML = "";
});

removeButton.onclick =function(){
    //list.removeChild(li)
    li.value =""
    list.appendChild(li)

};

// cross out task when completed