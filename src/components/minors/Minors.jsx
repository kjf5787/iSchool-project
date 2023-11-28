// imports
import React, {useState} from 'react'
import getData from '../../utils/getData'
import MinorsAccordion from './MinorsAccordion';
import CircularProgress from '@mui/material/CircularProgress';

// css 
import './Minors.css'

const Minors = () => {
    // instance variables 
    const [loaded, setLoaded] = useState(false);
    const [minorObj, setMinorObj] = useState();

    React.useEffect(()=>{
        getData('minors/')
            .then((json) => {
                console.log('minors', json)
                setMinorObj(json);
                setLoaded(true);
            })
    }, [])

    if(!loaded) return(
        <>
            <h1>Minors</h1>
            <CircularProgress/>
        </>
    )

    return(
        <>
            <h1>Minors</h1>
            <MinorsAccordion minorsAccObj={minorObj.UgMinors}/>
        </>
    )
}

export default Minors