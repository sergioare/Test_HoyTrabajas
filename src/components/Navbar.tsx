import { Container, SearchResults } from '.'
import {Link, useLocation, useSearchParams, useNavigate} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'
import { mergeClassName } from "../utils"
import { MENU_CLASS, MENU_CLASS_ACTIVE } from "../styles/Styles"
import SearchIcon from '@mui/icons-material/Search';


export const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [params, _] = useSearchParams()
    const pathnameRef = useRef('')
    const searchRef = useRef<HTMLInputElement>(null)
    const defaultKeyword = useRef('')

    const [pathname, setPathname] = useState('')
    const [keyword, setKeyword]= useState('')
    const [isSearchFocus, setIsSearchFocus]  = useState(false)

    const getMenuClass = (path: string)=>{
        if(path === pathname){
            return mergeClassName(MENU_CLASS, MENU_CLASS_ACTIVE)
        }
        return mergeClassName(MENU_CLASS, '')
    }

    const goToSearchPage = ()=>{
        if(keyword){
            defaultKeyword.current = keyword
            navigate(`/search?q=${keyword}`)
            setIsSearchFocus(false)
            searchRef.current?.blur()
        }
    }
        
    const initKeyword = ()=>{
        if(pathnameRef.current === '/search'){
            setKeyword(defaultKeyword.current)
        }else{
            setKeyword('') 
        }
    }

    const onWindowClick = ()=>{
        setIsSearchFocus(false)
        initKeyword()
    }

    useEffect(()=>{
        setPathname(location.pathname)
        pathnameRef.current= location.pathname
        defaultKeyword.current = params.get('q') || ''
        initKeyword()
    },[location.pathname])

    useEffect(()=>{
        window.addEventListener('click', onWindowClick)
        return ()=>{
            window.removeEventListener('click', onWindowClick)
        }
    },[])
  return (
    <div className="bg-header sticky top-0 z-[99]">
        <Container className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-6">
                <h1 className="text-2xl font-semibold">
                    <Link to='/'>HoyMovieas</Link>
                </h1>
                <div className="flex pt-1.5 items-center gap-1.5 mobile:fixed mobile:bottom-0 mobile:left-0  mobile:right-0 mobile:justify-center mobile:py-3 mobile:bg-header mobile:gap-6">
                    <Link className={getMenuClass('/movies')} to={'/movies'}>Movies</Link>
                    <Link className={getMenuClass('/series')} to={'/series'}>Series</Link>
                </div>
            </div>

            <div className="border-b-[1.5px] border-white flex items-center p-1 flex-[0.5] focus-within:border-primary relative">
                <input
                    onClick={e=>{
                        e.stopPropagation()
                        setIsSearchFocus(true)
                    }}
                    onKeyDown={e => e.key === "Enter" ? goToSearchPage(): ''}
                    onInput={e=> setKeyword(e.currentTarget.value)}
                    value={keyword}
                    type="text" 
                    className="bg-transparent outline-0 flex-1" 
                    placeholder='Search...' 
                />
                <SearchIcon></SearchIcon>
                {
                    isSearchFocus 
                    ? <SearchResults keyword={keyword} goToSearchPage={goToSearchPage}></SearchResults>
                    : ''
                }   
            </div>        
        </Container>
    </div>
  )
}
