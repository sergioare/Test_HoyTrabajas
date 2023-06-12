import { Section, Populars, Slider, Card } from "../components"
import {useState, useEffect} from 'react'
import { Film, imageAPI, isFilm } from "../utils"
import { getMovies, getPopulars } from "../API/api"
import {useNavigate} from 'react-router-dom'

export const Landing = () => {
  const navigate = useNavigate()

  const [popular, setPopular] = useState<Film[]>([])
  const [movies, setMovies] = useState<Film[]>([])
  
  const goToDetailPage = (film:Film)=>{
    navigate(`/${film.mediaType}/${film.id}`)
  }

  const fetchMovies = async ()=>{
    setMovies(await getMovies())
  }
  const fetchPopulars= async()=>{
    const movie = await getPopulars('movie')

    const arrs: Film[] = []

    for(let i = 0; i <10; i++){
      let film: unknown
        if(movie[i - 1]){
          film = movie[i - 1]
        
      }
      if(isFilm(film)) arrs.push(film)
    }
    setPopular(arrs)
  }

useEffect(()=>{
   fetchPopulars()
   fetchMovies()  
}, [])
  return (
    <div className="pb-[48px]">
        <Section className="py-0">
          <Slider className="slick-hero" autoplay={true} slidesToShow={1} slidesToScroll={1}>
              {popular.map((film, i)=>(
                <Populars 
                  film={film} 
                  key={i}
                ></Populars>
              ))}
          </Slider>
        </Section>

        <Section className="" title='Movies'>
          <Slider isMovieCard={true} autoplay={true} slidesToShow={5} slidesToScroll={5}>
              {movies.map((film, i)=>(
                <Card 
                  onClick={()=>goToDetailPage(film)}
                  title={film.title} 
                  imgSrc={imageAPI(film.posterPath)} 
                  key={i}
                ></Card>
              ))}
          </Slider>
        </Section>
    </div>
  )
}
