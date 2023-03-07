import { BrowserRouter } from 'react-router-dom';
import RoutesHandler from './config/routes/RoutesHandler';
import './App.scss';

function App() {
  return (
   <BrowserRouter>
      <RoutesHandler />
   </BrowserRouter>
  );
}

export default App;
