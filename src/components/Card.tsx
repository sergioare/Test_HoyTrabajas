import { Images } from "."

interface Props{
    imgSrc: string
    title: string
    onClick?: Function
}
export const Card = (props:Props) => {

  return (
    <div 
    // onClick={()=>navigate(`/${props.film.mediaType}/${props.film.id}`)}
    onClick={()=>(props.onClick ? props.onClick: '')}
    className="mx-3 my-1.5 cursor-pointer"
    >
        <Images src='' className="min-h-[200px] h-[200px]"></Images>
        <p className="py-1.5 line-clamp-2">{props.title}</p>
        
    </div>
  )
}
