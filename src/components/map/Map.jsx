// imports
/*
import React, {useState} from 'react'

const Map = () => {
    const proxySever = 'https://people.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';
    const [html, setHtml] = useState();

    async function getData(endpoint){
        const result = await fetch(`${proxySever}${endpoint}`);
        const map = await result.text();
        return await map;
    }

    React.useEffect(()=>{
        getData('map.php')
            .then((data) => {
                setHtml(data);
                console.log('map', data)
            })
    }, [])

    return(
        <div className='map' dangerouslySetInnerHTML={{__html: html}}></div>
    )
}

export default Map
*/