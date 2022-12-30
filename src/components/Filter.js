import React from 'react'

const Filter = (props) => {
    
  return (
    <div className="text-center p-3">

      <button onClick={props.pass} className="btn btn-primary m-2">All</button>

        {props.cate}
        
    </div>
  )
}

export default Filter