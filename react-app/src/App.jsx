import { LucideCheckCircle, LucidePencil, LucidePlusCircle, LucideTrash, LucideUndo } from 'lucide-react';
import { useEffect, useState } from 'react';
import './App.css';
import Button from "./components/Button";
import Loading from './components/Loading';
import { BASE_URL } from './constants';

function App() {

  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    isCompleted: false
  });
  const [showError, setShowError] = useState(false);


  const getTodos = () => {
    fetch(`${BASE_URL}/todos`)
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false))
  }


  useEffect(() => {
    getTodos();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setShowError(false);
    if (!formData.title) {
      setShowError(true);
      return
    }


    setFormLoading(true);

    fetch(`${BASE_URL}/todos`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title: formData.title,
        completed: formData.isCompleted,
      })
    })
      .then((res) => {
        console.log(res);
        const newItems = [...todos, {title: formData.title, completed: formData.isCompleted}];
        setTodos(newItems);

        alert('Todo added successfully');

      })
      .catch((error) => console.error(error))
      .finally(() => setFormLoading(false))

  } // handleSubmit





  return (
    <main className='bg-slate-900 text-gray-200 min-h-screen p-8'>

      <section className='grid grid-cols-3 gap-12 max-w-2/3 mx-auto'>

        <div className="col-span-1">
          <h1 className='text-2xl font-bold mb-4'>Create Todo</h1>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='mb-2'>
              <label className='text-lg mb-1 flex justify-between items-baseline'>
                Title
                {
                  showError &&
                  <span className='text-xs text-red-500'>Title is Required</span>
                }
              </label>
              <input
                type="text"
                placeholder='Enter Todo Title'
                className='w-full border border-gray-400 bg-gray-800 px-3 py-2 text-lg rounded-md'
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div className='mb-4'>
              <label className='text-lg flex items-center gap-1.5 cursor-pointer'>
                <input
                  type="checkbox"
                  className='w-4 h-4'
                  onChange={(e) => setFormData({ ...formData, isCompleted: e.target.checked })}
                />
                Completed
              </label>
            </div>
            <Button type="submit" color='blue' size='lg' icon={<LucidePlusCircle size={22} />} text="Add" isLoading={formLoading} />
          </form>

        </div>

        <div className='col-span-2'>
          <h1 className='text-2xl font-bold mb-4'>Todos List</h1>
          {
            isLoading ?
              <Loading />
              :
              <ul className='divide-y divide-gray-500 border border-gray-300 rounded-lg overflow-hidden'>
                {
                  todos.map((item) => {
                    return (
                      <li key={item.id} className='flex justify-between px-4 py-2 transition-all hover:bg-gray-800'>
                        <p className={`text-base ${item.completed ? 'line-through opacity-50' : ''}`}>{item.title}</p>
                        <div className='flex gap-1'>
                          {
                            item.completed ?
                              <Button color="gray" size='sm' icon={<LucideUndo />} justIcon tooltip='Uncomplete' />
                              :
                              <Button color="green" size='sm' icon={<LucideCheckCircle />} justIcon tooltip='Completed' />
                          }
                          <Button color="blue" size='sm' icon={<LucidePencil />} justIcon tooltip='Edit' />
                          <Button color="red" size='sm' icon={<LucideTrash />} justIcon tooltip='Delete' />
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
