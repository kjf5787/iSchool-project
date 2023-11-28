// imports
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// components 
import MinorsCourses from './MinorsCourses';

const MinorsAccordion=({minorsAccObj})=>{
    return(
        <>
            <div className='minorsList'>
                {minorsAccObj.map((m)=>
                    <div key={m.name} className='minorAccordion'>
                        <Accordion className='Accordion'>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <h3>{m.title}</h3>
                            </AccordionSummary>
                            <AccordionDetails className='accordionDetails'>
                                {/* description */}
                                <p>
                                    {m.description}
                                </p>

                                {/* note if it's there */}
                                {m.note !== "" && (
                                    <p className='minorNote'><strong>Note: </strong>{m.note}</p>
                                )}

                                {/* courses */}
                                <section className='coursesSection'>
                                    {m.courses.map((c, index)=>
                                        <div className='courseDiv' key={index}>
                                            <MinorsCourses course={c}/>
                                        </div>
                                    )}
                                </section>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )}
            </div>
        </>
    )
}

export default MinorsAccordion