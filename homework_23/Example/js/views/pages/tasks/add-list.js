import {generateID} from '../../../helpers/utils.js';

import Component from '../../../views/component.js';

import Tasks from '../../../models/tasks.js';

class AddAndList extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`     
                <h1 class="page-title">Tasks List</h1>
                
                <div class="task-add">
                    <input class="task-add__title" type="text" placeholder="Task title"> </br>
                    <textarea class="task-add__description" placeholder="Task description"> </textarea> </br>
                    <button class="task-add__btn-add button" disabled>Add Task</button>
                </div>       
                
                <div class="tools"> 
                    <h6>Number of tasks -  <div id="count">${(this.tasks.length === 0) ? 'no tasks': this.tasks.length} </div>  </h6>  
                    <button class="tasks-remove button" > Remove list</button>
                </div>
                
                <div class="tasks">
                    <div class="tasks__list">
                        ${this.tasks.map(task => this.getTaskHTML(task)).join('\n ')}
                    </div>
                </div>            
            `);
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const addTaskTitle = document.getElementsByClassName('task-add__title')[0],
			addTaskBtn = document.getElementsByClassName('task-add__btn-add')[0],
			tasksContainer = document.getElementsByClassName('tasks')[0],
			tasksList = document.getElementsByClassName('tasks__list')[0],
            removeTasksBtn = document.getElementsByClassName('tasks-remove')[0],
            addDescription = document.getElementsByClassName('task-add__description')[0],
            count = document.getElementById("count");

        if(document.getElementsByClassName('tasks__list')[0].children.length === 0){
            document.getElementsByClassName('tasks-remove')[0].disabled = true;
        }


		addTaskTitle.addEventListener('keyup', () => addTaskBtn.disabled = !addTaskTitle.value.trim());
        addTaskBtn.addEventListener('click', () => this.addTask(addTaskTitle, addDescription, addTaskBtn, tasksList, count, removeTasksBtn));
        removeTasksBtn.addEventListener('click', () => this.removeTasks(tasksList, removeTasksBtn, count));


		tasksContainer.addEventListener('click', event => {
            const target = event.target,
                targetClassList = target.classList;

            switch(true) {
                case targetClassList.contains('task'):
                case targetClassList.contains('task__title'):
                    this.redirectToTaskInfo(target.dataset.id);
                    break;

                case targetClassList.contains('task__btn-remove'):
                    this.removeTask(target.parentNode.parentNode);
                    break;
            }
        });
    }

    removeTasks(tasksList, removeTasksBtn, count){
        if (confirm('Are you sure?')) {
            count.innerText = 'no tasks';
            this.tasks = [];
            Tasks.setTasksToLS(this.tasks);
            removeTasksBtn.disabled = true;
            tasksList.remove();
        }
    }

    addTask(addTaskTitle, addDescription, addTaskBtn, tasksList, count, removeTasksBtn) {
		const newTask = {
			id: generateID(),
			title: addTaskTitle.value.trim(),
			status: 'In Progress',
            description: addDescription.value.trim()
		};

        this.tasks.push(newTask);
        Tasks.setTasksToLS(this.tasks);

		this.clearAddTask(addTaskTitle, addTaskBtn);

        tasksList.insertAdjacentHTML('beforeEnd', this.getTaskHTML(newTask));
        count.innerText = tasksList.children.length;
        removeTasksBtn.disabled = false;
    }

    getTaskHTML(task) {
        return `
            <div class="task" data-id="${task.id}">
                <a class="task__title" data-id="${task.id}">${task.title}</a>
                
                <div class="task__buttons">
                    <a class="task__btn-edit button" href="#/task/${task.id}/edit">Edit</a> 
                    <a class="task__btn-done button">Done</a> 
                    <a class="task__btn-remove button">Remove</a>   
                </div>                            
            </div>
        `;
    }

    clearAddTask(addTaskTitle, addTaskBtn) {
		addTaskTitle.value = '';
        addTaskBtn.disabled = true;
    }

    redirectToTaskInfo(id) {
        location.hash = `#/task/${id}`;
    }

    removeTask(taskContainer) {
        const count = document.getElementById("count");
        if (confirm('Are you sure?')) {
            this.tasks = this.tasks.filter(task => task.id !== taskContainer.dataset.id);
            Tasks.setTasksToLS(this.tasks);
            taskContainer.remove();
            count.innerText = (count.textContent == 1) ? 'no tasks' : `${count.textContent - 1}`;
        }
        if(document.getElementsByClassName('tasks__list')[0].children.length === 0){
            document.getElementsByClassName('tasks-remove')[0].disabled = true;
        }
    }
}

export default AddAndList;