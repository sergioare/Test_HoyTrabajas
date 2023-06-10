import {ReactNode} from 'react'

export interface CustomComponentProps{
    children?:ReactNode
    className:string
    
}

export interface Film {
    id: number
    title: string
    overview: string
    posterPath: string
    genreIds:number[]
    releaseDate: string

}