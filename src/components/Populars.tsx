import { Images } from ".";
import { Film, imageAPI } from "../utils";
import {useNavigate} from 'react-router-dom'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

interface Props{
    film:Film
}

export const Populars = (props:Props) => {
  const navigate = useNavigate()
  return (
    <div 
    className="h-[300px] relative flex items-center cursor-pointer"
    onClick={()=>navigate(`/${props.film.mediaType}/${props.film.id}`)}
    
    >
        {/*bg-img*/ }
        <div className="absolute left-0 top-0 right-0 bottom-0">
            <div className="overlay-slick-hero"></div>
            <Images src={imageAPI(props.film.coverPath)} className=""></Images>
            <div className="overlay-film-cover"></div>
        </div>

        <div className="flex flex-col gap-3 items-start relative z-10 mx-[55px] max-w-[50%]">
            <p className="text-xl line-clamp-2 max-w-[80%] truncate">{props.film.title}</p>
            <p className="text-sm line-clamp-3">{props.film.overview}</p>
            <button className="px-3 py-1.5 flex items-center gap-3 bg-primary rounded-md">
                <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
                <span>Play trailers</span>
            </button>
        </div>
    </div>
  )
}
