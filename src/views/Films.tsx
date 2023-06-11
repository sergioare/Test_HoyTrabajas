import { useState, useEffect } from "react"
import { Card, Images, Section } from "../components"
import { Film, MediaType, Trailer } from "../utils"
import {useParams} from 'react-router-dom'

interface Props{
    mediaType: MediaType
}
export const Films = (props: Props) => {
    const {params} = useParams()
    const [film, setFilm]=useState<Film>({
        id: 0,
        mediaType: props.mediaType,
        title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
        overview: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
        posterPath: '',
        genreIds: [1,2,3,4],
        releaseDate: '24/10/2014',
    })

    const [trailers, setTrailers]= useState<Trailer[]>([])

    const fetch = ()=>{
      const arrs: any[] = []

      for(let i = 0; i <6; i++){
          arrs.push({})
      }
      setTrailers(arrs)
  }
  
  useEffect(()=>{
     fetch()  
  }, [])


  return (
    <>
      <div className="h-[300px] left-0 top-0 right-0 relative">
        <div className="overlay-film-cover"></div>
          <Images src=""></Images>
      </div>
      <Section className="-mt-[150px] flex items-center relative z-10 mobile:block">
        <Images src="https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" className="w-[200px] min-w-[200px] h-[350px] mobile:mx-auto"></Images>
        <div className="px-3 flex flex-col item-start gap-3">
          <p className="text-xl line-clamp-1">
            {film.title}
          </p>
          <ul className="flex items-center gap-3">
            {film.genreIds.map((genre, i)=>(
              <li className="px-3 mt-2 py-1.5 bg-primary rounded-lg text-sm" key={i}>item {i}</li>
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

      <Section title="Trailers" className="overflow-scroll hover:scrollbar-thumb-header">
        <div className="scrollbar scrollbar-thumb-primary scrollbar-track-header hover:scrollbar-thumb-header">
          <div className="flex items-center gap-3">
            {trailers.map((trailer, i) => (
              <div className="flex-shrink-0 w-[320px] my-3">
                <Card title=""
                  imgSrc=''
                  key={i}
                ></Card>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>

  )
}
