import leftDOM from './left_panel.js';
import rightDOM from './right_panel.js';

import { callback_showProjectDetails, 
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
    callback_saveNewTask} from './index.js';

const addListeners = (() => {
    //left panel
    function listenerShowProjectDescription() {
        const icon = document.querySelectorAll(".project-names");
        icon.forEach(item => { item.addEventListener('click', callback_showProjectDetails) });
    }

    function listenerDeleteProject() {
        const icon = document.querySelectorAll(".icon-delete");
        icon.forEach(item => { item.addEventListener('click', callback_deleteProject) });
    }

    function listenerAddProject() {
        const icon = document.querySelector(".btn-add-project");
        icon.addEventListener("click", callback_addProject);
    }

    function listenerInputAddProject() {
        const icon = document.querySelector(".input-box-add-project");
        icon.addEventListener('keypress', callback_inputAddProject);
    }

    function listenerDatabase() {
        const icon = document.querySelector(".icon-database");
        const label = document.querySelector(".label-icon-database");

        icon.addEventListener("click", callback_resetDatabase);
        label.addEventListener("click", callback_resetDatabase);
    }

    //right panel
    function listenerEditProjectDescription() {
        const icon = document.querySelector(".icon-edit");
        icon.addEventListener("click", callback_editProjectDescription);
    }

    function listenerSaveDescription() {
        const icon = document.querySelector(".btn-save-task");
        icon.addEventListener("click", callback_saveDescription);
    }

    function listenerCancelEditDescription() {
        const icon = document.querySelector(".btn-cancel-task");
        icon.addEventListener("click", callback_cancelEditDescription);
    }

    function listenerManageTasks() {
        const icon = document.querySelector(".btn-manage-tasks");
        icon.addEventListener("click", callback_manageTasks);
    }
 
    function listenerCheckbox(){
        const checkbox = document.querySelectorAll(".checkbox-tasks");
        checkbox.forEach(item => { item.addEventListener("change", callback_checkbox)});
    }   

    function listenerEditTask() {
        const icon = document.querySelectorAll(".icon-edit-task");
        icon.forEach(item => { item.addEventListener('click', callback_editTask) });
   }

    function listenerSaveEditedTask() {
    const icon = document.querySelector(".btn-save-task");
    icon.addEventListener("click", callback_saveEditedTask);
    }
    
    function listenerDeleteTasks() {
        const icon = document.querySelectorAll(".icon-delete-task");
        icon.forEach(item => { item.addEventListener('click', callback_deleteTasks) }); 
    }

    function listenerAddTasks() {
        const icon = document.querySelector(".btn-add-task");
        icon.addEventListener("click", callback_addTasks);
    }

    function listenerSaveNewTask() {
        const icon = document.querySelector(".btn-save-task");
        icon.addEventListener("click", callback_saveNewTask);
    }

    function listenerCancelEditTasks() {
        const icon = document.querySelector(".btn-cancel-task");
        icon.addEventListener("click", callback_manageTasks);
    }
    

    return { 
        listenerShowProjectDescription,
        listenerDeleteProject,
        listenerAddProject,
        listenerInputAddProject,
        listenerDatabase,
        listenerEditProjectDescription,
        listenerSaveDescription,
        listenerCancelEditDescription,
        listenerManageTasks,
        listenerCheckbox,
        listenerEditTask,
        listenerDeleteTasks,
        listenerAddTasks,
        listenerSaveNewTask,
        listenerSaveEditedTask,
        listenerCancelEditTasks,
   }

})();

export default addListeners;
















