function addItem() {
    add();
}

show();

function get_todos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}


function add() {
    var item = document.getElementById('item').value;
    var todos = get_todos();
    if (item !== '') {
        todos.push(item);
    }
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    document.getElementById('item').value = '';
    return false;
}


function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li><span class="todos-text">' + todos[i] + '</span><button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}


function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}