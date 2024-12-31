import { useState } from "react";
import NewProject from "./conponents/NewProject";
import NoProjectSelected from "./conponents/NoProjectSelected";
import ProjectsSidebar from "./conponents/ProjectsSidebar";
import SelectedProject from "./conponents/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
    setProjectsState(prevState => {
      const tasktId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProject,
        id: tasktId
      }
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks, ]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(project => project.id !== id)
      }
    })
  }


  function handleSelectProject(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: id,

      }
    })
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: null,

      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,

      }
    })}

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }
      return{
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProject)
      }
    })
  }

  const selectedProject1234= projectsState.projects.find(project => project.id === projectsState.selectedProject)

  let content =<SelectedProject 
  project={selectedProject1234} 
  onDelete={handleDeleteProject}
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectsState.tasks}
  />

  if (projectsState.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="flex h-screen gap-8 my-8">
      <ProjectsSidebar 
      projects={projectsState.projects} 
      onStartAddProject={handleStartAddProject}
      onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;