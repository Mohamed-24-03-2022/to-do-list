
const removeProjects = () => {
    const mainContent = document.querySelector(".main-content");
    for (let i = 1; i <= mainContent.children.length; i++) {
        const element = mainContent.children[i];
        if (!element) return;
        element.remove();
    }
};
const addHoverToBtn = (targetedBtn) => {
    const projectsBtn = document.querySelectorAll(".project");
    projectsBtn.forEach(btn => {
        btn.classList.remove("selected-project");
    });
    targetedBtn.classList.add("selected-project");
}
const addEventToProjects = (projectBtn, projectContainer) => {
    const mainContent = document.querySelector(".main-content");
    projectBtn.addEventListener("click", (e) => {
        e.preventDefault();
        removeProjects();
        addHoverToBtn(e.target);
        mainContent.appendChild(projectContainer);
    });
};


const changeProjects = () => {
    const workProjectBtn = document.querySelector(".work");
    const studyProjectBtn = document.querySelector(".study");
    const homeProjectBtn = document.querySelector(".home");
    const gymProjectBtn = document.querySelector(".gym");

    const createProjectContainer = (className) => {
        const ProjectContainerName = document.createElement("div");
        ProjectContainerName.classList.add(className);
        return ProjectContainerName;
    };

    const workProjectContainer = createProjectContainer("work-project");
    const studyProjectContainer = createProjectContainer("study-project");
    const homeProjectContainer = createProjectContainer("home-project");
    const gymProjectContainer = createProjectContainer("gym-project");
    const projects = [
        workProjectContainer,
        studyProjectContainer,
        homeProjectContainer,
        gymProjectContainer,
    ];
    for (const project of projects) {
        project.classList.add("project-container");
    }
    addEventToProjects(workProjectBtn, workProjectContainer);
    workProjectBtn.click();
    addEventToProjects(studyProjectBtn, studyProjectContainer);
    addEventToProjects(homeProjectBtn, homeProjectContainer);
    addEventToProjects(gymProjectBtn, gymProjectContainer);

    return projects;
};


export {
    changeProjects,
    removeProjects,
    addEventToProjects,
    addHoverToBtn,
};
