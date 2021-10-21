import { useState } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
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

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={delete_task} toggle_rem={reminder} />
      ) : (
        "No Task Avaliable"
      )}
    </div>
  );
}

export default App;
