import App from './Portafolio.jsx';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');

if(domNode){
  const root = createRoot(domNode);
  root.render(<App />)
}

