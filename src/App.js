import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./component/About";
import AddTask from "./component/AddTask";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
  const [showAddtask, toggleAddtask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      setTasks(await fetchTasks());
    };
    getTasks();
  }, []);
  const fetchTasks = async () => {
    const res = await fetch("https://github.com/CRONOS1967/react-task-tracker/blob/master/db.json/tasks");
    const data = await res.json();
    // console.log(data);
    return data;
  };
  const fetchTask = async (id) => {
    const res = await fetch(`https://github.com/CRONOS1967/react-task-tracker/blob/master/db.json/tasks/${id}`);
    const data = await res.json();
    // console.log(data);
    return data;
  };
  const delete_task = async (id) => {
    // console.log('delete', id)
    await fetch(`https://github.com/CRONOS1967/react-task-tracker/blob/master/db.json/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const reminder = async (id) => {
    // console.log(id);
    const updated = {
      ...(await fetchTask(id)),
      reminder: !(await fetchTask(id)).reminder,
    };

    const res = await fetch(`https://github.com/CRONOS1967/react-task-tracker/blob/master/db.json/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updated),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const addTask = async (task) => {
    // console.log(task);
    const res = await fetch("https://github.com/CRONOS1967/react-task-tracker/blob/master/db.json/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    setTasks([...tasks, await res.json()]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          showAdd={() => toggleAddtask(!showAddtask)}
          show={showAddtask}
        />
        <Route path='/' exact render={(props)=>(<>
          {showAddtask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={delete_task} toggle_rem={reminder} />
        ) : (
          "No Task Avaliable"
        )}
        </>)}/>
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
