import { useState } from "react";
import AddTask from "./component/AddTask";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
  const [showAddtask, toggleAddtask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "mettting",
      day: "feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "foold shoppingt",
      day: "feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const delete_task = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const reminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header showAdd={()=>toggleAddtask(!showAddtask)} show={showAddtask}/>
     {showAddtask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={delete_task} toggle_rem={reminder} />
      ) : (
        "No Task Avaliable"
      )}
    </div>
  );
}

export default App;
