import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/i18n';


ReactDOM.render(
  <BrowserRouter>

    <App />


  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
