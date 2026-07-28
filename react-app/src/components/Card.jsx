import { useState } from "react"
import Button from "./Button"
import Typography from "./Typography"
import { EyeIcon, EyeOffIcon } from "lucide-react"

const Card = ({ title, desc, image }) => {

  const [isExpand, setIsExpand] = useState(false);
  // const [isLoaing, setIsLoaing] = useState(false);

  const onBtnClick = () => {
    setIsExpand(!isExpand);
    // setIsLoaing(true);
    // setTimeout(() => {
    //   setIsLoaing(false)
    // }, 3000)
  }

  return (
    <article className="bg-gray-800 rounded-xl p-4 flex flex-col gap-3 shadow-2xl">
      <figure>
        <img src={image} alt={title} className="rounded-lg" />
      </figure>
      <header>
        <Typography element='h4' className="text-xl font-bold">{title}</Typography>
      </header>
      <Typography element="p" className={`text-gray-300 ${isExpand ? 'h-auto' : 'h-[50px]'} overflow-hidden`}>{desc}</Typography>
      <footer>
        <Button
          type="button"
          text={isExpand ? 'Show Less' : 'Show More'}
          color="blue"
          size="sm"
          icon={isExpand ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
          // isLoading={isLoaing}
          onClick={onBtnClick}
        />
      </footer>
    </article>
  )
}
export default Card