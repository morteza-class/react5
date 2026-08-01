import { LoaderCircle } from 'lucide-react';

const Button = ({
  type,
  text,
  color = 'gray',
  size = 'md',
  className = '',
  icon,
  justIcon = false,
  isLoading = false,
  isDisabled = false,
  onClick
}) => {

  let colorClass = '';
  let sizeClass = '';

  switch (color) {
    case 'green': colorClass = 'bg-green-500 text-white hover:bg-green-700'
      break;
    case 'red': colorClass = 'bg-red-500 text-white hover:bg-red-700'
      break;
    case 'blue': colorClass = 'bg-blue-500 text-white hover:bg-blue-700'
      break;
    case 'gray': colorClass = 'bg-gray-500 text-white hover:bg-gray-700'
      break;
  }

  switch (size) {
    case 'lg': sizeClass = `rounded-lg py-2 px-3 text-xl ${justIcon ? 'w-10 h-10 p-0' : ''}`;
      break;
    case 'md': sizeClass = `rounded-md py-1 px-2 text-base ${justIcon ? 'w-8 h-8 p-0' : ''}`;
      break;
    case 'sm': sizeClass = `rounded-sm py-1 px-1.5 text-sm ${justIcon ? 'w-6 h-6 p-0' : ''}`;
      break;
  }

  return (
    <button
      type={type}
      className={`cursor-pointer transition-all flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed! ${colorClass} ${sizeClass} ${className}`}
      onClick={onClick}
      disabled={isLoading || isDisabled ? true : false}
    >
      {!isLoading && icon ? icon : null}
      {isLoading ? <LoaderCircle size={18} className='animate-spin' /> : undefined}
      {text}
    </button>
  )
}

export default Button