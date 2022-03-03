import radialBtnsMenu from './radialButtons.js';
import iDelete from "./img/3643729_delete_trash_icon.svg";
import iDatabase from "./img/185097_database_icon.svg";
import iAdd from "./img/172525_plus_icon.svg";


// Creates DOM at left side
const leftDOM = (() => {
    const containerLHS = document.querySelector(".container-left");

    function areaProjects(projectList){
        const ctProjects = document.createElement("div");
        ctProjects.classList.add("left-container-projects");
        
        const title = document.createElement("h2");
        title.classList.add("project-title");
        title.innerHTML = "Projects";
        
        ctProjects.appendChild(title);
        
        const ctProjectList = document.createElement("div");
        ctProjectList.classList.add("project-list");

        _showProjects(projectList, ctProjects);

        
        ctProjects.appendChild(ctProjectList);

        return ctProjects;
    }
    
    function _showProjects(projectList, ctProjects){
      
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
            ctProjects.appendChild(container);
            
            //icon.addEventListener('click', callback_deleteProject);
        }
    }


    function areaAddProject(){
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

        return containerAddBtn;
    }


    function areaAddProjectInput(){
        const containerAddBtn = document.createElement("div");
        containerAddBtn.classList.add("add-project-container");

        const btnAddProject = document.createElement("img");
        btnAddProject.classList.add("btn-add-project");
        btnAddProject.src = iAdd;

        let inputBox = document.createElement("input");
        inputBox.classList.add("input-box-add-project");
        inputBox.placeholder = "Press enter";

        containerAddBtn.appendChild(btnAddProject);
        containerAddBtn.appendChild(inputBox);

        return containerAddBtn;
    }


    function areaDabatase(){
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

        return btnStorageContainer;
    }


    function onloadLeft(projectList) {
            
        const part1 = areaProjects(projectList)
        containerLHS.appendChild( part1 )

        const part2 = areaAddProject() ;    
        containerLHS.appendChild( part2 );
        
        const part3 = radialBtnsMenu.makeRadialMenu() ;
        containerLHS.appendChild( part3 );

        const part4 = areaDabatase();
        containerLHS.appendChild( part4 );
    }


    function addProjectLoad(projectList) {
        const part1 = areaProjects(projectList)
        containerLHS.appendChild( part1 )
        const part2 = areaAddProjectInput() ;    
        containerLHS.appendChild( part2 );
        const part3 = radialBtnsMenu.makeRadialMenu() ;
        containerLHS.appendChild( part3 );
        const part4 = areaDabatase();
        containerLHS.appendChild( part4 );
    }

    return { 
        onloadLeft,
        addProjectLoad,
    }

})();

export default leftDOM;