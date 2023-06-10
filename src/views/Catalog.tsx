import { MediaType } from "../utils"

interface Props{
    type: MediaType | 'search'
}
export const Catalog = (props:Props) => {
  return (
    <div>{props.type}</div>
  )
}
