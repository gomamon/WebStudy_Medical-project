


//svg 
//var removeSVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="408.483px" height="408.483px" viewBox="0 0 408.483 408.483" style="enable-background:new 0 0 408.483 408.483;" xml:space="preserve"><g><g><path class="fill" d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"/><path class="fill" d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
//User click on the add button
//If there is any text inside the item field, add that text to the todo list

document.getElementById('add').addEventListener('click',function(){
    var value = document.getElementById('item').value;
    if(value) {
        addItem(value) ;
        document.getElementById('item').value = '';
    }
   
});

function removeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;

    data.list.splice(data.list.indexOf(value), 1);
    console.log(data);

    parent.removeChild(item);
    dataObjectUpadted();
}

function addItem(text){
    
    var list = document.getElementById('list');

    var item = document.createElement('li');
    item.innerText = text;

   // var buttons = document.createElement('div');
   // buttons.classList.add('buttons');

  //  var remove = document.createElement('button');
   // remove.classList.add('remove');
    //remove.innerHTML = removeSVG;
    //remove item
    //remove.addEventListener('click', removeItem);

    //buttons.appendChild(remove);
    //item.appendChild(buttons); 

    list.insertBefore(item, list.childNodes[0]);
}

/*
function dataObjectUpadted(){
    //function dataObjectUpadted('todoList', JSON.stringify(data));
}


function removeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;

    if(id==='todo'){
        data.todo.splice(data.todo.indexOf(value), 1);
    }
    else{
        data.completed.splice(data.completed.indexOf(value), 1);
    }
    console.log(data);

    parent.removeChild(item);
    dataObjectUpadted();
}
function completeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;

    //check if item is complted or not
    var target = (id ==='todo') ? document.getElementById('completed'):document.getElementById('todo') ;

    if(id==='todo'){
        data.todo.splice(data.todo.indexOf(value),1);
        data.completed.push(value);
    }
    else{
        data.completed.splice(data.completed.indexOf(value),1);
        data.todo.push(value);
    }

    console.log(data);
 

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
    dataObjectUpadted();

}   

function addItemTodo(text){
    
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;
    //remove item
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;
    //complete item
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons); 

    list.insertBefore(item, list.childNodes[0]);
}

*/