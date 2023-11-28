// imports
import React, {useState} from 'react'
import getData from '../../utils/getData'
import PeopleGroup from './PeopleGroup'
import { Tab } from 'semantic-ui-react'
import CircularProgress from '@mui/material/CircularProgress';

// get css
import './People.css'

const People = () => {
    // instance variables 
    const [loaded, setLoaded] = useState(false);
    const [pplObj, setPplObj] = useState();
    const panes = [
        { menuItem: 'Faculty', render: () => <Tab.Pane className='TabPane'>
            <PeopleGroup pplGroupObj={pplObj.faculty}/>
        </Tab.Pane> },
        { menuItem: 'Staff', render: () => <Tab.Pane className='TabPane'>
            <PeopleGroup pplGroupObj={pplObj.staff}/>
        </Tab.Pane> },
      ]
      

    React.useEffect(()=>{
        getData('people/')
            .then((json) => {
                console.log('ppl', json)
                setPplObj(json);
                setLoaded(true);
            })
    }, [])

    if(!loaded) return(
        <>
            <h1>Our People</h1>
            <CircularProgress/>
        </>
    )

    return(
        <>
            <h1>{pplObj.title}</h1>
            <p>{pplObj.subTitle}</p>
            <Tab panes={panes}/>
        </>
    )
} 

export default People