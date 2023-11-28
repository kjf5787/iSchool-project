// imports
import React, {useState} from 'react'
import getData from '../../utils/getData'
import CircularProgress from '@mui/material/CircularProgress';

// components 
import EmploymentIntro from './EmploymentIntro';
import EmploymentStats from './EmploymentStats';
import EmploymentList from './EmploymentList';
import CoopTable from './CoopTable';

// css
import './Employment.css'
import EmploymentTable from './EmploymentTable';

const Employment = () => {
    // instance variables 
    const [loaded, setLoaded] = useState(false);
    const [empObj, setEmpObj] = useState();

    React.useEffect(()=>{
        getData('employment/')
            .then((json) => {
                console.log('employment', json)
                setEmpObj(json);
                setLoaded(true);
            })
    }, [])

    if(!loaded) return(
        <>
            <h1>Employment</h1>
            <CircularProgress/>
        </>
    )

    return(
        <>
            <h1>Employment</h1>
            {/* introduction */}
            <EmploymentIntro introObj={empObj.introduction}/>
            {/* stats */}
            <EmploymentStats statsObj={empObj.degreeStatistics}/>
            {/* employer & career lists */}
            <div className='lists'>
                <EmploymentList listObj={empObj.employers} keyword={Object.keys(empObj.employers)[1]}/>
                <EmploymentList listObj={empObj.careers} keyword={Object.keys(empObj.careers)[1]}/>
            </div>
            {/* tables */}
            <div className='coopTable'>
                <CoopTable coopObj={empObj.coopTable}/>
            </div>
            <div className='empTable'>
                <EmploymentTable empObj={empObj.employmentTable}/>
            </div>
        </>
    )
}

export default Employment