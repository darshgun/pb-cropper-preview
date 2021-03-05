import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Preview from './Preview';
import './global.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <div className="wrapper">
      <div className="header">
        <h1>Image function testing</h1>
      </div>
      <Preview />
    </div>
  </StrictMode>,
  rootElement
);
