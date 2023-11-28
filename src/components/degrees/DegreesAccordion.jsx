// imports
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// components 
import DegreesDetails from './DegreesDetails';

const DegreesAccordion=({title, degrAccordionObj})=>{
    return(
        <>
            <h2>{title}</h2>
            <div className='degrList'>
                {degrAccordionObj.map((d)=>
                    <div key={d.degreeName} className='degrAccordion'>
                        <Accordion className='Accordion'>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <h3>{d.title ? d.title : d.degreeName}</h3>
                            </AccordionSummary>
                            <AccordionDetails className='accordionDetails'>
                                <DegreesDetails degrDetailsObj={d}></DegreesDetails>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )}
            </div>
        </>
    )
}

export default DegreesAccordion