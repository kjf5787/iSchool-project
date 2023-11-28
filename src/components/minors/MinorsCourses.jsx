// imports 
import React, { useState } from 'react';
import getData from '../../utils/getData'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import CircularProgress from '@mui/material/CircularProgress';

const MinorsCourses=({course})=>{
    // instance variables 
    const [isOpen, setIsOpen] = useState(false);
    const url = 'course/courseID=' + course;
    const [loaded, setLoaded] = useState(false);
    const [courseObj, setCourseObj] = useState();

    // load data if not yet loaded & toggle
    const handleClick = () => {
        // load
        if(!isOpen && !courseObj){
            getData(url)
                .then((json) => {
                    console.log('course', json)
                    setCourseObj(json);
                    setLoaded(true);
                })
        }
        // toggle
        setIsOpen(!isOpen);
    }

    return (
        <React.StrictMode>
            <Button color="primary" onClick={handleClick} style={{ marginBottom: '1rem' }}>
                {course}
            </Button>
            <Collapse isOpen={isOpen}>
                <Card className='courseCards'>
                    <CardBody>
                        {/* Display data if loaded */}
                        {loaded ? (
                            <>
                                <h5>{courseObj.title.replace(/&amp;/g, '&')} ({courseObj.courseID})</h5>
                                <p>{courseObj.description}</p>
                            </>
                        ) : ( <CircularProgress/>)}
                    </CardBody>
                </Card>
            </Collapse>
        </React.StrictMode>
    );
}

export default MinorsCourses