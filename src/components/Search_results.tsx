import {useState, useEffect} from 'react'
import { Film } from '../utils'
import { Images } from '.'


interface Props{
    keyword:string
    goToSearchPage:Function
}

export const SearchResults = (props: Props) => {
    const [items, setItems] = useState<Film[]>([])

    const fetch = ()=>{
        const arrs: Film[] = []

        for(let i = 0; i <6; i++){
            arrs.push({
                id: i,
                title: 'Estamostrabajando',
                overview: '',
                posterPath: '',
                genreIds:[1,2,3,4,5,6],
                releaseDate: ''
            })
        }
        setItems(arrs)
    }
    
    useEffect(()=>{
       fetch()  
    }, [props.keyword])

  return (
    <div className="absolute top-[48px] left-0 right-0 rounded-md overflow-hidden bg-header"> 
        {items.map((film,i)=>(
            <div key={i} className='flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer m-1.5'>
                <Images src='' className='h-[72px] min-w-[102px] w-[102px] rounded-md'></Images>
                <div className="px-3 truncate">
                    <p className="text-base truncate">{film.title}</p>
                    <ul className='flex flex-wrap gap-x-1.5 text-sm opacity-[0.7]'>
                        {film.genreIds.map((id, i)=>{
                                <li key={i}>Item {i}</li>
                            })}

                    </ul>
                </div>
            </div>
        ))}

        {items.length>6
            ?<button 
                className='px-3 py-1.5 bg-primary w-full hover:text-body'
                onClick={()=>props.goToSearchPage()}                
            >More Results</button>
            :""
        }
    </div>
  )
}
