import Button from "./Button"
import Typography from "./Typography"

const Card = ({ title, desc, image }) => {
  return (
    <article className="bg-gray-800 rounded-xl p-4 flex flex-col gap-3 shadow-2xl">
      <figure>
        <img src={image} alt={title} className="rounded-lg" />
      </figure>
      <header>
        <Typography element='h3' className="text-xl font-bold">{title}</Typography>
      </header>
      <Typography element="p" className="text-gray-300">{desc}</Typography>
      <footer>
        <Button type="button" text="See More" color="white" onClick={() => alert(title)} />
      </footer>
    </article>
  )
}
export default Card