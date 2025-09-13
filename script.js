// Sélection des boutons
const addTaskBtn = document.getElementById('addTaskBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const tasksContainer = document.getElementById('tasksContainer');

// Action quand on clique sur "Ajouter une tâche"
addTaskBtn.addEventListener('click', () => {
  const task = document.createElement('div');
  task.textContent = 'Nouvelle tâche';
  task.className = 'task';
  tasksContainer.appendChild(task);
});

// Action quand on clique sur "Supprimer toutes les tâches"
deleteAllBtn.addEventListener('click', () => {
  tasksContainer.innerHTML = '';
});
