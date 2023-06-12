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

//---------------------PATHS-----------------

// export const GET_ALL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}` //get all movies from API.


// export const GET_TRAILER_BY_ID = `https://api.themoviedb.org/3/movie/:id/videos?api_key=${API_KEY}` //map results to get "type":"Trailer" then compare "site": "YouTube", get "key": value and redirect the site to https://www.youtube.com/watch?v=${value}.

// export const POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}` //get popular movies from API.
// https://image.tmdb.org/t/p/w500/<poster_path>