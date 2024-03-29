import './App.css'
import {useEffect, useState} from 'react'
import axios from 'axios'


export type GetTodoListsResponceType = {
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    items: TodoListViewModel[]
}

export type TodoListViewModel = {
    isImportant: boolean
    id: string
    title: string
    description: string
    addedDate: string
    order: number
    images: TodoListImagesViewModel
}

export type TodoListImagesViewModel = {
    main: PhotoSizeViewModel[]
}

export type PhotoSizeViewModel = {
    url: string
    width: number
    height: number
    fileSize: number
}


function App() {

    const [todoLists, setTodoLists] = useState<TodoListViewModel[]>([])

    useEffect(() => {
        axios.get<GetTodoListsResponceType>('https://todolists.samuraijs.com/api/1.0/todolists').then(responce => {
            console.log(responce.data)
            setTodoLists(responce.data.items)
        })
    }, [])


    return (
        <div>
            <ul>
                {
                    todoLists.map(el => {
                        const imageUrl = el.images.main.length > 1 ? el.images.main[1]?.url : 'https://placehold.co/48'
                        return (
                            <li key={el.id}>
                                <img src={imageUrl} alt=""/>
                                {el.isImportant ? '😜' : '🤢'}
                                <h3>{el.title}</h3>
                                <p>{el.description}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default App


// -------------------------------------------------------------------


// Получали данные с задержкой
/*
        setTimeout(() => {
            setTags([
                {id: 1, title: 'css'},
                {id: 2, title: 'JS'},
                {id: 3, title: 'React'},
                {id: 4, title: 'HTML'},
                {id: 5, title: 'NodeJS'},
                {id: 6, title: 'SCSS'}
            ])
        }, 2000)
                 */

// <input type="checkbox" checked={el.isImportant}/>


