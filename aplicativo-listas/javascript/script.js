function saveTasks() {
    const tasks = [];
    document.querySelectorAll('li').forEach((task) => {
        tasks.push({
            text: task.querySelector('span').textContent.trim(),
            completed: task.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(task => {
            addTaskToList(task.text, task.completed);
        });
    }
}

function addTaskToList(taskText, completed = false) {
    const li = document.createElement('li');
    

    const span = document.createElement('span');
    span.textContent = taskText;
    
    const completeButton = document.createElement('button');
    completeButton.textContent = '✔️';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', () => {
        li.classList.toggle('completed');
        
        const positiveMsg = document.createElement('div');
        positiveMsg.classList.add('positive-msg');
        positiveMsg.textContent = 'Tarefa concluída!';
        li.appendChild(positiveMsg);

        setTimeout(() => {
            positiveMsg.remove();
        }, 2000); 
        
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(completeButton);

    if (completed) {
        li.classList.add('completed');
    }

    document.getElementById('task-list').appendChild(li);
    saveTasks(); 
}

document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTaskToList(taskText);
        taskInput.value = '';
    }
});

function clearAllTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    localStorage.removeItem('tasks');
}

document.getElementById('clear-tasks-btn').addEventListener('click', clearAllTasks);

window.addEventListener('load', loadTasks);
