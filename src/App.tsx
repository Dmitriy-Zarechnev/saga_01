import './App.css'
import {useEffect, useState} from 'react'

type TagType = {
    id: number,
    title: string
}

type TagsDataType = TagType[]


function App() {


    const [tags, setTags] = useState<TagsDataType>([])

    useEffect(() => {
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
    }, [])


    return (
        <div>
            <ul>
                {
                    tags.map(el => {
                        return <li id={el.id.toString()}>{el.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default App
