import { Film, MediaType } from "."

export const mergeClassName = (val1:string, val2:string)=>{
    return val1 + ' ' + (val2 || '') 
}

export const formatResultRequest= ( obj:any, mediaType?:MediaType):Film=>{
           return{
            id: obj.id,
            mediaType: mediaType || obj.media_type,
            title:obj.original_title || obj.title,
            overview:obj.overview,
            coverPath: obj.backdrop_path,
            posterPath:obj.poster_path,
            genreIds:obj.genre_ids || obj.genres?.map((g:any)=>g.id) || [],
            releaseDate:obj.release_date,
        }
    
}

export const isFilm = (film: any): film is Film => {
    return (film as Film) !== undefined
  }

export const imageAPI = (path:string)=>{
    if(!path) return ''
    return `https://image.tmdb.org/t/p/original/${path}`
}

export const youtubeImg = (key: string) => {
    return `https://img.youtube.com/vi/${key}/mqdefault.jpg`
  }