import { Container } from "."
import { CustomComponentProps, mergeClassName } from "../utils"

interface Props extends CustomComponentProps{
    title?: string

}
export const Section = (props:Props) => {
  return (
    <Container className={props.className}>
        {props.title ? (
        <h1
          // onClick={props.onTitleClick}
          // className={mergeClassName(
          //   'text-xl px-3 py-2',
          //   props.onTitleClick ? 'cursor-pointer hover:text-primary' : ''
          // )}
          // dangerouslySetInnerHTML={{
          //   __html: props.title,
          // }}
          className="text-xl px-3 py-2"
        ></h1>
      ) 
      :  ''
      }
      {props.children}
    </Container>
  )
}
