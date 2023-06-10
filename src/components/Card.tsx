import { Images } from "."
import { Film } from "../utils"

interface Props{
    film: Film
}
export const Card = (props:Props) => {
  return (
    <div className="mx-3 my-1.5">
        <Images src='' className="h-[200px]"></Images>
        <p className="py-1.5 line-clamp-2">{props.film.title}</p>
        
    </div>
  )
}
