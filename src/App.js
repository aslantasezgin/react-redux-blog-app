import { useEffect } from 'react';
import './App.css';
import { request } from './request/Request';
import AppRouter from './router/Router';

function App() {

  useEffect(() => {
    request.get('/test')
  },[])

  return (
    <div>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
