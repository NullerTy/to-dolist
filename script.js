function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText;
        span.onclick = function() {
            this.parentElement.classList.toggle('completed');
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            this.parentElement.remove();
        };

        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

const toggleModeButton = document.getElementById('toggleMode');
toggleModeButton.onclick = function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleModeButton.textContent = 'Light Mode';
    } else {
        toggleModeButton.textContent = 'Dark Mode';
    }
};
