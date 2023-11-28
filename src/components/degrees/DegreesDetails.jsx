import React from 'react'

const DegreesDetails=({degrDetailsObj})=>{
    if(degrDetailsObj.concentrations){
        return(
            <>
                <p>{degrDetailsObj.description}</p>
                <h4>Concentrations</h4>
                <ul>
                    {degrDetailsObj.concentrations.map((c)=>
                        <li key={c}>{c}</li>
                    )}
                </ul>
            </>
        )
    }
    else if(degrDetailsObj.availableCertificates){
        return(
            <>
                <p>{degrDetailsObj.description}</p>
                <h4>Available Certificates</h4>
                <ul>
                    {degrDetailsObj.availableCertificates.map((ac)=>
                        <li key={ac}>{ac}</li>
                    )}
                </ul>
            </>
        )
    }
}

export default DegreesDetails