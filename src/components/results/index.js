import React from 'react';
import Loading from '../Loading/loading';
import ReactJson from "react-json-view";

function Results(props) {
  return (
    <>
       <>
        <pre>{props.data ?<ReactJson src={props.data} /> :<Loading/>}</pre>
      </>
    </>
  )
}


export default Results;
