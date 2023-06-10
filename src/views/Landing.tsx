import { Footer } from "."
import { Navbar, Section, Populars, Slider, Card } from "../components"
import {useState, useEffect} from 'react'
import { Film } from "../utils"

export const Landing = () => {
  const [popular, setPopular] = useState<Film[]>([])
  const [movies, setMovies] = useState<Film[]>([])
  

  const fetchPopular = ()=>{
    const arrs: Film[] = []

    for(let i = 0; i <6; i++){
        arrs.push({
            id: i,
            title: 'loren',
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
    <>
        <Navbar/>
        <Section className="py-0">
          <Slider className="slick-hero" autoplay={true} slidesToShow={1} slidesToScroll={1}>
              {popular.map((film, i)=>(
                <Populars film={film} key={i}></Populars>
              ))}
          </Slider>
        </Section>

        <Section title='Movies' className="py-0">
          <Slider className="slick-hero" isMovieCard={true} autoplay={true} slidesToShow={5} slidesToScroll={5}>
              {movies.map((film, i)=>(
                <Card film={film} key={i}></Card>
              ))}
          </Slider>
        </Section>
        <Footer/>
    </>
  )
}
