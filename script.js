//Establish variables and grab tags from HTML
var input = document.getElementById('task');
var sumbit = document.QuerySelector('#submit')
var clear = document.getElementById('clear')
console.log(task)
console.log(submit)
console.log(clear)


// submit input

input.onsubmit = function(addTask){
    if (input.value != " "){
        return input.value = addTask;
        console.log(addTask);
     input.value = ' '
    }

}
addTask()
console.log(addTask)



//input.submit event to submit text


//open list when input is submitted


//enable cross item when completed


//deleting item


//clear list










