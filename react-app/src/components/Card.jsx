import { useState } from "react"
import Button from "./Button"
import Typography from "./Typography"

const Card = ({ title, desc, image }) => {

  const [isExpand, setIsExpand] = useState(false)

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
        <Button type="button" text={isExpand ? 'Show Less' : 'Show More'} color="blue" size="sm" onClick={() => setIsExpand(!isExpand)} />
      </footer>
    </article>
  )
}
export default Card