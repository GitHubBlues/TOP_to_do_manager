import './style.css';

import radialBtnsMenu  from './radialButtons.js';
import leftDOM from './left_panel.js';
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


const leftPanel = leftDOM.onloadLeft(projectList);

