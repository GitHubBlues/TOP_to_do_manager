import './style.css';
import { storageAvailable, projectsOnLoad } from './storage.js';
import { projectDB } from "./projects.js";
import { format, compareAsc } from 'date-fns';

import radialBtnsMenu  from './radialButtons.js';
import leftDOM from './left_panel.js';
import rightDOM from './right_panel.js';
import addListeners from './listeners.js';

import iDelete from "./img/3643729_delete_trash_icon.svg";
import iPencil from "./img/326602_edit_pencil_icon.svg";
import iDatabase from "./img/185097_database_icon.svg";
import iAdd from "./img/172525_plus_icon.svg";
import iFlag0 from "./img/2561440_flag_icon_light.svg";
import iFlag1 from "./img/2561440_flag_icon_medium.svg";
import iFlag2 from "./img/2561440_flag_icon_dark.svg";

const containerLHS = document.querySelector(".container-left");


let projectList = projectsOnLoad();
const leftPanelContent = leftDOM.onloadLeft(projectList);
addListeners.listenerDatabase();
addListeners.listenerDeleteProject();
addListeners.listenerShowProjectDescription();
addListeners.listenerAddProject();
radialBtnsMenu.listenerRadialMenu();
// radialBtnsMenu.enableRadianButtons
// addListeners.listenerEditProjectDescription();
// addListeners.listenerManageTasks();
// addListeners.listenerEditTask();
// addListeners.listenerDeleteTasks();
// addListeners.listenerAddTasks();
// addListeners.listenerSaveTask();
// addListeners.listenerCancelEditTasks();


function callback_showProjectDetails(e) {
    const containerRHS = document.querySelector(".container-right");
    deleteChildNodes(containerRHS);
    
    const projectName = e.target.innerText;
    let selectedProject 
    for (const item of projectList) {
        if (item.name == projectName){
           selectedProject = item;
        }
    }

    const titleContainerRight = rightDOM.mainTitleRight(selectedProject);
    const descriptionLabel = rightDOM.projectDescriptionLabel() ;   
    const description = rightDOM.displayDescription(selectedProject);
    const buttonTask = rightDOM.taskMgeBtn ();
    const buttonAddTask = rightDOM.taskAddBtn();
   
    containerRHS.append(titleContainerRight, descriptionLabel, description, buttonTask);
    addListeners.listenerEditProjectDescription(selectedProject);
    addListeners.listenerManageTasks();
}


function callback_deleteProject(e) {
    const panelRHS = document.querySelector(".container-right");
    const panelLHS = document.querySelector(".container-left");

    deleteChildNodes(panelRHS);
    deleteChildNodes(panelLHS);

    let projectName = e.target.previousSibling.firstChild.data;
    console.log(projectName);

    let i=0;
    for (const item of projectList){
        if (item.name == projectName) {
            projectList.splice(i,1); 
        }
        i += 1;
    }
    
    if (storageAvailable("localStorage")) {
          localStorage.setItem("projectList", JSON.stringify(projectList));
    }

    leftDOM.onloadLeft(projectList);

    addListeners.listenerDatabase();
    addListeners.listenerDeleteProject();
    addListeners.listenerShowProjectDescription();
}


function callback_addProject() {
    const panelRHS = document.querySelector(".container-right");
    const panelLHS = document.querySelector(".container-left");

    deleteChildNodes(panelRHS);
    deleteChildNodes(panelLHS);
    
    leftDOM.addProjectLoad(projectList);
    addListeners.listenerAddProject();
    addListeners.listenerInputAddProject();
}


function callback_inputAddProject(e) {
    if (e.key === 'Enter') {
        const newProject = document.querySelector(".input-box-add-project");
        
        let proj= projectDB();
        proj.name = newProject.value;
        proj.describe = "";
        projectList.push(proj);
    
        console.log(projectList);


        if (storageAvailable("localStorage")) {
            localStorage.setItem("projectList", JSON.stringify(projectList));
        }

        const panelLHS = document.querySelector(".container-left");
        deleteChildNodes(panelLHS);     
        const leftPanelContent = leftDOM.onloadLeft(projectList);
        addListeners.listenerDatabase();
        addListeners.listenerDeleteProject();
        addListeners.listenerShowProjectDescription();
        addListeners.listenerAddProject();   
    }

}


function callback_resetDatabase() {
    const panelRHS = document.querySelector(".container-right");
    const panelLHS = document.querySelector(".container-left");

    deleteChildNodes(panelRHS);
    deleteChildNodes(panelLHS);

    _resetDatabase();
    projectList = projectsOnLoad();

    leftDOM.onloadLeft(projectList);

    addListeners.listenerDatabase();
    addListeners.listenerDeleteProject();
    addListeners.listenerShowProjectDescription();

}


function callback_editProjectDescription() {
    const containerRHS = document.querySelector(".container-right");
    const panelLHS = document.querySelector(".container-left");
    const titleContainerRight = document.querySelector(".title-panel-right");
    const projectName = titleContainerRight.innerHTML;
        
    let selectedProject 
    for (const item of projectList) {
        if (item.name == projectName){
           selectedProject = item;
        }
    }
    console.log(selectedProject);
    const titContainerRight = rightDOM.mainTitleRight(selectedProject);
    const descriptionLabel = rightDOM.projectDescriptionLabel();   
    const descriptionInput = rightDOM.editDescriptionUI(selectedProject);
    const buttonTask = rightDOM.controlsAddEditTask();
   
    deleteChildNodes(containerRHS);

    containerRHS.append(titContainerRight, descriptionLabel, descriptionInput, buttonTask);

    addListeners.listenerSaveDescription();
    addListeners.listenerCancelEditDescription();
}


function callback_cancelEditDescription() {
    const containerRHS = document.querySelector(".container-right");
    const titleContainerRight = document.querySelector(".title-panel-right");
    const projectName = titleContainerRight.innerHTML;
    
    deleteChildNodes(containerRHS);
    
    let selectedProject 
    for (const item of projectList) {
        if (item.name == projectName){
           selectedProject = item;
        }
    }

    const descriptionLabel = rightDOM.projectDescriptionLabel() ;   
    const description = rightDOM.displayDescription(selectedProject);
    const buttonTask = rightDOM.taskMgeBtn ();
       
    containerRHS.append(titleContainerRight, descriptionLabel, description, buttonTask);
    addListeners.listenerEditProjectDescription();
}

function callback_saveDescription() {
    const containerRHS = document.querySelector(".container-right");
    let titleContainerRight = document.querySelector(".title-panel-right");
    const projectName = titleContainerRight.innerHTML;
    
    let inputField = document.querySelector(".input-project-description");
    let descript = inputField.value;
    
    let selectedProject 
    for (const item of projectList) {
        if (item.name == projectName){
            item.describe = descript;  
            selectedProject = item;
        }
    }
    
    if (storageAvailable("localStorage")) {
        localStorage.setItem("projectList", JSON.stringify(projectList));
    } 

    deleteChildNodes(containerRHS);

    const descriptionLabel = rightDOM.projectDescriptionLabel() ;   
    const description = rightDOM.displayDescription(selectedProject);
    const buttonTask = rightDOM.taskMgeBtn ();
   
    containerRHS.append(titleContainerRight, descriptionLabel, description, buttonTask);
    addListeners.listenerEditProjectDescription();
    addListeners.listenerManageTasks();
}

function callback_manageTasks() {
    const containerRHS = document.querySelector(".container-right");
    let titleContainerRight = document.querySelector(".title-panel-right");
    const projectName = titleContainerRight.innerHTML;
    let selectedProject 
    
    for (const item of projectList) {
        if (item.name == projectName){
           selectedProject = item;
        }
    }
    
    titleContainerRight = rightDOM.mainTitleRight(selectedProject);

    deleteChildNodes(containerRHS);

    const allTasks = rightDOM.showAllTasks(selectedProject);
        
    containerRHS.append( titleContainerRight, allTasks, rightDOM.taskAddBtn() );
    addListeners.listenerEditTask();
    addListeners.listenerDeleteTasks();
    addListeners.listenerAddTasks();
    addListeners.listenerCheckbox();

    radialBtnsMenu.enableRadianButtons();
}

function callback_checkbox(e){
    console.log("test");
    const titleContainerRight = document.querySelector(".title-panel-right");
    const checkStatus = e.target.checked;
    const target = e.target.parentElement.children[1].firstChild.innerHTML;
    
    const projectName = titleContainerRight.innerText;
    let index;

    for (const item of projectList){
        if (item.name == projectName) {
            let tasks = item.tasks;
            let taskNames = tasks.map(x => x[0]);
            index = taskNames.indexOf(target);
            let task = item.tasks[index];
            task[5] =  checkStatus;
            item.tasks[index] = task;
        }
    }
    console.log(projectList);
    if (storageAvailable("localStorage")) {
        localStorage.setItem("projectList", JSON.stringify(projectList));
   } 
}

function callback_editTask(e) {
    const taskName = e.target.parentElement.parentElement.childNodes[0].innerText;
    const containerRHS = document.querySelector(".container-right");
    const titleContainerRight = document.querySelector(".title-panel-right");
    const projectName = titleContainerRight.innerHTML;
    
    let myTask;
    for (const item of projectList){
        
        if (item.name == projectName) {

            for (let i=0; i<item.tasks.length; i++){
                if (item.tasks[i][0] == taskName){
                    item.tasks[i][4] = "x"; 
                    myTask = item.tasks[i]; 
                }
            }
        }
    }
    -
    deleteChildNodes(containerRHS);
    
    containerRHS.append( titleContainerRight, rightDOM.makeInputForm( myTask ), rightDOM.controlsAddEditTask() );
    addListeners.listenerSaveEditedTask();
    addListeners.listenerCancelEditTasks();

    radialBtnsMenu.disableRadianButtons();
}

function callback_deleteTasks(e) {
    let selected = e.target.parentNode.parentNode.firstChild.innerText;
    
    const containerRHS = document.querySelector(".container-right");
    const titleContainerRight = document.querySelector(".title-panel-right");
    const projectName = titleContainerRight.innerHTML;
    
    // let i = 0;
    // for (const item of tasks){
    //     if (item[0] == selected) {
    //         tasks.splice(i,1); 
    //     }
    //     i += 1; 
    // }
    




    let myTask;
    for (const item of projectList){
        
        if (item.name == projectName) {

            for (let i=0; i<item.tasks.length; i++){

                if (item.tasks[i][0] == selected) {
                    item.tasks.splice(i,1); 
                }
            }
        }
    }


    if (storageAvailable("localStorage")) {
          localStorage.setItem("projectList", JSON.stringify(projectList));
    }
    
    callback_manageTasks();
}


function callback_addTasks() {
    const containerRHS = document.querySelector(".container-right");
    const titleContainerRight = document.querySelector(".title-panel-right");
    
    deleteChildNodes(containerRHS);
    
    
    containerRHS.append( titleContainerRight, rightDOM.makeInputForm(), rightDOM.controlsAddEditTask());
    
    addListeners.listenerSaveNewTask();
    addListeners.listenerCancelEditTasks();
    radialBtnsMenu.disableRadianButtons();
}


function callback_saveNewTask() {
    const taskName = document.querySelector(".input-task-name");
    const taskDescribe = document.querySelector(".input-task-describe");
    const taskDate = document.querySelector(".input-task-date");
    const taskPriority = document.querySelector(".input-task-priority");
    
    const titleContainerRight = document.querySelector(".title-panel-right");
    const projectName = titleContainerRight.innerHTML;
    
    if (taskName.value.trim().length>0){

        for (let item of projectList){

            if (item.name == projectName){
                
                let dataset;
                                  
                dataset = [taskName.value, taskDescribe.value, taskDate.value, taskPriority.value, "OK"];
                    
                if (taskDate.value === ""){
                    dataset[2] = "2099-12-31";
                    alert("No date entered. Default 31/12/2099 was used");
                } 

                item.tasks.push(dataset); 
                console.log(item.tasks);
                if (storageAvailable("localStorage")) {
                    localStorage.setItem("projectList", JSON.stringify(projectList));
                }
            }
        }
        
    } else {
        alert("New task needs to be assigned a name");
    }
    
    callback_manageTasks();

}


function callback_saveEditedTask() {
    const taskName = document.querySelector(".input-task-name");
    const taskDescribe = document.querySelector(".input-task-describe");
    const taskDate = document.querySelector(".input-task-date");
    const taskPriority = document.querySelector(".input-task-priority");
    
    console.log(taskPriority.value);
    if (taskName.value.trim().length>0){

        for (let item of projectList){

            for (let i=0; i<item.tasks.length; i++){
                
                let dataset;
                if (item.tasks[i][4] == "x"){
                    
                    dataset = [taskName.value, taskDescribe.value, taskDate.value, taskPriority.value, "OK"];
                    dataset[5] = item.tasks[i][5]; 

                    item.tasks[i] = dataset;

                    if (storageAvailable("localStorage")) {
                        localStorage.setItem("projectList", JSON.stringify(projectList));
                    }
                } 
            }
        }
        
    } else {
        alert("New task needs to be assigned a name");
    }
    console.log(projectList);
    callback_manageTasks();
}








function _resetDatabase() {
    if (storageAvailable("localStorage")) {
        window.localStorage.clear();
        const projectLst = projectsOnLoad();
        localStorage.setItem("projectList", JSON.stringify(projectLst));
    }
}

function deleteChildNodes(node) {
    while (node.firstChild) {
        node.removeChild(node.lastChild);
      }
}












//const leftPanelContent = leftDOM.onloadLeft(projectList);

//const containerRHS = document.querySelector(".container-right");

  
     
    
    // const titleContainerRight = rightDOM.mainTitleRight(projectList[0]);
    // const descriptionLabel = rightDOM.projectDescriptionLabel() ;   
    // const description = rightDOM.displayDescription(projectList[0]);
    // const descriptionInput = rightDOM.editDescriptionUI();
    // const buttonTask = rightDOM.taskMgeBtn ();
    // const buttonAddTask = rightDOM.taskAddBtn();
   
    //containerRHS.append(titleContainerRight, descriptionLabel, description, buttonTask);
    //containerRHS.append(titleContainerRight, descriptionLabel, descriptionInput, buttonTask);

    //const item = projectList[0].tasks[1];
    //const divContainer = rightDOM.showOneTask(item);
    
    //containerRHS.append(titleContainerRight, divContainer, buttonAddTask );

    //containerRHS.append( rightDOM.makeInputForm(), rightDOM.controlsAddEditTask() );
    //containerRHS.append( rightDOM.makeInputForm( projectList[0].tasks[1] ), rightDOM.controlsAddEditTask() );


export { callback_showProjectDetails, 
        callback_deleteProject, 
        callback_addProject, 
        callback_inputAddProject,
        callback_resetDatabase,
        callback_editProjectDescription,
        callback_cancelEditDescription,
        callback_saveDescription,
        callback_manageTasks,
        callback_checkbox,
        callback_editTask,
        callback_saveEditedTask,
        callback_deleteTasks,
        callback_addTasks,
        callback_saveNewTask}