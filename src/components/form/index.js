import './form.scss';
import React from 'react'
import { useState } from 'react';
function Form(props) {
const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
const [restMethod, setrestMethod] = useState('get');
const [textArea, settextArea] = useState(false)
const [request, setrequest] = useState('');





function handleSubmit(e){
  e.preventDefault();
  
  const formData = {
    method:restMethod,
    url: url,
    };

    props.handleApiCall(formData,request);

  }
  // ------- function for change api url --------
  function UrlSetstae(e) {
    setUrl(e.target.value);
  }

  function restMethodFun(e) {
    setrestMethod(e.target.id); // we use according to the id for every method
    settextArea(false);

  }

  function textAreaFun(e) {
    settextArea(true);
    setrestMethod(e.target.id);
  }
  function requestBodyFun(e) {
    setrequest(e.target.value);
  }
  return (
    <>
  <form onSubmit={handleSubmit}>
    <label >
      <span>URL: </span>
      <input name='url' type='text' onChange={UrlSetstae}/>
      <button type="submit">GO!</button>
    </label>
    <label className="methods">
      <span id="get" onClick={restMethodFun}>GET</span>
      <span id="post" onClick={textAreaFun}>POST</span>
      <span id="put" onClick={textAreaFun}>PUT</span>
      <span id="delete" onClick={restMethodFun}>DELETE</span>
    </label>
    {textArea &&
     <textarea  rows='5' cols='40' onChange={requestBodyFun} />}

  </form>
      
    </>
  )
}


export default Form;
