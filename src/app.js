import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [requestBody, setRequestBody] = useState({});

  useEffect(() => {
      async function requestData() {

        if (requestParams.url) {
          const response = await axios({
            method: requestParams.method,
            url: requestParams.url,
            data: requestBody,
          });
          setData(response);
        }
      }
      requestData();
  }, [requestParams]);

  function callApi(data) {
    if (data.url !== '') {
      setRequestParams(data);
      setRequestBody(data);
    }
  }

  return (
    <>
      
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </React.Fragment>
    </>
  )
}

export default App;
