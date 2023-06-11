import { Card, Images, Section } from "../components"
import { Film, MediaType } from "../utils"
import {useState, useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'

interface Props{
    type: MediaType | 'search'
}
export const Catalog = (props:Props) => {
    let title= ''
    const [films, setFilms] = useState<Film[]>([])
    const [params, _] = useSearchParams()
    switch(props.type){
      case 'movie':
        title= "MOVIES"
        break

      case 'serie':
        title= "SERIES"
        break

      case 'search':
        title= `Search results for ${params.get('q')}`
        break
      
      default:
        break
    }
      const fetch = ()=>{
        const arrs: any[] = []

        for(let i = 0; i <20; i++){
            arrs.push({
              title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae mauris velit. Nam et quam sit amet felis dapibus ultrices.'
            })
        }
        setFilms(arrs)
      }
      
      useEffect(()=>{
        fetch()  
      }, [])

  return (
    <> 
       <div className="h-[120px] left-0 top-0 right-0 relative">
        <div className="overlay-film-cover"></div>
        <div className="h-full w-full bg-primary"></div>
      </div>
      <Section 
        className="-mt-[85px] flex items-center relative z-10 ml-[20px]" 
        title={title}>
        </Section>
        <Section>
              <div className="grid lg:grid-cols-5 sm:grid-cols-4 mobile:grid-cols-3 relative z-[11]">
              {
                films.map((film, i)=>(
                  <div>
                    <Card imgSrc="" title={film.title} key={i}></Card>
                  </div>
                ))
              }
          </div>
      </Section>
    </>
  )
}
