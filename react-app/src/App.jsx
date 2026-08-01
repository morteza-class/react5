import { LucideCheckCircle, LucidePencil, LucideTrash, LucideUndo } from 'lucide-react';
import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Loading from './components/Loading';

function App() {

  const [todos, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    completed: false
  })

  const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setTodo(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      })
  }; // getTodos

  useEffect(() => {
    getTodos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.title.trim() === '') {
      alert('Please enter a title for the todo.');
      return;
    }
    setFormLoading(true);
    fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title: formData.title,
        userId: 1,
        completed: formData.completed
      })
    })
      .then(res => res.json())
      .then((data) => {
        const newItems = [...todos, formData];
        setTodo(newItems);
        alert('Todo added successfully!');
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setFormLoading(false);
      })

  }; // handleSubmit

  const handleDelete = (id) => {

    if (!window.confirm('Are you sure you want to delete this todo?')) {
      return;
    }

    fetch(`https://dummyjson.com/todos/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const newItems = todos.filter((todo) => todo.id !== id);
        setTodo(newItems);
        alert('Todo deleted successfully!');
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        // setFormLoading(false);
      })
  }

  return (
    <main className='bg-slate-900 text-gray-200 min-h-screen p-8'>

      <section className='grid grid-cols-2 justify-between gap-8'>

        <div className=''>
          <h1 className='text-3xl font-bold mb-6'>Create Todo</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='mb-4'>
              <label className='block mb-1 text-lg font-medium'>Todo Title</label>
              <input
                type="text"
                placeholder='Enter todo title'
                className='bg-gray-800 border border-gray-600 rounded-md p-3 w-full focus:outline-none focus:border-blue-500'
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div className='mb-4'>
              <label className='text-lg font-medium flex gap-1 items-center cursor-pointer'>
                <input
                  type="checkbox"
                  className='w-5 h-5 accent-blue-500'
                  onChange={(e) => setFormData({ ...formData, completed: e.target.checked })}
                />
                Is Completed
              </label>
            </div>
            <Button type="submit" color='blue' text="Submit" size="lg" isLoading={formLoading} />
          </form>
        </div>

        <div className=''>
          <h1 className='text-3xl font-bold mb-6'>Todoes List</h1>
          {
            isLoading ?
              <Loading />
              :
              <ul className='divide-y divide-gray-500 mx-auto border border-gray-300 rounded-md overflow-hidden max-h-[85vh] overflow-y-auto'>
                {
                  todos.map((item) => {
                    return (
                      <li key={item.id} className='flex justify-between px-4 py-3 transition-all hover:bg-gray-800'>
                        <p className={`text-lg ${item.completed ? 'line-through text-gray-500' : ''}`}>{item.title}</p>
                        <div className='flex gap-1.5'>
                          {
                            item.completed ?
                              <Button color='gray' icon={<LucideUndo />} justIcon onClick={() => { }} />
                              :
                              <Button color='green' icon={<LucideCheckCircle />} justIcon onClick={() => { }} />
                          }
                          <Button color='blue' icon={<LucidePencil />} justIcon onClick={() => { }} />
                          <Button color='red' icon={<LucideTrash />} justIcon onClick={() => handleDelete(item.id)} />
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
          }
        </div>

      </section>




    </main>
  )
}

export default App
