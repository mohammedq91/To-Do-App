const form = document.querySelector('#form');
var clear = document.querySelector('#clear')
const input = document.getElementById('task')
var list = document.getElementById('taskList');


form.addEventListener('submit', function (e){
    e.preventDefault();
    
    if (input.value === ""){
       window.alert("Please enter an item!");
    } else {
        addTask(input.value);
  
    input.value = "";
    };
});


function addTask(task){
    const li = document.createElement('li');
    const deleteButton = document.createElement('button')
    deleteButton.textContent = " x ";
    li.appendChild(deleteButton);
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);


    deleteButton.addEventListener('click', function (e){
        li.remove()
    });


    li.addEventListener('click', function(e){
        if (li.style.textDecoration ==="line-through"){
            li.style.textDecoration = 'none'
        } else {
            li.style.textDecoration = "line-through"
        };
     });

};

clear.addEventListener('click', function(){
   //list.innerHTML = "";
   list.remove()
});

