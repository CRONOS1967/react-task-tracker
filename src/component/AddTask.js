import { useState } from "react";
import React from "react";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [day, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Please Add a Task")
      return;
    }
    onAdd({ text, day, reminder })
    setText('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label> Task</label>
        <input
          type="text"
          name=""
          placeholder="Add Task"
          id=""
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label> Day & time</label>
        <input
          type="datetime-local"
          name=""
          placeholder="Add Day & time"
          id=""
          value={day}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label> Reminder</label>
        <input
          type="checkbox"
          name=""
          id=""
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Add Task" />
    </form>
  );
};

export default AddTask;
