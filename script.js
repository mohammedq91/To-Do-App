const form = document.querySelector('#form');
var clear = document.querySelector('#clear') 
const input = document.getElementById('task')
var list = document.getElementById('taskList');



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
    const li = document.createElement('li');
    const deleteButton = document.createElement('button')
    deleteButton.textContent = " x ";
    li.appendChild(deleteButton);
    li.appendChild(document.createTextNode(input.value));

    //li.innerHTML = '<button id="remove"> x </button>' + input.value
    list.appendChild(li);

    deleteButton.addEventListener('click', function (){
        //const button = e.target
        li.remove()
    });

};

clear.addEventListener('click', function(){
   list.innerHTML = "";
});


function strikeTask(e){
    button = e.target
    if (tick == "complete"){
        tick.style.textDecoration = "line-through"
    } else {
        tick.style.textDecoration = "none"
    }
}

