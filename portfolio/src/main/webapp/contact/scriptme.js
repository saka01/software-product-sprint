/** Fetches tasks from the server and adds them to the DOM. */
function loadTasks() {
  fetch('/list-contact').then(response => response.json()).then((contactsList) => {
    const taskListElement = document.getElementById('contact-list');
    contactsList.forEach((task) => {
    taskListElement.appendChild(createTaskElement(task));
    })
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

  nameElement.className = 'label';
  emailElement.className = 'label';
  phoneElement.className = 'label';
  messageElement.className = 'label';

  nameElement.innerText = "Name: " + task.name;
  emailElement.innerText = "Email: " + task.email;
  phoneElement.innerText = "Phone: " + task.phone;
  messageElement.innerText = "Message: " + task.message;

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
