import { useState, useEffect, useContext } from 'react'
import Lottie from 'react-lottie';
import { UserContext } from '../Context'
import '../index.css'

import * as loader from "../75212-cat-loader.json"

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export default function CatPic() {
    const [catPic, SetCatPic] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const pic_url = 'https://api.thecatapi.com/v1/images/search'

    let searchcatname = useContext(UserContext)

    //fetch cat pic
    useEffect(() => {
        setIsLoading(true)
        fetch(pic_url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                SetCatPic(data[0].url);
                setIsLoading(false)
            })
            .catch(error => {
                console.error("Error fetching cat pic ", error);
            })
    }, [searchcatname])


    return (
        <>
            {isLoading ? (
                <div className='loading'>
                    <div><Lottie options={defaultOptions} height={200} width={200} /></div>
                    <div><p>loading your cat</p></div>
                </div>
            ) : (
                <img src={catPic} alt='a random cat!' className='catpic' />
            )
            }
        </>

    )
}

