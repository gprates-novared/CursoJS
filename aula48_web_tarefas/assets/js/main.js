function taskList() {
    const input = document.getElementById('input-teste-1');
    const tasksDiv = document.querySelector('.tasksDiv');
    const btnAddTask = document.querySelector('.btn-add-task');


    function createListItem() {
        const li = document.createElement('li');
        return li;
    }

    function clearInput() {
        input.value = '';
        input.focus();
    }

    function addTask(taskContent) {
        const li = createListItem();
        li.innerText = taskContent;
        tasksDiv.appendChild(li);
        createClearButton(li);
        saveTasks();
    }

    function createClearButton(li) {
        li.innerText += ' ';
        const clearButton = document.createElement('button');
        clearButton.innerText = 'Apagar';
        clearButton.title = 'Apagar essa tarefa';
        clearButton.className = 'clearButton';
        clearButton.type = 'submit';
        li.appendChild(clearButton);
    }


    btnAddTask.addEventListener('click', function enviarForm(event) {
        event.preventDefault();
        addTask(input.value);
        clearInput();
    });

    document.addEventListener('click', function deleteClearButton(event) {
        const el = event.target;

        if (el.classList.contains('clearButton')) {
            el.parentElement.remove();
            saveTasks();
        }
    });


    function saveTasks() {
        const liTasks = tasksDiv.querySelectorAll('li');
        const tasks = [];

        for (let t of liTasks) {
            let taskText = t.textContent.slice(0, -7);
            tasks.push(taskText);
        }

        const tasksJson = JSON.stringify(tasks);
        localStorage.setItem('tasks', tasksJson);
    }


    function loadTasks() {
        const tasks = localStorage.getItem('tasks');
        const tasksArray = JSON.parse(tasks);
        for (let taskText of tasksArray) {
            addTask(taskText);
        }
    }
    
    loadTasks()   
}

taskList();