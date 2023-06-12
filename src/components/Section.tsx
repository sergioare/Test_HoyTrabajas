import { Container } from "."
import { CustomComponentProps } from "../utils"

interface Props extends CustomComponentProps{
    title?: string

}
export const Section = (props:Props) => {
  return (
    <Container className={props.className}>
        {props.title?(
        <h1
          className="text-xl px-3 py-2"
          dangerouslySetInnerHTML={{
            __html: props.title,
          }}
        ></h1>
         ) 
      :  ('')
      }
      {props.children}
    </Container>
  )
}
 // onClick={props.onTitleClick}
          // className={mergeClassName(
          //   'text-xl px-3 py-2',
          //   props.onTitleClick ? 'cursor-pointer hover:text-primary' : ''
          // )}
          // dangerouslySetInnerHTML={{
          //   __html: props.title,
          // }}