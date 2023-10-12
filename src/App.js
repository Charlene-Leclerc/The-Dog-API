import './App.scss';
import Navigation from './components/Navigation';
import Page from './pages/Page';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Page />
    </div>
  );
}

export default App;
