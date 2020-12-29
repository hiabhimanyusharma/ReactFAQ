import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import Ques from './Ques';
import './index.css';

function Index() {
  return (
    <>
      <main>
        <Ques data={data}/>
      </main>
    </>
  );
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
