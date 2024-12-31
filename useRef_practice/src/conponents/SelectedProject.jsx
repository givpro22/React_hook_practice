import Task from "./Task"

export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}) {

    const formattedDate = new Date(project.duedate).toLocaleDateString('en-us',{
        year: 'numeric',
        month: 'long',
        day: "numeric"
    })

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                <h1 className="mb-2 text-3xl font-bold text-stone-600">{project.title}</h1>
                <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">삭제제</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="whitespace-pre-wrap text-stone-600">{project.description}</p>
            </header>
            <Task tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask}/>
        </div>
    )
}