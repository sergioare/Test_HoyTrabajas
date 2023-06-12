import axios, {AxiosResponse} from 'axios'
import { Film, Genre, MediaType, formatResultRequest } from '../utils'

const axiosClient = axios.create({
    baseURL: import.meta.env.API_MOVIES_URL
})

axiosClient.interceptors.request.use((config)=>{
    return {
        ...config,
        params:{
            ...config.params,
            api_key: import.meta.env.API_MOVIES_KEY
        }
    }
})

export const getPopulars = async (mediaType:MediaType): Promise<Film[]> =>{
    try {
        const {data}= await axiosClient.get<
        any, AxiosResponse<{
            results: unknown[]
        }>>(`/${mediaType}/popular`)

        return data.results.map(val=> formatResultRequest(val, mediaType)
        )
    } catch (error) {
        console.error(error)
    }
    return []
}

export const getMovies = async (): Promise<Film[]> =>{
    try {
        const {data}= await axiosClient.get<
        any, AxiosResponse<{
            results: unknown[]
        }>>('/discover/movie')

        return data.results.map(val=> formatResultRequest(val, 'movie')
        )
    } catch (error) {
        console.error(error)
    }
    return []
}

export const search = async (query: string, page= 1): Promise<{
    totalResults: number
    film: Film[]
}> =>{
    try {
        const {data}= await axiosClient.get<
        any, AxiosResponse<{
            total_results: number
            results: unknown[]
        }>>(`/search/multi`,{
            params:{
                query,
                page,
            }
        })

        return {
            totalResults: data.total_results,
            film: data.results.map(val=> formatResultRequest(val))
        }
        
    } catch (error) {
        console.error(error)
    }
    return {
        totalResults:0,
        film:[]
    }
}

export const getGenre = async (mediaType:MediaType): Promise<Genre[]> =>{
    try {
        const {data}= await axiosClient.get<
        any, AxiosResponse<{
            genres: unknown[]
        }>>(`/genre/${mediaType}/list`)

        return data.genres as Genre[]
        
    } catch (error) {
        console.error(error)
    }
    return []
}

export const getDetail = async (mediaType:MediaType, id: number): Promise<null | Film> =>{
    try {
        const {data}= await axiosClient.get(`/${mediaType}/${id}`)

        return formatResultRequest(data, mediaType)
        
    } catch (error) {
        console.error(error)
    }
    return null
}