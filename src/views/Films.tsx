import { useState, useEffect } from "react"
import { Card, Images, Section, useGlobalContext } from "../components"
import { Film, MediaType, Trailer, imageAPI, youtubeImg } from "../utils"
import {useParams} from 'react-router-dom'
import { getDetail, getTrailers } from "../API/api"

interface Props{
    mediaType: MediaType
}
export const Films = (props: Props) => {
    const {id} = useParams<any>()
    const [film, setFilm]=useState<Film | null>()

    const [trailers, setTrailers]= useState<Trailer[]>([])

    const [trailerSrc, setTrailerSrc] = useState('')

    const playTrailer = async (key: string) => {
      setTrailerSrc(`https://www.youtube.com/embed/${key}?autoplay=1`)
    }
    const globalContext= useGlobalContext()

    const fetch = async ()=>{
      const film=(await getDetail(props.mediaType, parseInt(id as string)))

      if(film){
        setFilm(film)
        setTrailers(await getTrailers(film?.mediaType, film?.id))

      }
   
  }
  
  useEffect(()=>{
     fetch()  
  }, [])

  if(!film){
    return <div>404 Sorry, We couldn´t find your request</div>
  }

  return (
    <>
      <div className="h-[300px] left-0 top-0 right-0 relative">
        <div className="overlay-film-cover"></div>
          <Images src={imageAPI(film.coverPath)}></Images>
      </div>
      <Section className="-mt-[150px] flex items-center relative z-10 mobile:block">
        <Images src={imageAPI(film.posterPath)} className="w-[200px] min-w-[200px] h-[350px] mobile:mx-auto"></Images>
        <div className="px-3 flex flex-col item-start gap-3">
          <p className="text-xl line-clamp-1">
            {film.title}
          </p>
          <ul className="flex items-center gap-3">
              {film.genreIds.map((id, i)=>(
                  <li key={i} className="px-3 mt-2 py-1.5 bg-primary rounded-lg text-sm">
                      {globalContext.genres[film.mediaType]?.find((genre)=> genre.id === id)?.name}
                  </li>
              ))}
   
          </ul>
          <p className="line-clamp-3 opacity-[0.5]">
            {film.overview}
          </p>
          <p>
            Released date:
            <br/>
            {film.releaseDate}
          </p>
        </div>
      </Section>

      <Section title="Trailers">
        <div className="scrollbar scrollbar-thumb-primary scrollbar-track-header">
          <div className="flex items-center gap-3 h-[300px]">
            {trailers.map((trailer, i) => (
              <Card
                onClick={() => playTrailer(trailer.key)}
                imgSrc={youtubeImg(trailer.key)}
                className="flex-shrink-0"
                key={i}
              ></Card>
            ))}
          </div>
        </div>
      </Section>
    </>

  )
}
