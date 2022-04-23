import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../Context'
import '../index.css'

export default function CatName() {
    const [catName, SetCatName] = useState('')

    let searchcatname = useContext(UserContext)

    const name_url = 'https://namey.muffinlabs.com/name.json?frequency=rare'

    //fetch cat name
    useEffect(() => {
        fetch(name_url)
            .then(response => {
                return (response.json())
            })
            .then(data => SetCatName(data[0]))
    }, [])

    //generate cat age
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    function getcatfo() {
        return (searchcatname ? searchcatname : catName) + ", " + getRandomInt(12)
    }


    return (
        <>
            {catName ?
                <div className='namebox'>
                    <p className='catname'> {getcatfo()}</p>
                </div>
                : null
            }
        </>

    )
}

