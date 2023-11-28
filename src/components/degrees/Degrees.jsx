// imports
import React, {useState} from 'react'
import getData from '../../utils/getData'
import DegreesAccordion from './DegreesAccordion';
import CircularProgress from '@mui/material/CircularProgress';

// css
import './Degrees.css'

const Degrees = () => {
    // instance variables 
    const [loaded, setLoaded] = useState(false);
    const [degrObj, setDegrObj] = useState();

    React.useEffect(()=>{
        getData('degrees/')
            .then((json) => {
                console.log('degrees', json)
                setDegrObj(json);
                setLoaded(true);
            })
    }, [])

    if(!loaded) return(
        <>
            <h1>Degrees</h1>
            <CircularProgress/>
        </>
    )

    return (
        <>
            <h1>Degrees</h1>
            <DegreesAccordion title='Undergraduate Degrees' degrAccordionObj={degrObj.undergraduate}/>
            <DegreesAccordion title='Graduate Degrees' degrAccordionObj={degrObj.graduate}/>
        </>
    )
}

export default Degrees