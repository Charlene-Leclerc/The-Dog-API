import './App.scss';
import { BreedDataProvider } from './components/BreedDataContext';
import BreedDescription from './pages/BreedDescription';
import Page from './pages/Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BreedDataProvider>
      <BrowserRouter>

        <Routes>
          <Route exact path='/' element={<Page />} />
          <Route path='/description' element={<BreedDescription />} />
          <Route path='*' element={<Page />} />
        </Routes>
      </BrowserRouter>
    </BreedDataProvider>
  );
}

export default App;
