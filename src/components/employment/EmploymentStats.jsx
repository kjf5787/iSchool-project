import React from 'react'

const EmploymentStats=({statsObj})=>{
    return(
        <>
            <h3>{statsObj.title}</h3>
            <div className='statsDiv'>
                {statsObj.statistics.map((s, index)=>
                    <div className='statsObj' key={index}>
                        <h4>{s.value}</h4>
                        <p>{s.description}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default EmploymentStats