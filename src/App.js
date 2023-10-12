import './App.scss';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Home />
    </div>
  );
}

export default App;
