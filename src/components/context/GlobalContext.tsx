import {useContext, createContext, useState, useEffect} from 'react'
import { getGenre } from '../../API/api'
import { Loading } from '..'
import { CustomGlobalContext, Genre, MediaType } from '../../utils'

type Genres ={
    [key in MediaType]: Genre[]
  }
  export const GlobalContext = createContext<{
    genres: Genres
  }>({
    genres:{
      movie:[],
      tv:[]
    } satisfies Genres,
  })
  
  export const useGlobalContext= ()=> useContext(GlobalContext)

export const DivGlobalContext = (props:CustomGlobalContext) => {
    const [genres,setGenres]= useState<Genres>({
        movie:[],
        tv:[],
      })
    
      const fetchGenres = async ()=>{
        const movie = await getGenre('movie')
        const tv = await getGenre('tv')
        setGenres({
          movie,
          tv,
        })
      }
      useEffect(()=>{
        fetchGenres()
      },[])
      if(!genres.movie.length || !genres.tv.length){
        return(
          <div className='fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center'>
            <Loading/>
          </div>
        )
      }
  return (
    <GlobalContext.Provider value={{genres}}>
        {props.children}
    </GlobalContext.Provider>
  )
}


