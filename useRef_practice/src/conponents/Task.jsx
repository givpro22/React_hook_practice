import NewTask from "./NewTask";

export default function Task({tasks, onAddTask, onDeleteTask}) {
    return (
        <section>
            <h2 className="mb-4 text-2xl font-bold text-stone-700">업무</h2>
            <NewTask onAdd={onAddTask}/>
            {tasks.length ===0 && (<p className="mb-4 text-stone-800"> 이 프로젝트는 아직 업무가 없습니다 
            </p>)}
        
            {tasks.length > 0 &&
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task) => 
                <li key={task.id} className="flex justify-between my-4">
                    <span>
                        {task.text}
                    </span>
                    <button onClick={()=>onDeleteTask(task.id)} className="text-stone-700 hover:text-red-500 l">
                        초기화
                    </button>
                </li>)}
            </ul>}
        </section>
    )
}