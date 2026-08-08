import { LucideCheckCircle, LucidePencil, LucideTrash, LucideUndo } from 'lucide-react';
import Button from '../Button';

const TodoItem = ({ item, handleChangeStatus, prepareToUpdate, handleDelete }) => {

  return (
    <li key={item.id} className='flex justify-between px-4 py-3 transition-all hover:bg-gray-800'>
      <p className={`text-lg ${item.completed ? 'line-through text-gray-500' : ''}`}>{item.title}</p>
      <div className='flex gap-1.5'>
        {
          item.completed ?
            <Button color='gray' icon={<LucideUndo />} justIcon onClick={() => handleChangeStatus(item.id, false)} />
            :
            <Button color='green' icon={<LucideCheckCircle />} justIcon onClick={() => handleChangeStatus(item.id, true)} />
        }
        <Button color='blue' icon={<LucidePencil />} justIcon onClick={() => prepareToUpdate(item.id)} />
        <Button color='red' icon={<LucideTrash />} justIcon onClick={() => handleDelete(item.id)} />
      </div>
    </li>
  )

}

export default TodoItem;