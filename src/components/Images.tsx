import { CustomComponentProps, mergeClassName } from "../utils"

interface Props extends CustomComponentProps{
    src:string
}

export const Images = (props:Props) => {
  return (
    <div className={mergeClassName('bg-primary h-full w-full rounded-lg overflow-hidden' , props.className)}>
        <img src={props.src} className="min-h-[200px] w-full h-full object-cover"/>
    </div>
  )
}
