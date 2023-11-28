import React from 'react'
import PeopleModal from './PeopleModal'

const PeopleGroup=({pplGroupObj})=>{
    return(
        <>
            <div className='peopleList'>
                {pplGroupObj.map((p)=>
                    <div className='peopleListItem' key={p.username}>
                        <img src={p.imagePath}/>
                        <PeopleModal {...p}/>
                    </div>
                )}
            </div>
        </>
    )
}

export default PeopleGroup