import react from 'react';
import {
  Route, 
  BrowserRouter
} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import BoardPage from './pages/BoardPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/game/details/:id" element={<DetailsPage />}/>
        <Route path="/" exact element={<BoardPage />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
