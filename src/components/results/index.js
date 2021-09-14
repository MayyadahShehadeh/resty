import React from 'react';
import Loading from '../Loading/loading';

function Results(props) {
  return (
    <>
       <>
       <pre >{props.data ? JSON.stringify(props.data, undefined, 2) :<Loading/> }</pre>
      </>
    </>
  )
}


export default Results;
