
import { prepareObject,addTaskOnStorage } from './logic.js'

const app = document.querySelector('.app');
let domElements = {
    textBtn: app.querySelector('.addBtn'),
    newTask: app.querySelector('.newTask'),
    taskHistory: app.querySelector('.getHistoryTask'),
    taskListss: app.querySelector('.taskListAll'),
  
    get getTextBtn() { return this.textBtn },
    get getNewText() { return this.newTask },
    get getTaskHistory() { return this.taskHistory },
    get getTaskLists() { return this.taskListss },
  

};

function init() {
    registerEventHandlers();
}

function registerEventHandlers() {
    buttonsEventHandeler();
}


function buttonsEventHandeler() {
    domElements.getTextBtn.addEventListener('click', addTaskActions);
    // domElements.getTaskHistory.addEventListener('click', updateCounter);
    
}


function addTaskActions() {
    const task = app.querySelector('.newTask').value;
    const id = Date.now();
    prepareObject(id,task);
    addTaskOnStorage();
    prepareTask(task, id, false);
}



function prepareTask(value, id, status) {

    const task = document.createTextNode(value);
    const liElement = createEleme('li', { 'class': 'task', 'id': id });
    const taskDelBtn = createEleme('input', { 'type': 'button', 'class': 'taskDeleteBtn', 'value': 'delete', 'id': id / 1000 });
    let taskcheckbox;
    status ? taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox', 'id': id / 100, 'checked': '' }) : '';
    status ? '' : taskcheckbox = createEleme('input', { 'type': 'checkbox', 'class': 'taskcheckbox', 'id': id / 100 });
    taskcheckbox.addEventListener('click', (e) => { updateTaskStatusHandler(e) });
    taskDelBtn.addEventListener('click', (e) => { deleteTaskHandler(e) });
    appendElements(liElement, task, taskcheckbox, taskDelBtn);
    insertTaskIntoDOM(liElement);
}

function createEleme(value, addAtt) {
    const element = document.createElement(value);//
    return addAttributes(element, addAtt);//here have to check addAtt identifier is object
}

function addAttributes(mainElement, setAtt) {
    const key = Object.keys(setAtt);
    const value = Object.values(setAtt);
    for (let i = key.length - 1; i >= 0; i--) {
        mainElement.setAttribute(key[i], value[i]);
    }
    return mainElement;
}

function appendElements(parentNode, ...appChild) {
    for (let i = appChild.length - 1; i >= 0; i--) {
        parentNode.appendChild(appChild[i]);
    }
}


export function insertTaskIntoDOM(node) {
    const element = domElements.getTaskLists;
    element.appendChild(node);
}

init();