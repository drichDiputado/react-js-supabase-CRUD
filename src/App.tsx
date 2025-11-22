import './App.css'
import { useState, useEffect } from 'react';
import { supabase } from './services/supabase';

interface  Tasks {
  id: number,
  created_at: string,
  title: string,
  description: string,
}

export default function App() {
  const [newTask, setNewTask] = useState({title: "", description: ""});
  const [tasks , setTask] = useState<Tasks[]>([]);
  const [newDescription, setNewDescription] = useState("");

  const DeleteTask = async (id: number) => {
    const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id)
    
    if (error) {
      console.error("Error delete task", error.message);
      return 0;
    }
  }

    const UpdateTask = async (id: number) => {
    const { error } = await supabase
    .from('tasks')
    .update({description: newDescription})
    .eq('id', id)
    
    if (error) {
      console.error("Error update task", error.message);
      return 0;
    }
  }

  const ReadTask = async () => {
    const { error, data } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', {ascending: true})
    
    if (error) {
      console.error("Error read task:", error.message);
      return 0;
    }

    setTask(data);
  }

  const CreateTask = async (e: any) => {
    e.preventDefault();
    const { error } = await supabase.from('tasks').insert(newTask).single()

    if (error) {
      console.log("Error create task:", error.message);
      return 0;
    }

      setNewTask({title: "", description: ""});
    
};

useEffect(() => {
  ReadTask();
})


return (
  <>
  <h1 className="text-5xl font-bold">Supabase x React</h1>
  
  <form onSubmit={CreateTask}>
    <input
    type = "text"
    placeholder='Title Here'
    onChange={(e) =>
      setNewTask((prev) => ({...prev, title: e.target.value}))
    }
    required
    />
    <textarea
    name = ''
    id = ''
    placeholder = 'Description Here'
    onChange = {(e) =>
      setNewTask((prev) => ({...prev, description: e.target.value}))
      }
      required>
      </textarea>

      <button>Add Task</button>

  </form>

  <ul>
    {tasks.map((task, key) => (
      <li key={key}>
        <div>

          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <textarea placeholder='Edit Description'
          onChange={(e:any) =>
            setNewDescription(e.target.value)
          }/>

          <button onClick={() => UpdateTask(task.id)}>Update</button>
          <button onClick={() => DeleteTask(task.id)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
  </>
)
}
