/** Fetches tasks from the server and adds them to the DOM. */
function loadTasks() {
  console.log("lololl");
  fetch('/list-contact').then(response => response.json()).then((contactsList) => {
    const taskListElement = document.getElementById('contact-list');
    contactsList.forEach((task) => {
    taskListElement.appendChild(createTaskElement(task));
    console.log(task);

    })
    console.log(contactsList);

  });

}

/** Creates an element that represents a task, including its delete button. */
function createTaskElement(task) {
  const taskElement = document.createElement('li');
  taskElement.className = 'task';

  const nameElement = document.createElement('span');
  const emailElement = document.createElement('span');
  const phoneElement = document.createElement('span');
  const messageElement = document.createElement('span');

  nameElement.innerText = task.name;
  emailElement.innerText = task.email;
  phoneElement.innerText = task.phone;
  messageElement.innerText = task.message;

  const deleteButtonElement = document.createElement('button');
  deleteButtonElement.innerText = 'Delete';
  deleteButtonElement.addEventListener('click', () => {
  deleteTask(task);

  // Remove the task from the DOM. 
  taskElement.remove();
  });

  taskElement.appendChild(nameElement);
  taskElement.appendChild(emailElement);
  taskElement.appendChild(phoneElement);
  taskElement.appendChild(messageElement);
                                 
  taskElement.appendChild(deleteButtonElement);
  return taskElement;
}

/** Tells the server to delete the task. */
function deleteTask(task) {
  const params = new URLSearchParams();
  params.append('id', task.id);
  fetch('/delete-task', {method: 'POST', body: params});
}
