import './App.scss';
import { BreedDataProvider } from './components/BreedDataContext';
import BreedDescription from './components/BreedDescription';
import Navigation from './components/Navigation';
import Page from './pages/Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BreedDataProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Page />} />
          <Route path='/description' element={<BreedDescription />} />
        </Routes>
      </BrowserRouter>
    </BreedDataProvider>
  );
}

export default App;