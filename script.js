 //selectors
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
dropOption= document.querySelector(".dropdown");
 
//event listeners 

todoButton.addEventListener('click', addTodo);
todoList.addEventListener("click", deleteTodo); 
dropOption.addEventListener("click",dropTodo);

//functions
function addTodo(e){
e.preventDefault();//this to help avoid automatic submission when you click the add button

// todo DIV this will help us add our check and delete button and also add list too,instead of having to add directly on our html file
const todoDiv =document.createElement('div');
todoDiv.classList.add("todo");
//creating list(li)
const newTodo =document.createElement('li');
newTodo.innerText=todoInput.value;//this allows you to be a ble to write in your input tag and when you click on add,it comes down to where it shows you delete and check button
newTodo.classList.add('todo-item');
 todoDiv.appendChild(newTodo);

//check button
const checkButton= document.createElement('button');
checkButton.innerHTML='<i class="fa fa-check"></i>';
checkButton.classList.add("check-btn");
todoDiv.appendChild(checkButton);
//delete button
const trashButton= document.createElement('button');
trashButton.innerHTML='<i class="fa fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//attach the todoDiv to the todo-list on html file
todoList.appendChild(todoDiv)

//clear todo input value.(so when you type in the input tag and you click add text,nothing remains there.)
todoInput.value="";
}
//delete ITEm
function deleteTodo(e){
    const item= e.target;
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("collapse"); 
        todo.addEventListener('transitionend', function(){
         todo.remove();
        });
    }
    if(item.classList[0]==="check-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
    
}
//this is to help show a dropdown list of things that have been done and yet to be done.
function dropTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo){ //access to each todo inputted will be possibleif you use forEach and .childNodes.the e.target.value is targetting the value in the option all,checked,unchecked 
        switch(e.target.value){
            case"all":
            todo.style.display="flex";
            break;
            case "checked":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
                case "unchecked":
                    if(!todo.classList.contains("completed")){
                        todo.style.display="flex";
                    }else{
                        todo.style.display="none";
                    }
                    break;
                }
                
    });    
}

//local storage helps save your stuff to app
function saveTodos(todo){

}


   
 
 