import {ReactNode} from 'react'
import { MediaType } from '.'

export interface CustomComponentProps{
    children?:ReactNode
    className:string
    
}

export interface Film {
    id: number
    mediaType: MediaType
    title: string
    overview: string
    posterPath: string
    genreIds:number[]
    releaseDate: string

}

export interface Trailer{
    id: number
    key: string
}