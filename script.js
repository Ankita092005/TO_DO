function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskInput.value;
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}
