import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css';

import Main from './components/Main';
import ResumePage from './components/resume/ResumePage'
import NotFound from './components/NotFound'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={ Main }/>
        <Match exactly pattern="/resume" component={ ResumePage }/>
        <Miss component={ NotFound }/>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
