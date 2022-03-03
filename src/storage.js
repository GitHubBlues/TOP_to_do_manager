import { projectDB } from "./projects.js";

function storageAvailable(type) {
    // Function source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


function projectsOnLoad(){
    // Create initial projects
    // The fifth value (OK) is an identifyer used when editing the content 
    // The sixth value indicates if the task is checked
    let pList = [];
    let projectLst = [];
    let proj; 
    proj= projectDB();
    proj.name = "Learn japanese";
    proj.describe = "The objective of this project is to learn some basic japanese with the aim of being able to carry on simple conversations with Dai.";
    proj.addTask(["learn Hiragana", "get things from book", "1995-06-22", "high", "OK", false]);
    proj.addTask(["learn Katakana", "get things from book", "1995-06-12", "medium", "OK", false]);
    proj.addTask(["learn Kanjis", "get things from book", "1995-06-20", "low", "OK", false]);
    pList.push(proj);

    proj = projectDB();
    proj.name = "Get a pet";
    proj.describe = "This project is about identifying a suitable pet, preferably a dinosaur";
    proj.addTask(["decide about dinosaur species", "read about different scpecies.", "1995-09-23", "medium", "OK", false]);
    proj.addTask(["discuss potential species with Professor Fink", "get Fink's contant details.","1995-08-24", "medium", "OK", false]);
    proj.addTask(["get dinosaur egg", "get egg from international auction","1995-08-25", "high", "OK", false]);
    pList.push(proj);
    
    if (storageAvailable('localStorage')) {
        //window.localStorage.clear();   
        projectLst = JSON.parse(localStorage.getItem("projectList"));

        if (projectLst == null || projectLst.length == 0){
            localStorage.setItem('projectList', JSON.stringify(pList));
            projectLst = pList;
         }
    }
    return projectLst;
}


export { storageAvailable, projectsOnLoad };