import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../Button';
import Loading from '../Loading';
import TodoItem from './TodoItem';

const initialFormData = {
  title: '',
  completed: false
}

const Todos = () => {

  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(initialFormData);

  const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setTodos(data);
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
        setTodos(newItems);
        setFormData(initialFormData);
        toast.success('Todo added successfully!')
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setFormLoading(false);
      })

  }; // handleSubmit

  const prepareToUpdate = (id) => {
    const todoToUpdate = todos.find(x => x.id === id);
    console.log(todoToUpdate);

    setFormData({
      title: todoToUpdate.title,
      completed: todoToUpdate.completed
    });
    setEditingId(id);
  }; // prepareToUpdate

  const handleUpdate = (e) => {

    e.preventDefault();
    console.log(formData);

    if (formData.title.trim() === '') {
      alert('Please enter a title for the todo.');
      return;
    }
    setFormLoading(true);
    fetch(`https://dummyjson.com/todos/${editingId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title: formData.title,
        completed: formData.completed
      })
    })
      .then(res => res.json())
      .then((data) => {
        const newItems = todos.map((todo) => (todo.id === editingId ? { ...todo, ...formData } : todo));
        setTodos(newItems);
        setFormData(initialFormData);
        toast.success('Todo edited successfully!')
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setFormLoading(false);
        setFormData(initialFormData);
        setEditingId(null);
      })

  } // handleUpdate

  const afterDelete = (id) => {
    const newItems = todos.filter((todo) => todo.id !== id);
    setTodos(newItems);
  }


  return (
    <section className='grid grid-cols-2 justify-between gap-8'>

      <div className=''>
        <h1 className='text-3xl font-bold mb-6'>Create Todo</h1>
        <form onSubmit={(e) => editingId ? handleUpdate(e) : handleSubmit(e)}>
          <div className='mb-4'>
            <label className='block mb-1 text-lg font-medium'>Todo Title</label>
            <input
              type="text"
              placeholder='Enter todo title'
              className='bg-gray-800 border border-gray-600 rounded-md p-3 w-full focus:outline-none focus:border-blue-500'
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div className='mb-4'>
            <label className='text-lg font-medium flex gap-1 items-center cursor-pointer'>
              <input
                type="checkbox"
                className='w-5 h-5 accent-blue-500'
                checked={formData.completed}
                onChange={(e) => setFormData({ ...formData, completed: e.target.checked })}
              />
              Is Completed
            </label>
          </div>
          {
            editingId ?
              <div className='flex gap-2'>
                <Button type="submit" color='green' text="Save" size="lg" isLoading={formLoading} />
                <Button type="button" color='gray' text="Cancel" size="lg" onClick={() => { setEditingId(null); setFormData(initialFormData) }} />
              </div>
              :
              <Button type="submit" color='blue' text="Submit" size="lg" isLoading={formLoading} />
          }
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
                    <TodoItem
                      item={item}
                      getTodos={getTodos}
                      prepareToUpdate={prepareToUpdate}
                      afterDelete={afterDelete}
                    />
                  )
                })
              }
            </ul>
        }
      </div>

    </section>
  )
}

export default Todos;