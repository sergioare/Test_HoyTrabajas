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
    coverPath:string
    posterPath: string
    genreIds:number[]
    releaseDate: string

}

export interface Trailer{
    id: number
    key: string
}

export interface Genre{
    id: number
    name: string
}

export interface CustomGlobalContext{
    children:ReactNode
    className?:string
    
}