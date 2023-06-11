import { Section, Populars, Slider, Card } from "../components"
import {useState, useEffect} from 'react'
import { Film } from "../utils"
import {useNavigate} from 'react-router-dom'

export const Landing = () => {
  const navigate = useNavigate()

  const [popular, setPopular] = useState<Film[]>([])
  const [movies, setMovies] = useState<Film[]>([])
  
  const fetchPopular = ()=>{
    const arrs: Film[] = []

    for(let i = 0; i <6; i++){
        arrs.push({
            id: i,
            mediaType: 'serie',
            title: 'lorenodghipodfuhgoljhnofgjgoujjgipgjohid',
            overview: 'fglkhgpoupirehoghoehjgour hoprhgipuhipoguhr  erighipuerhgpoiue',
            posterPath: '',
            genreIds:[1,2,3,4,5,6],
            releaseDate: ''
        })
    }
    setPopular(arrs)
    setMovies(arrs)
}

useEffect(()=>{
   fetchPopular()  
}, [])
  return (
    <div className="pb-[48px]">
        <Section className="py-0">
          <Slider className="slick-hero" autoplay={true} slidesToShow={1} slidesToScroll={1}>
              {(onSwipe)=> 
                popular.map((film, i)=>(
                  <Populars onClick={()=>!onSwipe? navigate(`/${film.mediaType}/${film.id}`) : ''} film={film} key={i}></Populars>
              ))}
          </Slider>
        </Section>

        <Section className="" title='Movies'>
          <Slider isMovieCard={true} autoplay={true} slidesToShow={5} slidesToScroll={5}>
              {(_)=>movies.map((film, i)=>(
                <Card title={film.title} imgSrc='' key={i}></Card>
              ))}
          </Slider>
        </Section>
    </div>
  )
}
