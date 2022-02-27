
// Factory function for creating projects
const projectDB = (identifier) => {
    let pname = identifier;
    let pdescription = "";
    let ptasks = [];
    
    return {
        name: pname,
        describe: pdescription,
        tasks: ptasks, 
        
        get name(){
            return pname;
        },

        set name(nme){
            pname = nme;
        },

        addTask: function (newTask) {
            ptasks.push(newTask);
        }
    }
}

export {projectDB}