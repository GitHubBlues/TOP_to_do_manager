import"./style.css";import radialBtnsMenu from"./radialButtons.js";import{projectDB}from"./projects.js";import iDelete from"./img/3643729_delete_trash_icon.svg";import iPencil from"./img/326602_edit_pencil_icon.svg";import iDatabase from"./img/185097_database_icon.svg";import iAdd from"./img/172525_plus_icon.svg";const containerLHS=document.querySelector(".container-left");let proj,projectList=[];proj=projectDB(),proj.name="Learn japanese",proj.describe="The objective of this project is to learn some basic japanese with the aim of being able to carry on simple conversations with Dai.",proj.addTask(["learn Hiragana","get things from book","1995-6-22","high","OK",!1]),proj.addTask(["learn Katakana","get things from book","1995-6-12","medium","OK",!1]),proj.addTask(["learn Kanjis","get things from book","1995-6-20","low","OK",!1]),projectList.push(proj),proj=projectDB(),proj.name="Get a pet",proj.describe="This project is about identifying a suitable pet, preferably a dinosaur",proj.addTask(["decide about dinosaur species","read about different scpecies.","1995-6-23","medium","OK",!1]),proj.addTask(["discuss potential species with Professor Fink","get Fink's contant details.","1995-6-24","medium","OK",!1]),proj.addTask(["get dinosaur egg","get egg from international auction","1995-6-25","high","OK",!1]),projectList.push(proj);const ctProjects=document.createElement("div");ctProjects.classList.add("left-container-projects");const title=document.createElement("h2");title.classList.add("project-title"),title.innerHTML="Projects";const ctProjectList=document.createElement("div");function showProjects(e){for(const t of e){const e=document.createElement("div");e.classList.add("project-names-container");const a=document.createElement("div");a.classList.add("project-names"),a.innerHTML=t.name;const n=document.createElement("img");n.classList.add("icon-delete"),n.src=iDelete,e.appendChild(a),e.appendChild(n),ctProjectList.appendChild(e)}}ctProjectList.classList.add("project-list"),showProjects(projectList),ctProjects.appendChild(title),ctProjects.appendChild(ctProjectList),containerLHS.appendChild(ctProjects);const containerAddBtn=document.createElement("div");containerAddBtn.classList.add("add-project-container");const btnAddProject=document.createElement("img");btnAddProject.classList.add("btn-add-project"),btnAddProject.src=iAdd;let labelAddBtn=document.createElement("div");labelAddBtn.classList.add("label-btn-add-project"),labelAddBtn.innerHTML="New project",containerAddBtn.appendChild(btnAddProject),containerAddBtn.appendChild(labelAddBtn),containerLHS.appendChild(containerAddBtn);const radialMenu=radialBtnsMenu.makeRadialMenu();containerLHS.appendChild(radialMenu);const btnStorageContainer=document.createElement("div");btnStorageContainer.classList.add("storage-container");const btnStorage=document.createElement("img");btnStorage.classList.add("icon-database"),btnStorage.src=iDatabase;const labelBtnStorage=document.createElement("div");labelBtnStorage.classList.add("label-icon-database"),labelBtnStorage.innerHTML="Reset database",btnStorageContainer.appendChild(btnStorage),btnStorageContainer.appendChild(labelBtnStorage),containerLHS.appendChild(btnStorageContainer);