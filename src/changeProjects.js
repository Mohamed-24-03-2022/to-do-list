const changeProjects = () => {
    const mainContent = document.querySelector(".main-content");
    const workProjectBtn = document.querySelector(".work");
    const studyProjectBtn = document.querySelector(".study");
    const homeProjectBtn = document.querySelector(".home");
    const gymProjectBtn = document.querySelector(".gym");
    const addProjectBtn = document.querySelector(".new");

    const workProjectContainer = document.createElement("div");
    workProjectContainer.classList.add("work-project");

    const studyProjectContainer = document.createElement("div");
    studyProjectContainer.classList.add("study-project");

    const homeProjectContainer = document.createElement("div");
    homeProjectContainer.classList.add("home-project");

    const gymProjectContainer = document.createElement("div");
    gymProjectContainer.classList.add("gym-project");

    const projects = [workProjectContainer, studyProjectContainer, homeProjectContainer, gymProjectContainer]
    for (const project of projects) {
        project.classList.add("project-container");
    }

    const removeProjects = () => {
        for (let i = 1; i <= mainContent.children.length; i++) {
            const element = mainContent.children[i];
            element.remove()
        }
    }

    workProjectBtn.addEventListener("click", (e) => {
        e.preventDefault();
        removeProjects();
        mainContent.appendChild(workProjectContainer);
    });
    workProjectBtn.click();

    studyProjectBtn.addEventListener("click", (e) => {
        e.preventDefault();
        removeProjects();
        mainContent.appendChild(studyProjectContainer);
    });
    homeProjectBtn.addEventListener("click", (e) => {
        e.preventDefault();
        removeProjects();
        mainContent.appendChild(homeProjectContainer);
    });
    gymProjectBtn.addEventListener("click", (e) => {
        e.preventDefault();
        removeProjects();
        mainContent.appendChild(gymProjectContainer);
    });
};
export { changeProjects };