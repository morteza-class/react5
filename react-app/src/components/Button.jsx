const Button = ({ text, type, color, onClick }) => {

  let btnColor = '';
  switch (color) {
    case 'gray': btnColor = 'bg-gray-500';
      break;
    case 'green': btnColor = 'bg-green-500';
      break;
    case 'red': btnColor = 'bg-red-500';
      break;
    case 'orange': btnColor = 'bg-orange-500';
      break;
    case 'black': btnColor = 'bg-stone-950';
      break;
    case 'white': btnColor = 'bg-white text-black!';
      break;
  }

  return (
    <button type={type} className={`py-1 px-2 rounded-md cursor-pointer text-white transition-all hover:opacity-70 ${btnColor}`} onClick={onClick}>{text}</button>
  )
}

export default Button