import './App.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

type TagType = {
    id: number,
    title: string
}

type TagsDataType = any[]


function App() {


    const [tags, setTags] = useState<TagsDataType>([])

    useEffect(() => {
        axios.get('https://todolists.samuraijs.com/api/1.0/todolists').then(responce => {
            console.log(responce.data)
            setTags(responce.data.items)
        })
    }, [])


    return (
        <div>
            <ul>
                {
                    tags.map(el => {
                        return (
                            <li key={el.id}>
                                <input type="checkbox" checked={el.isImportant}/>
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


// ПОлучали данные с задержкой
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


