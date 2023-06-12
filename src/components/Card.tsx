import { Images } from "."
import { CustomComponentProps } from "../utils"

interface Props extends CustomComponentProps{
    imgSrc: string
    title: string
    onClick?: Function
}
export const Card = (props:Props) => {
  return (
    <div 
    onClick={() => (props.onClick ? props.onClick() : '')}
    className="mx-3 my-1.5 cursor-pointer flex flex-col"
    >
        <Images src={props.imgSrc} className="min-h-[200px] h-[200px]"></Images>
        <p className="py-1.5 line-clamp-2">{props.title}</p>
        
    </div>
  )
}
