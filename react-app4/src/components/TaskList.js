import { Fragment, useEffect, useState } from 'react'
import AddTaskView from './AddTaskView';
import Dashboard from './Dashboard';
import EditTaskView from './EditTaskView';
import TaskView from './TaskView';

const TaskList = (props) => {

    let [tasks, setTasks] = useState([
        { taskId: 1, taskName: "Create Product BackLog", isDone: true },
        { taskId: 2, taskName: "Create Sprint1 BackLog", isDone: true },
        { taskId: 3, taskName: "Create Sprint2 BackLog", isDone: false },
        { taskId: 4, taskName: "Create Test Data", isDone: false },
        { taskId: 5, taskName: "Create Test Suites", isDone: false }
    ]);

    let [tasksDone, setTasksDone] = useState(2);
    let [tasksNotDone, setTasksNotDone] = useState(3);

    useEffect(
        () => {
            setTasksDone(tasks.filter(t => t.isDone).length)
            setTasksNotDone(tasks.filter(t => !t.isDone).length)
        }, [tasks]
    )

    const addTask = (task) => setTasks([...tasks, task])

    const deleteTask = (taskId) => setTasks(tasks.filter(t => t.taskId !== taskId))

    const toggleStatus = (taskId) => setTasks(tasks.map(t => t.taskId !== taskId ? t : { ...t, isDone: !t.isDone }))

    const editTask = (taskId) => setTasks(tasks.map(t => t.taskId !== taskId ? t : { ...t, isEdit:true }))

    const cancelEditTask = (taskId) => setTasks(tasks.map(t => t.taskId !== taskId ? t : { ...t, isEdit:null }))

    const saveTask = (task) => setTasks(tasks.map(t => t.taskId !== task.taskId ? t :task ))

    return (
        <Fragment>
            <h3>Tasks List</h3>

            <Dashboard 
                tasksDone={tasksDone}
                tasksNotDone={tasksNotDone}
            />

            <AddTaskView
                className="p-2 m-2 col-6"
                addTask={addTask}
            />

            <div className="p-2 m-2 col-6">
                {tasks.map(task => (
                    task.isEdit?
                    <EditTaskView
                        key={task.taskId}
                        task={task}
                        cancelEditTask={cancelEditTask}
                        saveTask={saveTask}
                        toggleStatus={toggleStatus}
                    /> :
                    <TaskView
                        key={task.taskId}
                        task={task}
                        deleteTask={deleteTask}
                        editTask={editTask}
                        toggleStatus={toggleStatus}
                    />
                ))}
            </div>
        </Fragment>
    );
}

export default TaskList;