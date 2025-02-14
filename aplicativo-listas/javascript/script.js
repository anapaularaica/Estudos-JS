// Função para salvar as tarefas no LocalStorage
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

// Função para carregar as tarefas do LocalStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(task => {
            addTaskToList(task.text, task.completed);
        });
    }
}

// Adiciona uma nova tarefa à lista
function addTaskToList(taskText, completed = false) {
    const li = document.createElement('li');
    
    // Criando o texto da tarefa
    const span = document.createElement('span');
    span.textContent = taskText;
    
    // Adiciona o botão de concluir
    const completeButton = document.createElement('button');
    completeButton.textContent = '✔️';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', () => {
        li.classList.toggle('completed');
        
        // Adicionando a mensagem positiva
        const positiveMsg = document.createElement('div');
        positiveMsg.classList.add('positive-msg');
        positiveMsg.textContent = 'Tarefa concluída!';
        li.appendChild(positiveMsg);

        setTimeout(() => {
            positiveMsg.remove();
        }, 2000); // Mensagem positiva desaparece depois de 2 segundos
        
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(completeButton);

    if (completed) {
        li.classList.add('completed');
    }

    document.getElementById('task-list').appendChild(li);
    saveTasks(); // Salva a lista sempre que uma tarefa é adicionada
}

// Evento para adicionar uma tarefa nova
document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTaskToList(taskText);
        taskInput.value = '';
    }
});

// Função para apagar todas as tarefas
function clearAllTasks() {
    // Apaga as tarefas da tela
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    // Apaga as tarefas do LocalStorage
    localStorage.removeItem('tasks');
}

// Evento para apagar todas as tarefas
document.getElementById('clear-tasks-btn').addEventListener('click', clearAllTasks);

// Carregar tarefas quando a página for carregada
window.addEventListener('load', loadTasks);
