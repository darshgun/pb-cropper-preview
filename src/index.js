import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Preview from './Preview';
import './styles.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <Preview />
  </StrictMode>,
  rootElement
);
