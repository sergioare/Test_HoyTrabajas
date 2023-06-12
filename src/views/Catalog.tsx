import { getMovies } from "../API/api"
import { Card, Section } from "../components"
import { Film, MediaType, imageAPI } from "../utils"
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

      case 'tv':
        title= "SERIES"
        break

      case 'search':
        title= `Search results for ${params.get('q')}`
        break
      
      default:
        break
    }
      const fetchFilms = async ()=>{
         setFilms(await getMovies())
      }
      
      useEffect(()=>{
        fetchFilms()  
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
        <Section className="">
              <div className="grid lg:grid-cols-5 sm:grid-cols-4 mobile:grid-cols-3 relative z-[11]">
              {
                films.map((film, i)=>(
                  <div>
                    <Card className="" imgSrc={imageAPI(film.coverPath) } title={film.title} key={i}></Card>
                  </div>
                ))
              }
          </div>
      </Section>
    </>
  )
}
