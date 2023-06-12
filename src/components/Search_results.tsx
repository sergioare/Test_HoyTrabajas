import {useState, useEffect, useRef} from 'react'
import { Film, imageAPI } from '../utils'
import { Images } from '.'
import { search } from '../API/api'
import { useGlobalContext } from './context/GlobalContext'
import {useNavigate} from 'react-router-dom'


interface Props{
    keyword:string
    goToSearchPage:Function
}

export const SearchResults = (props: Props) => {
    const [items, setItems] = useState<Film[]>([])
    const [totalItem, setTotalItem] =useState(0)

    const searchTimeout = useRef<any>('')

    const globalContext= useGlobalContext()
    const navigate = useNavigate()
    const fetch = async ()=>{
        if(!props.keyword)return 
        
        clearTimeout(searchTimeout.current)
        searchTimeout.current = setTimeout(async ()=>{
            // console.log(props.keyword)
            const res = await search(props.keyword)
            setTotalItem(res.totalResults)
            setItems(res.film)
        },120)
    }
        
    useEffect(()=>{
       fetch()  
    }, [props.keyword])

  return (
    <div className="
        absolute 
        top-[48px] 
        left-0 right-0 
        rounded-md 
        overflow-auto 
        bg-header 
        max-h-[700px] 
        shadow-lg "
        > 
    
        {items.map((film,i)=>(
            <div 
                key={i} 
                className='flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer m-1.5'
                onClick={()=>navigate(`/${film.mediaType}/${film.id}`)}
            >
                
                <Images 
                    src={imageAPI(film.posterPath)} 
                    className='h-[72px] min-w-[102px] w-[45%] rounded-md '
                ></Images>

                <div className="px-3 truncate">
                    <p className="text-base truncate">{film.title}</p>
                    <ul className='flex flex-wrap gap-x-1.5 text-sm opacity-[0.7]'>
                        {film.genreIds.map((id, i)=>(
                                <li key={i}>
                                    {globalContext.genres[film.mediaType].find((genre)=> genre.id === id)?.name}{' '}{i !== film.genreIds.length -1 ? ',' : '' }
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        ))}

        {totalItem >5
            ?<button 
                className='px-3 py-1.5 bg-primary w-full hover:text-body sticky bottom-0 shadow-lg'
                onClick={()=>props.goToSearchPage()}                
            >More Results</button>
            :""
        }
    </div>
  )
}
