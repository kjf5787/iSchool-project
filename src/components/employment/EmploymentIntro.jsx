import React from 'react'

const EmploymentIntro=({introObj})=>{
    return(
        <>
            <h2>{introObj.title}</h2>
            {introObj.content.map((c, index)=>
                <div className='introDiv' key={index}>
                    <h3>{c.title}</h3>
                    <p>{c.description}</p>
                </div>
            )}
        </>
    )
}

export default EmploymentIntro