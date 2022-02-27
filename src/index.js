import './style.css';
import radialBtnsMenu from './radialButtons.js';
import {projectDB} from './projects.js';


import iDelete from "./img/3643729_delete_trash_icon.svg";
import iPencil from "./img/326602_edit_pencil_icon.svg";
import iDatabase from "./img/185097_database_icon.svg";
import iAdd from "./img/172525_plus_icon.svg";
const containerLHS = document.querySelector(".container-left");


let projectList = [];
let proj; 
proj= projectDB();
proj.name = "Learn japanese";
proj.describe = "The objective of this project is to learn some basic japanese with the aim of being able to carry on simple conversations with Dai.";
proj.addTask(["learn Hiragana", "get things from book", "1995-6-22", "high", "OK", false]);
proj.addTask(["learn Katakana", "get things from book", "1995-6-12", "medium", "OK", false]);
proj.addTask(["learn Kanjis", "get things from book", "1995-6-20", "low", "OK", false]);
projectList.push(proj);

proj = projectDB();
proj.name = "Get a pet";
proj.describe = "This project is about identifying a suitable pet, preferably a dinosaur";
proj.addTask(["decide about dinosaur species", "read about different scpecies.", "1995-6-23", "medium", "OK", false]);
proj.addTask(["discuss potential species with Professor Fink", "get Fink's contant details.","1995-6-24", "medium", "OK", false]);
proj.addTask(["get dinosaur egg", "get egg from international auction","1995-6-25", "high", "OK", false]);
projectList.push(proj);


// // Project
const ctProjects = document.createElement("div");
ctProjects.classList.add("left-container-projects");

const title = document.createElement("h2");
title.classList.add("project-title");
title.innerHTML = "Projects";


const ctProjectList = document.createElement("div");
ctProjectList.classList.add("project-list");
// ctProjectList.innerHTML = "Placeholder";

function showProjects(projectList){
    for (const item of projectList) {
        const container = document.createElement('div');
        container.classList.add("project-names-container");
        const div = document.createElement('div'); 
        div.classList.add("project-names");
        div.innerHTML = item.name;
        const icon = document.createElement("img");
        icon.classList.add("icon-delete");
        icon.src = iDelete;
        
        container.appendChild(div);
        container.appendChild(icon);
        ctProjectList.appendChild(container);
        
        //icon.addEventListener('click', callback_deleteProject);
    }
}

showProjects(projectList);

ctProjects.appendChild(title);
ctProjects.appendChild(ctProjectList);

containerLHS.appendChild(ctProjects);


// // Add project
const containerAddBtn = document.createElement("div");
containerAddBtn.classList.add("add-project-container");

const btnAddProject = document.createElement("img");
btnAddProject.classList.add("btn-add-project");
btnAddProject.src = iAdd;

let labelAddBtn = document.createElement("div");
labelAddBtn.classList.add("label-btn-add-project");
labelAddBtn.innerHTML = "New project";

containerAddBtn.appendChild(btnAddProject);
containerAddBtn.appendChild(labelAddBtn);
containerLHS.appendChild(containerAddBtn);



// // Radial button
const radialMenu= radialBtnsMenu.makeRadialMenu();
containerLHS.appendChild(radialMenu);


// // Reset database
const btnStorageContainer = document.createElement("div"); 
btnStorageContainer.classList.add("storage-container");
const btnStorage = document.createElement("img");
btnStorage.classList.add("icon-database");
btnStorage.src = iDatabase;
const labelBtnStorage = document.createElement("div");
labelBtnStorage.classList.add("label-icon-database");
labelBtnStorage.innerHTML = "Reset database";

btnStorageContainer.appendChild(btnStorage);
btnStorageContainer.appendChild(labelBtnStorage);
containerLHS.appendChild(btnStorageContainer);
