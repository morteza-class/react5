import { LucideCheckCircle, LucidePencil, LucideTrash, LucideUndo } from 'lucide-react';
import Button from '../Button';
import { useState } from 'react';
import toast from 'react-hot-toast';

const TodoItem = ({ item, prepareToUpdate, getTodos, afterDelete }) => {

  const [changeStatusLoading, setChangeStatusLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleChangeStatus = (id, completed) => {

    setChangeStatusLoading(true);
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        completed: completed
      })
    })
      .then((data) => {
        item.completed = completed
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setChangeStatusLoading(false);
      })

  } // handleChangeStatus

  const handleDelete = () => {

    if (!window.confirm('Are you sure you want to delete this todo?')) {
      return;
    }

    setDeleteLoading(true)
    fetch(`https://dummyjson.com/todos/${item.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        // getTodos()
        afterDelete(item.id);
        toast.success('Todo deleted successfuly.')
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setDeleteLoading(false)
      })
  }

  return (
    <li key={item.id} className='flex justify-between px-4 py-3 transition-all hover:bg-gray-800'>
      <p className={`text-lg ${item.completed ? 'line-through text-gray-500' : ''}`}>{item.title}</p>
      <div className='flex gap-1.5'>
        {
          item.completed ?
            <Button color='gray' icon={<LucideUndo />} justIcon isLoading={changeStatusLoading} onClick={() => handleChangeStatus(item.id, false)} />
            :
            <Button color='green' icon={<LucideCheckCircle />} justIcon isLoading={changeStatusLoading} onClick={() => handleChangeStatus(item.id, true)} />
        }
        <Button color='blue' icon={<LucidePencil />} justIcon onClick={() => prepareToUpdate(item.id)} />
        <Button color='red' icon={<LucideTrash />} justIcon isLoading={deleteLoading} onClick={() => handleDelete(item.id)} />
      </div>
    </li>
  )

}

export default TodoItem;