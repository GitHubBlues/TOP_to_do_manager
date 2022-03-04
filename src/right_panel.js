import { format, compareAsc } from 'date-fns';

import radialBtnsMenu  from './radialButtons.js';
import leftDOM from './left_panel.js';
import {projectDB} from './projects.js';

import iDelete from "./img/3643729_delete_trash_icon.svg";
import iPencil from "./img/326602_edit_pencil_icon.svg";
import iDatabase from "./img/185097_database_icon.svg";
import iAdd from "./img/172525_plus_icon.svg";
import iFlag0 from "./img/2561440_flag_icon_light.svg";
import iFlag1 from "./img/2561440_flag_icon_medium.svg";
import iFlag2 from "./img/2561440_flag_icon_dark.svg";

const containerLHS = document.querySelector(".container-left");


const rightDOM = (() => {
    //const containerRHS = document.querySelector(".container-right");
    
    function mainTitleRight(project){
        const titleContainerRight = document.createElement("div");
        titleContainerRight.classList.add("title-panel-right");
        titleContainerRight.innerHTML = project.name;
        return titleContainerRight; 
    }
    

    function projectDescriptionLabel() {
        const detailsContainer = document.createElement("div");
        detailsContainer.classList.add("proyect-describe-container");

        const labelDescribe = document.createElement("div");
        labelDescribe.classList.add("label-describe-project");
        labelDescribe.innerHTML = "Project description";
        
        const iconEdit = document.createElement("img");
        iconEdit.classList.add("icon-edit");
        iconEdit.src = iPencil;

        detailsContainer.append(labelDescribe, iconEdit);

        return detailsContainer; 
    }

    
    function displayDescription(project) {
        const description = document.createElement("div");
        description.classList.add("text-description-project");
        if (project.describe.length == 0) {
            description.innerHTML = "Here you can add a very long description of your project.\
            This may help you identifying the key aspects of your project.";
        } else{
            description.innerHTML = project.describe;
        }
        return description;
    } 


    function editDescriptionUI(){
        const descriptionInput = document.createElement("textarea");
        descriptionInput.classList.add("input-project-description");
        
        return descriptionInput;
    }    

    function showAllTasks(project) { 
        const divContainer = document.createElement("div");
        divContainer.classList.add("all-tasks-container");
        
        let tasks = radialBtnsMenu.processTasksToShow(project.tasks);

        let onetask
        tasks.forEach(item => {
            let onetask = _showOneTask(item);
            divContainer.appendChild(onetask);
        })
        return divContainer;
    }

    function _showOneTask(item) {    

        const divContainer = document.createElement("div");
        divContainer.classList.add("task-item-container");

        const taskCheckbox = document.createElement("input")
        taskCheckbox.classList.add("checkbox-tasks");
        taskCheckbox.type = "checkbox";
        taskCheckbox.checked = item[5];
    
        const divContent = document.createElement("div");
        divContent.classList.add("task-item-content");
        const taskName = document.createElement("div");
        taskName.classList.add("task-name");
        taskName.innerText = item[0];
        const taskDetails = document.createElement("div");
        taskDetails.classList.add("task-details");
        const taskDate = document.createElement("div");
        taskDate.classList.add("task-date");

        let date =  item[2];
        let formattedDate = date.split("-");
        let newDate = new Date(formattedDate[0], Number(formattedDate[1])-1, formattedDate[2]);
        taskDate.textContent = format(newDate, 'do MM y');
   
        divContainer.append( taskCheckbox, divContent );
        divContent.append( taskName, taskDetails );
        taskDetails.appendChild(taskDate);
         
        const taskPriority = document.createElement("img");
        taskPriority.classList.add("task-priority");
        
        if (item[3] == "high"){
            taskPriority.src = iFlag0;
            taskPriority.title = "high priority";
        } else if (item[3] == "medium"){
            taskPriority.src = iFlag1;
            taskPriority.title = "mediuum priority";
        } else if (item[3] == "low"){    
            taskPriority.src = iFlag2; 
            taskPriority.title = "low priority";
        }
        taskDetails.appendChild(taskPriority);
        
        const taskDelete = document.createElement("img");
        taskDelete.src = iDelete;
        taskDelete.classList.add("icon-delete-task");
        taskDetails.appendChild(taskDelete);

        const taskEdit = document.createElement("img");
        taskEdit.src = iPencil;
        taskEdit.classList.add("icon-edit-task");
        taskDetails.appendChild(taskEdit);

        return divContainer;
    } 
        

    function makeInputForm(task){
        const divContainer = document.createElement("div");
        divContainer.classList.add("add-task-container");
        const containerTaskName = document.createElement("div");
        containerTaskName.classList.add("container-task-input");
        const labelTaskName = document.createElement("div");
        labelTaskName.classList.add("label-input-task");
        labelTaskName.innerText = "Task name";
        const taskName = document.createElement("input");
        taskName.classList.add("input-task-name");
        taskName.type = "text";
        
        containerTaskName.append( labelTaskName, taskName);
    
        const containerTaskDescription = document.createElement("div");
        containerTaskDescription.classList.add("container-task-input");
        const labelTaskDescription = document.createElement("div");
        labelTaskDescription.classList.add("label-input-task");
        labelTaskDescription.innerText = "Task description";
        const taskDescribe = document.createElement("input");
        taskDescribe.classList.add("input-task-describe");
        taskDescribe.type = "text";
        
        containerTaskDescription.append( labelTaskDescription, taskDescribe);    
        
        const containerTaskDate = document.createElement("div");
        containerTaskDate.classList.add("container-task-input");
        const labelTaskDate = document.createElement("div");
        labelTaskDate.classList.add("label-input-task");
        labelTaskDate.innerText = "Due date";
        const taskDate = document.createElement("input");
        taskDate .classList.add("input-task-date");
        taskDate.type = "date";
        
        containerTaskDate.append(labelTaskDate, taskDate);  
    
       const taskPriorityContainer = document.createElement("div");
        taskPriorityContainer.classList.add("container-task-input");
        let labelPriority = document.createElement("div");
        labelPriority.classList.add("label-input-task")
        labelPriority.innerText = "Priority";
        const taskPriority = document.createElement("select");
        taskPriority.classList.add("input-task-priority");
        
        let priorities = ["low", "medium", "high"];
         
        for (const item of priorities) {
          let option = document.createElement("option");
          option.value = item;
          option.text = item;
          taskPriority.appendChild(option);
        }

        if (task !== undefined) {
            taskName.value = task[0];
            taskDescribe.value = task[1];
            taskDate.value = task[2];
                        
            if (task[3] == "high"){
                taskPriority.src = iFlag0;
                taskPriority.value = "high";
            } else if (task[3] == "medium"){
                taskPriority.src = iFlag1;
                taskPriority.value = "medium";
            } else if (task[3] == "low"){    
                taskPriority.src = iFlag2; 
                taskPriority.value = "low";
            }
        }

        taskPriorityContainer.append( labelPriority, taskPriority );
        divContainer.append( containerTaskName, containerTaskDescription, containerTaskDate, taskPriorityContainer);

        return divContainer;
    } 
    
    
    // buttons
    function taskMgeBtn (){
        const btnManageTasks = document.createElement( "button");
        btnManageTasks.classList.add("btn-manage-tasks");
        btnManageTasks.innerHTML = "tasks";

        return btnManageTasks;
    }

    function taskAddBtn() {
        const btnAddTask = document.createElement('button');
        btnAddTask.classList.add("btn-add-task");
        btnAddTask.textContent="add task";

        return btnAddTask;
    }

    function controlsAddEditTask(){
        const btnContainer = document.createElement('div');
        btnContainer.classList.add("container-btns-add-tasks");
        
        const btnSaveTask = document.createElement('button');
        btnSaveTask.classList.add("btn-save-task");
        btnSaveTask.innerText = "save";
        
        const btnCancelTask = document.createElement('button');
        btnCancelTask.classList.add("btn-cancel-task");
        btnCancelTask.innerText = "cancel";
        
        btnContainer.append(btnSaveTask, btnCancelTask);
        return btnContainer;
    }  
    

    return { 
        mainTitleRight,
        projectDescriptionLabel,   
        displayDescription,
        editDescriptionUI,
        showAllTasks,
        taskMgeBtn,
        taskAddBtn,
        makeInputForm, 
        controlsAddEditTask
    }

})();

export default rightDOM;