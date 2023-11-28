import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

// keyword is the employerNames if listObj = empObj.employers or careerNames if listObj = empObj.careers
const EmploymentList=({listObj, keyword})=>{
    return(
        <div className='listDiv'>
            <h3>{listObj.title}</h3>
            <ListGroup flush>
                {listObj[keyword].map((k, index)=>
                    <ListGroupItem key={index}>
                        {k}
                    </ListGroupItem>
                )}
            </ListGroup>
        </div>
    )
}

export default EmploymentList